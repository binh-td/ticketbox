import React from "react"
import { Modal, Form, Button } from "react-bootstrap"

class TicketDetail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false
    }
    this.handleClose = this.handleClose.bind(this)
    this.handleShow = this.handleShow.bind(this)
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

  render() {
    return (
      <>
        <Button variant="primary" onClick={this.handleShow}>
          Launch demo modal
        </Button>
        <Modal
          show={this.state.show}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          onHide={this.handleClose}
        >
          <Modal.Header closeButton>
            <Modal.Title>Chi tiết vé</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              <p className="col-6">Kênh bán: Utop</p>
              <p className="col-6">Mã đơn: Utop</p>
            </div>
            <div className="row">
              <p className="col-6">Ngày mua bán: 20/09/2019</p>
              <p className="col-6">File Import: Utop_2019_09_29.csv</p>
            </div>
            <p>Số tiền</p>
            <p>Các loại vé: Vip1 2 vé</p>
            <p>Tên KH: Nguyễn Văn A</p>
            <div className="row">
              <p className="col-6">Số điện thoại: 091231283</p>
              <p className="col-6">Email: htang@lakdf.com</p>
            </div>
            <p>Địa chỉ: 123 hà nội</p>
            <p>Trạng thái</p>
            <div>
              <Form.Control as="select" style={{ width: "25%"}}>
                <option>Đã thanh toán</option>
                <option>Đã chuyển vé</option>
                <option>Hủy</option>
              </Form.Control>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Hủy
            </Button>
            <Button variant="primary" onClick={this.handleClose}>
              Lưu
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    )
  }
}

export default TicketDetail
