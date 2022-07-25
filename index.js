const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});

router.get('/blog',function(req,res){
  res.sendFile(path.join(__dirname+'/blog.html'));
  //__dirname : It will resolve to your project folder.
});
app.use('/', router);
app.use(express.static(path.join(__dirname, "/images")));
const { PORT=3000, LOCAL_ADDRESS='0.0.0.0' } = process.env
app.listen(PORT, LOCAL_ADDRESS, () => {
  
});


module.exports = app;