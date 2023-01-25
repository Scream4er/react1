import React from "react";
import './app-header.css';

const AppHeader = ({liked, allPosts}) => {
    return (
        <div className="app-header d-flex">
            <h1>Artem Chaikovskyi</h1>
            <h2>{allPosts} posts, {liked} with like</h2>
        </div>
    );
};

export default AppHeader;