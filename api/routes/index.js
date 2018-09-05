const cors = require('cors');
const bodyParser = require('body-parser');
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
// const { ApolloServer } = require('apollo-server-express');

const serveStatic = require('serve-static');
const history = require('connect-history-api-fallback');

const schema = require('../graphql/schema');
const getContext = require('../graphql/lib/getContext');

// Setup Route Bindings
module.exports = (app) => {
  if (process.env.NODE_ENV === 'development') app.use(cors())

  // Register API middleware
  app.use(
    '/graphql',
    bodyParser.json(),
    graphqlExpress(() => ({ schema, context: getContext() })),
  );

  // routes for testing in development
  if (process.env.NODE_ENV === 'development') {
    app.get('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));
  }

  // const server = new ApolloServer({ schema });
  // server.applyMiddleware({ app });
  // console.log(server);


  // Views
  app.get('/admin', (req, res) => { res.redirect('/keystone'); });
  // app.get('/', (req, res) => { res.redirect('/keystone'); });

  app.use(history({ verbose: true }));
  app.use(serveStatic(`${__dirname}/client`));

};
