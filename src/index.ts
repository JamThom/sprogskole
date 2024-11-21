import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { schema, root } from './schema/translationSchema';

const app = express();
const port = process.env.PORT || 3000;

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});