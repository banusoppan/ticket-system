import {Request,Response,NextFunction} from 'express';
import { CustomError } from '../errors/custome-error';
export const errorHandler = (err:Error,req:Request,res:Response,next:NextFunction) =>{
    //console.log('Sommething went wrong',err);

    if(err instanceof CustomError){
        
        return res.status(err.statusCode).send({errors:err.serializeError()});

    }
    
    return res.status(500).send({errors:[{message:'Something went wrong!!!'}]});

}