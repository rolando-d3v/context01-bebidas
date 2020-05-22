import React from 'react'
import {Navbar} from "react-bootstrap"

function Header() {
    return (
        <Navbar bg="dark" variant="dark"  style={{height: "80px"}} >
        <Navbar.Brand href="#home">
          <img
            alt=""
            src="https://images.vexels.com/media/users/3/135691/isolated/preview/175702226dd92b9a70d23b87ebed4a5d-bebida-de-coctel-by-vexels.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
          React Bootstrap
        </Navbar.Brand>
      </Navbar>
    )
}

export default Header
