import React from 'react';

const NovedadItem = (props) => {
    const { depto, ambientes, cochera, body} = props;

    return (
        <div className="novedades">
            <h1>{depto}</h1>
            <h2>{ambientes}</h2>
            <h2>{cochera}</h2>
            <div dangerouslySetInnerHTML={{__html: body}}/>
            <hr />
        </div>
    );
}


export default NovedadItem;
 