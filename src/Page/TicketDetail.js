import React from "react"
import { Modal, Form, Button } from "react-bootstrap"

class TicketDetail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      status: "Đã thanh toán"
    }
    this.selectOnchangeHandle = this.selectOnchangeHandle.bind(this)
  }

  selectOnchangeHandle(e) {
    this.setState({
      status: e.target.value
    })
  }

  render() {
    return (
      <>
        <Modal
          show={this.props.show}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          onHide={this.props.handleClose}
        >
          <Modal.Header closeButton>
            <Modal.Title>Chi tiết vé</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              <p className="col-6">Kênh bán: {this.props.channel}</p>
              <p className="col-6">Mã đơn: {this.props.code}</p>
            </div>
            <div className="row">
              <p className="col-6">Ngày mua bán: 20/09/2019</p>
              <p className="col-6">File Import: Utop_2019_09_29.csv</p>
            </div>
            <p>Số tiền: {this.props.total}</p>
            <p>Các loại vé: {this.props.quantity}</p>
            <p>Tên KH: {this.props.name}</p>
            <div className="row">
              <p className="col-6">Số điện thoại: {this.props.phone}</p>
              <p className="col-6">Email: {this.props.email}</p>
            </div>
            <p>Địa chỉ: {this.props.address}</p>
            <p>Trạng thái: {this.props.status}</p>
            <div>
              <Form.Control
                as="select"
                style={{ width: "25%" }}
                value={this.state.status}
                onChange={this.selectOnchangeHandle}
              >
                <option value="Đã thanh toán">Đã thanh toán</option>
                <option value="Đã chuyển vé">Đã chuyển vé</option>
                <option value="Hủy">Hủy</option>
              </Form.Control>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.handleClose}>
              Hủy
            </Button>
            <Button
              variant="primary"
              onClick={() =>
                this.props.saveButtonOnclick(this.state.status, this.props.code)
              }
            >
              Lưu
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    )
  }
}

export default TicketDetail
