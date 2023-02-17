import * as React from "react";
import { useRouter } from "next/router";
import { Input } from "@material-ui/core";

interface IEmailProps {
  userEmail: string;
}

export default function LandingPage() {
  const [userEmail, setuserEmail] = React.useState(null);
  const router = useRouter();

  const handleChange = (e) => {
    setuserEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`The email you entered was: ${userEmail}`);
    router.push("/home")
  };

  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <form
        onSubmit={handleSubmit}
        style={{
          margin: "auto",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="form-group">
          <Input
            type="text"
            placeholder="Enter Your Email"
            value={userEmail}
            onChange={handleChange}
            style={{ width: "250px", height: 50, padding: 15 }}
          />
        </div>
        <div className="form-group">
        <button type="submit" className="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
            Confirm
          </button>
        </div>
      </form>
    </div>
  );
}
