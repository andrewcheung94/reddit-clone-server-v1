const router = require("express").Router();

const {
    SeedPostData,
    createPost,
    getPost,
    getPostById,
    updatePost,
    deletePost,
    getPostByUser,
    getPostBySubReddit,
    votePost,
    commentPost
} = require("../controllers/postController.js");

const { getUserFromToken } = require("../controllers/userController");
// /post/seed
router.get("/seed", SeedPostData);

// /post/add
router.post("/add", getUserFromToken, createPost);

// /post/posts
router.get("/", getPost);

// post/posts/u/:username
router.get("/u/:username", getPostByUser);

// post/posts/r/:subReddit
router.get("/r/:subReddit", getPostBySubReddit);

// /post/posts/:id
router.get("/:id", getPostById);

// /post/update/:id
router.put("/update/:id", updatePost);

// /post/delete/:id
router.delete("/delete/:id", deletePost);

// /post
router.put("/vote", getUserFromToken, votePost);


router.put("/comment", getUserFromToken, commentPost);

module.exports = router;
