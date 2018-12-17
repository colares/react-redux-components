import React from 'react';
import faker from "faker";
// import only works for the file where it is placed in
// the nested components / files should import again

const CommentDetail = () => {
    return (
        <div className="comment">
            <a href="/" className="avatar">
                <img src={ faker.image.avatar() } alt="avatar"/>
            </a>
            <div className="content">
                <a href="/" className="author">
                    {`${faker.name.firstName()} ${faker.name.lastName()}`}
                </a>
                <div className="metadata">
                    <span className="date">Today at 6:00PM</span>
                </div>
                <div className="text">Nice blog post</div>
            </div>
        </div>
    );
};

export default CommentDetail;
