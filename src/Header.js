import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';


function Header() {

    const [{cart, user}, dispatch] = useStateValue();



    const handleAuthentication = () => {
        if(user){
            auth.signOut();
        }
    }

    return (
        <div className = 'header'>
            <Link to="/">
                <img 
                className="header__logo"
                alt= "amazon"
                src="https://mikekitko.com/wp-content/uploads/2019/10/amazon-logo-white.png" />

            </Link>
            

            <div className="header__search">
                <input className="header__searchInput" type= "text">

                </input>
                <SearchIcon className="header__seachIcon" fontSize="large"/>
            </div>

            <div className="header__nav">
                <Link to='/login'>
                    <div className="header__option" onClick={handleAuthentication}>
                        <span className="header__optionLineOne">Hello {user?.email}</span>
                        <span className="header__optionLineTwo" >{user? 'Sign Out': 'Sign In'}</span>

                    </div>
                </Link>
                <div className="header__option">
                    <span className="header__optionLineOne">Returns</span>
                    <span className="header__optionLineTwo">& orders</span>
                
                </div>
                <div className="header__option">
                    <span className="header__optionLineOne">Your</span>
                    <span className="header__optionLineTwo">Prime</span>
                    
                    
                </div>
                <Link to="/checkout">
                    <div className="header__optionBasket">
                        
                        <ShoppingCartIcon />
                        
                        <span className="header__optionLineTwo header__basketCount">{cart?.length}</span>
                        
                    </div>
                </Link>
                
            </div>
            
        </div>
    )
}

export default Header
