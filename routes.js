const express =require('express');
const router = express.Router();
const Folder =require('./model.js');
router.get('/folders',(req,res,next)=>{
   Folder.find(function(err,list){
       if(err){
            res.json({message:"Failed",data:err})
       }else{
           res.json({message:"Success",data:list});
       }

   });
});
router.post('/addFolder',(req,res,next)=>{
 let newFolder = new Folder({
     folder:req.body.folder
 });
 newFolder.save((err,folder)=>{
     if(err){
         res.json({message:"Failed",data:err});
     }else{
         res.json({message:"Success",data:folder});
     }
 });
});
router.delete('/folder/:id',(req,res,next)=>{
    Folder.remove({id:req.params.id },function(err,res){
        if(err){
            res.json({message:"Failed",data:err});
        }else{
            res.json({message:"Success",data:res});
        }
    })
}); 

module.exports=router;