import React from 'react';
import PropTypes from 'prop-types';
const Link = ({ route }) => {
    return (
        <div>
            <li className="mr-6 hover:bg-blue-700 px-6" key={route.id}>
                <a href={route.path}>{route.name}</a>
            </li>
        </div>
    );
};

Link.propTypes = {
    route: PropTypes.object
}

export default Link;