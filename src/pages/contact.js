import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import mainStyle from "../styles/main.module.scss"
import contactStyle from "./contact.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import {
    faTwitter,
    faGithub,
    faDev,
    faLinkedin,
    faInstagram
} from "@fortawesome/free-brands-svg-icons"

const ContactPage = (props) => {
    return (
        <Layout>
            <Head title="Contact"  path={props.path} />

            <p>
                My preferred way of contact is via&nbsp;
                <a
                    href="https://www.linkedin.com/in/golubovicbojan/"
                    class={mainStyle.link}
                >
                    LinkedIn <FontAwesomeIcon icon={faLinkedin} />
                </a>
                &nbsp;or&nbsp;
                <a
                    className={mainStyle.link}
                    href="mailto:golubovicbojan@yahoo.com"
                    alt="Mail to golubovicbojan@yahoo.com"
                >
                    e-mail&nbsp;<FontAwesomeIcon icon={faEnvelope} />&nbsp;
                </a>. Feel free to check out my social media presence below to get to know me better.
            </p>
            <div className={contactStyle.icons}>
                <a
                    href="https://www.linkedin.com/in/golubovicbojan/"
                    class={contactStyle.iconLink}
                >
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>

                <a
                    href="https://twitter.com/bgolubovic"
                    class={contactStyle.iconLink}
                >
                    <FontAwesomeIcon icon={faTwitter} />
                </a>

                <a
                    href="https://github.com/bgolubovic"
                    class={contactStyle.iconLink}
                >
                    <FontAwesomeIcon icon={faGithub} />
                </a>

                <a href="https://www.instagram.com/bgolubovic/" class={contactStyle.iconLink}>
                    <FontAwesomeIcon icon={faInstagram} />
                </a>

                <a href="https://dev.to/bgolubovic" class={contactStyle.iconLink}>
                    <FontAwesomeIcon icon={faDev} />
                </a>

            </div>

            {/* <h1>Additional information</h1>
            <table className={mainStyle.table}>
                <tr>
                    <td>EU VAT ID</td>
                    <td className={mainStyle.monospace}>LU29433916</td>
                </tr>
                <tr>
                    <td>Luxembourgish Trade Registry</td>
                    <td className={mainStyle.monospace}>A41129</td>
                </tr>
            </table> */}
        </Layout>
    )
}

export default ContactPage
