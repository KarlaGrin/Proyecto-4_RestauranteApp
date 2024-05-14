/* export const CartaSection = ()  => {
    return (
        <>
        <h1>Carta Section</h1>
        </>
    );
} */


import { Container, Card, Button } from 'react-bootstrap';

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

const Menu = () => {
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
    // Agrega más elementos de menú aquí
  ];

  return (
    <Container>
      <h1 className="mt-5 mb-3">Nuestra Carta</h1>
      <div className="d-flex flex-wrap">
        {menuItems.map((item, index) => (
          <CartaSection key={index} item={item} />
        ))}
      </div>
    </Container>
  );
};

export default Menu;

