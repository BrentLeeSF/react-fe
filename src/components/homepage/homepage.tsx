
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import './homepage.css';
import { selectAllPosts, getPostsError, getPostsStatus, fetchPosts } from '../../services/postsSlice';
import { AppDispatch } from '../../redux/store';
import { Post } from '../../interfaces/Post';

export default function HomePage() {

    const dispatch = useDispatch<AppDispatch>();

    const posts = useSelector(selectAllPosts);
    const postStatus = useSelector(getPostsStatus);
    const error = useSelector(getPostsError);

    useEffect(() => {
        if (postStatus === undefined) {
            dispatch(fetchPosts())
        }
    }, [postStatus, dispatch])

    const productList = posts && posts.posts && posts.posts.map((post: Post, index: number) => (
        <li key={index}>
            <div className="product">
                <div>{post.id}, {post.title}</div>
            </div>
        </li>
    ));
    return (
        <div className="HomePage">
            <div className="productTitle">
                <h2>Test this home page!</h2>
            </div>
            <div className="productList">
                {productList}
            </div>
        </div>
    );
}
