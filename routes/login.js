const router = require("express").Router();
const {
    loginUser,
    issueToken,
    validateUser,
    encryptUserPassword
} = require("../controllers/authController");
const { createUser } = require("../controllers/userController");

router.post("/", loginUser, issueToken);
router.post("/register", validateUser,encryptUserPassword, createUser, issueToken);

module.exports = router;
