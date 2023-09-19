import React from 'react';

const EmpresaPage = (props) => {
    return (
        <main>
            <div class="container fs-3 mt-5">
                <p>Comienzos.... titulo de la descripcion</p>
            </div>
            <div class="container mb-5">
                <p> IMPORTANTE </p>
                <p>Informacion importante...Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione debitis ipsum nostrum architecto. Harum pariatur provident nemo officiis ad inventore vitae, non reprehenderit sed consectetur nostrum eligendi, eos cumque laboriosam!Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione debitis ipsum nostrum architecto. Harum pariatur provident nemo officiis ad inventore vitae, non reprehenderit sed consectetur nostrum eligendi, eos cumque laboriosam!Lorem</p> 
                <div class="grupo">
                    <img src={'/public/equipo.jpg'} class="img-fluid" alt="Grupal" />
                </div>
            </div>
        </main>
    );
}
export default EmpresaPage;