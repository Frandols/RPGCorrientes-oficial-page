import React from 'react'

export default function Card({title, image, description, date}) {
    return (
        <div className="card mb-3" style={{maxWidth: 540}}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={image} className="img-fluid rounded-start" alt="RPG Imagenes - RPG Corrientes" />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-muted">{date}</small></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
