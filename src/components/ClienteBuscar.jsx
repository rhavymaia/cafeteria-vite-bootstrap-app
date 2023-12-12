import { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';

const ClienteBuscar = () => {
  const [inputs, setInputs] = useState({});

  const handleClick = (event) => {
    console.log('clicou! ');
  };

  const handleChange = (event) => {
    setInputs({ ...inputs, [event.target.name]: event.target.value });
  };

  return (
    <Container>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Busca</Form.Label>
          <Form.Control
            name="consulta"
            value={inputs.consulta || ''}
            type="text"
            placeholder="Digite um valor para buscar"
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant="primary" type="button" onClick={handleClick}>
          Buscar
        </Button>
      </Form>
    </Container>
  );
};

export default ClienteBuscar;
