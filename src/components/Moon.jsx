import React from 'react'
import styled from 'styled-components'
import '../index.css'
import Fade from 'react-reveal/Fade';

function Moon() {
    return (
        <Background>
            <Fade duration={10000}>
                <MoonContainer src='./images/moon.png' />
            </Fade>
            <Fade bottom>
                <DownArrow src='./images/down-arrow.svg' />
            </Fade>
        </Background>
    )
}

export default Moon

const Background = styled.div`
    height: 100vh;
    background: url("./images/city.jpg");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
    scroll-snap-align: center;

`

const MoonContainer = styled.img`
    height: auto;
    width: 100px;
    padding: 100px;
    filter: drop-shadow(0 0 15px #fff);
`

const DownArrow = styled.img`
    height: auto;
    width: 100px;
    padding: 30px;
    filter: drop-shadow(0 0 15px #fff);
    animation: arrow 2s infinite ease-in-out;

    @media (max-width: 768px) {
        width: 60px;
    }
`