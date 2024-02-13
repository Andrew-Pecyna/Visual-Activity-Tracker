import styled from "styled-components"
import dayjs from 'dayjs';
import NavBar from "../components/NavBar";

const LandingPage = () => {

    const today = dayjs();
    const lastYearData = Array.from({ length: 365 }, (_, index) =>
    today.subtract(index, 'day').format('YYYY-MM-DD')
    );
    const past365Days = lastYearData.reverse();


    const handleSquareHover = (date: string) => {
    console.log('Hovered over:', date);
    };
    
    return (
        <>
            <NavBar/>
            <Wrapper>
                <GraphContainer>
                    <Graph>
                        {past365Days.map((date) => (
                            <Square key={date} onMouseEnter={() => handleSquareHover(date)}>
                                {/* {dayjs(date).format('DD')} */}
                                {/* what is displayed in each square */}
                            </Square>
                        ))}
                    </Graph>
                </GraphContainer>
            </Wrapper>
        </>
    );

}

const Wrapper = styled.div`
height: 70vh;
background-color: #FBFBFB;
display: flex;
justify-content: center;
min-width: 1125px;
padding-top: 150px;
`

const GraphContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
background-color: white;
/* border: 1px solid black; */
height: 250px;
width: 1100px;
/* box-shadow: 2px 0px 15px 2px #c6e48b; */
box-shadow: 2px 0px 15px 2px gainsboro;
`

const Graph = styled.div`
/* background-color: skyblue; */
height: 135px;
display: grid;
grid-gap: 3px;
grid-auto-flow: column;
grid-template-columns: repeat(7, 1fr); 
grid-template-rows: repeat(7, 1fr);
overflow: scroll;
`;


const Square = styled.div`
width: 15px;
height: 15px;
background-color: #ebedf0;
border: 1px solid #ccc;
/* display: inline-block; */
text-align: center;
line-height: 20px;
cursor: pointer;

&:hover {
    background-color: #c6e48b;
}
`;


export default LandingPage;