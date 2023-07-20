import React from "react";
const Loading = () => {
  return (
    <div className="progress mb-4">
      <button type="submit" className="btn btn-lg btn-dark w-100 fs-6" disabled>
        <span
          className="spinner-border spinner-border-sm me-2"
          role="status"
          aria-hidden="true"
        ></span>
        Loading...
      </button>
    </div>
  );
};

export default Loading;
