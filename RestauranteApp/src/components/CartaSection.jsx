/* export const CartaSection = ()  => {
    return (
        <>
        <h1>Carta Section</h1>
        </>
    );
} */


/* import { Container, Card, Button } from 'react-bootstrap';

export const CartaSection = ({ item }) => {

  return (
    <Card style={{ width: '18rem', margin: '1rem' }}>
      <Card.Img variant="top" src={item.image} />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>{item.description}</Card.Text>
        <Button variant="primary">${item.price}</Button>
      </Card.Body>
    </Card>
  );
};

const CartaMenu = () => {
  const menuItems = [
    {
      name: 'Bulgogui',
      description: 'Deliciosa carne de res sazonada con salsa soya salteada con verduras acompañada de arroz blanco',
      price: 5.900,
      image: '../assets/img/Bulgogui_Comida Koreana.jpeg',
    },
    {
      name: 'Calamar',
      description: 'Calamar salteado con verduras acompañado con arroz blanco',
      price: 5.900,
      image: '../assets/img/Calamar_Plato coreano.jpeg',
    },
    // Agregar más elementos de menú aquí
  ];

  return (
    <>
    <Container>
      <h1 className="mt-5 mb-3">Nuestra Carta</h1>
      <div className="d-flex flex-wrap">
        {menuItems.map((item, index) => (
          <CartaSection key={index} item={item} />
        ))}
      </div>
    </Container>
    </>
  );
};

export default CartaMenu; */

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const CartaSection = () => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="../assets/img/Bulgogui_Comida Koreana.jpeg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
         <p> Some quick example text to build on the card title and make up the
          bulk of the  content. </p>
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default CartaSection;

