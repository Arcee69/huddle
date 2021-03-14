import React from "react";
import user from "../illustration-your-users.svg";

function Users() {
  return (
    <div className="card row d-flex flex-row justify-content-between mt-5 shadow">
      {/* For Mobile Phones */}
      <img
        src={user}
        alt="grow-together"
        className="col-12 d-sm-none"
        style={{ width: "40%", height: "50%", margin: "0 auto" }}
      />
      <div className="mx-4 m d-sm-none">
        <h2 className="card-title font">Your Users</h2>
        <p className="card-text center">
          It takes no time at all to integrate Huddle with your app's
          <br />
          authentication solution. This means, once signed in to
          <br />
          your app, your users can start chatting immediately.
        </p>
      </div>
      {/* For Laptop and Desktop */}
      <div className="mx-4 m hidden-xs">
        <h2 className="card-title font">Your Users</h2>
        <p className="card-text">
          It takes no time at all to integrate Huddle with your app's
          <br />
          authentication solution. This means, once signed in to
          <br />
          your app, your users can start chatting immediately.
        </p>
      </div>
      <img
        src={user}
        alt="grow-together"
        className="hidden-xs"
        style={{ width: "40%", height: "50%", margin: "3%" }}
      />
    </div>
  );
}
export default Users;
