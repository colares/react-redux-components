import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

import CommentDetail from './CommentDetail';
// relative path. "./" --> same folder

import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard/>
            <CommentDetail
                author={faker.name.firstName()}
                avatar={faker.image.avatar()}
                timeAgo="Today at 4:45PM"
                content="Nice blog post!"
            />
            <CommentDetail
                author={faker.name.firstName()}
                avatar={faker.image.avatar()}
                timeAgo="Today at 2:01PM"
                content="You've made my day"
            />
            <CommentDetail
                author={faker.name.firstName()}
                avatar={faker.image.avatar()}
                timeAgo="Today at 9:32AM"
                content="Fair enough"
            />
        </div>
    )
};

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);
