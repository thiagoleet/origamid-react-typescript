import React from "react";
import { useUser } from "../context/user/context";

const Header = () => {
  const { data } = useUser();

  if (!data) return null;

  return (
    <header>
      <h1>{data.nome}</h1>
    </header>
  );
};

export default Header;
