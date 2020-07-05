import React from "react";

export default (prop) => {
    return (
        <div className="comment">
            <a href="/" className="avatar"><img alt="avatar"/></a>
            <div className="content">
                <a href="/" className="author">{prop.author}</a>
                <div className="metadata"><span className="date">{prop.post_at}</span></div>
                <div className="text">{prop.comment}</div>
            </div>
        </div>
    );
}