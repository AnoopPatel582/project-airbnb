/**
 * Utility wrapper function to catch async errors and pass them to Express error handlers.
 */
module.exports=(fn)=>{
    return (req,res,next)=>{
        fn(req,res,next).catch(next);
    };
};