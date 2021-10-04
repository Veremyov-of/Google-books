import { Link } from "react-router-dom";

export default function ItemBook(props) {
    const infoBook = props.book.volumeInfo;
    const textSnippet = props.book.searchInfo?.textSnippet;
    return(
        <div className="section-itemBook">
            <img className="itemBook-img" src={infoBook.imageLinks !== undefined ?
                infoBook.imageLinks.thumbnail : './img/noPicture.png'}
                alt="img"/>
            <div className="itemBook-wrapp">
                <p className="itemBook-categories">{infoBook?.categories}</p>
                <h1 className="itemBook-title">{infoBook?.title}</h1>
                <p className="itemBook-authors">{infoBook?.authors.map(item => item + ' ')}</p>
                <p className="itemBook-textSnippet">{textSnippet}</p>
                <Link to="/">back</Link>
            </div>
        </div>
    );
}