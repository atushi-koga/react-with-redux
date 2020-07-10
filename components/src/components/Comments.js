import React from "react";
import Comment from "./Comment";

export default () => {
    return (
        <div className="ui comments">
            <h3 className="ui dividing header">Comments</h3>
            <Comment
                author="Mike"
                post_at="Today at 08:00"
                comment="Hi I'm Mike"
            />
            <Comment
                author="Cathy"
                post_at="Today at 09:00"
                comment="Hi I'm Cathy"
            />
            <Comment
                author="Bob"
                post_at="Today at 10:00"
                comment="Hi I'm Bob"
            />
        </div>
    );
}