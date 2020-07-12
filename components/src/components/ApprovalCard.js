import React from "react";
// contentによらずApprovalCardのデザインを使い回したいので、外から要素をもらうようにしている

export default (prop) => {
    console.log(prop.children);
    return (
        <div className="ui card">
            <div className="content">{prop.children}</div>
            <div className="extra content">
                <div className="ui two buttons">
                    <div className="ui basic green button">Approve</div>
                    <div className="ui basic red button">Reject</div>
                </div>
            </div>
        </div>
    );
}