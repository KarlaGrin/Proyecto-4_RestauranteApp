import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

export const FormularioReserva = () => {
    // Estado para almacenar los detalles de la reserva
    const [reservationData, setReservationData] = useState({
        date: '',
        time: '',
        partySize: 1,
        name: '',
        phone: '',
        email: '',

    });

    // Manejador de cambios para los campos del formulario
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setReservationData({ ...reservationData, [name]: value });
    };

    // Manejador de envío del formulario
    const handleSubmit = (event) => {
        event.preventDefault();
        // Aquí puedes enviar los datos de la reserva a Firestore u otro servicio para su procesamiento
        console.log('Datos de la reserva:', reservationData);
    };

    return (
        <div className="container">
            <h2>Reserva tu Mesa</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="date">
                    <Form.Label>Fecha:</Form.Label>
                    <Form.Control
                        type="date"
                        name="date"
                        value={reservationData.date}
                        onChange={handleInputChange}
                        required
                    />
                </Form.Group>
                <Form.Group controlId="time">
                    <Form.Label>Hora:</Form.Label>
                    <Form.Control
                        type="time"
                        name="time"
                        value={reservationData.time}
                        onChange={handleInputChange}
                        required
                    />
                </Form.Group>
                <Form.Group controlId="partySize">
                    <Form.Label>Tamaño del Grupo:</Form.Label>
                    <Form.Control
                        type="number"
                        name="partySize"
                        value={reservationData.partySize}
                        onChange={handleInputChange}
                        min={1}
                        required
                    />
                </Form.Group>
                <Form.Group controlId="Name">
                    <Form.Label>Nombre Completo:</Form.Label>
                    <Form.Control
                        type="text"
                        name="Name"
                        value={reservationData.Name}
                        onChange={handleInputChange}
                        required
                    />
                </Form.Group>
                <Form.Group controlId="phone">
                    <Form.Label>Teléfono:</Form.Label>
                    <Form.Control
                        type="tel"
                        name="phone"
                        value={reservationData.phone}
                        onChange={handleInputChange}
                        required
                    />
                </Form.Group>
                <Form.Group controlId="email">
                    <Form.Label>Email:</Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        value={reservationData.email}
                        onChange={handleInputChange}
                        required
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Reservar Mesa
                </Button>
            </Form>
        </div>
    );
};

export default FormularioReserva;
