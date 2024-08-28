import { useState } from 'react';

const Bookshelf = () => {
  const initialBooks = [
    { title: 'Fourth Wing', author: 'Rebecca Yarros' },
    { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
  ];

  const [books, setBooks] = useState(initialBooks);
  const [newBook, setNewBook] = useState({ title: '', author: '' });

  function handleInputChange(e) {
    const { name, value } = e.target;
    setNewBook({
      ...newBook,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (newBook.title && newBook.author) {
      setBooks([...books, newBook]);
      setNewBook({ title: '', author: '' });
    }
  }

  function handleClearAll() {
    setBooks([]);
  }

  function handleRemoveBook(index) {
    const updatedBooks = books.filter((_, i) => i !== index);
    setBooks(updatedBooks);
  }

  return (
    <div className="bookshelfDiv">
      <div className="formDiv">
        <h3>Add a Book</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            value={newBook.title}
            onChange={handleInputChange}
            placeholder="Book Title"
          />
          <input
            type="text"
            name="author"
            value={newBook.author}
            onChange={handleInputChange}
            placeholder="Author Name"
          />
          <button type="submit">Add Book</button>
          <button type="button" onClick={handleClearAll}>Clear All Books</button>
        </form>
      </div>
      <div className="bookCardsDiv">
        {books.map((book, index) => (
          <div key={index} className="bookCard">
            <h4>{book.title}</h4>
            <p>by {book.author}</p>
            <button onClick={() => handleRemoveBook(index)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bookshelf;