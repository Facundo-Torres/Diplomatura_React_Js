import React from 'react';
const DeptoPage = (props) => {
    return (
        <main>
            <div class="info2">
                <div class="titulo">
                    <h1>Departamentos - CABA</h1>

                </div>

                <div class="row row-cols-1 row-cols-md-2 g-4">
                    <div class="col">
                        <div class="card">
                            <img src={'https://facundo-torres.github.io/Diplomatura-Reactjs/Git-5-Proyecto-1/img/Depto-1.jpeg'} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Palermo</h5>
                                    <p class="card-text">Espacios Amplios y Luminosos: Nuestros espaciosos y luminosos alojamientos te darán la bienvenida con amplias ventanas que permiten la entrada de luz natural. Disfruta de un ambiente luminoso y relajante durante tu estancia.</p>
                                    <a href={'/'} class="btn btn-primary">Más información, este boton redirigirá a una landing de cada inmueble en particular con todo sus datos y galeria de fotos etc.</a>
                                </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src={'https://facundo-torres.github.io/Diplomatura-Reactjs/Git-5-Proyecto-1/img/Depto-2.jpeg'}
                                class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Recoleta</h5>
                                    <p class="card-text">Cocina Totalmente Equipada: Prepara deliciosas comidas caseras en nuestra cocina completamente equipada, que incluye electrodomésticos modernos, utensilios de cocina y vajilla de calidad. Te sentirás como un chef profesional.</p>
                                    <a href={'/'} class="btn btn-primary">Más información</a>
                                </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src={'https://facundo-torres.github.io/Diplomatura-Reactjs/Git-5-Proyecto-1/img/Depto-3.jpeg'}
                                class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Tribunales</h5>
                                    <p class="card-text">Wi-Fi de Alta Velocidad: Mantente conectado en todo momento con nuestra conexión Wi-Fi de alta velocidad. Ya sea para trabajar, comunicarte con tus seres queridos o simplemente explorar en línea, estarás conectado sin problemas.</p>
                                    <a href={'/'}class="btn btn-primary">Más información</a>
                                </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src={'https://facundo-torres.github.io/Diplomatura-Reactjs/Git-5-Proyecto-1/img/Depto-4.jpeg"'}
                                class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Caballito</h5>
                                    <p class="card-text">Estacionamiento Seguro: Ofrecemos estacionamiento seguro para tu vehículo, brindándote tranquilidad durante tu estancia. Tu comodidad y seguridad son nuestra prioridad.</p>
                                    <a href={'/'} class="btn btn-primary">Más información</a>
                                </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="carouselExampleCaptions" class="carousel slide">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
                        aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                        aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                        aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={'https://facundo-torres.github.io/Diplomatura-Reactjs/Git-5-Proyecto-1/img/Carrusel-1.jpg'}
                            class="d-block w-100" alt="..."/>
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Otras Imagenes</h5>
                                <p>Resumen del depto</p>
                            </div>
                    </div>
                    <div class="carousel-item">
                        <img src={'https://facundo-torres.github.io/Diplomatura-Reactjs/Git-5-Proyecto-1/img/Carrusel-1.jpg'}
                            class="d-block w-100" alt="..."/>
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Segunda Imagen</h5>
                                <p>Resumen del depto.</p>
                            </div>
                    </div>
                    <div class="carousel-item">
                        <img src={'https://facundo-torres.github.io/Diplomatura-Reactjs/Git-5-Proyecto-1/img/Carrusel-1.jpg'}
                            class="d-block w-100" alt="..."/>
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Tercera imagen</h5>
                                <p>Resumen del depto.</p>
                            </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Anterior</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Siguiente</span>
                </button>
            </div>
        </main>

    );
}
export default DeptoPage;