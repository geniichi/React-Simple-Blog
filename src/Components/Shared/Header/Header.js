import './Header.css';
import { Link, useLocation } from 'react-router-dom';

const Header = ({ search, setSearch, feed }) => {
    const location = useLocation();
    const shouldShowSearchBar = location.pathname === '/post';

    const filteredFeed = feed.filter((post) =>
        post.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <nav>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <h1 className="navbar-brand">BlogPost</h1>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    id="white"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to="/" className="link">
                                Homepage
                            </Link>{' '}
                            &nbsp;
                        </li>
                        <li className="nav-item">
                            <Link to="/post" className="link">
                                Feed
                            </Link>{' '}
                            &nbsp;
                        </li>
                        <li className="nav-item">
                            <Link to="/create" className="link">
                                Post
                            </Link>{' '}
                            &nbsp;
                        </li>
                    </ul>
                    {shouldShowSearchBar && (
                        <form className="form-inline my-2 my-lg-0">
                            <input
                                className="form-control mr-sm-2"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                            <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">
                                Search
                            </button>
                        </form>
                    )}
                </div>
            </nav>
        </nav>
    );
};

export default Header;
