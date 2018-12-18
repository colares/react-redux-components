import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

import CommentDetail from './CommentDetail';
// relative path. "./" --> same folder

const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail author={`${faker.name.firstName()} ${faker.name.lastName()}`} />
            <CommentDetail author={`${faker.name.firstName()} ${faker.name.lastName()}`} />
            <CommentDetail author={`${faker.name.firstName()} ${faker.name.lastName()}`} />
        </div>
    )
};

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);
