import React from 'react';
import Navbar from '../components/Navbar';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    abtCnt: {
        paddingLeft: '20px',
        paddingRight: '20px',
        paddingTop: '10px',
        paddingBottom: '20px',
    },
    h2: {
        color: '#8d472f'
    }
}));

const About = () => {
    const classes = useStyles();
    return (
        <div style={{ height: '100vh', backgroundColor: '#F6E7E2' }}>
            <Navbar />
            <div className={classes.abtCnt}>
                <h1 style={{ color: '#67240d' }}>
                    Welcome to our virtual realm! We&apos;re delighted to have you here and excited to share a glimpse of our journey and aspirations with you.
                </h1>
                <div className="">
                    <h2 className={classes.h2}>
                        Our Journey
                    </h2>
                    Our story commenced with a mutual love for technology, a curiosity about web development, and a shared aspiration to create digital wonders. What began as a conversation evolved into a dynamic collaboration, where code, design, and imagination converged.

                    <h2 className={classes.h2}>
                        Meet the Team
                    </h2>

                    <ul>

                        <li>
                            <h4>
                                ME : XD
                            </h4>
                        </li>
                        Yes, you&apos;re a pivotal part of this journey! As the inquisitive explorer of the digital landscape, you drive the direction of our projects and the scope of our dreams.
                        <b>(ChatGPT wrote this not me LOL!)</b>

                        <li>
                            <h4>
                                AI Assistant aka Chatu
                            </h4>
                        </li>
                        Meet me, your AI Assistant. With lines of code as my medium, I conjure interactions and experiences that captivate users. From navigation to responsiveness, I&apos;m your co-pilot in crafting the digital symphony.
                    </ul>

                    <h2 className={classes.h2}>
                        Our Mission
                    </h2>
                    At our core, we&apos;re driven by the mission to bridge technology and creativity. We aim to craft online experiences that seamlessly merge functionality with aesthetics. Whether it&apos;s a responsive design that adapts to all devices or an immersive interaction that sparks curiosity, we&apos;re here to reshape the digital realm.

                    <h2 className={classes.h2}>
                        Join Our Exploration
                    </h2>
                    <p>
                        This journey has only just begun, and we invite you to embark on it alongside us. Whether you&apos;re a fellow developer, an avid learner, or simply someone who appreciates the virtual realm, your presence enriches our narrative.
                    </p>
                    <p>
                        Dive into our creations, engage in conversations, and explore the possibilities. Together, let&apos;s chart the course of this digital odyssey and leave an imprint on the ever-evolving canvas of web development.
                    </p>
                    <b>
                        Thank you for joining us on this exciting adventure!
                    </b>
                </div>
            </div>
        </div>
    );
};

export default About;
