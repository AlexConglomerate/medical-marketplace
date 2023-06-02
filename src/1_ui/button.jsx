import React from 'react';

function Button({name, onClick, className, ...rest}) {
    const buttonStyle = 'inline-block px-4 py-2 text-sm font-medium leading-5 text-white transition duration-300 ease-in-out bg-blue-500 border border-transparent rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500';

    return (
        <button
            className={buttonStyle + className}
            onClick={onClick}
            {...rest}
        >
            {name}
        </button>
    );
}

export default Button;