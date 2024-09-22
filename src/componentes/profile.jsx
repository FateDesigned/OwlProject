import React from "react";



// codigo
function Perfil() {
    return (
        <div>
            <div className="Perfil">
                <div className="row">
                    <div className="col">
                        <nav aria-label="breadcrumb" className="bg-light rounded-3 p-3 mb-4">
                            <ol className="breadcrumb mb-0">
                                <li className="breadcrumb-item active" aria-current="page">Perfil</li>
                                <li className="breadcrumb-item"><a href="ajustes.html">Ajustes</a></li>

                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4">
                    <div className="card mb-4">
                        <div className="card-body text-center">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar"
                                className="rounded-circle img-fluid" >
                            </img>
                            <h5 className="my-3">Alejando Mendoza Uribe </h5>
                            <p className="text-muted mb-4">Medellin, Antioquia</p>
                            <div className="d-flex justify-content-center mb-2">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-4 mb-lg-0">
                <div className="card-body p-0">
                    <ul className="list-group list-group-flush rounded-3">
                        <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                        </li>
                        <i className="fas fa-globe fa-lg text-warning"></i>
                    </ul>
                </div>
            </div>
            <div className="col-lg-8">
                <div className="card mb-4">

                    <div className="card-body">

                        <div className="row">

                            <div className="col-sm-3">

                                <p className="mb-0">Usuario</p>
                            </div>
                            <div className="col-sm-9">
                                <p className="text-muted mb-0">Alejandro Uribe</p>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-sm-3">
                            <p className="mb-0">Correo Electronico</p>
                        </div>
                        <div className="col-sm-9">
                            <p className="text-muted mb-0">example@example.com</p>
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-sm-3">
                            <p className="mb-0">número de teléfono</p>
                        </div>
                        <div className="col-sm-9">
                            <p className="text-muted mb-0">3126416243</p>
                        </div>
                    </div>
                    <hr />
                    <div className="row">

                    </div>
                </div>



            </div>
        </div>
            )
}
            export default Perfil;