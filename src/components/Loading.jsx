import { useSelector } from 'react-redux';

//style
import '../css/Loading.css'

export default function Loading() {
    const loading = useSelector(state => state.books.loading)
    return (
        <div className={`loading_wrapp ${loading ? 'loading_wrapp-active' : ''}`}>
            <h2>Loading...</h2>
        </div>
    );
}