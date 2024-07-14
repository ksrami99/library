const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: {
    type: String
  },
  authors: {
    type: [String]
  },
  publishedDate: {
    type: Date
  },
  pageCount: {
    type: String
  },
  isbn: {
    type: String
  },
  language: {
    type: String
  },
  thumbnail: {
    type: String
  },
  chapters: {
    type: String
  },
  description: {
    type: String
  }
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;