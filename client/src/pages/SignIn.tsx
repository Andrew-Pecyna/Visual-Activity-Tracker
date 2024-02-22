import styled from "styled-components"
import NavBar from "../components/NavBar"


const SignIn = () => {

    return(
        <Wrapper>
            <NavBar />
            <p>Sign In Page</p>
        </Wrapper>
    )
}

const Wrapper = styled.div`
height: 100vh;
background-color: #FBFBFB;
display: flex;
flex-direction: column;
min-width: 1125px;
/* padding-top: 150px; */
`

export default SignIn;