import { NavLink } from "react-router";

const User2 = ({user}) => {
    const {name,email}=user;
    return (
        <div style={{border: '1px solid green', margin: '5px', padding: '5px', textAlign: 'center'} }>
            <h3>Name: {name}</h3>
            <p>Email: {email}</p>
            <NavLink to={`/users2/${user.id}`}> <button> Show Details</button> </NavLink>
        </div>
    );
};

export default User2;