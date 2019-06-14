const router=require('express').Router();
const jwt=require('jsonwebtoken');
const User=require('../models/user');
const config=require('../config');
const checkJWT=require('../middlewares/check-jwt');
router.post('/signup',(req,res,next)=>{
    let user=new User();
    user.name=req.body.name;
    user.email=req.body.email;
    user.password=req.body.password;
    user.date=req.body.date;

    User.findOne({ email: req.body.email }, (err, existingUser) => {
        if (existingUser) {
          res.json({
            success: false,
            message: 'Account with that email is already exist'
          });
      
        } else {
          user.save();
      
          var token = jwt.sign({
            user: user
          }, config.secret, {
            expiresIn: '1d'
          });
      
          res.json({
            success: true,
            message: 'Enjoy your token',
            token: token
          });
        }
      
       });
      });


      router.post('/login', (req, res, next) => {

        User.findOne({ email: req.body.email }, (err, user) => {
          if (err) throw err;
      
          if (!user) {
            res.json({
              success: false,
              message: 'Authenticated failed, User not found'
            });
          } else if (user) {
      
            var validPassword = user.comparePassword(req.body.password);
            if (!validPassword) {
              res.json({
                success: false,
                message: 'Authentication failed. Wrong password'
              });
            } else {
              var token = jwt.sign({
                user: user
              }, config.secret, {
                expiresIn: '1d'
              });
      
              res.json({
                success: true,
                mesage: "Enjoy your token",
                token: token
              });
            }
          }
      
        });
      });



      router.route('/profile')
      .get(checkJWT,(req,res,next)=>{
        User.findOne({ _id:req.decoded.user._id},(err,user)=>{
          res.json({
            success:true,
            user:user,
            message:"Successful"
          });
        });
      })
      .post(checkJWT, (req, res, next) => {
        User.findOne({ _id: req.decoded.user._id }, (err, user) => {
          if (err) return next(err);
    console.log(err);
          if (req.body.name) user.name = req.body.name;
          if (req.body.email) user.email = req.body.email;
          if (req.body.password) user.password = req.body.password;
    
          if (req.body.date) user.date = req.body.date;
    
          user.save();
          res.json({
            success: true,
            message: 'Successfully edited your profile'
          });
        });
      });

  //     router.route('/list')
  // .get(checkJWT, (req, res, next) => {
  //   User.find({ owner: req.decoded.user._id })
  //     .populate('name')
  //     .populate('email').
  //     populate('date')
  //     .exec((err, users) => {
  //       console.log(err);
        
  //       if (users) {
  //         res.json({
  //           success: true,
  //           message: "users",
  //           users: users
  //         });
  //       }
  //     });
  // });

  

//   app.get('/list',function(req,res){
// user.find({},function(err,doc){
// if(err) res.json(err);
// else res.render();
// });
//   });

router.route('/list').get(function(req,res){
  User.find(function(err,users){
    if(err){
      console.log(err);
      
    }else{
      res.json(users)
    }
  });
});

router.route('/delete/:id').get(function (req, res) {
  User.findByIdAndRemove({_id: req.params.id}, function(err, user){
  
      if(err) res.json(err);
      
      
      else res.json('Successfully removed');
  });
});

router.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
User.findById(id, function (err, user){
      res.json(user);
  });
});

router.route('/update/:id').post(function (req, res) {
  User.findById(req.params.id, function(err, user) {
    if (!user)
      res.status(404).send("Record not found");
    else {
     if (req.body.name) user.name = req.body.name;
          if (req.body.email) user.email = req.body.email;
          if (req.body.password) user.password = req.body.password;
    
          if (req.body.date) user.date = req.body.date;
    

      user.save().then(user => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});
  // app.get('/api/events/admin', jwtCheck, adminCheck, (req, res) => {
  //   Event.find({}, _eventListProjection, (err, events) => {
  //     let eventsArr = [];
  //     if (err) {
  //       return res.status(500).send({message: err.message});
  //     }
  //     if (events) {
  //       events.forEach(event => {
  //         eventsArr.push(event);
  //       });
  //     }
  //     res.send(eventsArr);
  //   });
  // });


module.exports=router;