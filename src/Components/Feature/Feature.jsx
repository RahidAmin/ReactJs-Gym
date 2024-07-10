import React from 'react';
import PropTypes from 'prop-types';
import { FaCheckCircle } from "react-icons/fa";

const Feature = ({ feature }) => {
    return (
        <div>
            <p className='flex items-center'><FaCheckCircle className='text-green-500 mr-2' />{feature}</p>
        </div>
    );
};

export default Feature;

Feature.propTypes = {
    feature: PropTypes.string
}