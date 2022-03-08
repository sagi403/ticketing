import React from "react";
import axios from "axios";

const LandingPage = ({ currentUser }) => {
  console.log(currentUser);

  return <h1>Landing Page</h1>;
};

LandingPage.getInitialProps = async () => {
  if (typeof window === "undefined") {
    // We are on the server!
    const { data } = await axios.get(
      "http://ingress-nginx-controller.ingress-nginx.svc.cluster.local/api/users/currentuser",
      {
        headers: {
          Host: "ticketing.dev",
        },
      }
    );
    return data;
  } else {
    // We are on the browser!
    const { data } = await axios.get("/api/users/currentuser");
    return data;
  }
};

export default LandingPage;
