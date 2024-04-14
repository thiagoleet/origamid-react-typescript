import React from "react";
import useFetch from "../../hooks/useFetch";

interface User {
  id: number;
  nome: string;
  idade: number;
  aulas: number;
  cursos: number;
  preferencias: {
    playback: number;
    volume: number;
    qualidade: "baixa" | "media" | "alta";
  };
}

interface IUserContext {
  data: User | null;
  loading: boolean;
}

const UserContext = React.createContext<IUserContext | null>(null);

export const useUser = () => {
  const context = React.useContext(UserContext);

  if (context === null) {
    throw new Error("useUser must be used within a UserContextProvider");
  }

  return context;
};

export const UserContextProvider = ({ children }: React.PropsWithChildren) => {
  const { data, loading } = useFetch<User>(
    `http://data.origamid.dev/usuarios/1`
  );

  return (
    <UserContext.Provider value={{ data, loading }}>
      {children}
    </UserContext.Provider>
  );
};
