/* generates a schema based on the database models
*  for GraphQL using graphql-compose
*/
const { schemaComposer } = require('graphql-compose');

// Add relationships and resolvers to schema
require('../relationships');

const queries = require('./queries');

// Add fields and resolvers to rootQuery
schemaComposer.Query.addFields(queries);

const schema = schemaComposer.buildSchema();
module.exports = schema;
