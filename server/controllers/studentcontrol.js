const { response } = require('express');
const db = require('../database')

exports.view=(req,res)=>{ 
  
   db.query('select*from users ',(err,resolve)=>{
          if(!err) {
            res.render("home",{resolve});
          }
   })
};

exports.adduser=(req,res)=>{
   res.render("adduser")
}

exports.save=(req,res)=>{

   const {name,age,city} = req.body;
   db.query('insert into users(name,age,city) values(?,?,?)',[name,age,city],(err,resolve)=>{
      if(!err){
         res.render("adduser",{msg:"Add Successfully!"});
      }
   })
}

exports.edituser=(req,res)=>{
   const Id = req.params.id;
    db.query("select * from users where id=?",[Id],(err,row)=>{
      if(!err){
         res.render("edituser",{row});
      }
   });
}

exports.edit=(req,res)=>{
   const{name,age,city}=req.body;
   const Id = req.params.id;
    db.query("update users set name=?, age=?, city=? where id=?",[name,age,city,Id],(err,rows)=>{
      if(!err){
         db.query("select * from users where id=? ",[Id],(err,row)=>{
           res.render("edituser",{row,msg:"update successfully!"});
         });
       
      }
   });
}

exports.delete=(req,res)=>{
   const Id = req.params.id;

   db.query("delete from users where id=?",[Id],(err,response)=>{
     if(!err){
      res.redirect("/");
     }
   });
}