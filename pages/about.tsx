import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faJs, faBootstrap, faHtml5, faCss3Alt, faSass, faNodeJs, faGitAlt, faGithub, faLinkedin, faXTwitter, faPython, faPhp, faMicrosoft, faDocker } from '@fortawesome/free-brands-svg-icons'
import { faWind, faShuttleSpace, faBrain } from "@fortawesome/free-solid-svg-icons";

import Head from 'next/head';

export default function AboutPage(props) {

    return (
        <>
            <Head>
                <title>about | kuray.dev</title>
                <meta name="description" content="i am committed to producing high-quality, efficient, and maintainable code. i thrive in collaborative environments, effectively communicating complex technical concepts to cross-functional teams including designers, product managers, and QA engineers. my strong analytical skills empower me to quickly identify and troubleshoot issues, ensuring smooth project progression and timely delivery." />
                <meta name="keywords" content="software Development, freelancer, web development, mobile app development, full stack development, javascript, python, react, ui/ux design, backend development, frontend development, remote work, api integration, agile development, problem solving" />
                <meta name="author" content="kuray karaaslan" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="robots" content="index, follow" />
                <meta property="og:image" content="/assets/images/og-image.jpg" />
                <meta property="og:title" content="home | kuray.dev" />
                <meta property="og:description" content="i am committed to producing high-quality, efficient, and maintainable code. i thrive in collaborative environments, effectively communicating complex technical concepts to cross-functional teams including designers, product managers, and QA engineers. my strong analytical skills empower me to quickly identify and troubleshoot issues, ensuring smooth project progression and timely delivery." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://kuray.dev" />
                <meta property="og:site_name" content="kuray.dev" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@kuraykaraaslan" />
                <meta name="twitter:creator" content="@kuraykaraaslan" />
                <meta name="twitter:title" content="home | kuray.dev" />
                <meta name="twitter:description" content="i am committed to producing high-quality, efficient, and maintainable code. i thrive in collaborative environments, effectively communicating complex technical concepts to cross-functional teams including designers, product managers, and QA engineers. my strong analytical skills empower me to quickly identify and troubleshoot issues, ensuring smooth project progression and timely delivery." />
            </Head>

            <div className="mx-4 md:mx-8 min-h-screen bg-base-200 pt-2 rounded-box pb-3 mb-3">
                <img className="w-32 h-32 rounded-full mx-auto mt-4" src="/assets/images/kuraykaraaslan.jpeg" alt="Kuray Karaaslan" />
                <h2 className="text-center text-2xl font-semibold mt-3">kuray karaaslan</h2>
                <p className="text-center mt-1">software developer & structural engineer</p>
                <div className="flex justify-center mt-5">
                    <a href="https://github.com/kuraykaraaslan" target="blank">
                        <button className="rounded-full px-2 py-1 text-xs font-bold mx-2 mt-2 flex items-center" style={{ backgroundColor: '#007ACC', color: 'white' }}>
                            <FontAwesomeIcon icon={faGithub} className="text-2xl" style={{ width: '20px', height: '20px' }} />
                            <span className="ml-2">gitHub</span>
                        </button>
                    </a>
                    <a href="https://www.linkedin.com/in/kuraykaraaslan/" target="blank">
                        <button className="rounded-full px-2 py-1 text-xs font-bold mx-2 mt-2 flex items-center" style={{ backgroundColor: '#007ACC', color: 'white' }}>
                            <FontAwesomeIcon icon={faLinkedin} className="text-2xl" style={{ width: '20px', height: '20px' }} />
                            <span className="ml-2">linkedin</span>
                        </button>
                    </a>
                    <a href="https://twitter.com/kuraykaraaslan" target="blank">
                        <button className="rounded-full px-2 py-1 text-xs font-bold mx-2 mt-2 flex items-center" style={{ backgroundColor: '#007ACC', color: 'white' }}>
                            <FontAwesomeIcon icon={faXTwitter} className="text-2xl" style={{ width: '20px', height: '20px' }} />
                            <span className="ml-2">X</span>
                        </button>
                    </a>
                </div>
                <div className="mt-5">
                    <h3 className="text-xl font-semibold px-2">about me</h3>
                    <p className="mt-2 pl-2">i'm passionate about creating innovative solutions to real-world problems. i'm currently working as a freelance software developer. i'm also a graduate student at the university of istanbul, studying information systems management. i'm looking for opportunities to work with a team of talented developers and designers to create innovative solutions to real-world problems.</p>
                </div>
                <div className="mt-5">
                    <h3 className="text-xl font-semibold px-2">highlights</h3>
                    <p className="mt-2 pl-2">i have experience in developing web applications using react, node.js, and php. i also have experience in developing mobile applications using react native. i'm familiar with the agile methodology and have experience working in a scrum team. i'm a quick learner and a team player. i'm also a good communicator and have experience working with clients.</p>
                    <p className="mt-2 pl-2">with 3 years of experience as a civil engineer, i possess a comprehensive understanding of project management, design principles, and effective communication. this background enhances my ability to bridge the gap between complex technical requirements and user-friendly software solutions.</p>
                    <p className="mt-2 pl-2">adept at working within cross-functional teams, i thrive in collaborative environments. i value open communication and the sharing of ideas to achieve successful outcomes.</p>
                    <p className="mt-2 pl-2">technology is a rapidly evolving landscape, and i embrace ongoing learning to stay up-to-date with the latest advancements. this hunger for knowledge drives me to explore new languages, frameworks, and methodologies to continually enhance my skill set.</p>
                </div>
                <div className="mt-5">
                    <h3 className="text-xl font-semibold pl-2">vision</h3>
                    <p className="mt-2 pl-2">i am committed to continuously pushing my boundaries and expanding my horizons within the realm of software development. my goal is to combine my engineering insights with cutting-edge technology to create applications that not only meet functional needs but also excel in user experience and efficiency, all while upholding the highest standards of data security.</p>
                </div>
                <div className="mt-5">
                    <h3 className="text-xl font-semibold pl-2">education</h3>
                    <p className="mt-2 pl-2 text-bold">university of istanbul, istanbul</p>
                    <p className="mt-2 pl-2 text-bold">bachelor degree in information systems management - (2021 - present)</p>

                    <p className="mt-4 pl-2 text-bold">university of dokuz eylül, izmir</p>
                    <p className="mt-2 pl-2 text-bold">bachelor degree in civil engineering - (2015 - 2021)</p>

                </div>
                <div className="mt-5">
                    <h3 className="text-xl font-semibold pl-2">experience</h3>
                    <p className="mt-2 pl-2 text-bold">freelance software developer</p>
                    <p className="mt-2 pl-2">developing web applications using react, node.js, and php (2023 - present)</p>

                    <p className="mt-4 pl-2 text-bold">self-employed bim engineer</p>
                    <p className="mt-2 pl-2">developing c#, and js apllications (2022 -2023)</p>

                    <p className="mt-4 pl-2 text-bold">building information management engineer</p>
                    <p className="mt-2 pl-2">developing bim applications (2021 - 2022)</p>

                </div>

                <div className="mt-5">
                    <h3 className="text-xl font-semibold pl-2">skills</h3>
                    <div className="flex flex-wrap justify-center mt-4 mb-4">
                        <button className="rounded-full px-2 py-1 text-xs font-bold mx-2 mt-2 flex items-center" style={{ backgroundColor: '#61DBFB', color: '#0D1117' }}>
                            <FontAwesomeIcon icon={faReact} className="text-2xl" style={{ width: '20px', height: '20px' }} />
                            <span className="ml-2">react</span>
                        </button>

                        <button className="rounded-full px-2 py-1 text-xs font-bold mx-2 mt-2 flex items-center" style={{ backgroundColor: '#3776AB', color: 'white' }}>
                            <FontAwesomeIcon icon={faPython} className="text-2xl" style={{ width: '20px', height: '20px' }} />
                            <span className="ml-2">python</span>
                        </button>
                        <button className="rounded-full px-2 py-1 text-xs font-bold mx-2 mt-2 flex items-center" style={{ backgroundColor: '#777BB4', color: 'white' }}>
                            <FontAwesomeIcon icon={faPhp} className="text-2xl" style={{ width: '20px', height: '20px' }} />
                            <span className="ml-2">php</span>
                        </button>
                        <button className="rounded-full px-2 py-1 text-xs font-bold mx-2 mt-2 flex items-center" style={{ backgroundColor: '#5C2D91', color: 'white' }}>
                            <FontAwesomeIcon icon={faMicrosoft} className="text-2xl" style={{ width: '20px', height: '20px' }} />
                            <span className="ml-2">c#</span>
                        </button>
                    </div>
                </div>
                <div className="mt-5">
                    <h3 className="text-xl font-semibold pl-2">knowledge</h3>
                    <div className="flex flex-wrap justify-center mt-4 mb-4">
                        <button className="rounded-full px-2 py-1 text-xs font-bold mx-2 mt-2 flex items-center" style={{ backgroundColor: '#FF6F61', color: 'white' }}>
                            <FontAwesomeIcon icon={faBrain} className="text-2xl" style={{ width: '20px', height: '20px' }} />
                            <span className="ml-2">machine learning</span>
                        </button>
                        <button className="rounded-full px-2 py-1 text-xs font-bold mx-2 mt-2 flex items-center" style={{ backgroundColor: '#007ACC', color: 'white' }}>
                            <FontAwesomeIcon icon={faShuttleSpace} className="text-2xl" style={{ width: '20px', height: '20px' }} />
                            <span className="ml-2">iot</span>
                        </button>
                        <button className="rounded-full px-2 py-1 text-xs font-bold mx-2 mt-2 flex items-center" style={{ backgroundColor: '#F05032', color: 'white' }}>
                            <FontAwesomeIcon icon={faGitAlt} className="text-2xl" style={{ width: '20px', height: '20px' }} />
                            <span className="ml-2">git</span>
                        </button>

                        <button className="rounded-full px-2 py-1 text-xs font-bold mx-2 mt-2 flex items-center" style={{ backgroundColor: '#CC0000', color: 'white' }}>
                            <FontAwesomeIcon icon={faDocker} className="text-2xl" style={{ width: '20px', height: '20px' }} />
                            <span className="ml-2">docker</span>
                        </button>
                        <button className="rounded-full px-2 py-1 text-xs font-bold mx-2 mt-2 flex items-center" style={{ backgroundColor: '#339933', color: 'white' }}>
                            <FontAwesomeIcon icon={faNodeJs} className="text-2xl" style={{ width: '20px', height: '20px' }} />
                            <span className="ml-2">node.js</span>
                        </button>
                        <button className="rounded-full px-2 py-1 text-xs font-bold mx-2 mt-2 flex items-center" style={{ backgroundColor: '#563D7C', color: 'white' }}>
                            <FontAwesomeIcon icon={faWind} className="text-2xl" style={{ width: '20px', height: '20px' }} />
                            <span className="ml-2">tailwindcss</span>
                        </button>
                        <button className="rounded-full px-2 py-1 text-xs font-bold mx-2 mt-2 flex items-center" style={{ backgroundColor: '#CC3534', color: 'white' }}>
                            <FontAwesomeIcon icon={faHtml5} className="text-2xl" style={{ width: '20px', height: '20px' }} />
                            <span className="ml-2">html5</span>
                        </button>
                    </div>

                </div>
                <div className="mt-5">
                    <h3 className="text-xl font-semibold pl-2">languages</h3>
                    <div className="flex flex-wrap justify-center mt-4 mb-4">
                        <button className="rounded-full px-2 py-1 text-xs font-bold mx-2 mt-2 flex items-center" style={{ backgroundColor: '#F7DF1E', color: '#0D1117' }}>
                            <span className="ml-2">english</span>
                        </button>
                        <button className="rounded-full px-2 py-1 text-xs font-bold mx-2 mt-2 flex items-center" style={{ backgroundColor: '#F7DF1E', color: '#0D1117' }}>
                            <span className="ml-2">turkish</span>
                        </button>
                        <button className="rounded-full px-2 py-1 text-xs font-bold mx-2 mt-2 flex items-center" style={{ backgroundColor: '#F7DF1E', color: '#0D1117' }}>
                            <span className="ml-2">german</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )



}



