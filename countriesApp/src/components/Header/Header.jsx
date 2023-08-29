import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faAngleDown } from '@fortawesome/free-solid-svg-icons';


const Header = ({ setQuery, setFilter }) => {

    const [showOption, setShowOption] = React.useState(false);

    const onFilter = (event) => {
        setFilter(event.currentTarget.textContent);
    }

    return (
        <div className='Header'>
            <div className="input__container">
                <FontAwesomeIcon icon={faSearch} className='icon' />
                <input type="text" name='input' className='country__input' placeholder='Search for a country...' onInput={(e) => setQuery(e.currentTarget.value)} />
            </div>
            <div className="filter" onClick={(e) => setShowOption(!showOption)}>
                <p>Filter by Region</p>
                <FontAwesomeIcon icon={faAngleDown} />
                {
                    showOption && (
                        <div className="filter__options">
                            <ul className='filter__list'>
                                <li className="list__item" onClick={onFilter}>All</li>
                                <li className="list__item" onClick={onFilter}>Africa</li>
                                <li className="list__item" onClick={onFilter}>America</li>
                                <li className="list__item" onClick={onFilter}>Asia</li>
                                <li className="list__item" onClick={onFilter}>Europe</li>
                                <li className="list__item" onClick={onFilter}>Oceania</li>
                            </ul>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Header;