import React from 'react';
import { useParams } from 'react-router-dom';

const User = () => {
    const { userid } = useParams();

    return (
        <div className="bg-gradient-to-r from-green-700 via-green-500 mb-9 to-green-300 text-green-900 text-3xl font-semibold p-6 rounded-lg max-w-md mx-auto mt-8 text-center shadow-lg">
            User: <span className="text-green-700">{userid}</span>
        </div>
    );
};

export default User;
