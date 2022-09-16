import {Link} from 'react-router-dom';

function Header(){
    return(
        <div className='header'>
            <h1>Github Battle App</h1>
            <div className='center'>
                <div className='link'>
                    <Link to='/'>Popular</Link>
                </div>
                <div className='link'>
                    <Link to="/battle">Battle</Link>
                </div>
            </div>
        </div>
    )
}

export default Header;