import React from 'react';
import me from '../../assets/pictures/workingAtComputer.jpg';
import meNow from '../../assets/pictures/currentme.jpg';
import { Link } from 'react-router-dom';
import ResumeDownload from './ResumeDownload';

export interface AboutProps {}

const About: React.FC<AboutProps> = (props) => {
    return (
        // add on resize listener
        <div className="site-page-content">
            {/* <img src={me} style={styles.topImage} alt="" /> */}
            <h1 style={{ marginLeft: -16 }}>Welcome</h1>
            <h3>I'm Vishal Vaibhav</h3>
            <br />
            <div className="text-block">
                <p>
                    I'm a web developer currently studying at GL Bajaj Institute of Management where
                     I’m pursuing my BCA degree, expected to graduate in 2027.
                </p>
                <br />
                <p>
                    Thank you for taking the time to check out my portfolio. I
                    really hope you enjoy exploring it as much as I enjoyed
                    building it. If you have any questions or comments, feel
                    free to contact me using{' '}
                    <Link to="/contact">this form</Link> or shoot me an email at{' '}
                    <a href="mailto:whysoovishal@gmail.com">
                        whysoovishal@gmail.com
                    </a>
                </p>
            </div>
            <ResumeDownload />
            <div className="text-block">
                <h3>About Me</h3>
                <br />
                <p>
                    From a young age, I have always been fascinated by computers and technology. I was naturally curious about how things worked, and my love for gaming only strengthened that curiosity. Spending hours exploring games and gadgets slowly shaped my passion for understanding the tech behind them.

My first real exposure to programming came in middle school, where I was introduced to Java. That early spark grew into a long-lasting interest in coding and problem-solving.
                </p>
                <br />
                <div className="captioned-image">
                    <img src={me} style={styles.image} alt="" />
                    <p>
                        <sub>
                            <b>Figure 1:</b> A real photo of me developing this
                            website :)
                        </sub>
                    </p>
                </div>

                <p>
                   I started programming more seriously in my first year of college, initially learning how to scrape and interact with websites. I went on to build a ton of passion-driven frontend projects, including chatbots, small games, landing pages, 
                   meme search engines, and more. You can find many of these on my {' '}
                    
                   {' '}
                    <Link to="/projects/software">Software Projects</Link> page.
                </p>
                <br />
                <p>
                    As I continued learning, I realized I was initially focused on basic frontend development. But everything changed when I discovered Next.js and advanced frontend technologies like GSAP, Framer Motion, Three.js, and WebGL. That opened up a whole new world for me.

Curiosity eventually pulled me into the backend as well. I started exploring Node.js, and soon I knew I wanted to become a full-stack developer. Since then, I’ve been studying databases, AWS, DevOps practices, and everything that helps me build complete, scalable applications.

Alongside web development, I also have a strong interest in problem-solving, so I actively practice competitive programming and work on improving my DSA skills.
                </p>
                <br />
                <br />
                <div style={{}}>
                    <div
                        style={{
                            flex: 1,
                            textAlign: 'justify',
                            alignSelf: 'center',
                            flexDirection: 'column',
                        }}
                    >
                        <h3>My Hobbies</h3>
                        <br />
                        <p>
                            Beyond software, I have a lot of hobbies that I enjoy in my free time. The more tangible hobbies I have are cinematography and playing cricket. You can read more about each of these on their respective pages under my projects tab. Some other hobbies I enjoy are cooking and (unsurprisingly) playing video games.
                        </p>
                        <br />
                        <p>
                           In college, I was an active member of the Techvisor Club and held multiple positions in the chapter. I met a lot of amazing people through the club and thoroughly enjoyed the community.
                        </p>
                    </div>
                    <div style={styles.verticalImage}>
                        <img src={meNow} style={styles.reducedImage} alt="" />
                        <p>
                            <sub>
                                <b>Figure 2:</b> Me, April 2022
                            </sub>
                        </p>
                    </div>
                </div>
                <br />
                <br />
                <p>
                    Thanks for reading about me! I hope that you enjoy exploring
                    the rest of my portfolio website and everything it has to
                    offer. If you find the easter egg make sure to let me know
                    on twitter{' '}
                    <a
                        rel="noreferrer"
                        target="_blank"
                        href="https://x.com/vishaldotexe"
                    >
                        @vishaldotexe
                    </a>{' '}
                    Good luck and have fun!
                </p>
                <br />
                <p>
                    If you have any questions or comments I would love to hear
                    them. You can reach me through the{' '}
                    <Link to="/contact">contact page</Link> or shoot me an email
                    at{' '}
                    <a href="mailto:whysoovishal@gmail.com">
                        whysoovishal@gmail.com
                    </a>
                </p>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    contentHeader: {
        marginBottom: 16,
        fontSize: 48,
    },
    image: {
        height: 'auto',
        width: '100%',
    },
    reducedImage: {
        height: 'auto',
        width: '107%',
        maxHeight: '430px',
        objectFit: 'cover',
    },
    topImage: {
        height: 'auto',
        width: '100%',
        marginBottom: 32,
    },
    verticalImage: {
        alignSelf: 'center',
        // width: '80%',
        marginLeft: 32,
        flex: 0.8,

        alignItems: 'center',
        // marginBottom: 32,
        textAlign: 'center',
        flexDirection: 'column',
    },
};

export default About;

