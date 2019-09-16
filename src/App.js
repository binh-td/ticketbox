import React from "react"
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import TicketDetail from "./Page/TicketDetail"
import TicketImport from "./Page/TicketImport"

class App extends React.Component {

  render() {
    return (
      <div>
        <TicketImport updateTicketDatas={this.updateTicketDatas}/>
      </div>
    )
  }
}

export default App
