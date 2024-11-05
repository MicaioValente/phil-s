import { generateClient } from 'aws-amplify/api';

const client = generateClient({
  authMode: 'userPool',
});

export const graphQLClient = client.graphql.bind(client);
