import React from "react";
import Comment from "./Comment";
import faker from "faker";
import ApprovalCard from "./ApprovalCard";

export default () => {
    return (
        <div className="ui comments">
            <h3 className="ui dividing header">Comments</h3>
            <ApprovalCard>
                <Comment
                    author="Mike"
                    post_at="Today at 08:00"
                    comment="Hi I'm Mike"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <Comment
                    author="Mike"
                    post_at="Today at 08:00"
                    comment="Hi I'm Mike"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <Comment
                    author="Cathy"
                    post_at="Today at 09:00"
                    comment="Hi I'm Cathy"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
        </div>
    );
}