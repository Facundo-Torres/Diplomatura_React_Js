import React from 'react';
const DeptoPage = (props) => {
    return (
        <main>
            <div className="info2">
                <div className="titulo">
                    <h1>Departamentos - CABA</h1>

                </div>

                <div className="row row-cols-1 row-cols-md-2 g-4">
                    <div className="col">
                        <div className="card">
                            <img src={'https://facundo-torres.github.io/Diplomatura-Reactjs/Git-5-Proyecto-1/img/Depto-1.jpeg'} class="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Palermo</h5>
                                    <p className="card-text">Espacios Amplios y Luminosos: Nuestros espaciosos y luminosos alojamientos te darán la bienvenida con amplias ventanas que permiten la entrada de luz natural. Disfruta de un ambiente luminoso y relajante durante tu estancia.</p>
                                    <a href={'/'} className="btn btn-primary">Más información</a>
                                </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src={'https://facundo-torres.github.io/Diplomatura-Reactjs/Git-5-Proyecto-1/img/Depto-2.jpeg'}
                                className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Recoleta</h5>
                                    <p className="card-text">Cocina Totalmente Equipada: Prepara deliciosas comidas caseras en nuestra cocina completamente equipada, que incluye electrodomésticos modernos, utensilios de cocina y vajilla de calidad. Te sentirás como un chef profesional.</p>
                                    <a href={'/'} class="btn btn-primary">Más información</a>
                                </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src={'https://facundo-torres.github.io/Diplomatura-Reactjs/Git-5-Proyecto-1/img/Depto-3.jpeg'}
                                className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Tribunales</h5>
                                    <p className="card-text">Wi-Fi de Alta Velocidad: Mantente conectado en todo momento con nuestra conexión Wi-Fi de alta velocidad. Ya sea para trabajar, comunicarte con tus seres queridos o simplemente explorar en línea, estarás conectado sin problemas.</p>
                                    <a href={'/'}class="btn btn-primary">Más información</a>
                                </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src={'https://facundo-torres.github.io/Diplomatura-Reactjs/Git-5-Proyecto-1/img/Depto-4.jpeg"'}
                                className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Caballito</h5>
                                    <p className="card-text">Estacionamiento Seguro: Ofrecemos estacionamiento seguro para tu vehículo, brindándote tranquilidad durante tu estancia. Tu comodidad y seguridad son nuestra prioridad.</p>
                                    <a href={'/'} class="btn btn-primary">Más información</a>
                                </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="carouselExampleCaptions" class="carousel slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
                        aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                        aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                        aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={'https://facundo-torres.github.io/Diplomatura-Reactjs/Git-5-Proyecto-1/img/Carrusel-1.jpg'}
                            className="d-block w-100" alt="..."/>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Otras Imagenes</h5>
                                <p>Resumen del depto</p>
                            </div>
                    </div>
                    <div className="carousel-item">
                        <img src={'https://facundo-torres.github.io/Diplomatura-Reactjs/Git-5-Proyecto-1/img/Carrusel-1.jpg'}
                            className="d-block w-100" alt="..."/>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Segunda Imagen</h5>
                                <p>Resumen del depto.</p>
                            </div>
                    </div>
                    <div className="carousel-item">
                        <img src={'https://facundo-torres.github.io/Diplomatura-Reactjs/Git-5-Proyecto-1/img/Carrusel-1.jpg'}
                            className="d-block w-100" alt="..."/>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Tercera imagen</h5>
                                <p>Resumen del depto.</p>
                            </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Anterior</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Siguiente</span>
                </button>
            </div>
        </main>

    );
}
export default DeptoPage;