const express = require('express');
const path = require('path');
const ejs =require('ejs');
const app = express();
app.set('view engine','ejs');
app.get('/',(req,res)=>{
res.render('home',{title:'homepage',pagename:'Homepage'});
res.end();

});
app.get('/contact',(req,res)=>{
res.sendFile(path.resolve(__dirname,'file/contact.html'));
});
app.use((req,res,next)=>{
 res.status(404);
 res.render('404_error');
 res.end();

})
app.listen(2000);
console.log("this file load at localhost:2000");