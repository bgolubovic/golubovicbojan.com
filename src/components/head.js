import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const Head = ({ title, socialCardMeta, canonicalUrl, path }) => {
    if (!canonicalUrl && path) {
        canonicalUrl = `https://www.golubovicbojan.com${path}`
    }
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    if (!socialCardMeta) {
        socialCardMeta = [
            { name: "twitter:card", content: "summary_large_image" },
            { name: "twitter:site", content: "@bgolubovic" },
            {
                name: "twitter:title",
                content: title || 'golubovicbojan.com',
            },
            {
                name: "twitter:description",
                content:
                    "I'm Bojan • Engineering Manager!",
            },
            {
                name: "twitter:image",
                content: "https://golubovicbojan.com/images/socialCard.jpg",
            },
            {
                name: "og:title",
                content: title,
            },
            {
                name: "og:description",
                content:
                "I'm Bojan • JavaScript Engineer!",
            },
            {
                name: "og:image",
                content: "https://golubovicbojan.com/images/socialCard.jpg",
            },
        ]
    }

    const meta = [
        {
            name: "description",
            content: "I'm Bojan • Engineering Manager!",
        },
        ...socialCardMeta,
    ]

    return (
        <>
            <Helmet
                title={`${title} | ${data.site.siteMetadata.title}`}
                link={
                    canonicalUrl
                        ? [
                              {
                                  rel: "canonical",
                                  key: canonicalUrl,
                                  href: canonicalUrl,
                              },
                          ]
                        : []
                }
                meta={meta}
            ></Helmet>
        </>
    )
}

export default Head
