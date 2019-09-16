import React from "react"
import { Col, Form, Button, Table, Pagination } from "react-bootstrap"
import { tickets } from "../DbTest/db"
import TicketDetail from "./TicketDetail"
import TicketImport from "./TicketImport"

class TicketList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showDetail: false,
      currentPage: 1,
      ticketsPerPage: 4,
      tickets: tickets,
      searchchannel: "",
      searchcode: "",
      searchphone: "",
      searchemail: "",
      searchimport: "",
      searchstatus: ""
    }
    this.handleClose = this.handleClose.bind(this)
    this.handleShow = this.handleShow.bind(this)
    this.pageHandleClick = this.pageHandleClick.bind(this)
    this.firstPage = this.firstPage.bind(this)
    this.previousPage = this.previousPage.bind(this)
    this.nextPage = this.nextPage.bind(this)
    this.lastPage = this.lastPage.bind(this)
  }

  handleClose() {
    this.setState({
      show: false
    })
  }

  handleShow() {
    this.setState({
      show: true
    })
  }

  pageHandleClick(e) {
    this.setState({
      currentPage: Number(e.target.id)
    })
  }

  firstPage() {
    this.setState({
      currentPage: 1
    })
  }

  previousPage() {
    if (this.state.currentPage > 1) 
    this.setState({
      currentPage: this.state.currentPage - 1
    })
  }

  nextPage() {
    if (this.state.currentPage < Math.ceil(tickets.length / this.state.ticketsPerPage))
    this.setState({
        currentPage: this.state.currentPage + 1
    })
  }

  lastPage() {
      this.setState({
          currentPage: Math.ceil(tickets.length / this.state.ticketsPerPage)
      })
  }

  render() {
    const currentPage = this.state.currentPage,
      ticketsPerPage = this.state.ticketsPerPage
    const indexOfLastTicket = currentPage * ticketsPerPage,
      indexOfFirstTicket = indexOfLastTicket - ticketsPerPage,
      currentTickets = tickets.slice(indexOfFirstTicket, indexOfLastTicket)

    const ticketsRender = currentTickets.map(ticket => {
      return (
        <>
          <tr>
            <td>{ticket.channel}</td>
            <td>{ticket.code}</td>
            <td>2019/09/10</td>
            <td>
              {ticket.name}-{ticket.phone}-{ticket.email}
            </td>
            <td>{ticket.address}</td>
            <td>{ticket.quatity}</td>
            <td>{ticket.total}</td>
            <td>{ticket.status}</td>
            <td>{ticket.tranfercode}</td>
            <td>
              <a href="#" onClick={this.handleShow}>
                Sửa
              </a>
            </td>
          </tr>
          <TicketDetail
            handleClose={this.handleClose}
            show={this.state.show}
            channel={ticket.channel}
            code={ticket.code}
            name={ticket.name}
            phone={ticket.phone}
            email={ticket.email}
            address={ticket.address}
            quantity={ticket.quatity}
            total={ticket.total}
            status={ticket.status}
          />
        </>
      )
    })
    // Page logic
    const pageNumbers = []
    for (let i = 1; i <= Math.ceil(tickets.length / ticketsPerPage); i++) {
      pageNumbers.push(i)
    }
    const renderPageNumbers = (
      <Pagination>
        <Pagination.First onClick={this.firstPage} />
        <Pagination.Prev onClick={this.previousPage} />
        {pageNumbers.map(number => {
          return (
            <Pagination.Item
              key={number}
              id={number}
              onClick={this.pageHandleClick}
              active={number === currentPage}
            >
              {number}
            </Pagination.Item>
          )
        })}
        <Pagination.Next onClick={this.nextPage} />
        <Pagination.Last onClick={this.lastPage} />
      </Pagination>
    )

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
          <tbody>{ticketsRender}</tbody>
        </Table>
        {renderPageNumbers}
      </div>
    )
  }
}

export default TicketList
