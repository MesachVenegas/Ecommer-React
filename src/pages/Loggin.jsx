import axios from 'axios';
import { Form, Button } from 'react-bootstrap'
import { Navigate, useNavigate } from 'react-router';
import { useForm } from 'react-hook-form';

const Loggin = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } =  useForm();

    const submit = data =>{
        axios.post('https://e-commerce-api-v2.academlo.tech/api/v1/users/login', data)
            .then(res => {
                localStorage.setItem('token', res.data.token)
                navigate('/')
            })
            .catch( error => {
                if (error.response.status === 401){
                    alert('Correo o contraseña incorrectos.')
                }
                console.error(error)
            })
    }

    return (
        <>
            <div className='loggin'>
                <Form className='loggin_card' onSubmit={ handleSubmit(submit) }>
                    <h2>Loggin</h2>
                    <div className="userExample">
                        <p>User: john@gmail.com</p>
                        <p>Password: john1234</p>
                    </div>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter email"
                            {...register('email', { required: true })}
                        />
                        {errors.email && <span className='text-danger'>This field is required</span>}
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            {...register('password', { required: true })}
                        />
                        {errors.password && <span className='text-danger'>This field is required</span>}
                    </Form.Group>
                    <div className='btn_container'>
                        <Button className='btn_loggin' variant="danger" type="submit">
                            Log in
                        </Button>
                    </div>
                </Form>
            </div>
        </>
    );
};

export default Loggin;