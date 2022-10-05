import {gql} from '@apollo/client'

const getProjectsQuery = gql`
	{
		projects {
			title
			summary
			id
			slug
			images {
				category
				filename
				extension
				alt
				id
			}
		}
	}
`

const getProjectQuery = gql`
	query ($slug: String) {
		project(slug: $slug) {
			title
			summary
			description
			roles
			id
			slug
			images {
				category
				filename
				extension
				alt
				id
			}
		}
	}
`

export {getProjectsQuery, getProjectQuery}
