import React from "react";
import Input from "./Input";

type State = {
  nome: string;
  email: string;
};

// type Action = { type: "SET_NOME" | "SET_EMAIL"; payload: string };

type Action =
  | { type: "SET_NOME"; payload: string }
  | { type: "SET_EMAIL"; payload: string };

function reducer(state: State, action: Action) {
  switch (action.type) {
    case "SET_NOME":
      return {
        ...state,
        nome: action.payload,
      };
    case "SET_EMAIL":
      return {
        ...state,
        email: action.payload,
      };

    default:
      return { nome: "", email: "" };
  }
}

const Form = () => {
  const [state, dispatch] = React.useReducer(reducer, { nome: "", email: "" });

  return (
    <div>
      <h2>Form</h2>
      <Input
        label={`Nome: ${state.nome}`}
        id="nome"
        value={state.nome}
        onChange={({ target }) =>
          dispatch({ type: "SET_NOME", payload: target.value })
        }
      />
      <Input
        label={`E-mail: ${state.email}`}
        id="email"
        type="email"
        value={state.email}
        onChange={({ target }) =>
          dispatch({ type: "SET_EMAIL", payload: target.value })
        }
      />
    </div>
  );
};

export default Form;
