const router = require("express").Router();
const Blog = require("../models/Blog");

// CREATE POST
router.post("", async (req, res) => {
  try {
    const title = req.body?.title;
    const desc = req.body?.desc;
    const img = req.body?.img;
    const username = req.body?.username;
    const query = { title: title, desc: desc, img: img, username: username };

    const newBlog = new Blog(query);

    const blog = await newBlog.save();

    res.status(200).json(blog);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

// GET ALL POST
router.get("", async (req, res) => {
  try {
    const query = {};
    const blogs = await Blog.find(query);
    res.status(200).json(blogs);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

// GET SINGLE POST BY ID
router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const blog = await Blog.findById(id);

    res.status(200).json(blog);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

// DELETE POST BY ID
router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    await Blog.findByIdAndDelete(id);
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

    const updateBlog = await Blog.findByIdAndUpdate(
      id,
      {
        $set: req.body,
      },
      { rew: true }
    );
    res.status(200).json(updateBlog);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});
module.exports = router;
