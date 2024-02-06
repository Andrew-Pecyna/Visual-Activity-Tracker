import styled from "styled-components"
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';
import dayjs from 'dayjs';

const LandingPage = () => {

    // const generateRandomValues = (startDate: dayjs.Dayjs, endDate: dayjs.Dayjs) => {
    //     const values = [];
    //     let currentDate = startDate.clone();
    //     while (currentDate.isBefore(endDate) || currentDate.isSame(endDate, 'day')) {
    //         values.push({ date: currentDate.toDate(), count: Math.floor(Math.random() * 4) });
    //         currentDate = currentDate.clone().add(1, 'day');
    //         }
    //     return values;
    // };

    const startDate = dayjs().subtract(1, 'year');
    const endDate = dayjs();
    // const values = generateRandomValues(startDate, endDate);
    const values = [{date: "Feb 04 2024", count: 5}]

    // const idealFormat = dayjs().format('dddd MMM D YYYY')
    // console.log(idealFormat)


    return (
        <Wrapper>
            <Title>Yes!!!</Title>
            <CalendarHeatmap
            startDate={startDate.toDate()}
            endDate={endDate.toDate()}
            values={values}
            // onMouseOver={(event, value) => {console.log(event, value)}}
            />
        </Wrapper>
    )
}

const Wrapper = styled.div`
background-color: gainsboro;
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
`

const Title = styled.p`
color: violet;
font-size: 100px;
`

export default LandingPage;