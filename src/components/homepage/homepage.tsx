
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import './homepage.css';
import { selectAllPosts, getPostsError, getPostsStatus } from '../../redux/slice/postsSlice';
import { fetchPosts } from '../../services/postsService';
import { AppDispatch } from '../../redux/store';
import { Post } from '../../interfaces/Post';
import { Counter } from '../counter';

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
                <Counter product={{id: post.id}} />
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
