import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Ciudadanos() {
    const [user, setUser] = useState([])
    useEffect( ()=>{
        axios.get('https://localhost:7128/api/Users')
        .then(res => setUser(res.data))
        .catch(err => console.log(err))
    }, [])

  return (
    <div className="d-flex vh-100 justify-content-center align-items-center">
      <div className="w-100 bg-white rounded p-3">
        <Link to='/create' className="btn btn-success">Crear Usuario +</Link>
        <table class="table table-bordered">
          <thead>
            <tr>
              <th scope="col">Tipo Documento</th>
              <th scope="col">Cedula</th>
              <th scope="col">Nombres</th>
              <th scope="col">Apellidos</th>
              <th scope="col">Fecha de nacimiento</th>
              <th scope="col">Profesion</th>
              <th scope="col">Aspiracion salarial</th>
              <th scope="col">Correo Electronico</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {
                user.map( (data, i)=>(
                    <tr key={i}>
                        <td>data.typeId</td>
                        <td>data.userIdentification</td>
                        <td>data.userName</td>
                        <td>data.userLastName</td>
                        <td>data.userBirthday</td>
                        <td>data.userProfession</td>
                        <td>data.userSalary</td>
                        <td>data.userEmail</td>
                        <td>
                            <button className="btn btn-primary">Editar</button>
                            <button className="btn btn-danger">Eliminar</button>
                        </td>
                    </tr>
                ) )   
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Ciudadanos;
