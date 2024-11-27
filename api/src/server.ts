import  express  from 'express';
import { graphqlHTTP } from 'express-graphql';
import { schema } from './schema/schema';
import 'tsconfig-paths/register';

const app = express();
app.use('/graphql', graphqlHTTP({
  schema,
}));

app.listen(4000);