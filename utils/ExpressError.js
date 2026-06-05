/**
 * Custom Express Error class that includes HTTP status codes.
 */
class ExpressError extends Error{
    constructor(statusCode,message){
        super();
        this.statusCode=statusCode;
        this.message=message;
    }
}

module.exports=ExpressError;