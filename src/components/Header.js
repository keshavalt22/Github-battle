import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className='header'>
            <h1>Github Battle App</h1>
            <div className='center'>
                <div className='link'>
                    <h3><Link to='/'>Popular</Link></h3>
                </div>
                <div className='link'>
                    <h3><Link to="/battle">Battle</Link></h3>
                </div>
            </div>
        </div>
    )
}

export default Header;