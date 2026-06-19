import { use } from "react";

const User2Details = ({ userRes }) => {
  const user = use(userRes);
  console.log(user);
  return <div>
    <p>Name:{user.name}</p>
  </div>;
};

export default User2Details;
