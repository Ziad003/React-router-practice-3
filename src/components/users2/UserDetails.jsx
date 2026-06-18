import { useLoaderData } from "react-router";

const UserDetails = () => {
    const userDetails=useLoaderData();
    console.log(userDetails)

    return (
        <div style={{border:'1px solid green', padding:'10px' }}>
           <h3>Name: {userDetails.name}</h3>
           <p>Phone: {userDetails.phone}</p>
           <p>Email: {userDetails.email}</p>
           <p>Website: {userDetails.website}</p> 
        </div>
    );
};

export default UserDetails;