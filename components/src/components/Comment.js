import React from "react";

export default (prop) => {
    return (
        <div className="comment">
            <a className="avatar"><img src=""/></a>
            <div className="content">
                <a className="author">{prop.author}</a>
                <div className="metadata"><span className="date">{prop.post_at}</span></div>
                <div className="text">{prop.comment}</div>
            </div>
        </div>
    );
}