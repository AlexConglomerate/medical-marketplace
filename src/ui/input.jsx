import React from 'react';

const Input = () => {
    return (
        <input
            className="w-72 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            type="text"
            placeholder="Введите текст"
        />
    );
};

export default Input;
