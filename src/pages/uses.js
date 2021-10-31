import React from "react"
import Layout from "../components/layout"
import mainStyles from "../styles/main.module.scss"
import Head from "../components/head"

const UsesPage = props => {
    return (
        <Layout>
            <Head title="Uses" path={props.path} />
            <div className={mainStyles.postContent}>
                <p>
                    Sometimes, people ask me what IDE, theme, icons, etc I use.
                    So I decided to write up a little post that sums up. This
                    page is inspired by{" "}
                    <a href="https://wesbos.com/uses">Wes Bos' uses page</a>.
                </p>

                <h2>Editor + Terminal</h2>

                <table className={mainStyles.table}>
                    <tr>
                        <td>Code Editor</td>
                        <td>
                            <a href="https://code.visualstudio.com">VS Code</a>
                        </td>
                    </tr>
                    <tr>
                        <td>Code Editor Theme</td>
                        <td>
                            <a href="https://github.com/microsoft/vscode/blob/master/extensions/theme-defaults/themes/dark_plus.json">
                            Default dark+ theme
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>Code Editor Icons</td>
                        <td>
                            <a href="https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme">Material Icon Theme</a>
                        </td>
                    </tr>
                    <tr>
                        <td>Console App</td>
                        <td>
                            Usually the VS Code integrated terminal during
                            coding, for other uses,
                            <a href="https://iterm2.com/">iTerm2</a> with ZSH.
                        </td>
                    </tr>
                </table>

                <h2>Desktop Apps</h2>
                <table className={mainStyles.table}>
                    <tr>
                        <td>Email</td>
                        <td>
                            <a href="https://superhuman.com">Superhuman</a>{" "}
                        </td>
                    </tr>
                    <tr>
                        <td>Browser</td>
                        <td>
                            <a href="https://www.google.com/chrome">
                                Google Chrome
                            </a>{" "}
                            for most things.{" "}
                            <a href="https://www.mozilla.org/firefox">
                                Firefox
                            </a>{" "}
                            to counter-checking some things.
                        </td>
                    </tr>
                    <tr>
                        <td>VPN Client</td>
                        <td>
                            <a href="https://www.cisco.com/c/en/us/products/security/anyconnect-secure-mobility-client/index.html">
                            Cisco AnyConnect
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>Todo App</td>
                        <td>
                            <a href="https://any.do/">Any.do</a>
                        </td>
                    </tr>
                    <tr>
                        <td>Window Management</td>
                        <td><a href="https://mizage.com/divvy/">Divvy</a></td>
                    </tr>
                </table>

                <h2>Hosting & Co.</h2>

                <table className={mainStyles.table}>
                    <tr>
                        <td>Hosting Front-End Sites</td>
                        <td>
                            <a href="https://www.netlify.com/">Netlify</a>
                        </td>
                    </tr>
                    <tr>
                        <td>Hosting Backend</td>
                        <td>
                            <a href="https://www.heroku.com/">Heroku</a>
                        </td>
                    </tr>
                    <tr>
                        <td>Other cloud needs</td>
                        <td>
                            <a href="https://www.digitalocean.com/">
                                Digital Ocean
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>Email provide</td>
                        <td>
                            <a href="https://gsuite.google.com/">GSuite</a>
                        </td>
                    </tr>
                    <tr>
                        <td>Domain provider</td>
                        <td>
                            <a href="https://www.onlydomains.com/">
                                OnlyDomains
                            </a>
                        </td>
                    </tr>
                </table>

                <h2>Workstation Setup</h2>

                <table className={mainStyles.table}>
                    <tr>
                        <td>Laptop</td>
                        <td>
                            <a href="https://www.amazon.com/HP-EliteBook-850-G5-Thunderbolt3/dp/B07HPBQW2V">
                              HP EliteBook 850 G5
                            </a>&nbsp;
                            <a href="https://www.apple.com/">
                              MacBook Pro
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>External screen</td>
                        <td>
                            <a href="https://www.samsung.com/uk/monitors/monitor-c49j89-lc49j890dkuxen/">
                            49" CJ890 Super-Ultra Wide Monitor with USB-C
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>Desk</td>
                        <td>
                                Standing BENE office desk station
                        </td>
                    </tr>
                    <tr>
                        <td>Office Chair</td>
                        <td>
                            <a href="https://anaks-namestaj.com/proizvod/radna-stolica-inet/">
                                Anax iNet
                            </a>
                        </td>
                    </tr>
                </table>
            </div>
        </Layout>
    )
}

export default UsesPage
