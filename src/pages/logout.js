import { useRouter } from "next/router";
import React from "react";
const Logout = () => {
  const router = useRouter();
  return (
    <div className="center mt-[3.6rem]">
      <h1>Logout</h1>
      <button className="btn" onClick={() => router.push("/")}>
        back to home page
      </button>
    </div>
  );
};

export default Logout;
