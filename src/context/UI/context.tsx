import React from "react";

interface IUIContext {
  dark: boolean;
  setDark: React.Dispatch<React.SetStateAction<boolean>>;
}

const UIContext = React.createContext<IUIContext | null>(null);

export const useUi = () => {
  const context = React.useContext(UIContext);

  if (context === null) {
    throw new Error("useContext deve estar dentro do provider");
  }

  return context;
};

export const UIContextProvider = ({ children }: React.PropsWithChildren) => {
  const [dark, setDark] = React.useState(false);

  return (
    <UIContext.Provider value={{ dark, setDark }}>
      {children}
    </UIContext.Provider>
  );
};
