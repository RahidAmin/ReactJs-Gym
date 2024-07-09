import React from 'react';
import PriceOption from '../PriceOption/PriceOption';

const PriceOptions = () => {
    const priceOptions =
        [
            {
                "id": 1,
                "name": "Basic Membership",
                "price": 29.99,
                "features": [
                    "Access to gym equipment",
                    "Free fitness assessment",
                    "Locker room access"
                ]
            },
            {
                "id": 2,
                "name": "Standard Membership",
                "price": 49.99,
                "features": [
                    "Access to gym equipment",
                    "Free fitness assessment",
                    "Locker room access",
                    "Access to group fitness classes",
                    "1 personal training session per month"
                ]
            },
            {
                "id": 3,
                "name": "Premium Membership",
                "price": 69.99,
                "features": [
                    "Access to gym equipment",
                    "Free fitness assessment",
                    "Locker room access",
                    "Access to group fitness classes",
                    "4 personal training sessions per month",
                    "Access to sauna and spa facilities",
                    "Priority class booking"
                ]
            },
            {
                "id": 4,
                "name": "Family Membership",
                "price": 99.99,
                "features": [
                    "Access to gym equipment for up to 4 family members",
                    "Free fitness assessment for each member",
                    "Locker room access",
                    "Access to group fitness classes",
                    "2 personal training sessions per month for each member",
                    "Access to sauna and spa facilities",
                    "Priority class booking"
                ]
            },
            {
                "id": 5,
                "name": "Student Membership",
                "price": 19.99,
                "features": [
                    "Access to gym equipment",
                    "Locker room access",
                    "Access to group fitness classes"
                ]
            }
        ]

    return (
        <div className='m-12'>
            <h2 className='text-5xl'>Best Prices in the town</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>

                {
                    priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
                }

            </div>

        </div>
    );
};

export default PriceOptions;