import React, { Fragment, Component } from "react";
import { Image, Nav, Navbar } from "react-bootstrap";
import "./Header.css";
import cover from "./cover-logo.jpg";
import { Link } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navExpanded: false,
    };
  }

  setNavExpanded = () => {
    this.setState((pervState) => ({
      navExpanded: !pervState.navExpanded,
    }));
  };

  closeNav = () => {
    this.setState({ navExpanded: false });
  };

  render() {
    return (
      <Fragment>
        <div className="cover">
          <Image className="cover-image" src={cover} />
        </div>
        <Navbar
          onToggle={this.setNavExpanded}
          onSelect={this.closeNav}
          expanded={this.state.navExpanded}
          expand="lg"
          bg="dark"
          variant="dark"
        >
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav onClick={this.closeNav} className="mr-auto main-navbar">
              <Link className="main-navbar-link nav-link" to="/">
                אודות
              </Link>
              <Link className="main-navbar-link nav-link" to="/office-services">
                שירותי המשרד
              </Link>
              <Link className="main-navbar-link nav-link" to="/tips">
                טיפים
              </Link>
              <Link className="main-navbar-link nav-link" to="/QA">
                שאלות ותשובות
              </Link>
              <Link className="main-navbar-link 	nav-link" to="/contact">
                {" "}
                צור קשר
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Fragment>
    );
  }
}

export default Header;
