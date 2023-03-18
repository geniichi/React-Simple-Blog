import './Footer.css'
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <div class="container" id="footer-container">
        <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
            <p class="col-md-4 mb-0 text-muted">*This webpage is responsive</p>

            <ul class="nav col-md-4 justify-content-end">
                <li className="nav-item">
                    <Link to="/" className="link">Homepage</Link> &nbsp;
                </li>
                <li className="nav-item">
                    <Link to="/post" className="link">Feed</Link> &nbsp;
                </li>
                <li className="nav-item">
                    <Link to="/create" className="link">Post</Link> &nbsp;
                </li>
            </ul>
        </footer>
    </div>
  )
}

export default Footer;
