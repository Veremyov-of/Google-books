import { HashLink as Link } from 'react-router-hash-link';

//style
import '../css/ItemBook.css'

export default function ItemBook(props) {
    const infoBook = props.book.volumeInfo;
    const textSnippet = props.book.searchInfo?.textSnippet;
    return(
        <div className="section-itemBook">
           <div className="itemBook">
                <img className="itemBook-img" src={infoBook.imageLinks !== undefined ?
                        infoBook.imageLinks.thumbnail : './img/noPicture.png'}
                        alt="img"/>
                <div className="itemBook-info">
                    <h1 className="itemBook-title">{infoBook?.title}</h1>
                    <p className="itemBook-categories">{infoBook?.categories}</p>
                    <p className="itemBook-authors">{infoBook?.authors.map(item => item + ', ')}</p>
                </div>
                <div className="itemBook-wrapp">
                    <p className="itemBook-textSnippet">{textSnippet}</p>
                </div>
                <Link smooth className="itemBook-link" to={`/#${infoBook?.title}`}>back</Link>
           </div>
        </div>
    );
}