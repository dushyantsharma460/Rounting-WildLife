import React from 'react';
import { useLoaderData } from 'react-router-dom';

export const Github = () => {
    const data = useLoaderData();

    return (
        <>
            <div className="text-center text-3xl font-bold text-green-900 p-6 shadow-md rounded bg-green-100">
                GitHub Followers: <span className="text-green-800">{data.followers}</span>
            </div>
            <div className="flex justify-center text-green-900 mt-6">
                <img
                    src={data.avatar_url}
                    alt="GitHub Avatar"
                    className="rounded-full w-32 h-32 border-4 border-green-400 shadow-md"
                />
            </div>

            <div className="mt-6 text-center text-green-900 space-y-2">
                <p><strong>Username:</strong> {data.login}</p>
                {data.name && <p><strong>Name:</strong> {data.name}</p>}
                {data.bio && <p><strong>Bio:</strong> {data.bio}</p>}
                <p><strong>Public Repos:</strong> {data.public_repos}</p>
                <p><strong>Following:</strong> {data.following}</p>
                {data.location && <p><strong>Location:</strong> {data.location}</p>}
                {data.blog && (
                    <p className="break-words max-w-xs mx-auto">
                        <strong>Blog:</strong>{' '}
                        <a
                            href={data.blog.startsWith('http') ? data.blog : `https://${data.blog}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-green-600 underline break-all"
                        >
                            {data.blog}
                        </a>
                    </p>
                )}
            </div>
        </>
    );
};

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/dushyantsharma460');
    return response.json();
};
