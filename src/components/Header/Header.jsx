import React from 'react';
import {NavLink} from 'react-router-dom';
import classes from './Header.module.css';


const Header = (props) => {
    return (
        <header className={classes.header}>
            <img src="https://avatanplus.com/files/resources/original/5bceeb962cdf1166a04842a8.png"></img>
            <div className={classes.loginBlock}>
                {props.isAuth
                    ? <NavLink to='/login'>
                        {props.login === 'orange' ? 'Vova' : props.login}
                    </NavLink>
                    : <NavLink to='/login'>
                        Login
                    </NavLink>}
            </div>
        </header>
    );
}

export default Header;
