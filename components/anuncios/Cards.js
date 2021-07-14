import React from 'react';
import anuncios from '../../anuncios.json';
import Card from './Card';

export default function Cards() {
    if(anuncios.length > 0){
        return (
            <div className="anuncios-wrapper">
                { anuncios.map(anuncio => (
                    <Card title={anuncio.title} image={anuncio.image} description={anuncio.description} date={anuncio.date} key={anuncio.id} />
                )) }
            </div>
        );
    }
    else{
        return (
            <p className="text-center">
                No hay anuncios actualmente...
            </p>
        );
    }
}
