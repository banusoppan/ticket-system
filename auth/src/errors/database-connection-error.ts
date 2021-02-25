import { CustomError } from './custome-error';

export class DatabaseConnectionError extends CustomError{
    reason = 'Database error';
    statusCode = 500

    constructor(){
        super();
        Object.setPrototypeOf(this,DatabaseConnectionError.prototype);
        
    }
    serializeError(){
        return [{
            message: this.reason
        }]
    }
}