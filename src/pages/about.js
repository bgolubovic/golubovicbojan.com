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
                            Hello <FontAwesomeIcon icon={faHandPeace} />
                        </h1>
                        <p>
                            Hi, I'm Bojan,&nbsp;
                            <strong>lead front end developer</strong> 💻 with a
                            strong educational and experiance background in software
                            engineering. A happily married family guy, 30-something-year-old comming from Serbia 🇸🇷.
                            I do work remotely for international clients.
                        </p>
                    </div>{" "}
                </div>

                <hr className={aboutStyle.gradientLine} />

                <h1>
                    Work experience <FontAwesomeIcon icon={faLaptopCode} />
                </h1>

                <LifeEvent
                    timePeriod="March 2020 - Current"
                    title="Senior Front End Developer"
                    details="Astrata"
                    location="Eindhoven"
                    current={true}
                />

                <LifeEvent
                    timePeriod="May 2016 - May 2020 (4 years)"
                    title="Senior Front End Developer"
                    details="Seavus"
                />
                <LifeEvent
                    timePeriod="August 2015 - August 2016 (1 year)"
                    title="Front End Developer"
                    details="StangaOne1"
                />
                <LifeEvent
                    timePeriod="December 2015 - May 2016 (6 months)"
                    title="Front End Developer (part-time)"
                    details="Neopix"
                />
                <LifeEvent
                    timePeriod="February 2015 – September 2015 (8 months)"
                    title="Front End Developer"
                    details="*nbgteam"
                />
                <LifeEvent
                    timePeriod="November 2013 – January 2015 (1 year 3 months)"
                    title="Junior Front End Developer"
                    details="BlueBond"
                    location="San Francisco 🇺🇸"
                />
                <LifeEvent
                    timePeriod="March 2012 – May 2014"
                    title="Intern Front End Developer"
                    details="FavSync"
                />
                <LifeEvent
                    timePeriod="March 2011 – August 2013"
                    title="Part-Time Freelance Frontend Developer"
                    details="Self-Employed"
                />

                <hr className={aboutStyle.gradientLine} />

                <h1>
                    Tech Skills <FontAwesomeIcon icon={faWrench} />
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
                    Education <FontAwesomeIcon icon={faGraduationCap} />
                </h1>

                <LifeEvent
                    timePeriod="April 2019 - Current"
                    title="Self-Learning"
                    details="Node.js, Express, Vue.js, React.js, Gatsby.js"
                    location="Luxembourg 🇱🇺"
                    current={true}
                />
                <LifeEvent
                    timePeriod="2009 - 2011"
                    title="M.Sc. in Engineering"
                    details="Vorarlberg University of Applied Sciences"
                    location="Austria 🇦🇹"
                />

                <hr className={aboutStyle.gradientLine} />

                <h1>
                    Language Skills&nbsp;
                    <FontAwesomeIcon icon={faLanguage} />
                </h1>

                <table className={mainStyle.table}>
                    <tr>
                        <td>English 🇬🇧</td>
                        <td>Fluent</td>
                    </tr>
                    <tr>
                        <td>Serbian 🇸🇷</td>
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
                    Interests <FontAwesomeIcon icon={faSmile} />
                </h1>

                <h2>
                    Travel <FontAwesomeIcon icon={faPlane} />
                </h2>
                {/* <p>
                    If you want to hire me, I'm interested to work in companies
                    that offer{" "}
                    <strong>
                        modern technologies such as Node.js, Vue.js, React.js
                    </strong>
                    , etc. I am looking for a role that challenges me and where
                    I can help designing solutions.
                </p> */}

                <h2>
                    Technology <FontAwesomeIcon icon={faMicrochip} />
                </h2>
                {/* <p>
                    I'm fascinated by technological advances which companies
                    such as Tesla, SpaceX, Boston Dynamics make.
                </p> */}

                <h2>
                    Startups & Companies <FontAwesomeIcon icon={faRocket} />
                </h2>
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

                <h2>
                    Coding <FontAwesomeIcon icon={faCode} />
                </h2>
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
