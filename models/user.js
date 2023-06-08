const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    book: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Book'

    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})


userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 12);
    next();
});

// =====> Compare Password <=====
userSchema.methods.comparePassword = async function (userPassword, dbPassword) {
    return await bcrypt.compare(userPassword, dbPassword);
};

module.exports = mongoose.model("User", userSchema);