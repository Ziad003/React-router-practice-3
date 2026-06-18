import { NavLink, useNavigate } from "react-router";

const User2 = ({ user }) => {
  const { name, email } = user;
  const navigate = useNavigate();
  const manageNavigate = () => {
    navigate(`/users2/${user.id}`);
  };
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
    </div>
  );
};

export default User2;
