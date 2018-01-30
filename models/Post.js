/**
 * @Author: MichaelChen <mymac>
 * @Date:   2018-01-03T13:48:16+08:00
 * @Email:  teacherincafe@163.com
 * @Project: one_server
 * @Filename: Question.js
 * @Last modified by:   mymac
 * @Last modified time: 2018-01-11T01:56:01+08:00
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId

var postSchema = new Schema({
    //if type is defined, it means it is question, or answer/reply
    type: { type: String, default: '' },
    likedBy: [{ type: ObjectId, ref: 'User' }],
    value0: { type: String, default: '' },
    value1: { type: String, default: '' },
    additional: { type: String, default: '' },
    from_user: { type: ObjectId, ref: 'User' },
    to_post: { type: ObjectId, ref: 'Post'},
    lang: { type: String, default: '' },
    reply: [{ type: ObjectId, ref: 'Post'}],
    featuredApplied: { type: Boolean, default:false },
    featured: { type: Boolean, default:false },
    closed: { type: Boolean, default:false },
    bookmarkedBy: [{ type: ObjectId, ref: 'User' }],
    reportedBy: [{ type: ObjectId, ref: 'User' }],
    createdAt: { type: Date, default: Date.now() }
})
module.exports = mongoose.model('Post', postSchema);
