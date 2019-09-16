import React from 'react';
import { Col, Form, Button, Table, Pagination } from 'react-bootstrap';
import { tickets } from '../DbTest/db';

class TicketList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tickets: tickets,
            searchchannel: '',
            searchcode: '',
            searchphone: '',
            searchemail: '',
            searchimport: '',
            searchstatus: ''
        }
    }

    render() {
        const TicketArray = tickets.map(ticket=>{
            return (
                <tr>
                    <td>{ticket.channel}</td>
                    <td>{ticket.code}</td>
                    <td>2019/09/10</td>
                    <td>{ticket.name}-{ticket.phone}-{ticket.email}</td>
                    <td>{ticket.address}</td>
                    <td>{ticket.quatity}</td>
                    <td>{ticket.total}</td>
                    <td>{ticket.status}</td>
                    <td>{ticket.tranfercode}</td>
                    <td><a href="#">Sửa</a></td>
                </tr>
            )
        })
        return (
            <div className="container">
                <h1>Danh sách vé bán</h1>
                <Form>
                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Control as="select">
                                <option>Kênh bán</option>
                                <option>...</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Control type="text" placeholder="Mã đơn" />
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Control type="number" placeholder="Số điện thoại" />
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Control type="email" placeholder="Email" />
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Control as="select">
                                <option>File Import</option>
                                <option></option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Control as="select">
                                <option>Trạng thái</option>
                                <option>Chưa thanh toán</option>
                                <option>Đã thanh toán</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Button variant="primary" type="submit">
                                Tìm kiếm
                            </Button>
                        </Form.Group>
                    </Form.Row>
                </Form>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Kênh bán</th>
                            <th>Mã đơn</th>
                            <th>Ngày mua</th>
                            <th>Tên khách hàng-SĐT-Email</th>
                            <th>Địa chỉ</th>
                            <th>Các vé</th>
                            <th>Tổng tiền</th>
                            <th>Trạng thái</th>
                            <th>Mã giao dịch</th>
                            <th>Thao tác</th>
                        </tr>
                    </thead>
                    <tbody>
                        {TicketArray}
                    </tbody>
                </Table>
                <Pagination>
                    <Pagination.First />
                    <Pagination.Prev />
                    <Pagination.Item active>1</Pagination.Item>
                    <Pagination.Item>2</Pagination.Item>
                    <Pagination.Ellipsis />
                    <Pagination.Item>20</Pagination.Item>
                    <Pagination.Next />
                    <Pagination.Last />
                </Pagination>
            </div>
        )
    }
}

export default TicketList;