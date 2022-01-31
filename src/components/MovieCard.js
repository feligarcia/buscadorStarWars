import React from 'react'


export const MovieCard = ({
    id,
    name,
    image
}) => {
    return (
        <div>
            <div id={id} className="card ms-3 animate__animated animate__fadeIn" style={{ maxWidth: 540 }}>
                
                    <div className="col-md-4">
                        <img src={image} className="card-img" alt={name} />
                    </div>
                    
                        <div className="card-body">
                            <h5 className="card-title">{name}</h5>
                        </div>

                   
               
            </div>
        </div>
    )
}
