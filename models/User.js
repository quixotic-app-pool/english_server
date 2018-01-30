/**
 * @Author: MichaelChen <mymac>
 * @Date:   2018-01-03T13:48:26+08:00
 * @Email:  teacherincafe@163.com
 * @Project: one_server
 * @Filename: User.js
 * @Last modified by:   mymac
 * @Last modified time: 2018-01-28T10:30:25+08:00
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId

var userSchema = new Schema({
    avatar: { type: String, default: ''},
    oId: { type: String, default: ''},
    nickName: { type: String, default: ''},
    avatarUrl: { type: String, default: ''},
    gender: { type: String, default: ''},
    points: { type:Number, default: 0 },
    position: { type:String, default: '' },
    questions: [{ type: ObjectId,ref: 'Post' }],
    answers: [{ type: ObjectId,ref: 'Post' }],
    notifications: [{ type: ObjectId,ref: 'Notification' }],
    likes: [{ type: ObjectId,ref: 'Post' }],
    featuredAns: [{ type: ObjectId,ref: 'Post' }],
    bookmarks: [{ type: ObjectId,ref: 'Post' }],
    createdAt: { type: Date, default: Date.now() }
})
module.exports = mongoose.model('User', userSchema);
