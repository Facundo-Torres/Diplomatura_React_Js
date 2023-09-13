import React from 'react';
const HomePage = (props) => {
    return (
        <main class="holder">
            <div>
                <img src="img/avion.jpg" alt="avion"/>

            </div>
            <div class="columnas">
                <section class="bienvenidos">
                    <h2>Bienvenidos</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime eaque ea doloribus ullam nemo non vero vitae. Odio veritatis repellendus animi eos, mollitia ea adipisci omnis nisi, iure iste vitae.
                    </p>
                </section>
                <section class="testimonios">
                    <h2>Testimonios</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, consequatur</p>
                    <div class="testimonio">
                        <span class="cita">Simplemente Excelente</span>
                        <span class="autor">Juan Gomez - zapatos.com</span>
                    </div>
                </section>
            </div>

        </main>




    );
}
export default HomePage;