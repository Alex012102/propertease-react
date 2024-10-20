import React from "react";

const ContactUs = () => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center">
      <p class="text-center p-2 mt-1">
        Submit your feedback on the software. Help us improve!
      </p>
      <div className="col p-2">
        <button type="button" class="btn btn-outline-primary w-100 mb-3">
          Report a bug
        </button>
        <button type="button" class="btn btn-outline-primary w-100 mb-3">
          Feature Idea
        </button>
        <button type="button" class="btn btn-outline-primary w-100 mb-3">
          Help Bot
        </button>
      </div>
    </div>
  );
};

export default ContactUs;
