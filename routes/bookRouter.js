const express = require("express");
 
const {
    createBook,
    getAllBook,
    getBookById,
    updateBook,
    deleteBook,
} = require('../controller/bookControl');

const router = express.Router();

router.route('/').post(createBook);
router.route('/').get(getAllBook);
router.route('/:id').get(getBookById);
router.route('/:id').put(updateBook);
router.route('/:id').delete(deleteBook);


module.exports = router;