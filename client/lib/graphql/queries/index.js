import gql from 'graphql-tag'

export const CURRENT_TIME_QUERY = gql`
  query {
    currentTime
  }
`

export const ALL_POSTS_QUERY = gql`
  query ($page: Int!){
    posts(page: $page, perPage: 6, sort: PUBLISHEDDATE_DESC, filter: {state: published}){
      pageInfo {
        currentPage
        perPage
        pageCount
        itemCount
        hasNextPage
        hasPreviousPage
      }
      items {
        _id
        title
        state
        author
        publishedDate
        slug
        content {
          brief
          extended
        }
        image {
          url
        }
        categories {
          _id
          name
        }
      }
    }
  }
`
