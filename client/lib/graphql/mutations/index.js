import gql from 'graphql-tag'

export const CREATE_ENQUIRY = gql`
  mutation createEnquiry(
    $name: String!
    $phone: String!
    $email: String!
    $ti: Boolean!
    $sh: Boolean!
    $es: Boolean!
    $tc: Boolean!
    $hr: Boolean!
  ){
    createEnquiry(record: {
      name: $name,
      phone: $phone,
      email: $email,
      ti: $ti,
      sh: $sh,
      es: $es,
      tc: $tc,
      hr: $hr
    }){
      recordId
    }
  }
`
