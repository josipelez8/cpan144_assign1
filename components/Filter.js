import React, { useState } from 'react';

const Filter = ({ green }) => {
    const [showActive, setShowActive] = useState(true);
    const items = [
        { id: 1, name: 'Item 1', active: true },
        { id: 2, name: 'Item 2', active: false },
        { id: 3, name: 'Item 3', active: true },
        { id: 4, name: 'Item 4', active: false },
    ];

    const textColor = green ? 'green' : 'black';  // Conditional color

    const toggleActive = () => {
        setShowActive(!showActive);
    };

    const filteredItems = items.filter(item => item.active === showActive);

    // renders the sorted list
    return (
        <div style={{ color: textColor }}>
            <button onClick={toggleActive}>
                {showActive ? 'Show Inactive' : 'Show Active'}
            </button>
            <ul>
                {filteredItems.map(item => (
                <li key={item.id}>{item.name}</li>
                ))}
            </ul>
            <br></br>
            <br></br>
        </div>
    );
};
export default Filter;