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
                <form onSubmit={handleSubmit(onSubmit)} className='contact-form'>
                    <div class="form-header">
                        <h1>Contáctanos</h1>
                    </div>

                    <div className="form-group">
                        <input type="text" {...register('name', { required: true })} placeholder='Oliver' />
                        <label for="nombre">Nombre</label>
                        <span className="focus-border"></span>
                    </div>

                    <div className="form-group">
                        <input type="email" {...register('email', { required: true })} placeholder='tucorreo@example.com' />
                        <label for="email">Email</label>
                        <span className="focus-border"></span>
                    </div>

                    <div className="form-group">
                        <textarea {...register('message', { required: true })} placeholder='Hola buenas tardes...'></textarea>
                        <label for="mensaje">Mensaje</label>
                        <span class="focus-border"></span>
                    </div>

                    <button class="submit-btn" type="submit">
                        <span class="btn-text">Enviar</span>
                        <span class="btn-icon">
                            <svg viewBox="0 0 24 24" width="24" height="24">
                                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"></path>
                            </svg>
                        </span>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default App;