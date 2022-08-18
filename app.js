const path=require('path');
const express=require('express');
const app=express();
const adminRoutes=require('./routes/admin');
const shopRoutes=require('./routes/shop');
const bodyParser=require('body-parser');


app.use(bodyParser.urlencoded({extension: false}));

app.use(adminRoutes);
app.use(shopRoutes);

app.use((req,res,next)=>{
  res.status(404).sendFile(path.join(__dirname,'views','404.html'));
  //res.status(404).send('<h1> Page not found</h1>')
 //console.log('done');
});
app.listen(3000);