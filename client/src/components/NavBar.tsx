import styled from "styled-components"


const NavBar = () => {

    return (
        <NavContainer>
            <Title>Habit</Title>
        </NavContainer>
    )
}

const NavContainer = styled.div`
display: flex;
align-items: center;
padding-left: 75px;
font-family: monospace;
background-color: whitesmoke;
width: 100%;
height: 100px;
margin: 0px;
`

const Title = styled.h1`
font-size: 40px;
font-family: monospace;
`

export default NavBar;