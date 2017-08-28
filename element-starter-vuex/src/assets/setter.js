/**
 * Created by chenchao on 2017/8/28.
 */

var coder = function () {
    var that = this;
    return {
        get name(){
            if(that.name){
                return that.name;
            }
            return 'u have no name!';
        },
        set name(value){
            console.log('your new name : '+value);
            that.name = value;
        }
    }
};

var isMe = new coder();
console.log(isMe);
console.log(isMe.name);
isMe.name = 'chenchao';
console.log(isMe.name);