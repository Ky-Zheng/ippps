

import * as React from "react";
import { useRouter } from "next/router";


interface IEmailProps {
  userEmail: string;
}

export default function LandingPage() {
  const [userEmail, setuserEmail] = React.useState(null);
  
  const handleChange = (e) => {
    setuserEmail(e.target.value)
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`The email you entered was: ${userEmail}`)
  };

 
  return (
      <form onSubmit={handleSubmit} 
            style={{margin:'auto', height:'100%', display:'flex',alignItems:'center', justifyContent:'center'}}>
        <div className="form-group">
          <input 
              type="text" 
              placeholder="Enter Your Email at Saks.com"
              value={userEmail} 
              onChange={handleChange}
              style = {{width: "250px", height:50, padding:15}}
          />
        </div>
        <div className="form-group">
          <button
            type="submit" 
            style = {{width:'150px',
                    backgroundColor:'black',
                    borderWidth: 3, 
                    borderRadius: 15,
                    margin: 20,
                    padding:5,
                    cursor:"pointer",
                  color: "white"}}>Confirm</button>
        </div>
      </form>
  );
}
;