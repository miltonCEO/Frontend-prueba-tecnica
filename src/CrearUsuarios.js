import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CrearUsuarios() {

    const [type, setType] = useState('')
    const [identification, setIdentification] = useState('')
    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [birthday, setBirthday] = useState('')
    const [profesion, setProfesion] = useState('')
    const [salary, setSalary] = useState('')
    const [email, setEmail] = useState('')
    const navigate = useNavigate()
    
    function handleSubmit(event){
        event.preventDefault();
        const body = {
            "typeId": type,
            "userIdentification": identification,
            "userName": name,
            "userLastName": lastName,
            "userBirthday": birthday,
            "userProfession": profesion,
            "userSalary": salary,
            "userEmail": email,
        }
        axios.post('https://localhost:7128/api/Users',
        body).then(res => {
            console.log(res)
            navigate('/')
        }).catch(error => console.log(error))
    }

    return(
        <div className="d-flex" style={{ marginTop: '25px' }}>
            <div className="w-100 bg-white rounded">
                <form onSubmit={handleSubmit}>
                    <h5>Crear Usuario</h5>
                    <div className="row">
                        <div className="col">
                            <label>Tipo Documento</label>
                            <input type="text" className="form-control" placeholder="Tipo Documento"
                            onChange={e => setType(e.target.value)}/>
                        </div>
                        <div className="col">
                            <label>Cedula</label>
                            <input type="text" className="form-control" placeholder="Cedula"
                            onChange={e => setIdentification(e.target.value)}/>
                        </div>
                        <div className="col">
                            <label>Nombres</label>
                            <input type="text" className="form-control" placeholder="Nombres"
                            onChange={e => setName(e.target.value)}/>
                        </div>                        
                    </div>
                    <div className="row mt-80">
                        <div className="col">
                            <label>Apellidos</label>
                            <input type="text" className="form-control" placeholder="Apellidos"
                            onChange={e => setLastName(e.target.value)}/>
                        </div>
                        <div className="col">
                            <label>Fecha de Nacimiento</label>
                            <input type="text" className="form-control" placeholder="Fecha de Nacimiento"
                            onChange={e => setBirthday(e.target.value)}/>
                        </div>
                        <div className="col">
                            <label>Profesion</label>
                            <input type="text" className="form-control" placeholder="Profesion"
                            onChange={e => setProfesion(e.target.value)}/>
                        </div>                        
                    </div>
                    <div className="row mt-80">
                        <div className="col">
                            <label>Aspiracion Salarial</label>
                            <input type="text" className="form-control" placeholder="Aspiracion Salarial"
                            onChange={e => setSalary(e.target.value)}/>
                        </div>
                        <div className="col">
                            <label>Correo Electronico</label>
                            <input type="text" className="form-control" placeholder="Correo Electronico"
                            onChange={e => setEmail(e.target.value)}/>
                        </div>
                        <div className="col">
                            <button className="btn btn-success" style={{ marginTop: '25px' }}>Guardar</button>
                        </div>                    
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CrearUsuarios