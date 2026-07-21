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
            <Head title="Bojan Golubovic" path={props.path} />
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
                    Product Engineering
                </p>
                <p>
                    Product-minded engineering leader with 13+ years building software and 3+ leading the people who ship it. Currently a Senior Product Engineer at RudderStack, building product end-to-end across a warehouse-native Customer Data Platform — while targeting my next engineering leadership role.
                </p>
                <ul>
                    <li>3+ years in engineering management — hiring, coaching, career development, and delivery for teams of 15+.</li>
                    <li>Scaled engineering teams past 50 members and led product work to 50K+ monthly users worldwide.</li>
                    <li>Early engineer at an AI hardware startup that raised several hundred million dollars in funding.</li>
                    <li>Rebuilt product technology that lifted customer retention and acquisition.</li>
                    <li>Own delivery end-to-end: planning, budgeting, prioritization, and resource, change, and risk management.</li>
                    <li>Run hiring and selection to match team composition to culture and strategy.</li>
                    <li>Build high-performing teams through mentoring and a culture of continuous learning.</li>
                    <li>Work daily in the AI-native product space — agentic, spec-driven development, with human judgment kept in the loop.</li>
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
