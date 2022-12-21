import React from "react";

const Blog = () => {
  return (
    <div className="bg-violet-900 py-6" >

      <div className=" container mx-auto card w-full bg-blue-900 shadow-xl py-6 mt-8">
        <div className="card-body">
          <h2 className="card-title">what is cors?</h2>
          <p>Cross-origin resource sharing is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served. A web page may freely embed cross-origin images, stylesheets, scripts, iframes, and videos.</p>
        </div>
      </div>

      <div className=" container mx-auto card w-full bg-blue-900 shadow-xl py-6 mt-8">
        <div className="card-body">
          <h2 className="card-title">Why are you using firebase? What other options do you have to implement authentication?</h2>
          <p>Firebase Authentication aims to make building secure authentication systems easy, while improving the sign-in and onboarding experience for end users. It provides an end-to-end identity solution, supporting email and password accounts, phone auth, and Google, Twitter, Facebook, and GitHub login, and more.</p>
        </div>
      </div>

      <div className=" container mx-auto card w-full bg-blue-900 shadow-xl py-6 mt-8">
        <div className="card-body">
          <h2 className="card-title">How does the private route work?</h2>
          <p>The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated.</p>
        </div>
      </div>

      <div className=" container mx-auto card w-full bg-blue-900 shadow-xl py-6 mt-8">
        <div className="card-body">
          <h2 className="card-title"> What is Node? How does Node work?</h2>
          <p>A node is a point of intersection/connection within a data communication network. In an environment where all devices are accessible through the network, these devices are all considered nodes. The individual definition of each node depends on the type of network it refers to</p>
        </div>
      </div>

    </div>
  );
};

export default Blog;
