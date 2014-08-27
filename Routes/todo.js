/**
 * Created by himani.bhardwaj on 25-Aug-14.
 */
var express = require('express');
var router = express.Router();
router.get('/',function(req,res){
    res.render('index',{title:'To Do'})
});
router.post('/createNew',function(req,res){
    res.render('index',{title:'To Do'})
})