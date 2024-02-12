import styled from "styled-components"
import dayjs from 'dayjs';

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
        <Wrapper>
            <GraphContainer>
                {past365Days.map((date) => (
                    <Square key={date} onMouseEnter={() => handleSquareHover(date)}>
                        {dayjs(date).format('DD')}
                    </Square>
                ))}
            </GraphContainer>
        </Wrapper>
    );

}

const Wrapper = styled.div`
    height: 100vh;
    background-color: lavender;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Square = styled.div`
width: 20px;
height: 20px;
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

const GraphContainer = styled.div`
background-color: skyblue;
height: 150px;
display: grid;
grid-gap: 1px;
grid-auto-flow: column;
grid-template-columns: repeat(7, 1fr); 
grid-template-rows: repeat(7, 1fr);
overflow: scroll;
`;


export default LandingPage;