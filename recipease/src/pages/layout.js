import { Link } from 'react-router-dom'
// import DisplayNameLogo from '../../../expo-app/components/displayNameLogo'
import { Nav, Navbar } from 'react-bootstrap'
import Sidebar from '../components/base/Sidebar'

const Header = () => {
    // const logoSrc = require("../assets/favicon.png") //TODO
    return (
        <header>
            <DisplayNameLogo />
        </header>
    )
}

const Navigation = () => {
    return (
        <Navbar bg="light">
            <Container>
                <Navbar.Collapse id="basic-navbar-nav" />
                <Nav classname="navBar">
                    <Nav.Link href='#home'>Home</Nav.Link>
                    <Nav.Link href='#home'>My Profile</Nav.Link>
                    <Nav.Link href='#home'>Add Recipe</Nav.Link>
                </Nav>
                <Navbar.Brand>Recipease</Navbar.Brand>
            </Container>
        </Navbar>
        // <nav>
        //     <ul>
        //         <li>
        //             <Link to="/">Home</Link>
        //         </li>
        //         <li>
        //             <Link to="/">Home</Link>
        //         </li>
        //     </ul>
        // </nav>
    )

}

const Layout = ({ children }) => {
    return (
        <>
            {/* <Header/> */}
            <div className="navWrapper">
                <Sidebar />
                <main>{children}</main>
            </div>
        </>
    )
}

export default Layout