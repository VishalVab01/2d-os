import React from 'react';
// @ts-ignore
import computer from '../../../assets/pictures/projects/software/computer.mp4';
// @ts-ignore
import nothing from '../../../assets/pictures/projects/software/nothing.mp4';
// @ts-ignore
import nimbus from '../../../assets/pictures/projects/software/nimbus.mp4';
import ResumeDownload from '../ResumeDownload';
import VideoAsset from '../../general/VideoAsset';

export interface SoftwareProjectsProps {}

const SoftwareProjects: React.FC<SoftwareProjectsProps> = (props) => {
    return (
        <div className="site-page-content">
            <h1>Software</h1>
            <h3>Projects</h3>
            <br />
            <p>
                Below are some of my favorite software projects I have worked on
                over the last few years.
            </p>
            <br />
            <ResumeDownload />
            <br />
            <div className="text-block">
                <h2>NOT Your Average Portfolio</h2>
                <br />
                <p>
                    NOT Your Average Portfolio is an innovative, interactive portfolio experience that pushes the boundaries 
                    of web development. This isn't just another portfolio site—it's a fully immersive 3D environment combined 
                    with a retro OS interface that showcases creativity and technical excellence. This project was an absolute 
                    joy to make and challenged me both technically and creatively, demonstrating my ability to blend modern 
                    web technologies with unique design concepts.
                </p>
                <br />
                <div className="captioned-image">
                    <VideoAsset src={computer} />
                    <p style={styles.caption}>
                        <sub>
                            <b>Figure 1:</b> 3D immersive portfolio scene created in Blender.
                            The scene was meticulously baked and exported in GLTF format for optimal web performance.
                        </sub>
                    </p>
                </div>
                <p>
                    The technical architecture is sophisticated yet elegant. The portfolio features a dual-interface system: 
                    a stunning 3D environment powered by Three.js that seamlessly integrates a retro-inspired 2D OS interface. 
                    The 3D scene renders the OS interface inside it using an iframe, creating a unique nested experience. 
                    The OS interface is a fully functional React application that works both as a standalone site and as part 
                    of the 3D experience. The magic happens through Three.js's CSS renderer, which applies 3D CSS transforms 
                    to the HTML elements, creating authentic three-dimensional depth and perspective.
                </p>
                <br />
                <h3>Links:</h3>
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://henryheffernan.com"
                        >
                            <p>
                                <b>[3D Site]</b> - vishalvab.com
                            </p>
                        </a>
                    </li>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://henryheffernan.vercel.app/"
                        >
                            <p>
                                <b>[OS Site]</b> - vishalvab.vercel.app
                            </p>
                        </a>
                    </li>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://github.com/henryjeff/portfolio-website"
                        >
                            <p>
                                <b>[GitHub]</b> - 3D Site Repository
                            </p>
                        </a>
                    </li>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://github.com/henryjeff/portfolio-inner-site"
                        >
                            <p>
                                <b>[GitHub]</b> - OS Site Repository
                            </p>
                        </a>
                    </li>
                </ul>
                <p>
                    This project showcases advanced front-end engineering, 3D graphics programming, and creative problem-solving. 
                    It demonstrates proficiency in modern web technologies while delivering an unforgettable user experience 
                    that stands out in today's competitive landscape. The combination of technical sophistication and creative 
                    design makes this portfolio truly one-of-a-kind.
                </p>
            </div>
            <div className="text-block">
                <h2>Nothing Reimagined</h2>
                <br />
                <p>
                    Nothing Reimagined is a creative rework of the Nothing brand in the form of a modern, immersive website. 
                    This project showcases my ability to blend cutting-edge web technologies with stunning visual design. 
                    Built using React, Tailwind CSS, GSAP for smooth animations, and Framer Motion for interactive elements, 
                    the site delivers a premium user experience that captures the essence of the Nothing brand's minimalist 
                    and innovative philosophy.
                </p>
                <br />
                <div className="captioned-image">
                    <VideoAsset src={nothing} />
                    <p style={styles.caption}>
                        <sub>
                            <b>Figure 2:</b> Nothing Reimagined website showcase featuring smooth animations and modern design.
                        </sub>
                    </p>
                </div>
                <p>
                    The project demonstrates advanced front-end development techniques including complex animation sequences, 
                    responsive design patterns, and performance optimization. Every interaction has been carefully crafted to 
                    provide a seamless and engaging experience that reflects the quality and innovation associated with the 
                    Nothing brand.
                </p>
                <br />
                <h3>Links:</h3>
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://nothing-reimagined.vercel.app/"
                        >
                            <p>
                                <b>[Live Demo]</b> - nothing-reimagined.vercel.app
                            </p>
                        </a>
                    </li>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://github.com/yourusername/nothing-reimagined"
                        >
                            <p>
                                <b>[GitHub]</b> - Nothing Reimagined Repository
                            </p>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="text-block">
                <h2>SwitchLab</h2>
                <br />
                <p>
                    SwitchLab is not your average keyboard website—it's a full-stack, 3D immersive experience that 
                    pushes the boundaries of web development. Built with Next.js, Tailwind CSS, React Three Fiber for 
                    stunning 3D graphics, GSAP for smooth animations, and Node.js for the backend, this project showcases 
                    a complete end-to-end solution deployed on Vercel.
                </p>
                <br />
                <div className="captioned-image">
                    <VideoAsset src={nimbus} />
                    <p style={styles.caption}>
                        <sub>
                            <b>Figure 3:</b> SwitchLab 3D immersive website with interactive keyboard models.
                        </sub>
                    </p>
                </div>
                <p>
                    The website features interactive 3D keyboard models that users can explore, customize, and interact with 
                    in real-time. This project demonstrates my proficiency in modern web technologies, 3D graphics programming, 
                    and creating production-ready applications that deliver exceptional user experiences.
                </p>
                <br />
                <h3>Links:</h3>
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://switchlab.vercel.app/"
                        >
                            <p>
                                <b>[Live Demo]</b> - switchlab.vercel.app
                            </p>
                        </a>
                    </li>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://github.com/yourusername/switchlab"
                        >
                            <p>
                                <b>[GitHub]</b> - SwitchLab Repository
                            </p>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="text-block">
                <h2>LMAO मृत्यु</h2>
                <br />
                <p>
                    LMAO मृत्यु (pronounced "LMAO Mrityu") is a hilarious and addictive meme search engine that brings 
                    the best of Reddit's meme culture to your fingertips. Built with pure HTML, CSS, and vanilla JavaScript, 
                    this project demonstrates the power of simple yet effective web technologies combined with smart API 
                    integration. The name playfully combines internet slang "LMAO" (Laughing My Ass Off) with the Sanskrit 
                    word "मृत्यु" (Mrityu - meaning death), creating a humorous take on "dying of laughter."
                </p>
                <br />
                <div className="captioned-image">
                    <VideoAsset src="https://customer-assets.emergentagent.com/job_webdev-update/artifacts/vqim7rte_memeengine.mp4" />
                    <p style={styles.caption}>
                        <sub>
                            <b>Figure 4:</b> LMAO मृत्यु meme search engine interface showcasing Reddit API integration.
                        </sub>
                    </p>
                </div>
                <p>
                    The application leverages the Reddit API to fetch fresh, trending memes from popular subreddits in 
                    real-time. Users can search for specific meme topics, browse through endless scrolling content, and 
                    enjoy a smooth, responsive interface that works seamlessly across all devices. The clean, minimalist 
                    design puts the focus squarely on the memes while providing intuitive navigation and search functionality. 
                    This project showcases my ability to work with external APIs, handle asynchronous data fetching, and 
                    create engaging user experiences using fundamental web technologies.
                </p>
                <br />
                <h3>Tech Stack:</h3>
                <ul>
                    <li><p><b>HTML5</b> - Semantic markup structure</p></li>
                    <li><p><b>CSS3</b> - Responsive styling and animations</p></li>
                    <li><p><b>Vanilla JavaScript</b> - API integration and DOM manipulation</p></li>
                    <li><p><b>Reddit API</b> - Real-time meme data fetching</p></li>
                </ul>
            </div>
            <div className="text-block">
                <h2>Kick Flip</h2>
                <br />
                <p>
                    Kick Flip is an immersive 3D skateboard visualization experience that takes web-based 3D graphics to 
                    the next level. Built with the same powerful tech stack as the SwitchLab keyboard website, this project 
                    adds WebGL capabilities to create a stunning, interactive skateboard showcase. Users can explore every 
                    angle of the skateboard, watching it perform realistic flip tricks and rotations in a beautifully 
                    rendered 3D environment.
                </p>
                <br />
                <div className="captioned-image">
                    <VideoAsset src="https://customer-assets.emergentagent.com/job_webdev-update/artifacts/oh5tjnze_Sequence%2001.mp4" />
                    <p style={styles.caption}>
                        <sub>
                            <b>Figure 5:</b> Kick Flip 3D skateboard visualization with WebGL rendering.
                        </sub>
                    </p>
                </div>
                <p>
                    The project demonstrates advanced 3D graphics programming using React Three Fiber and WebGL, creating 
                    a photorealistic skateboard model complete with accurate physics and smooth animations. The skateboard 
                    responds to user interactions with fluid movements and trick animations, providing an engaging experience 
                    that showcases both technical skill and creative design. Built with Next.js for optimal performance and 
                    styled with Tailwind CSS, Kick Flip represents the perfect blend of modern web development and 3D graphics 
                    expertise.
                </p>
                <br />
                <h3>Tech Stack:</h3>
                <ul>
                    <li><p><b>Next.js</b> - React framework for production</p></li>
                    <li><p><b>React Three Fiber</b> - React renderer for Three.js</p></li>
                    <li><p><b>WebGL</b> - Hardware-accelerated 3D graphics</p></li>
                    <li><p><b>Tailwind CSS</b> - Utility-first styling</p></li>
                    <li><p><b>GSAP</b> - Advanced animation library</p></li>
                    <li><p><b>Node.js</b> - Backend runtime</p></li>
                </ul>
            </div>
            <ResumeDownload />
        </div>
    );
};

const styles: StyleSheetCSS = {
    video: {
        width: '100%',
        padding: 12,
    },
    caption: {
        width: '80%',
    },
};

export default SoftwareProjects;
