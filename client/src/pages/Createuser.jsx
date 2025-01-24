import { useState } from "react";
import { Form, Button, Card, InputGroup } from "react-bootstrap";

const CreateUser = () => {
    const [input,setInput]=useState({});
    const handleInput=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setInput(values=>({...values,[name]:value}));
        console.log(input)
    }
    return (
        <>
            <div
                className="d-flex justify-content-center align-items-center vh-80"
             >
                <Card
                    className="p-4 shadow"
                    style={{
                        width: "100%",
                        maxWidth: "400px",
                        borderRadius: "10px",
                        // boxShadow: "20px 20px 20px grey"
                        transform: "scale(1.0)"
                       
                    }}>
                    <h2 className="text-center mb-2">Create New Employee</h2>
                    <Form>
                        <Form.Group className="mb-3" controlId="formUsername" >
                            <Form.Label className="fw-bold"> Employee Name</Form.Label>
                            <InputGroup>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter Employee Name"
                                    name="name" value={input.name} onChange={handleInput}/>
                            </InputGroup>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formUsername" >
                            <Form.Label className="fw-bold">  Employee Email</Form.Label>
                            <InputGroup>  
                                <Form.Control
                                    type="text"
                                    placeholder=" Enter Employee Email"
                                    name="email" value={input.email} onChange={handleInput}/>
                            </InputGroup>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formUsername" >
                            <Form.Select aria-label="Default select example"  name="designation" value={input.designation} onChange={handleInput}>
                                <option>Choose Designation</option>
                                <option value="Frontend">Frontend </option>
                                <option value="Backend">Backend</option>
                                <option value="Python">Python</option>
                                <option value="Java">Java</option>
                                <option value="Graphic Designer">Graphic Designer</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formPassword">
                            <Form.Label className="fw-bold"> Employee Password</Form.Label>
                            <InputGroup>   
                                <Form.Control
                                    type="password"
                                    placeholder="Enter Employee password"
                                    name="password" value={input.password} onChange={handleInput} />
                            </InputGroup>
                        </Form.Group>
                        <Button
                            variant="primary"
                            className="w-100"
                            type="button"
                            style={{
                                background: "linear-gradient(to right, #8e44ad, #3498db)",
                                border: "none",
                            }}>
                            Login
                        </Button>
                    </Form>
                </Card>
            </div>
        </>
    )
}
export default CreateUser;