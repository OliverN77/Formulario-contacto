// Importaciones necesarias
import React from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import '../assets/styles/ContactForm.css';

const App = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = async (data) => {
        try {
            await axios.post('http://localhost:3000/send', data);
            alert('Se envió el email correctamente 👍✅');
            reset();
        } catch (error) {
            alert('Error no se puedo enviar el email 🖐❌');
        }
    };

    return (
        <div className="App">
            <div className="form-container"> 
            <h1>Contacto</h1>

            <form onSubmit={handleSubmit(onSubmit)} className='form'>
                    <label>Nombre:</label>
                    <input type="text" {...register('name', { required: true })} placeholder='Oliver'/>
                    
                    <label>Email:</label>
                    <input type="email" {...register('email', { required: true })} placeholder='tucorreo@example.com'/>

                    <label>Mensaje:</label>
                    <textarea {...register('message', { required: true })} placeholder='Hola buenas tardes...'></textarea>
                <button type="submit">Enviar</button>
            </form>
        </div>
        </div>
    );
};

export default App;