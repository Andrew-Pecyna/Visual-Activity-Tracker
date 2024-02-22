import styled from "styled-components"
import { NavLink } from "react-router-dom"


const NavBar = () => {

    return (
        <NavContainer>
            <Title>Habit<BoxOne>.</BoxOne><BoxTwo>.</BoxTwo><BoxThree>.</BoxThree></Title>
            <StyledNav to="/signin">Log In</StyledNav>
        </NavContainer>
    )
}

const NavContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding-left: 75px;
padding-right: 75px;
font-family: monospace;
background-color: whitesmoke;
height: 100px;
margin: 0px;
`

const BoxOne = styled.span`
/* color: #afe0ea; */
color: lightgrey;
width: 2px;
height: 2px;
`
const BoxTwo = styled.span`
/* color: #66b7ea; */
color: gray;
width: 2px;
height: 2px;
`
const BoxThree = styled.span`
/* color: #068bc0; */
width: 2px;
height: 2px;
`

const Title = styled.h1`
font-size: 40px;
font-family: monospace;
padding: 0px;
margin: 0px;
`

const StyledNav = styled(NavLink)`
text-decoration: none;
background-color: lightgrey;
color: black;
padding: 8px 15px;
`

export default NavBar;