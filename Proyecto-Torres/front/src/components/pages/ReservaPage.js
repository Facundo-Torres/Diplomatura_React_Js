import React from 'react';
import "../styles/components/pages/ReservaPage.css"

const ReservaPage = (props) => {
    return (
        <body>
        <main>
        <div class="bienvenida">
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
        <form class="row g-3 needs-validation" novalidate>
            <div class="col-md-4">
                <label for="validationForm01" class="form-label">Nombre</label>
                <input type="text" class="form-control" id="validationForm01" value="Ingrese su nombre" required/>
                <div class="valid-feedback">
                    Se ve bien!
                </div>
            </div>
            <div class="col-md-4">
                <label for="validationForm02" class="form-label">Apellido</label>
                <input type="text" class="form-control" id="validationForm02" value="Ingrese su apellido" required/>
                <div class="valid-feedback">
                    Se ve bien!
                </div>
            </div>

            <div class="col-md-6">
                <label for="validationForm03" class="form-label">Ciudad</label>
                <input type="text" class="form-control" id="validationForm03" required/>
                <div class="invalid-feedback">
                    Ingrese la Ciudad donde vive
                </div>
            </div>
            <div class="col-md-3">
                <label for="validationForm04" class="form-label">Provincia</label>
                <select class="form-select" id="validationForm04" required>
                    <option selected disabled value="">Elija...</option>
                    <option>Buenos Aires</option>
                    <option>Catamarca</option>
                    <option>Chaco</option>
                    <option>Chubut</option>
                    <option>Córdoba</option>
                    <option>Corrientes</option>
                    <option>Entre Ríos</option>
                    <option>Formosa</option>
                    <option>Jujuy</option>
                    <option>La Pampa</option>
                    <option>La Rioja</option>
                    <option>Mendoza</option>
                    <option>Misiones</option>
                    <option>Neuquén</option>
                    <option>Río Negro</option>
                    <option>Salta</option>
                    <option>San Juan</option>
                    <option>San Luis</option>
                    <option>Santa Cruz</option>
                    <option>Santa Fe</option>
                    <option>Santiago del Estero</option>
                    <option>Tierra del Fuego</option>
                    <option>Tucumán</option>
                </select>
                <div class="invalid-feedback">
                    Seleccione una provincia.
                </div>
            </div>
            <div class="col-md-3">
                <label for="validationForm05" class="form-label">Tel</label>
                <input type="text" class="form-control" id="validationForm05" required/>
                <div class="invalid-feedback">
                    Por favor ingrese un telefono de contacto.
                </div>
            </div>
            <div class="col-md-6">
                <label for="validationDesde1" class="form-label">Fecha Desde</label>
                <input type="date" class="form-control" id="validationDesde1" required/>
                <div class="invalid-feedback">
                    Por favor ingrese fecha desde cuando quiere reservar
                </div>
            </div>
            <div class="col-md-6">
                <label for="validationHasta1" class="form-label">Fecha Hasta</label>
                <input type="date" class="form-control" id="validationHasta1" required/>
                <div class="invalid-feedback">
                    Por favor ingrese fecha hasta cuando quiere reservar
                </div>
            </div>

            <div class="col-12">
                <div class="form-floating">
                    <textarea class="form-control" placeholder="Ingrese algun comentario"
                        id="floatingTextarea"></textarea>
                    <label for="floatingTextarea">Commentarios</label>
                </div>
            </div>
            <div class="col-12">
                <button class="btn btn-primary" type="submit">Enviar</button>
            </div>
        </form>
        

    </main>
        </body>
    );
}
export default ReservaPage;