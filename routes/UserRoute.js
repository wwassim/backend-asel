const express = require("express");
const {
  getUserById,
  createUser,
  getAllUsers,
} = require("../controllers/Users.js");
const { verifyUser, adminOnly } = require("../middleware/AuthUser.js");

const router = express.Router();

router.get("/users", verifyUser, adminOnly, getAllUsers);
router.get("/users/:id", verifyUser, adminOnly, getUserById);
router.post("/users", verifyUser, adminOnly, createUser);

module.exports = router;
