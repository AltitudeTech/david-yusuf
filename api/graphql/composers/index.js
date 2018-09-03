const keystone = require('keystone');
const { composeWithMongoose } = require('graphql-compose-mongoose');

/**
* Mongoose Models
*/
const Post = keystone.list('Post').model;
const PostCategory = keystone.list('PostCategory').model;

const PostTC = composeWithMongoose(Post);
const PostCategoryTC = composeWithMongoose(PostCategory);

/**
* Exports
*/
module.exports = {
  PostTC,
  PostCategoryTC,
};
