import { useState } from 'react';
import { Form, Button, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../src/config/firebase.config'



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

    /*  const [showSuccessAlert, setShowSuccessAlert] = useState(false); */
    const [showModal, setShowModal] = useState(false);

        const navigate = useNavigate(); 


    // Maneja cambios para los datos del formulario
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setReservationData({ ...reservationData, [name]: value });
    };



    // Manejador de envío de Reserva
    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            // Agrega un nuevo documento a la colección 'reservas' en Firestore
            await addDoc(collection(db, 'reservas'), reservationData);
            setShowModal(true);
            setReservationData({
                date: '',
                time: '',
                partySize: 1,
                name: '',
                phone: '',
                email: '',
            });

        } catch (error) {
            console.error('Error al agregar el documento: ', error);
        }
    }

    const handleGoHomePages = () => {
        navigate('/');
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
                <Form.Group controlId="name">
                    <Form.Label>Nombre Completo:</Form.Label>
                    <Form.Control
                        type="text"
                        name="name"
                        value={reservationData.name}
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

            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>¡Reserva enviada correctamente!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    ¡Nuestro staff la revisará a la brevedad, recibirás la confirmación en tu correo!
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleGoHomePages}>
                        Ir al Home
                    </Button>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                        Cerrar
                    </Button>
                </Modal.Footer>
            </Modal>

            {/*             {showSuccessAlert && (
                <Alert variant="success" onClose={() => setShowSuccessAlert(false)} dismissible>
                    ¡La reserva se ha enviado correctamente, recibirás la confirmación en tu correo!
                </Alert>
            )} */}





        </div>
    );
};

export default FormularioReserva;
