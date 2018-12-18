import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

import CommentDetail from './CommentDetail';
// relative path. "./" --> same folder

const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail author={faker.name.firstName()} timeAgo="Today at 4:45PM" />
            <CommentDetail author={faker.name.firstName()} timeAgo="Today at 2:01PM" />
            <CommentDetail author={faker.name.firstName()} timeAgo="Today at 9:32AM" />
        </div>
    )
};

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);
