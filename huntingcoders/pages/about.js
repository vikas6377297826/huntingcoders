import React from "react";

const About = () => {
  let submitForm = async (e) => {
    e.preventDefault();
    let res = await fetch("http://localhost:3000/api/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: "My first post",
        content: "This is my second post post",
      }),
    });
    res = await res.json();
    console.log(res);
  };

  return (
    <div>
      <div>This is about page?</div>
      <button onClick={submitForm}>Click me</button>
    </div>
  );
};

export default About;
