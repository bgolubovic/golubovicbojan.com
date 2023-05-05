import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import aboutStyle from "./about.module.scss"
import mainStyle from "../styles/main.module.scss"
import LifeEvent from "../components/lifeEvent"
import Skill from "../components/skill"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHandPeace, faSmile } from "@fortawesome/free-regular-svg-icons"
import {
    faLaptopCode,
    faGraduationCap,
    faPlane,
    faMicrochip,
    faRocket,
    faCode,
    faTv,
    faWrench,
    faLanguage,
} from "@fortawesome/free-solid-svg-icons"

export const query = graphql`
    query {
        file(relativePath: { eq: "images/profile.jpg" }) {
            childImageSharp {
                fixed(width: 150) {
                    src
                }
            }
        }
    }
`

const AboutPage = props => {
    const profilePicture = (
        <img
            src={props.data.file.childImageSharp.fixed.src}
            alt="Bojan Golubovic"
            className={aboutStyle.profilePicture}
        />
    )

    return (
        <Layout>
            <Head title="About" path={props.path} />
            <div className={aboutStyle.about}>
                <div className={aboutStyle.intro}>
                    <div>{profilePicture}</div>
                    <div className={aboutStyle.introText}>
                        <h1>
                            Hello <FontAwesomeIcon icon={faHandPeace} size="xs" />
                        </h1>
                        <p>
                            Hi, I'm Bojan,&nbsp;
                            <strong>Engineering Manager</strong> 💻 with a
                            strong educational and experiance background in software
                            engineering.
                        </p>
                    </div>{" "}
                </div>

                <hr className={aboutStyle.gradientLine} />

                <h1>
                    Work experience <FontAwesomeIcon icon={faLaptopCode} size="xs" />
                </h1>

                <LifeEvent
                    timePeriod="July 2022 - Current"
                    title="Head of Frontend"
                    company="Symphony"
                    details="Head of Software Engineering:&nbsp;
                    - People management&nbsp;
                    - Recruitment&nbsp;
                    - Capability leader&nbsp;
                    - Career development&nbsp;
                    - Coaching and mentoring&nbsp;
                    - Performance reviews&nbsp;
                    - Projects reviews&nbsp;
                    - Administration&nbsp;
                    - Evaluations, 1:1's, defining OKR's&nbsp;
                    - Conducting technical interviews&nbsp;"
                    current={true}
                />

                <LifeEvent
                    timePeriod="July 2021 - July 2022"
                    title="Principal Frontend Engineer"
                    company="Symphony"
                    details="Architect of hospital managers Dashboard/Scheduler application, authentification and authorization, dashboard interactive data representation, scheduler functionality with the calendar.
                    Worked on a healthcare application that provides a way for its users to contact their doctors, preview or download test results, look at overall and historical health measurements, and order healthcare products.
                    Helped and led the project to get to the MVP stage with high-quality standards and with as few as possible bugs. Always having in mind future users and their needs. The focus was on team communication, coaching, and leading the team."
                />

                <LifeEvent
                    timePeriod="March 2020 - July 2021 (1 year 5 months)"
                    title="Senior Frontend Developer"
                    company="Astrata"
                    details="Helped company to keep current and gain new customers and users on company's flagship product, by transfer product to new technologies.
                    Organizing, maintaining, and improving large codebases with a focus on quality, reliability, and performance. Working with large data sets and complex data structures.
                    Building enterprise management software solution, with completely redesigned powerful web-based commercial fleet solution. The latest version of this advanced web-based platform for commercial fleets offers real time information and complete fleet management via its innovative User Experience (UX)."
                />

                <LifeEvent
                    timePeriod="March 2016 - March 2020 (4 years)"
                    title="Senior Frontend Developer"
                    company="Seavus"
                    details="Created cutting edge technology product for company Solera, the most advanced and intelligent software solution, from scratch to 50k monthly users across the globe. Working in a full agile multinational team, with over 20 members. "
                />
                <LifeEvent
                    timePeriod="February 2015 - February 2016 (1 year)"
                    title="Frontend Developer"
                    company="StangaOne1"
                    details="Met clients expectations by delivering projects on time with high quality."
                />
                <LifeEvent
                    timePeriod="February 2014 – January 2015 (1 year)"
                    title="Frontend Developer"
                    details="*nbgteam"
                />
                <LifeEvent
                    timePeriod="January 2012 – January 2014 (2 years)"
                    title="Junior Frontend Developer"
                    details="BlueBond"
                    location="San Francisco 🇺🇸"
                />
                <LifeEvent
                    timePeriod="November 2011 – December 2011 (2 months)"
                    title="Intern Frontend Developer"
                    details="FavSync"
                />

                <hr className={aboutStyle.gradientLine} />

                <h1>
                    Tech Skills <FontAwesomeIcon icon={faWrench} size="xs" />
                </h1>

                <div className={aboutStyle.skills}>
                    <Skill name="JavaScript" file="javascript" progress={90} />
                    <Skill name="TypeScript" file="typescript" progress={80} />
                    <Skill name="React.js" file="react" progress={95} />
                    <Skill name="Redux" file="redux" progress={80} />
                    <Skill name="Vue.js" file="vuejs" progress={60} />
                    <Skill name="Node.js" file="nodejs" progress={50} />
                    <Skill name="jQuery" file="jquery" progress={80} />
                    <Skill name="Gatsby.js" file="gatsbyjs" progress={50} />
                </div>
                <hr className={aboutStyle.gradientLine} />

                <h1>
                    Education <FontAwesomeIcon icon={faGraduationCap} size="xs" />
                </h1>

                <LifeEvent
                    timePeriod="2005 - 2013"
                    title="BASc, Computer Science"
                    details="IT department with classes and courses centered on Frontend Development (HTML, CSS, JavaScript), Web Development (PHP), Database Development (MySQL), System administration (Windows, Linux) and Object Oriented Programming (Java)."
                    location="University of Belgrade, Serbia 🇷🇸"
                />
                <LifeEvent
                    timePeriod="2001 - 2005"
                    title="High School degree, Natural Sciences"
                    details="Mathematical Sciences"
                    location="Gymnasium, Serbia 🇷🇸"
                />

                <hr className={aboutStyle.gradientLine} />

                <h1>
                    Language Skills&nbsp;
                    <FontAwesomeIcon icon={faLanguage} size="xs" />
                </h1>

                <table className={mainStyle.table}>
                    <tr>
                        <td>English 🇬🇧</td>
                        <td>Fluent</td>
                    </tr>
                    <tr>
                        <td>Serbian 🇷🇸</td>
                        <td>Mothertongue</td>
                    </tr>
                    <tr>
                        <td>German 🇩🇪</td>
                        <td>Basic</td>
                    </tr>
                    <tr>
                        <td>French 🇫🇷</td>
                        <td>Basic</td>
                    </tr>
                </table>

                <hr className={aboutStyle.gradientLine} />
                <h1>
                    Interests <FontAwesomeIcon icon={faSmile} size="xs" />
                </h1>

                <h3>
                    Travel <FontAwesomeIcon icon={faPlane} size="xs" />
                </h3>
                {/* <p>
                    If you want to hire me, I'm interested to work in companies
                    that offer{" "}
                    <strong>
                        modern technologies such as Node.js, Vue.js, React.js
                    </strong>
                    , etc. I am looking for a role that challenges me and where
                    I can help designing solutions.
                </p> */}

                <h3>
                    Technology <FontAwesomeIcon icon={faMicrochip} size="xs" />
                </h3>
                {/* <p>
                    I'm fascinated by technological advances which companies
                    such as Tesla, SpaceX, Boston Dynamics make.
                </p> */}

                <h3>
                    Startups & Companies <FontAwesomeIcon icon={faRocket} size="xs" />
                </h3>
                {/* <p>
                    I have a big entrepreneurial and startup curiosity which is
                    devided in two fields. On one hand, small companies which
                    try to make it big such as{" "}
                    <a href="https://avena.io" className={mainStyle.link}>
                        Avena
                    </a>{" "}
                    (Mexican-originated fitness app). On the other hand, I like
                    following strategic moves and happenings in big players such
                    as <strong>Facebook, Netflix, Spotify</strong>.
                </p> */}

                <h3>
                    Coding <FontAwesomeIcon icon={faCode} size="xs" />
                </h3>
                {/* <p>
                    This is a classic cliché. After (or before) work, I enjoy
                    some coding on the side. Also, currently I'm focused on
                    catching up with current web technologies such as Node.js,
                    Vue.js, React.js, JAMstack (Gatsby, Nuxt).
                </p> */}

                {/* <h2>
                    Cinema & TV <FontAwesomeIcon icon={faTv} />
                </h2>
                <p>
                    I love almost any kind of movie, but I always prefer DC and
                    Marvel movies. As of TV: I enjoy my sitcoms like
                    F·R·I·E·N·D·S (all-time favorite), HIMYM, TBBT as well as
                    superhero-themed shows (Flash, Arrow), dramas (Dexter,
                    Breaking Bad, GoT), among others.
                    <br />
                    <small>
                        (If you want to engange in lengthy conversations with
                        me, these are the way to go.)
                    </small>
                </p> */}
            </div>
        </Layout>
    )
}

export default AboutPage
