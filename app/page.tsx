import React from "react";
import Menu from "./_components/Menu";
import Topo from "./_components/Topo";

const Home = async () => {
  return (
    <div className="overflow-hidden">
      <Menu />
      <Topo />
    </div>
  );
};

export default Home;
