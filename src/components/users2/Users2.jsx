import { useLoaderData } from "react-router";
import User2 from "./User2";

const Users2 = () => {
  const users = useLoaderData();
  return (
    <div>
      <h3>Number of Users: {users.length}</h3>
      <div style={{display: "grid", gridTemplateColumns:'1fr 1fr 1fr'}}>
        {users.map((user) => (
          <User2 key={user.id} user={user}></User2>
        ))}
      </div>
    </div>
  );
};

export default Users2;
