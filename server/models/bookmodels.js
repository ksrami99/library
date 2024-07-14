const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  authors: {
    type: [String],
    required: true
  },
  publishedDate: {
    type: Date,
    required: true
  },
  pageCount: {
    type: Number,
    required: true
  },
  isbn: {
    type: String,
    required: true,
    unique: true
  },
  language: {
    type: String,
    enum: ['English', 'Spanish', 'Franch', 'German','Hindi']
  },
  thumbnail: {
    type: String,
    required: true
  },
  chapters: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  }
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;