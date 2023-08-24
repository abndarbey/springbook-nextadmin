import { gql } from '@apollo/client'
import { fragment } from "@/gql/schema/fragments"

export const SKUS = gql`
    query Skus($searchFilter: SearchFilter!) {
        skus(search: $searchFilter) {
            skus {
                    ...SkuFragment
                }
                total
            }
        }
    ${fragment.Sku}
`

export const SKU = gql`
    query Sku($id: ID, $code: String) {
        sku(id: $id, code: $code) {
            ...SkuFragment
            }
        }
    ${fragment.Sku}
`

export const SKU_CREATE = gql`
    mutation SkuCreate($input: UpdateSku!) {
        skuCreate(input: $input) {
            ...SkuFragment
            }
        }
    ${fragment.Sku}
`

export const SKU_UPDATE = gql`
    mutation SkuUpdate($id: ID!, $input: UpdateSku!) {
        skuUpdate(id: $id, input: $input) {
            ...SkuFragment
            }
        }
    ${fragment.Sku}
`

export const SKU_ARCHIVE = gql`
    mutation SkuArchive($id: ID!) {
        skuArchive(id: $id) {
            ...SkuFragment
            }
        }
    ${fragment.Sku}
`

export const SKU_UNARCHIVE = gql`
    mutation SkuUnarchive($id: ID!) {
        skuUnarchive(id: $id) {
            ...SkuFragment
            }
        }
    ${fragment.Sku}
`