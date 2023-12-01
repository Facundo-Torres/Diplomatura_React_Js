import "../styles/components/pages/ContactoPage.css"
import { useState } from "react";
import axios from "axios";


const ContactoPage = (props) => {

    const initialForm = {
        nombre: '',
        email: '',
        telefono: '',
        mensaje: ''
    }
    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState(initialForm);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(oldData => ({
            ...oldData,
            [name]: value
        }));
    }

    const handleSubmit = async e => {
        e.preventDefault();
        setMsg('');
        setSending(true)
        const response = await axios.post('http://localhost:3000/api/contacto', formData);
        setSending(false);
        setMsg(response.data.menssage);
        if (response.data.error === false) {
            setFormData(initialForm)
        }
    }





    return (

        <main>
            <div className="holder contacto">
                <div>
                    <p>¡Bienvenido(a) a nuestra plataforma de reserva de alquiler de inmuebles en línea! Estamos emocionados de
                        ser parte de tu próxima aventura. Por favor, completa el formulario a continuación con los detalles
                        necesarios para procesar tu solicitud de reserva.
                    </p>
                </div>
                <div class="reserva mt-1">
                    <h3>Pasos Sencillos para Reservar:</h3>
                    <p><strong>Detalles de la Reserva:</strong> Proporciona tus datos personales y las fechas deseadas para tu
                        estadía. Cuanta más información nos brindes, mejor podremos atender tus necesidades.</p>
                    <p><strong>Confirmación de Disponibilidad:</strong> Una vez que recibamos tu solicitud, nuestro equipo se
                        pondrá manos a la obra para verificar la disponibilidad en las fechas seleccionadas.</p>
                    <p><strong>Respuesta Rápida:</strong> Te contactaremos en tiempo récord para confirmar las fechas elegidas y
                        la disponibilidad del inmueble. Tu tiempo es valioso, y estamos comprometidos en brindarte una respuesta
                        lo antes posible.</p>
                    <p><strong>Paso Seguro y Fácil:</strong> Si hay disponibilidad confirmada, recibirás instrucciones
                        detalladas sobre cómo proceder con el pago. Nos tomamos en serio tu seguridad en línea y ofrecemos
                        opciones de pago seguras.</p>
                    <p><strong>¡Reserva Confirmada!</strong> Una vez que hayas completado el proceso de pago, tu reserva estará
                        asegurada. Recibirás todos los detalles necesarios para prepararte para tu estadía.</p>
                </div>
                <form action="/contacto" method="post" onSubmit={handleSubmit} className="formulario" class="row g-3 needs-validation">
                    <div class="col-md-4">
                        <label for="nombre" >Nombre</label>
                        <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} />
                    
                    </div>
                    <div class="mb-3">
                        <label for="email">Email address</label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange}requiredplaceholder="name@example.com" />
                    </div>

                    <div class="col-md-3">
                        <label for="tel">Tel</label>
                        <input type="text" name="telefono" value={formData.telefono} onChange={handleChange} placeholder="Telefono"  />
                       
                    </div>



                    <div class="col-12">
                        <div class="form-floating">
                            <textarea class="form-control" placeholder="Ingrese algun comentario"
                                name="mensaje" value={formData.mensaje} onChange={handleChange}></textarea>
                            <label for="mensaje">Commentarios</label>
                        </div>
                    </div>
                    <div class="col-12">
                        <button className="acciones" class="btn btn-primary" type="submit">Enviar</button>
                    </div>
                    {sending ? <p>Enviando...</p> : null}
                    {msg ? <p>{msg}</p> : null}

                </form>
            </div>
        </main>

    );
}



export default ContactoPage;

