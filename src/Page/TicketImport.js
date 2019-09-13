import React from "react"
import { Button, Table } from "react-bootstrap"

const TicketImport = props => {
  return (
    <div className="container">
      <h1>Quản lý import vé</h1>
      <div>
        <Button variant="primary" style={{ margin: "2rem"}}>Import Utop</Button>
        <Button variant="primary" style={{ margin: "2rem"}}>Import TicketGo</Button>
        <Button variant="primary" style={{ margin: "2rem"}}>Import TicketBox</Button>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Ngày Import</th>
            <th>Tên file</th>
            <th>Kênh bán</th>
            <th>Số lượng đơn</th>
            <th>Tổng tiền</th>
            <th>Thao tác</th>
          </tr>
        </thead>
        <tbody></tbody>
      </Table>
    </div>
  )
}

export default TicketImport
