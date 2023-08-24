import { gql } from '@apollo/client'

export const Recepie = gql`
    fragment RecepieFragment on Recepie {
        id
		code
		units
		unitOfMeasure
		isFinal
		isArchived
		createdAt
		organization {
			id
			code
		}
		sku {
			id
			code
			name
		}
		items {
			id
			units
			unitOfMeasure
			sku {
				id
				name
				code
			}
		}
    }
`

export const RecepieList = gql`
    fragment RecepieListFragment on Recepie {
        id
        code
        units
        unitOfMeasure
        isFinal
        isArchived
        createdAt
		sku {
			id
			code
			name
		}
        organization {
            id
            code
        }
    }
`
