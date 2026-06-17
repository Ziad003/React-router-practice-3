import { use } from "react";

const Users2 = ({ users2Res }) => {
  const users2 = use(users2Res);
  console.log(users2);
  return (
    <div>
      <h3>User2</h3>
    </div>
  );
};

export default Users2;
