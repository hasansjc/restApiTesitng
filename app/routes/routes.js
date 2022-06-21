const express = require('express')
const router = express.Router();
const book = require('./book')

router.route("/book")
	.get(book.getBooks)
	.post(book.postBook);
router.route("/book/:id")
	.get(book.getBook)
	.delete(book.deleteBook)
	.put(book.updateBook);


module.exports = router