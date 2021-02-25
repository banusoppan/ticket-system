import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
import { currentUserRouter } from './routes/current-user';
import { signinRouter } from './routes/siginin';
import { signupRouter } from './routes/signup';
import { signoutRouter } from './routes/signout';
import { errorHandler } from './middleware/error-handler';

const app = express();
app.use(json());

app.use(currentUserRouter);
app.use(signinRouter);
app.use(signupRouter);
app.use(signoutRouter);
app.use(errorHandler);
app.listen(3000,()=>{
    console.log('Listening to 3000!!!!');
});