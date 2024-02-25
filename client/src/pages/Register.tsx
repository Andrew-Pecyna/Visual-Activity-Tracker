import styled from "styled-components"
import NavBar from "../components/NavBar"


const Register = () => {

    return(
        <Wrapper>
            <NavBar />
            <MainContainer>
                <FormBox>
                    <Form>
                        <TitleSpan>
                            <Title>Sign Up</Title>
                        </TitleSpan>
                        <FormContents>
                            <span>
                                <Input type="text" id="userName" name="userName" placeholder="User Name" required></Input>
                            </span>
                            <span>
                                <Input type="password" id="password" name="password" placeholder="Password" required></Input>
                            </span>
                            <span>
                                <Btn type="submit">Register</Btn>
                            </span>
                        </FormContents>
                    </Form>
                </FormBox>
            </MainContainer>
        </Wrapper>
    )
}

const Wrapper = styled.div`
height: 100vh;
background-color: #FBFBFB;
display: flex;
flex-direction: column;
/* min-width: 1125px; */
/* padding-top: 150px; */
`

const MainContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 75vh;
width: 100%;
`

const FormBox = styled.div`
height: 500px;
width: 400px;
background-color: whitesmoke;
box-shadow: 2px 0px 15px 2px gainsboro;
`

const Form = styled.form`
height: 500px;
`

const TitleSpan = styled.span`
display: flex;
justify-content: center;
padding-top: 15px;
/* background-color: violet; */
`

const Title = styled.p`
font-size: 28px;
font-family: monospace;
border-bottom: 1.5px solid black;
line-height: 55px;
`

const FormContents = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 20px;
/* background-color: skyblue; */
padding-top: 20px;
`

const Input = styled.input`
width: 230px;
height: 30px;
font-size: 16px;
font-family: monospace;
`

const Btn = styled.button`
width: 237px;
height: 40px;
margin-top: 30px;
background-color: grey;
color: white;
border: none;
border-radius: 5px;
font-size: 18px;
font-family: monospace;
`

export default Register;