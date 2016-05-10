
var Waterline = require('waterline');

//数据集合
var User = Waterline.Collection.extend({
    identity:'User',
    connection:'mysql',
    schema:true,
    attributes:{
        username:{
            type:'string',
            required:true
        },
        password:{
            type:'string',
            required:true
        },
        email:{
            type:'string'
        },
        birthday:{
            type:'date',
            after:new Date('1991-01-01'),
            before:function(){
                return new Date();
            }
        },
        createTime:{
            type:'date'
        },
        migrate:'safe'
    },
    //生命周期回调
    beforeCreate:function(value,cb){
        value.createTime = new Date();
        console.log('beforeCreate executed');
        return cb();
    }
});

var Note = Waterline.Collection.extend({
    identity:'Note',
    connection:'mysql',
    schema:true,
    attributes:{
        title:{
            type:'string',
            required:true
        },
        author:{
            type:'string',
            required:true
        },
        tag:{
            type:'string'
        },
        content:{
            type:'string'
        },
        createTime:{
            type:'date'
        },
        migrate:'safe'
    },
    //生命周期回调
    beforeCreate:function(value,cb){
        value.createTime = new Date();
        console.log('beforeCreate executed');
        return cb();
    }
});
exports.User = User;
exports.Note  = Note;

