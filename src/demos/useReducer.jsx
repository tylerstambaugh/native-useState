import { useReducer } from "react";

function ReducerNameList() {
  const [state, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case "SET_NAME":
          return { ...state, name: action.payload };
        case "ADD_NAME":
          return {
            ...state,
            names: [...state.names, state.name],
            name: "",
          };
      }
    },
    {
      names: [],
      name: "",
    }
  );

  return (
    <>
      <ul>
        {state.names.map((n) => (
          <li key={n.key}>{n}</li>
        ))}
      </ul>
      <input
        type="text"
        value={state.name}
        onChange={(e) =>
          dispatch({ type: "SET_NAME", payload: e.target.value })
        }
      />
      <div>Name = {state.name}</div>
      <button onClick={dispatch({ type: "ADD_NAME" })}>add name reducer</button>
    </>
  );
}

export { ReducerNameList };
