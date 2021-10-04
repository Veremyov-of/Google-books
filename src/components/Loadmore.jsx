import { useDispatch } from 'react-redux';

export default function Loadmore() {
    const dispatch = useDispatch();
    const showBooks = () => {
        dispatch({type: 'RENDER_BOOKS'});
    }
    
    return (
        <div  className="loadmore-wrapp">
            <button className="loadmore-btn" onClick={showBooks}>Load more</button>
        </div>
    );
}