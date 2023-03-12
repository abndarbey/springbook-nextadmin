import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client"
import { setContext } from '@apollo/client/link/context'
import { createUploadLink } from 'apollo-upload-client'
import { getOrgFromLocalStorage } from "common/localStorage"

const baseURI: string = process.env.SERVER_API!
const gqlURI: string = baseURI + "/api/gql/query"
const httpLink = createHttpLink({uri: gqlURI})

const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token = localStorage.getItem("token")

    // get org from local storage
    let obj = getOrgFromLocalStorage("org")
    
    // return the headers to the context so httpLink can read them
    return {
        headers: {
            ...headers,
            Authorization: token ? `${token}` : "",
            Organization: obj ? `${obj.uid}` : ""
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
