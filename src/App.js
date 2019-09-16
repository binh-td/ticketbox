import React from "react"
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import TicketDetail from "./Page/TicketDetail"
import TicketImport from "./Page/TicketImport"
import TicketList from "./Page/TicketList"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      ticketDatas: []
    }
  }

  render() {
    return (
      <Router>
          <Route exact path="/" component={TicketList} />
          <Route exact path="/detail" component={TicketDetail} />
          <Route exact path="/import" component={TicketImport} />
      </Router>
    )
  }
}

export default App
