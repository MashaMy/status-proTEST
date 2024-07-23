import { Navbar, Nav,  Button , NavbarBrand, NavbarToggle, NavbarCollapse, Container}  from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import logot from '../Asserts/logot.png';


const Styles = styled.div `
.navbar-brand, .navbar-nav .nav-link, a {
font-size: large;
padding: 6px;
text-decoration: none;
    color: #adb1b8;
    &:hover {
    color: white
}
}
Button {
text-decoration: none;
font-size: large;
padding: 6px;
background-color: Transparent;
    background-repeat:no-repeat;
    border: none;
    cursor:pointer;
    overflow: hidden; 
}
`


export default function Header() {

  
  return (
<>
<Styles >
<Navbar collapseOnSelect expand = "lg" bg='dark' variant='dark'>
  <Container>
<NavbarBrand className='m-auto'>
    <img src={ logot } alt='foto' style={{'height': '55px', 'border-radius': '10px'}}/>
</NavbarBrand>

<NavbarToggle aria-controls='responsive-navbar-nav'/>
<NavbarCollapse id='responsive-navbar-nav'>
<Nav>
    <Nav.Link> < Link to="/">Главная</Link>  </Nav.Link>
    <Nav.Link>  <Link to="/about">  О нас</Link>   </Nav.Link>
    <Nav.Link>   <Link to="/portfolio">Портфолио</Link>   </Nav.Link>
    <Nav.Link>   <Link to="/partner">Партнеры</Link>   </Nav.Link>
    <Nav.Link>   <Link to="/contact">Контакты</Link></Nav.Link>
    <Nav.Link><Link to="/otziv">Видеоотзывы</Link></Nav.Link>
    <Button><a href="https://chat.whatsapp.com/ILwcS1gM8rK4iJj6eTEAZN" target="_blank ">Связаться с дизайнером</a></Button>
    
</Nav>
</NavbarCollapse>
</Container>
</Navbar>
</Styles>


</>
  )}
