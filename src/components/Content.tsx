import React from "react";
import { useUser } from "../context/user/context";

const Content = () => {
  const { data, loading } = useUser();

  if (!data) return null;

  if (loading) return <p>Carregando...</p>;

  return (
    <div>
      <h3>Preferências</h3>
      <p>Qualidade: {data.preferencias.qualidade}</p>
      <p>Playback: {data.preferencias.playback}</p>
      <p>Volume: {data.preferencias.volume}</p>
    </div>
  );
};

export default Content;
