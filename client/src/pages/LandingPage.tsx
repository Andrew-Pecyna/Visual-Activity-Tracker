import styled from "styled-components"

const LandingPage = () => {
    return (
        <Wrapper>
            <Title>Yes!!!</Title>
        </Wrapper>
    )
}

const Wrapper = styled.div`
background-color: gainsboro;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
`

const Title = styled.p`
color: violet;
font-size: 100px;
`

export default LandingPage;