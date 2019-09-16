import React from "react"
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import TicketDetail from "./Page/TicketDetail"
import TicketImport from "./Page/TicketImport"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      ticketDatas: []
    }
  }

  render() {
    return (
      <div>
        <TicketImport />
      </div>
    )
  }
}

export default App
