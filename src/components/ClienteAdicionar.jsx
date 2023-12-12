import { Button, Container } from 'react-bootstrap';
import ClienteFormModal from './ClienteFormModal';
import { useCliente } from './context/ClienteContext';

export const ClienteAdicionar = () => {
  let { show, handleModal, setClientes } = useCliente();

  return (
    <Container className="mt-3">
      <Button variant="primary" onClick={handleModal}>
        +
      </Button>
      <ClienteFormModal></ClienteFormModal>
    </Container>
  );
};
