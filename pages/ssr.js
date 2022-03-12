import React from "react";

const Ssr = (props) => {
  return (
    <div>
      <h1>Dynamic Page</h1>
      <h4>{props.data}</h4>
    </div>
  );
};

export default Ssr;

export const getServerSideProps = async () => {
  const data = Math.random().toString(36).substring(7);
  console.log("Data from getserversideProps", data);
  return {
    props: { data },
  };
};
