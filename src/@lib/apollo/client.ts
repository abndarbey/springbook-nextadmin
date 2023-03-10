import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client"
import { setContext } from '@apollo/client/link/context'
import { createUploadLink } from 'apollo-upload-client'
import { OrgObject } from "types/types"

const baseURI: string = process.env.SERVER_API!
const gqlURI: string = baseURI + "/api/gql/query"
const httpLink = createHttpLink({uri: gqlURI})

const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token = localStorage.getItem("token")

    // get org from local storage
    let org = localStorage.getItem("org")
    let orgObj: OrgObject = {uid: "", code: "", name: ""}
    if (org) {
        orgObj = JSON.parse(org)
    }
    // return the headers to the context so httpLink can read them
    return {
        headers: {
            ...headers,
            Authorization: token ? `${token}` : "",
            Organization: orgObj ? `${orgObj.uid}` : ""
        }
    }
})

export const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
})

export const uploadClient = new ApolloClient({
  //@ts-ignore
    link: authLink.concat(createUploadLink({uri: gqlURI})),
    cache: new InMemoryCache(),
})
