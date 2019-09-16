import React from "react"
import { Form, Table, Button } from "react-bootstrap"
import XLSX from "xlsx"

class TicketImport extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      file: {},
      ticketDatas: this.props.ticketDatas,
    }
    this.importOnChangeHandle = this.importOnChangeHandle.bind(this)
    this.deleteBtnOnClick = this.deleteBtnOnClick.bind(this)
  }

  importOnChangeHandle(e) {
    const file = e.target.files
    const date = new Date()
    const dateTime = date.toLocaleString('vi-VN')

    if (file && file[0]) {
      this.setState({
        file: file[0],
        ticketDatas: [
          ...this.state.ticketDatas,
          {
            timeUpload: dateTime,
            saleChannel: e.target.name,
            fileName: file[0].name,
            data: [],
          }
        ]
      })
    }
  }

  deleteBtnOnClick(index) {
    this.setState({
      ticketDatas: this.state.ticketDatas.filter((detail, i) => i !== index)
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.file !== prevState.file) {
      const reader = new FileReader(),
        rABS = !!reader.readAsBinaryString
      let ticketData = this.state.ticketDatas.pop()

      reader.onload = e => {
        /* Parse data */
        const bstr = e.target.result
        const wb = XLSX.read(bstr, {
          type: rABS ? "binary" : "array",
          bookVBA: true
        })
        /* Get first worksheet */
        const wsname = wb.SheetNames[0]
        const ws = wb.Sheets[wsname]
        /* Convert array of arrays */
        const data = XLSX.utils.sheet_to_json(ws)
        ticketData = {
          ...ticketData,
          data: data,
        }
        /* Update state */
        this.setState({
          ticketDatas: [
            ...this.state.ticketDatas,
            ticketData
          ]
        })
      }

      if (rABS) {
        reader.readAsBinaryString(this.state.file)
      } else {
        reader.readAsArrayBuffer(this.state.file)
      }
    }
  }

  render() {
    console.log(this.state.ticketDatas)
    return (
      <div className="container">
        <h1>Quản lý import vé</h1>
        <Form>
          <Form.Group>
            <Form.Control
              name="Utop"
              type="file"
              id="custom-input-Utop-file"
              onChange={this.importOnChangeHandle}
              accept=".csv, .xlsx, .xls"
            />
            <Form.Label
              htmlFor="custom-input-Utop-file"
              className="btn btn-primary"
              style={{ margin: "0 2rem 0 0" }}
            >
              Import Utop
            </Form.Label>
            <Form.Control
              name="TicketBox"
              type="file"
              id="custom-input-TicketBox-file"
              onChange={this.importOnChangeHandle}
              accept=".csv, .xlsx, .xls"
            />
            <Form.Label
              htmlFor="custom-input-TicketBox-file"
              className="btn btn-primary"
              style={{ margin: "0 2rem" }}
            >
              Import TicketBox
            </Form.Label>
            <Form.Control
              name="TicketGo"
              type="file"
              id="custom-input-TicketGo-file"
              onChange={this.importOnChangeHandle}
              accept=".csv, .xlsx, .xls"
            />
            <Form.Label
              htmlFor="custom-input-TicketGo-file"
              className="btn btn-primary"
              style={{ margin: "0 2rem" }}
            >
              Import TicketGo
            </Form.Label>
          </Form.Group>
        </Form>
        <Table bordered hover>
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
          <tbody>
            {this.state.ticketDatas.map((detail, index) => (
              <>
                <tr key={index}>
                  <td>{detail.timeUpload}</td>
                  <td>{detail.fileName}</td>
                  <td>{detail.saleChannel}</td>
                  <td>{detail.data.length}</td>
                  <td></td>
                  <td>
                    <Button variant="primary">Chi tiết</Button>
                    <Button
                      id="deleteBtn"
                      onClick={() => this.deleteBtnOnClick(index)}
                      style={{ margin: "0 0 0 2rem" }}
                    >
                      Xóa
                    </Button>
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </Table>
      </div>
    )
  }
}

export default TicketImport
