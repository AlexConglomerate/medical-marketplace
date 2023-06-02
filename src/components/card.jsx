import React from 'react';

function Card({ user }) {
    return (
        <div key={user.phone} className="max-w-xs mx-auto bg-white rounded shadow-lg overflow-hidden transform transition-all hover:scale-105">
            <img className="w-full h-56 object-cover" src={user.picture.large} alt="User" />
            <div className="p-4">
                <p className="text-xl font-medium">{`${user.name.first} ${user.name.last}`}</p>
            </div>
        </div>
    );
}

export default Card;
