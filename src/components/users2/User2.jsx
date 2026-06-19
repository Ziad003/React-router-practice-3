import { Suspense, useState } from "react";
import { NavLink, useNavigate } from "react-router";
import User2Details from "./User2Details";

const User2 = ({ user }) => {
  const [show, setShow] = useState(false);
  const { name, email } = user;
  const navigate = useNavigate();
  const manageNavigate = () => {
    navigate(`/users2/${user.id}`);
  };
  const userRes = fetch(
    `https://jsonplaceholder.typicode.com/users/${user.id}`,
  ).then((res) => res.json());
  return (
    <div
      style={{
        border: "1px solid green",
        margin: "5px",
        padding: "5px",
        textAlign: "center",
      }}
    >
      <h3>Name: {name}</h3>
      <p>Email: {email}</p>
      <NavLink to={`/users2/${user.id}`}>
        {" "}
        <button> Show Details</button>{" "}
      </NavLink>
      <button onClick={manageNavigate}>Details</button>
      <button onClick={() => setShow(!show)}>
        {show ? "Hide" : "Show"} details here
      </button>

      {show && (
        <Suspense fallback={<p>Loading...</p>}>
          <User2Details userRes={userRes}></User2Details>
        </Suspense>
      )}
    </div>
  );
};

export default User2;
