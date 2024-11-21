import { buildSchema } from 'graphql';
import { getTranslationsByGroupId } from '../models/translationModel/translationModel';

// Define the GraphQL schema
const schema = buildSchema(`
  type Translation {
    id: ID!
    group_id: String!
    key: String!
    value: String!
  }

  type Query {
    translations(groupId: String!): [Translation]
  }
`);

// Define the resolvers
const root = {
  translations: async ({ groupId }: { groupId: string }) => {
    return await getTranslationsByGroupId(groupId);
  },
};

export { schema, root };