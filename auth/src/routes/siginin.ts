import express , {Request, Response} from 'express';
import { body, validationResult } from 'express-validator';
import { RequestValidationError } from '../errors/request-validation-error';
import { DatabaseConnectionError } from '../errors/database-connection-error';


const router = express.Router();

router.post('/api/users/signin',[
    body('email')
        .isEmail()
        .withMessage('Email must be valid'),
    body('password')
        .trim()
        .isLength({min:4,max:20})
        .withMessage('Password length should be between 4 and 20 character')

],async (req:Request,res:Response)=>{
    const errors = validationResult(req);
    const { email , password } = req.body;
    if(!errors.isEmpty()){
        throw new RequestValidationError(errors.array());

    }
    throw new DatabaseConnectionError();
    //res.status(200).send('sign in');
    

});

export { router as signinRouter };