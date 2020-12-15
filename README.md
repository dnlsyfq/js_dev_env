npm init
npm install express -save
npm install nodemon -save

### create express server

edit package.json
```
 "scripts": {
    "start": "nodemon index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  }
```
run
```
nodemon index.js
```

### create rest api get method 
http://localhost:5000/api/
```
let express = require('express');
let app = express();

let router = express.Router();

router.get('/',function(req,res,next){
    res.send("Cherry Pie");
})

app.use('/api/',router);

var server = app.listen(5000, function(){
    console.log('Node server is running on http://localhost:5000');
})

```