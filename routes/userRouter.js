const express = require("express");
 
const {
    createUser,
    getAllUser,
    getUserById,
    updateUser,
    deleteUser,
    signIn,
    getUserByBook
} = require('../controller/userControl');

const router = express.Router();

router.route('/').post(createUser);
router.route('/').get(getAllUser);
router.route('/:id').get(getUserById);
router.route('/:id').put(updateUser);
router.route('/:id').delete(deleteUser);
router.route('/signin').post(signIn);
router.route('/:id').post(getUserByBook);

module.exports = router;