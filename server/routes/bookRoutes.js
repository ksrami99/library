const express = require("express");
const {
    createBook
} = require("../controllers/bookController");
const authMiddleware = require("../middleware/authmiddleare")

const router = express.Router();
router.post("/addbook", createBook);
module.exports = router;

