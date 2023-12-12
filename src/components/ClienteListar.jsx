import { useEffect } from 'react';
import { Container, Table } from 'react-bootstrap';
import { useCliente } from './context/ClienteContext';

const ClienteListar = () => {
  let { clientes, setClientes } = useCliente();

  useEffect(() => {
    fetch('http://localhost:5000/clientes', { method: 'GET' })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`${response.status} ${response.statusText}`);
          // return Promise.reject(response);
        }
        return response.json();
      })
      .then((data) => {
        setClientes([...data]);
      })
      .catch((error) => {});
  }, []);
  return (
    <Container className="mt-3">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Sobrenome</th>
            <th>E-mail</th>
            <th>Celular</th>
          </tr>
        </thead>
        <tbody>
          {clientes.map((cliente, i) => {
            return (
              <tr key={i}>
                <td>{cliente.nome}</td>
                <td>{cliente.sobrenome}</td>
                <td>{cliente.email}</td>
                <td>{cliente.celular}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
};

export default ClienteListar;
