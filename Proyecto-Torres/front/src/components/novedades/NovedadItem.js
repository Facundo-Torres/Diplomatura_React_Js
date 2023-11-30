import React from 'react';

const NovedadItem = (props) => {
    const { depto, ambientes, cochera, body } = props;

    return (
        <div className="novedades" >
            <hr />
            <div class="row g-0 justify-content-center">
                <div class="col-sm-6 mb-3 mb-sm-0">

                    <div class="card w-70 text-center">
                        <div class="card-header text-bg-primary mb-3">


                            <h2>Zona: {depto}</h2>
                        </div>
                        <div class="card-body">

                            <h2 class="card-title">Ambientes: {ambientes}</h2>
                            <h2>Tiene Cochera: {cochera}</h2>
                            <div dangerouslySetInnerHTML={{ __html: body }} />
                            <hr />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default NovedadItem;
