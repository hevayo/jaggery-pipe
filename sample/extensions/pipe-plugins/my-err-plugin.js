var handle=function(err,req,res,session,handlers){
   var log=new Log();
   log.info('my pipe plugin to catch errors!');
    handlers(err);
};