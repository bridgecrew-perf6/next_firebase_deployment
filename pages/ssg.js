import React from "react";

const Ssg = (props) => {
  return (
    <div>
      <h1>Static Page</h1>
      <h4>{props.data}</h4>
    </div>
  );
};

export default Ssg;

export const getStaticProps = async () => {
  const data = Math.random().toString(36).substring(7);
  console.log("Data from getStaticProps", data);
  return {
    props: { data },
  };
};
