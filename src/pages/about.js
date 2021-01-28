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
                            Hello <FontAwesomeIcon icon={faHandPeace} size="lg" />
                        </h1>
                        <p>
                            Hi, I'm Bojan,&nbsp;
                            <strong>JavaScript Engineer</strong> 💻 with a
                            strong educational and experiance background in software
                            engineering. A happily married family guy, 30-something-year-old comming from Serbia 🇷🇸.
                            I do work remotely for international clients.
                        </p>
                    </div>{" "}
                </div>

                <hr className={aboutStyle.gradientLine} />

                <h1>
                    Work experience <FontAwesomeIcon icon={faLaptopCode} size="lg" />
                </h1>

                <LifeEvent
                    timePeriod="March 2020 - Current"
                    title="Senior Frontend Developer"
                    details="Astrata"
                    location="Eindhoven"
                    current={true}
                />

                <LifeEvent
                    timePeriod="March 2016 - March 2020 (4 years)"
                    title="Senior Frontend Developer"
                    details="Seavus"
                />
                <LifeEvent
                    timePeriod="February 2015 - February 2016 (1 year)"
                    title="Frontend Developer"
                    details="StangaOne1"
                />
                <LifeEvent
                    timePeriod="February 2014 – January 2015 (~1 year)"
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
                    Tech Skills <FontAwesomeIcon icon={faWrench} size="lg" />
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
                    Education <FontAwesomeIcon icon={faGraduationCap} size="lg" />
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
                    <FontAwesomeIcon icon={faLanguage} size="lg" />
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
                    Interests <FontAwesomeIcon icon={faSmile} size="lg" />
                </h1>

                <h3>
                    Travel <FontAwesomeIcon icon={faPlane} size="lg" />
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
                    Technology <FontAwesomeIcon icon={faMicrochip} size="lg" />
                </h3>
                {/* <p>
                    I'm fascinated by technological advances which companies
                    such as Tesla, SpaceX, Boston Dynamics make.
                </p> */}

                <h3>
                    Startups & Companies <FontAwesomeIcon icon={faRocket} size="lg" />
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
                    Coding <FontAwesomeIcon icon={faCode} size="lg" />
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
