import React from "react";

function EPContainer({ children, title, btnText }) {
  return (
    <>
      <div className="pms-container">
        <div className="pms-header">
          <h3>{title}</h3>
          <button className="modal-form-btn">{btnText}</button>
        </div>
        <hr />
        <div className="user-pmtds-container">{children}</div>
      </div>
    </>
  );
}

export default EPContainer;
