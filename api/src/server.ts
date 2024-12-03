import  express  from 'express';
import { graphqlHTTP } from 'express-graphql';
import { schema } from './schema/schema';
import 'tsconfig-paths/register';
import cors from 'cors';

const app = express();

app.use(cors({ origin: 'http://localhost:5173' }));

app.use('/graphql', graphqlHTTP({
  schema,
}));

app.listen(4000);