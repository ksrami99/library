const express = require("express");
const {
  login,
  signup,
  getCurrentuser,
} = require("../controllers/userController");
const authMiddleware = require("../middleware/authmiddleare")

const router = express.Router();
router.post("/login", login);
router.post("/register", signup);
module.exports = router;

router.get("/getuser", authMiddleware, getCurrentuser);
