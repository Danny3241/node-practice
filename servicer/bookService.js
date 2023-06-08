const Book = require('../models/book')

const createBook = async (book) => {
    console.log(book)
    return await Book.create(book)
}

const getAllBook = async () => {
    return await Book.find()
}

const getBookById = async (id) => {
    return await Book.findById(id)
}

const updateBook = async (id, book) => {
    return await Book.findByIdAndUpdate(id, book)
}

const deleteBook = async (id) => {
    return await Book.findByIdAndDelete(id)
}

module.exports = {
    createBook,
    getAllBook,
    getBookById,
    updateBook,
    deleteBook
}