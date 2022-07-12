const router = require("express").Router();
const Post = require("../models/Post");
const verifyToken = require("../middleWare/requireAuth");

// CREATE POST
router.post("", async (req, res) => {
  try {
    // const title = req.body?.title;
    // const desc = req.body?.desc;
    // const img = req.body?.img;
    // const category = req.body?.category;
    // const username = req.body?.username;
    // const query = { title: title, desc: desc, img: img, username: username };

    const query = req?.body;
    const newPost = new Post(query);

    const post = await newPost.save();

    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

// GET ALL POST
router.get("/", verifyToken, async (req, res) => {
  try {
    const query = {};
    const posts = await Post.find(query);
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

// GET SINGLE POST BY ID
router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const post = await Post.findById(id);

    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

// DELETE POST BY ID
router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    await Post.findByIdAndDelete(id);
    res.status(200).json("The Post has been deleted!");
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

// UPDATE THE POST
router.put("/:id", async (req, res) => {
  try {
    const id = req.params.id;

    const updatePost = await Post.findByIdAndUpdate(id, {
      $set: req.body,
    });
    res.status(200).json(updatePost);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

module.exports = router;
