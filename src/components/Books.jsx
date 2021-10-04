import { useSelector } from 'react-redux';

export default function Books() {

    const books = useSelector(state => state.books);

    return (
        <div className="books_wrapp">
            {books.books.map((book, index) => (
                <a className="link-book" href="/" key={index}>
                    <img 
                        src={book.volumeInfo.imageLinks !== undefined ?
                        book.volumeInfo.imageLinks.thumbnail : './img/noPicture.png'} 
                        alt={book.volumeInfo.title}
                    />
                    <div className="book_info">
                        <h2 className="book_title">
                            {book.volumeInfo.title === undefined ? '' : book.volumeInfo.title.length < 60?
                            book.volumeInfo.title : book.volumeInfo.title.slice(0,60) + '...'}
                        </h2>
                        <p className="book_categories">{book.volumeInfo.categories !== undefined ? book.volumeInfo.categories : ''}</p>
                        <p className="book_authors">{book.volumeInfo.authors !== undefined ? book.volumeInfo.authors[0] : ''}</p>
                    </div>
                </a>
            ))}
        </div>
    );
}