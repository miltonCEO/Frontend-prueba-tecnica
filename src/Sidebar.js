import React from "react";
import './style.css'


function Sidebar(){
    return (
        <div className='bg-white sidebar p-2'>
            <div className='m-2'>
                <i className='bi bi-bootstrap-fill me-3 fs-4'></i>
                <span className='brand-name fs-6'>Bolsa Empleo</span>
            </div>
            <hr className='text-dark' />
            <div className='list-group list-group-flush'>
                
                <a className='list-group-item py-2 my-1'>
                    <i className='bi bi-house fs-8 me-3'></i>
                    <span className='fs-7'>Home</span>
                </a>
                <a className='list-group-item py-2'>
                    <i className='bi bi-people fs-8 me-3'></i>
                    <span className='fs-7'>Crear Usuarios</span>
                </a>
                <a className='list-group-item py-2'>
                    <i className='bi bi-table fs-8 me-3'></i>
                    <span className='fs-7'>Administrar Usuarios</span>
                </a>
                <a className='list-group-item py-2'>
                    <i className='bi bi-clipboard-data fs-8 me-3'></i>
                    <span className='fs-7'>Vacantes</span>
                </a>
            </div>            
        </div>
        
    )
}

export default Sidebar