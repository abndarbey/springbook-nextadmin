import { gql } from '@apollo/client'

export const FILE_UPLOAD = gql`
    mutation FileUpload($file: Upload!) {
        fileUpload (file: $file) {
            name
            url
        }
    }
`

export const FILE_UPLOAD_MULTIPLE = gql`
	mutation FileUploadMultiple($files: [Upload!]!) {
		fileUploadMultiple(files: $files) {
			name
            url
		}
	}
`