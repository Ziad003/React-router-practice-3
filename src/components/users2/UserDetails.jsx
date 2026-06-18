import { useLoaderData, useNavigate } from "react-router";

const UserDetails = () => {
    const userDetails=useLoaderData();
    console.log(userDetails)
    const navigate=useNavigate();

    return (
        <div style={{border:'1px solid green', padding:'10px' }}>
           <h3>Name: {userDetails.name}</h3>
           <p>Phone: {userDetails.phone}</p>
           <p>Email: {userDetails.email}</p>
           <p>Website: {userDetails.website}</p>
           <button onClick={()=>navigate(-1)}>Go back</button>
        </div>
    );
};

export default UserDetails;