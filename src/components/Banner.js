import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import Spline from "@splinetool/react-spline";
import 'animate.css';
import TrackVisibility from 'react-on-screen';


export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = [ "Data Analyst", "ML Engineer", "Data Scientist"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(100 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const period = 1500;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => { clearInterval(ticker)};
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if(isDeleting) {
            setDelta(prevDelta => prevDelta / 2)
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIndex(prevIndex => prevIndex - 1);
            setDelta(period);
        } else if(isDeleting && updatedText === ''){
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(200);
        }
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                        {({ isVisible }) => 
                        <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                            <span className="tagline">Welcome to my Portfolio</span>
                            <h1>{`Hi I'm Sneh Shah - `}<span className="wrap">{text}</span></h1>
                            <p> Enthusiastic code explorer embarking on a summer 2024 expedition in search of internships – a digital odyssey of knowledge and laughter! 🚀🌟 Armed with the sword of determination, I'm slashing through the jungles of DSA, casting spells in the magical realms of AI and ML. Always ready to decode the riddles of innovation, because in the land of computer science, curiosity is my compass! 🗺️💻 #SummerInternQuest</p>
                            <button onClick={() => console.log('connect')}>Let's Connect <ArrowRightCircle size={25} /></button>
                        </div>}
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <Spline scene="https://prod.spline.design/rc2M0BrTbwzu9KsB/scene.splinecode" style={{ height: '400px' }}/>
                    </Col>
                </Row>
            </Container>
        </section>
    )    
}

