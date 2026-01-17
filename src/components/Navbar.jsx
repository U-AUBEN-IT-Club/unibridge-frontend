import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav style={{ padding: '1rem', background: '#333', color: '#fff' }}>
            <ul style={{ display: 'flex', gap: '20px', listStyle: 'none' }}>
                <li><Link to="/" style={{ color: '#fff' }}>Accueil</Link></li>
                <li><Link to="/universities" style={{ color: '#fff' }}>Universités</Link></li>
            </ul>
        </nav>
    );
}