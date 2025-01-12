import React from 'react'

const SearchBar = () => {
    return (
        <form style={{ textAlign: 'left' }}>
            <input type="text" placeholder="Search..." />
            <br/>
            <label>
                <input type="checkbox" />
                {' '}
                Only show products in stock
            </label>
        </form>
    );
}

export default SearchBar;
