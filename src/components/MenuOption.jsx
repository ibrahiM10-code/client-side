import React from "react";

function MenuOption({text, images}) {
    return (
        <div className="menu-option">
            <div className="option-content">
                <h2>{text}</h2>
                <div>
                    <img src="" alt="" />
                </div>
            </div>
        </div>
    )
}