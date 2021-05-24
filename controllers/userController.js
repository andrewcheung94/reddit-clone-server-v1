const bcrypt = require("bcrypt");
const User = require("../model/User");
const jwt = require("jsonwebtoken");
const { userData } = require("../data/users");

// console.log(userData);

//crud = create, read, update, delete
const seedUserData = async (req, res) => {
    const hashedUsers = [];
    // encrypt passwords
    const rounds = 10;

    for (let i = 0; i < userData.length; i++) {
        const salt = await bcrypt.genSalt(rounds);
        const hashPass = await bcrypt.hash(userData[i].password, salt);
        hashedUsers.push({ ...userData[i], password: hashPass });
    }
    // const hashedUserData = userData.map(user =>{
    //     return (...user, password.)
    // })

    User.create(hashedUsers)
        .then((user) => res.status(200).json({ user }))
        .catch((err) => res.status(500).json({ Error: err }));
};

//create
const createUser = (req, res, next) => {
    let user = req.body;
    User.create(user)
        .then((u) => {
            console.log(u);
            req.user = u;
            next();
        })
        .catch((err) => res.status(500).json({ Error: err.message }));
};

//read
const getUsers = (req, res) => {
    User.find().exec((err, docs) => {
        if (err)
            return res.status(500).json({
                message: `there was an error with out database: ${err}`,
            });
        if (docs.length === 0)
            return res.status(404).json({
                message: `there were no user founds in the database.`,
            });
        return res.status(200).json(docs);
    });
};

const getUserById = (req, res) => {
    User.findById(req.params.id).exec((err, user) => {
        if (!user)
            return res
                .status(404)
                .json({ message: "could not dind a user with that id" });
        if (err)
            return res
                .status(500)
                .json({ message: "there was an error with our database" });
        return res.status(200).json(user);
    });
};
//update
const updateUser = (req, res) => {
    const id = req.params.id;
    User.findByIdAndUpdate(
        req.params.id,
        { id, $set: req.body },
        { new: true },
        (err, user) => {
            if (err)
                return res.status(404).json({
                    message: `could not find a user with the id: ${id}`,
                });
            return res.json(user);
        }
    );
};
//delete
const deleteUser = (req, res) => {
    const id = req.params.id;
    User.findByIdAndRemove(id, (err, user) => {
        if (err)
            return res
                .status(400)
                .json({ message: `could not find a user with id ${id}` });
        return res.status(200).json(user);
    });
};

const getUserFromToken = (req, res, next) => {
    const token = req.body.token;
    let decoded;

    try {
        decoded = jwt.verify(token, process.env.TOKEN_SECRET);
    } catch (err) {
        return res.status(401).send("Access Denied.");
    }

    const userId = decoded._id;
    User.findOne({ _id: userId }).then((user) => {
        req.body.username = user.name;
        req.body.id = user._id;
        next();
    });
};

module.exports = {
    seedUserData,
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    getUserFromToken,
};
