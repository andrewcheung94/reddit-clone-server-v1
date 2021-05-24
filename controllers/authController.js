const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const validateUser = async (req, res, next) => {
    //unique email check
    let uniqueUserCheck;
    await User.find({ email: req.body.email }).then((users) => {
        uniqueUserCheck = users;
    });
    if (uniqueUserCheck.length > 0)
        return res.status(403).send({
            Error: `User with email ${req.body.email} already exists`,
        });
    // console.log(req.body);
    next();
};

const encryptUserPassword = async (req, res, next) => {
    const rounds = 10;
    const salt = await bcrypt.genSalt(rounds);
    const passHash = await bcrypt.hash(req.body.password, salt);
    req.body.password = passHash;
    next();
};

const loginUser = async (req, res, next) => {
    let userEmail = req.body.email.toLowerCase();
    let pass = req.body.password;
    let match = false;
    await User.findOne({ email: userEmail }).then((user) => {
        if (!user) return res.status(404).send({ message: "ACCESS DENIED" });
        match = bcrypt.compareSync(pass, user.password);
        if (match) {
            req.user = user;
            return next();
        } else {
            res.status(401).send({ message: "ACCESS DENIED" });
        }
    });
};

const issueToken = (req, res) => {
    // console.log(req.user);
    const token = jwt.sign({ _id: req.user._id }, process.env.TOKEN_SECRET);
    res.header("auth-token", token).send(token);
};

const verifyToken = (req, res, next) => {
    const token = req.header("auth-token");
    if (!token) return res.status(401).send("Access Denied.");

    try {
        const verified = jwt.verify(token, process.env.TOKEN_SECRET);
        // req.user.verified = verified;
        req.body.token = token;
        next();
    } catch (err) {
        res.status(400).send(`Invalid Token: ${err}`);
    }
};

module.exports = {
    validateUser,
    encryptUserPassword,
    loginUser,
    issueToken,
    verifyToken,
};
