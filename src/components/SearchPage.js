import React from 'react';
import { Table, Container, Row, Col, InputGroup, FormControl } from 'react-bootstrap';

const SearchPage = () => {
    return(
        <Container>
            <Row>
                <Col className="input-group search-form">
                    <span>Search:</span>
                    <input className="form-control" type="text" placeholder="Search"/>
                </Col>
                <Col>
                    <span>Chon: </span>
                    <input className="form-control" type="checkbox" />
                </Col>
                <Col></Col>
            </Row>
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    </tr>
                    <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    </tr>
                </tbody>
            </Table>
        </Container>
    )
}

export default SearchPage;