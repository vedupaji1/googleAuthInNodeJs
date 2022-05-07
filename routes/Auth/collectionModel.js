const mongoose = require("mongoose");

let collectionModel = mongoose.model("usersRecords", {
    username: String,
    email: String,
    profileImage: String,
    isPrivate: Boolean,
    usersFiles: []
})

module.exports = collectionModel;