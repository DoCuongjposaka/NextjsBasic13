"use client";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useRouter } from "next/navigation";
// import NavDropdown from "react-bootstrap/NavDropdown";
import Link from "next/link";

function AppHeader() {
  const router = useRouter();
  const handleBtn = () => {
    router.push("/");
  };
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        {/* <Navbar.Brand href="/" > */}
        <Link href={"/"} className="navbar-brand">
          App D-H-C
        </Link>
        {/* </Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link href={"/blogs"} className="nav-link">
              Blog
            </Link>
            {/* <Link href={"/youtube"} className="nav-link">
              Youtube
            </Link>
            <Link href={"/tiktok"} className="nav-link">
              TikTok
            </Link> */}
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppHeader;
