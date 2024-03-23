import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import Head from "../components/head"
import indexStyles from "./index.module.scss"
import mainStyles from "../styles/main.module.scss"
import blogIndexStyles from "../templates/blog-index.module.scss"
import Typist from "react-typist"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faHeart,
    faPenFancy,
    faChevronRight,
} from "@fortawesome/free-solid-svg-icons"

export const query = graphql`
    query {
        file(relativePath: { eq: "images/profile.jpg" }) {
            childImageSharp {
                fixed(width: 50) {
                    src
                }
            }
        }
        allContentfulBlogPost(
            sort: { fields: publishedAt, order: DESC }
            filter: { hideFromList: { ne: true } }
            limit: 2
        ) {
            edges {
                node {
                    title
                    hideFromList
                    slug
                    publishedAt
                    coverImage {
                        title
                        fluid {
                            sizes
                            src
                            srcSet
                        }
                    }
                }
            }
        }
    }
`

const getCoverImage = node =>{
    return node.coverImage ? (
        <Img className={blogIndexStyles.coverImage} fluid={node.coverImage.fluid} />
    ) : (
        ""
    )}

const getPost = node => {
    return (
        <div className={blogIndexStyles.post}>
            <Link to={`/blog/${node.slug}`} className={blogIndexStyles.postLink}>
                <div className={blogIndexStyles.coverText}>
                    <span>{node.title}</span>
                </div>
                {getCoverImage(node)}
            </Link>
            <div
                className={blogIndexStyles.postContent}
                style={{ padding: 0 }}
            ></div>
        </div>
    )
}
const IndexPage = props => {
    const profilePicture = (
        <Link to="/about">
            <img
                src={props.data.file.childImageSharp.fixed.src}
                alt="Bojan Golubovic"
                className={indexStyles.profilePicture}
            />
        </Link>
    )

    return (
        <Layout>
            <Head title="Home" path={props.path} />
            <div className={mainStyles.container}>
                <h1 className={indexStyles.typing}>
                    <Typist avgTypingDelay={130} stdTypingDelay={30}>
                        <span>Hello!</span>
                        <Typist.Backspace count={6} delay={3000} />
                        <span>Ahoy!</span>
                        <Typist.Backspace count={5} delay={3000} />
                        <span>Bonjour!</span>
                        <Typist.Backspace count={8} delay={3000} />
                        <span>Moien!</span>
                        <Typist.Backspace count={6} delay={3000} />
                        <span>Hola!</span>
                        <Typist.Backspace count={5} delay={3000} />
                        <span>Hallo!</span>
                        <Typist.Backspace count={6} delay={3000} />
                        <span>Hello!</span>
                    </Typist>
                </h1>

                <h2 className={indexStyles.title}>
                    I'm Bojan {profilePicture}
                    &nbsp;Engineering Manager!
                    <br />
                </h2>
                <p>
                    Engineering Manager | Head of Software Engineering
                </p>
                <ul>
                    <li>12 years of software development experience.</li>
                    <li>3 years of management experience, with a focus on people management through leadership, career development, coaching, and mentoring.</li>
                    <li>Integral part of a successful first AI hardware device startup story, contributing to raising several hundred million dollars in funding, highlighting the significant impact and business acumen.</li>
                    <li>Scaled engineering teams to over 50 members, demonstrating effective team growth strategies and leadership.</li>
                    <li>Led advanced software development projects achieving 50K monthly global users, showcasing project management and technical leadership.</li>
                    <li>Revamped product technology to boost customer retention and acquisition, underlining a strong focus on product improvement and market competitiveness.</li>
                    <li>Performance and talent management, including training, hiring, mentoring, and • developing talent to build and sustain high-performing teams.</li>
                    <li>Strategic planning and project management, adept at budgeting, team selection & assembling, prioritization, and supervision.</li>
                    <li>Time, resource, change, and risk management, ensuring projects meet strategic goals with optimized resource allocation.</li>
                    <li>Selection processes to align team composition with company culture and strategic objectives.</li>
                    <li>Fostered a culture of continuous learning within teams, emphasizing personal development and innovation in technological practices.</li>
                </ul>  
                <p>
                    If you have any needs, feel free to{" "}
                    <Link to="/contact" className={mainStyles.link}>
                        contact
                    </Link>{" "}
                    or{" "}
                    <Link to="/about" className={mainStyles.link}>
                        get to know me a little better
                    </Link>
                    .
                </p>

                {/* <h3 className={indexStyles.title}>
                    Latest blog posts <FontAwesomeIcon icon={faPenFancy} />
                </h3>

                <div className={indexStyles.posts}>
                    {props.data.allContentfulBlogPost.edges.map(({ node }) =>
                        getPost(node)
                    )}
                    <div className={indexStyles.morePosts}>
                        <Link to="/blog" className={mainStyles.button}>
                            More posts <FontAwesomeIcon icon={faChevronRight} />
                        </Link>
                    </div>
                </div> */}
            </div>
        </Layout>
    )
}

export default IndexPage
