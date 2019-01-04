import { Query } from 'react-apollo'

import { CURRENT_TIME_QUERY } from "../../lib/graphql/queries";

const getBrowserYear = () => getYear(Date.now());
const getYear = (time) => (new Date(time)).getFullYear();

export default () => (
  <Query query={CURRENT_TIME_QUERY} variables={{ page: 1 }}>
    {({ data: { currentTime }, loading, error }) => {
      if (loading || error) return <>{getBrowserYear()}</>;
      return <>{getYear(currentTime)}</>
    }}
  </Query>
);
