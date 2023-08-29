import React, { useEffect } from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fontawesome/react-fontawesome';
import { faMoon, faSun } from '@fontawesome/free-regular-svg-icons';

const Navbar = () => {

    const [isDarkTheme, setIsDarkTheme] = React.useState(false);

    const getTheme = () => {
        setIsDarkTheme(JSON.parse(localStorage.getItem('darkTheme')) ?? false);
    }

    const setTheme = (theme) => {
        localStorage.setItem('darkTheme', JSON.stringify(theme));
    }

    useEffect(() => {
        window.addEventListener('load', getTheme);
        () => window.addEventListener('load', getTheme);
    }, []);

    useEffect(() => {
        if (isDarkTheme) {
            document.body.classList.add('theme__dark');
        } else {
            document.body.classList.remove('theme__dark');
        }
    }, [isDarkTheme]);

    return (
        <div className='Navbar'>
            <h1 className="title">Where in the world?</h1>
            <div className="theme__container" onClick={(e) => {
                setTheme(!isDarkTheme);
                setIsDarkTheme(!isDarkTheme);
            }}>
                {isDarkTheme ? <FontAwesomeIcon icon={faSun} className='theme__icon' /> : <FontAwesomeIcon icon={faMoon} className='theme__icon' />}
                <p>{isDarkTheme ? 'Light Mode' : 'Dark Mode'}</p>
            </div>
        </div>
    )
}

export default Navbar;