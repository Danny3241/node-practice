const bookService = require('../servicer/bookService');

const createBook = async (req, res) => {
    try {
        const book = await bookService.createBook({
            title: req.body.title,
            author: req.body.author,
            description: req.body.description,
        })
        res.json({ data: book, status: 'success' })

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

const getAllBook = async (req, res) => {
    try {
        const book = await bookService.getAllBook()
        res.json({ data: book, status: 'success' })
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

const getBookById = async (req, res) => {
    try {
        const book = await bookService.getBookById(req.params.id)
        res.json({ data: book, status: 'success' })
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

const updateBook = async (req, res) => {
    try {
        const book = await bookService.updateBook(req.params.id, req.body)
        res.json({ data: book, status: 'success' })
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

const deleteBook = async (req, res) => {
    try {
        const book = await bookService.deleteBook(req.params.id)
        res.json({ data: book, status: 'success' })
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}



module.exports = {
    createBook,
    getAllBook,
    getBookById,
    updateBook,
    deleteBook
}