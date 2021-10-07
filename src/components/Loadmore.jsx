import { useDispatch, useSelector } from 'react-redux';

import "../css/Loadmore.css";
import { loadmoreAction } from '../store/asyncActions/loadmore';

export default function Loadmore() {
    const dispatch = useDispatch();
    const books = useSelector(state => state.books);
 
    return (
        <div  className="loadmore-wrapp">
            <button className="loadmore-btn" onClick={() => dispatch(loadmoreAction(books))}>Load more</button>
        </div>
    );
}