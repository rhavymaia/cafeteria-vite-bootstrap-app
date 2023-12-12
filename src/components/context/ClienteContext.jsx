// import { createContext } from 'react';

// const ClienteContext = createContext();

// export default ClienteContext;

import { createContext, useState, useContext } from 'react';

export const ClienteContext = createContext({});

export function ClienteContextProvider({ children }) {
  const [show, setShow] = useState(false);

  const [clientes, setClientes] = useState([]);

  const handleModal = () => {
    setShow(!show);
  };

  return (
    <ClienteContext.Provider
      value={{ show, setShow, handleModal, clientes, setClientes }}
    >
      {children}
    </ClienteContext.Provider>
  );
}

export function useCliente() {
  return useContext(ClienteContext);
}
