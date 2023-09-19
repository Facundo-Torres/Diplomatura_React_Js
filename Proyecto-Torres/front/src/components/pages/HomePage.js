import React from 'react';
import styles from '../styles/components/pages/HomePage.css'

const HomePage = (props) => {
    return (
        <main className="holder">
            <div className="container fs-3 mt-5">
                <p>Probando tamaño texto ....</p>
            </div>
            <div className="container mb-5">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione debitis ipsum nostrum architecto. Harumariatur provident nemo officiis ad inventore vitae, non reprehenderit sed consectetur nostrum eligendi, eocumque laboriosam!Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione debitis ipsumnostrum architecto. Harumpariatur provident nemo officiis ad inventore vitae, non reprehenderit sed consectetur nostrum eligendi, eos
                    cumque laboriosam!Lorem
                </p>
            </div>
            <div className="container text-center">
                <div className="row">
                    <div className="col-8">
                        <div className="card mb-3" style={{ maxwidth: 'auto' }}>
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src={'/public/Casa.png'} className="img-fluid rounded-start" alt="..." />
                                </div>
                                <div className="novedades col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">Novedades</h5>
                                        <p className="card-text">Se suma casa en palermo para 17 personasFamilias/empresas.</p>
                                        <p className="card-text"><small className="text-body-secondary">Agosto 2023</small>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-4 mb-5">
                    <div className="card text-bg-danger mb-3" style={{ maxWidth: '18rem' }}>
                        <div className="card-header">Lo más codiciado</div>
                        <div className="card-body">
                            <h5 className="card-title">Depto</h5>
                            <p className="card-text">Tribunales, a unos pasos del obelisco y teatros con renombre de la Ciudad
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="form1 col-8">
                    <form className="row g-3 needs-validation" novalidate>
                        <div className="col-md-4">
                            <label for="validationCustom01" className="form-label">Nombre</label>
                            <input type="text" className="form-control" id="validationCustom01" value="Facundo" required />
                            <div className="valid-feedback">
                                Looks good!
                            </div>
                        </div>
                        <div className="col-md-4">
                            <label for="validationCustom02" class="form-label">Apellido</label>
                            <input type="text" className="form-control" id="validationCustom02" value="Torres" required />
                            <div className="valid-feedback">Looks good!</div>
                        </div>
                        <div className="col-md-4">
                            <label for="validationCustomUsername" class="form-label">Usuario</label>
                            <div className="input-group has-validation">
                                <span className="input-group-text" id="inputGroupPrepend">@</span>
                                <input type="text" className="form-control" id="validationCustomUsername"
                                    aria-describedby="inputGroupPrepend" required />
                                <div className="invalid-feedback">
                                    Please choose a username.
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <label for="validationCustom03" className="form-label">Ciudad</label>
                            <input type="text" className="form-control" id="validationCustom03" required />
                            <div className="invalid-feedback">
                                Coloque en que Ciudad vive
                            </div>
                        </div>
                        <div className="col-md-3">
                            <label for="validationCustom04" className="form-label">Estado</label>
                            <select class="form-select" id="validationCustom04" required>
                                <option selected disabled value="">Elija...</option>
                                <option>...</option>
                            </select>
                            <div className="invalid-feedback">Seleccionar Estado</div>
                        </div>
                        <div className="col-md-3">
                            <label for="validationCustom05" className="form-label">Zip</label>
                            <input type="text" className="form-control" id="validationCustom05" required />
                            <div className="invalid-feedback">Valide su codigo postal</div>
                        </div>
                        <div className="col-12">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required />
                                <label className="form-check-label" for="invalidCheck">
                                    Estoy de acuerdo con las condiciones
                                </label>
                                <div className="invalid-feedback">
                                    Tienes que aceptar para continuar
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <button className="btn btn-primary" type="submit">Enviar</button>
                        </div>
                    </form>
                </div>
                <div className="card2 col-4">
                    <div className="card" style={{ width: '18rem' }}>
                        <div className="card-body">
                            <h5 className="card-title">Recoleta</h5>
                            <p className="card-text">El depto más alquilado, por </p>
                            <div className="mapa">
                                <iframe title="Mapa"
                                    src={"https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d4644.691635877368!2d-58.38829110797576!3d-34.596752971622436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sar!4v1692025450765!5m2!1ses-419!2sar"}
                                    width={"250"}
                                    height={"auto"}
                                    style={{ border: "0" }}
                                    loading={"lazy"}
                                    referrerpolicy={"no-referrer-when-downgrade"}
                                ></iframe>
                            </div>
                            <a href={'/'} className='btn btn-primary'>Listado completo</a>
                        </div>
                    </div>
                </div>

            </div>
        </main >
    );
}
export default HomePage;