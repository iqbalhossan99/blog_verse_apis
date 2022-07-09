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

module.exports = router;
