import React, { Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Table } from "react-bootstrap";
import EmployeeDetails from "./Employee";
import { Link, useNavigate } from "react-router-dom";
const Home = () => {
    let history = useNavigate()
    const handleEdit = (id,name,age) => {
localStorage.setItem("name", name);
localStorage.setItem("age", age);
localStorage.setItem("id", id);
    }
    const handleDelete = (id) => {
        let index = EmployeeDetails?.map((x, i) => x.id).indexOf(id)
        EmployeeDetails.splice(index, 1)
        history('/')
    }
    return (
        <Fragment>
            <div style={{ margin: "10rem" }}>
                {EmployeeDetails?.length > 0 && <><Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {EmployeeDetails?.map((x, i) => {
                            return (
                                <tr>
                                    <td>{x.name}</td>
                                    <td>{x.age}</td>
                                    <td>
                                        <Link to={'/edit'}>
                                            <Button onClick={() => handleEdit(x.id,x.name, x.age)}>Edit</Button>
                                        </Link> &nbsp;
                                        <Button onClick={() => handleDelete(x.id)}>Delete</Button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
                    <br />
                   
                </>
                }
                 <Link className="d-grid gap-2" to="/create">
                        <Button size="lg">Create</Button>
                    </Link>
                {EmployeeDetails?.length === 0 && "No Employee Details Found"}
            </div>
        </Fragment>
    );
};

export default Home;
