import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'

function Greeting() {
    return (
        <Greet>
            <TempArea></TempArea>
            <TextArea>

                <Fade left>
                    <h1>Eid Mubarak</h1>
                </Fade>
                <Fade left>
                    <p>
                        Sending you warm wishes and happiness on the occasion of Eid. Remember me in your prayers.
                        <br />
                        <br />
                    </p>
                </Fade>

                <Fade right>
                    <p>
                        <em>&emsp;&emsp;~Usama Ansari & Family</em>
                    </p>
                </Fade>

            </TextArea>

        </Greet >
    )
}

export default Greeting

const Greet = styled.div`
    height: 100vh;
    background: url("./images/lantern.png");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    scroll-snap-align: center;
`

const TempArea = styled.div`
    height: 100%;
    width: 50%;
    /* background-color: blue; */
    @media (max-width: 768px) {
        display: none;
    }
`

const TextArea = styled.div`
    height: 100%;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    font-family: 'Updock', cursive;


    h1{
        font-size: 100px;
        /* background-color: pink; */
        margin: 0;
        text-transform: capitalize;
        color: #0019be;


    }

    p{
        margin: 0;
        padding: 0 30px 0 0;
        font-size: 40px;
        text-align: left;
        font-family: 'Sacramento', cursive;
        color: #006589;
        /* background-color: orange; */
    }
    /* background-color: red; */

    @media (max-width: 768px) {
        height: 50%;
        width: 100%;
        padding: 10px;
        margin-left: 110px;

        h1{
            font-size: 40px;
            font-weight: 600;
        }

        p{
        margin: 0;
        padding: 0 30px 0 0;
        font-size: 20px;
        }

    }
`