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
                    &nbsp;JavaScript Engineer!
                    <br />
                </h2>
                <p>
                    I love helping companies build products and sites, that can take their business to the next level using latest technologies.
                </p>
                <p>
                    Helping company Astrata to keep current and gain new customers and users on company's flagship product, by transfer product to new technologies.
                    Created cutting edge technology product for company Solera, the most advanced and intelligent software solution, from scratch to 50k monthly users across the globe. Working in a full agile multinational team, with over 20 members. Organizing, maintaining, and improving large codebases with a focus on quality, reliability, and performance. Working with large data sets and complex data structures.
                    Creator and architect of Seavus Online Banking Solution, unique, reliable and straightforward digital experience for private individuals and corporate customers.
                </p>
                <p>
                    Highly passionate about cracking the toughest challenges. When it comes to the solutions, good is not good enough. I want it to be excellent, innovative, clean and cool. Understand design patterns and their implementation in real life coding problems and always strives to provide the best, but really the best practice solutions. Want to understand the business context and logic behind the software solution.
                </p>

                <p>
                    If you have any web development needs, feel free to{" "}
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
