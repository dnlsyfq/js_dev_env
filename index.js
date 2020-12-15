let express = require('express');
let app = express();
let router = express.Router();


let pieRepo = require('./repos/pieRepo');


// let pies = [
//     {"id":1,"name":"Apple"},
//     {"id":2,"name":"Cherry"},
//     {"id":3,"name":"Peach"}
//     ];



// router.get('/',function(req,res,next){
//     res.status(200).send(pies);
// })

// let pies = pieRepo.get();

// router.get('/',function(req,res,next){
//     res.status(200).json({
//         "status":200,
//         "statusText":"OK",
//         "message":"All pies retrieved",
//         "data":pies
//     })
// })

// router.get('/',function(req,res,next){
//     pieRepo.get(function(data){
//         res.status(200).json({
//             "status":200,
//             "statusText":"OK",
//             "message":"All pies retrieved",
//             "data":data
//         });
//     }, function(err){
//       next(err);
//     });
// });

router.get('/:id',function(req,res,next){
    pieRepo.getById(req.params.id,function(data){
        if(data){
            res.status(200).json({
                "status":200,
                "statusText":"OK",
                "message":"Single pie retrieved",
                "data":data
            });
        } else {
            res.status(404).json({
                "status":404,
                "statusText":"Not Found",
                "message":`The pie' ${req.params.id} ' could not be found.`,
                "error":{
                    "code":"NOT_FOUND",
                    "message": `The pie ${req.params.id} ' could not be found. `
                }
            })
        }
    }, function(err){
      next(err);
    });
});

router.get('/search',function(req,res,next){
    let searchObject = {
        "id":req.query.id,
        "name":req.query.name
    };

    pieRepo.search(searchObject,function(data){
        res.status(200).json({
            "status":200,
            "statusText":"OK",
            "message":"All pies retrieved.",
            "data":data
        });
    },function(err){
        next(err);
    });
});

app.use('/api/',router);

var server = app.listen(5000, function(){
    console.log('Node server is running on http://localhost:5000');
})

