import React from "react";

const Isr = () => {
  return (
    <div>
      <h1>Incremental Static Regeneration</h1>
    </div>
  );
};

export default Isr;

export const getStaticProps = async ({ params }) => {
  console.log("=params======", params);
  const data = Math.random().toString(36).substring(7);
  console.log("Data from getStaticProps", data);
  return {
    props: { data },
    revalidate: 10,
  };
};

export const getStaticPaths = async () => {
  return {
    paths: [{ params: { id: "1" } }, { params: { id: "2" } }],
    fallback: false,
  };
};
