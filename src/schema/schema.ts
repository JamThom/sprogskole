import { makeExecutableSchema } from '@graphql-tools/schema';
import translationResolvers from '../resolvers/translation/translation';

export const schema = makeExecutableSchema({
  resolvers: {
    Query: {
      ...translationResolvers,
    }
  },
  typeDefs: `
    type Translation {
      id: ID!
      group_id: ID!
      original: String!
      translated: String!
    }

    type TranslationGroup {
      id: String!
      name: String!
    }

    type Query {
      translations(groupId: String!): [Translation]
    }

    type Mutation {
      addTranslationGroup(name: String!): TranslationGroup
      addTranslation(groupId: String!, original: String!, value: String!): Translation
      updateTranslation(id: String!, original: String, value: String): Translation
    }
  `
});