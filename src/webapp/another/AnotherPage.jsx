import React from 'react';
import { Link } from 'react-router';

export default function AnotherPage() {
    return (
        <div>
            <h2>This page has not any dynamic content</h2>
            <p>It is here just to demonstrate server side and client
                 side data fetching of Home page</p>
            <Link to="/">Home page</Link>
        </div>
    );
}
