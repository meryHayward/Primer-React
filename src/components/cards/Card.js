import React from 'react';
import img from './ciencias.svg';
import img2 from './nanotecnologia.svg';
import img3 from './tubo-de-ensayo.svg';

import './card.scss';

const Services = () => {
    return (
        <div className="container-Services">
            <figure>
                <img src={img} />
                <figcaption>
                    <p>Ciencia</p>
                </figcaption>
            </figure>
            <figure>
                <img src={img2} />
                <figcaption>
                    <p>Nanotecnologia</p>
                </figcaption>
            </figure>
            <figure>
                <img src={img3} />
                <figcaption>
                    <p>Ensayos Clinicos</p>
                </figcaption>
            </figure>
        </div>
    );
}

export default Services;