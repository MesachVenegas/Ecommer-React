import { Form, Button, Container } from 'react-bootstrap'
import { useForm } from 'react-hook-form';

const Loggin = () => {
    const { register, handleSubmit, formState: { errors } } =  useForm();
    const submit = data => console.log(data);

    return (
        <>
            <Container className='d-flex justify-content-center align-items-center py-4'>
                <Form onSubmit={ handleSubmit(submit) }>
                    <h2>Loggin</h2>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            laceholder="Enter email"
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
                    <Container className='d=flex  align-items-center justify-content-center'>
                        <Button variant="danger" type="submit">
                            Log in
                        </Button>
                    </Container>
                </Form>
            </Container>
        </>
    );
};

export default Loggin;