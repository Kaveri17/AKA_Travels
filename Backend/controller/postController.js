const Post = require('../models/postModel')

exports.addPost = async(req, res) => {
    let post = await Post.findOne({post_name:req.body.post_name})
    if(post){
        return res.status(400).json({error:"Post already exists"})
    }
    post= await Post.create({
        post_name: req.body.post_name,
        post_email:req.body.post_email,
        post_comment: req.body.post_comment

    })
    if(!post){
        return res.status(400).json({error:"Something Went Wrong"})
    }
    res.send(post)



}
// to get all post
exports.getPost = async(req, res) => {
    let post = await Post.findById(req.params.id)
    if(!post){
        return res.status(400).json({error:"Something Went Wrong"})
    }
    res.send(post)
}
// to update a post
exports.updatePost = async(req, res) => {
    let post = await Post.findByIdAndUpdate(req.params.id, {
        post_name:req.body.post_name,
        post_email:req.body.post_email,
        post_comment:req.body.post_comment
    },

   {new:true})
if(!post){
    return res.status(400).json ({error:"Something Went Wrong"})
}
res.send(post)
}

// to delete post
exports.deletePost = (req, res) => {
    Post.findByIdAndDelete(req.params.id)
    .then(post => {
        if(!post){
            return res.status(400).json({error:"Post not found"})
        }
        else{
            res.send({msg:"Post Deleted Successfully"})
        }
    })
    .catch(error => {
        return res.status(400).json({error:"Something went Wrong"})
    })
}