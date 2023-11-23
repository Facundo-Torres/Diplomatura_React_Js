import React from 'react';
import "../styles/components/pages/CasasPage.css";

const CasasPage = (props) => {
    return (
        <main>
            <div className="info2">
                <div className="titulo">
                    <h1>CASAS - CABA</h1>
                </div>

                <div className="row row-cols-1 row-cols-md-2 g-4">
                    <div className="col">
                        <div className="card">
                            <img src={"https://facundo-torres.github.io/Diplomatura-Reactjs/Git-5-Proyecto-1/img/Casa-1.jpeg"}
                                className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Palermo</h5>
                                <p className="card-text">Terraza Privada con Vistas Panorámicas: Disfruta de impresionantes vistas panorámicas desde tu propia terraza privada. Ya sea para tomar un café matutino o disfrutar de una cena al aire libre, este espacio te cautivará.</p>
                                <a href={'/'} className="btn btn-primary">Más información</a>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src={"https://facundo-torres.github.io/Diplomatura-Reactjs/Git-5-Proyecto-1/img/Casa-2.jpeg"}
                                class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Recoleta</h5>
                                <p class="card-text">Gimnasio de Primera Clase: Mantén tu rutina de ejercicios incluso durante tus vacaciones. Nuestro gimnasio de primera clase está equipado con máquinas modernas y pesas para satisfacer todas tus necesidades de fitness.</p>
                                <a href={'/'} class="btn btn-primary">Más información</a>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src={"https://facundo-torres.github.io/Diplomatura-Reactjs/Git-5-Proyecto-1/img/Casa-3.jpeg"}
                                class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Tribunales</h5>
                                <p class="card-text">Zona de Entretenimiento Multimedia: Relájate y diviértete en nuestra zona de entretenimiento multimedia, equipada con televisores de pantalla plana, sistemas de sonido envolvente y acceso a servicios de streaming. Las noches de películas serán inolvidables.</p>
                                <a href={'/'} class="btn btn-primary">Más información</a>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src={"https://facundo-torres.github.io/Diplomatura-Reactjs/Git-5-Proyecto-1/img/Casa-4.jpeg"}
                                class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Caballito</h5>
                                <p class="card-text">Terraza Privada con Vistas Panorámicas: Disfruta de impresionantes vistas panorámicas desde tu propia terraza privada. Ya sea para tomar un café matutino o disfrutar de una cena al aire libre, este espacio te cautivará.</p>
                                <a href={'/'} class="btn btn-primary">Más información</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="carouselExampleCaptions" className="carousel slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
                        aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                        aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                        aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div class="carousel-item active">
                        <img src={"https://facundo-torres.github.io/Diplomatura-Reactjs/Git-5-Proyecto-1/img/Carrusel-1.jpg"}
                            class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Otras Imagenes</h5>
                            <p>Resumen del depto</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={"https://facundo-torres.github.io/Diplomatura-Reactjs/Git-5-Proyecto-1/img/Carrusel-1.jpg"}
                            class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Segunda Imagen</h5>
                            <p>Resumen del depto.</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={"https://facundo-torres.github.io/Diplomatura-Reactjs/Git-5-Proyecto-1/img/Carrusel-1.jpg"}
                            class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
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

export default CasasPage;
