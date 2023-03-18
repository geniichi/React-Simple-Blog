import './Postpage.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Postpage = ({ feed, setFeed }) => {
    const [search, setSearch] = useState('');

    const handleDelete = (id) => {
        setFeed(feed.filter((post) => post.id !== id));
    };

    const filteredFeed = feed.filter((post) =>
        post.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div>
            {feed.length === 0 ? (
                <p id="alert-no-posts" className='m-5 p-5'>No blog posts yet.</p>
            ) : (
                filteredFeed.map((post) => (
                    <div
                        className="d-flex justify-around mx-5"
                        key={post.id}>
                            <div className='m-3 col-6'>
                                <h2>{post.title}</h2>
                                <p>{post.content.slice(0, 20)} ...</p>
                            </div>

                        <button className='m-5 btn btn-danger col-2 h-50' onClick={() => handleDelete(post.id)}>Delete</button>
                        <Link className='m-5 btn btn-primary col-2 h-50' to={`/view/${post.id}`}>View</Link>
                    </div>
                ))
            )}
        </div>
    );
};

export default Postpage;
