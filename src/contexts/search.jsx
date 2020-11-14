import React, { useState } from "react";

export const Context = React.createContext();

const Provider = (props) => {
  const [value, setValue] = useState("");
  return (
    <Context.Provider
      value={{
        searchText: value,
        setSearchText: (text) => {
          setValue(text);
        },
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default Provider;
