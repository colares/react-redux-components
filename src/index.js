import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

import CommentDetail from './CommentDetail';
// relative path. "./" --> same folder

import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <div>
                    <h4>Warning!</h4>
                    Are you sure you want to do this?
                </div>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author={faker.name.firstName()}
                    avatar={faker.image.avatar()}
                    timeAgo="Today at 4:45PM"
                    content="Nice blog post!"
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author={faker.name.firstName()}
                    avatar={faker.image.avatar()}
                    timeAgo="Today at 2:01PM"
                    content="You've made my day"
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author={faker.name.firstName()}
                    avatar={faker.image.avatar()}
                    timeAgo="Today at 9:32AM"
                    content="Fair enough"
                />
            </ApprovalCard>
        </div>
    )
};

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);
