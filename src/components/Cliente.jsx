import { ClienteAdicionar } from './ClienteAdicionar';
import ClienteBuscar from './ClienteBuscar';
import ClienteListar from './ClienteListar';
import { ClienteContextProvider } from './context/ClienteContext';

const Cliente = () => {
  return (
    <ClienteContextProvider>
      <ClienteAdicionar></ClienteAdicionar>
      <ClienteBuscar></ClienteBuscar>
      <ClienteListar></ClienteListar>
    </ClienteContextProvider>
  );
};

export default Cliente;
