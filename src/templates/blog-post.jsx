import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"
import * as styles from "../components/index.module.css"

const BlogPost = ({ data }) => {
  const post = data.markdownRemark
  const { title, date } = post.frontmatter
  const excerpt = post.excerpt || post.rawMarkdownBody?.substring(0, 160) + "..."
  const siteUrl = "https://iantusil.com"

  return (
    <Layout>
      <Helmet>
        <title>{title} | IanTusil</title>
        <meta name="description" content={excerpt} />
        
        {/* Open Graph */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={excerpt} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`${siteUrl}/blog${post.fields.slug}`} />
        <meta property="og:site_name" content="IanTusil" />
        <meta property="article:published_time" content={date} />
        <meta property="article:author" content="IanTusil" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={excerpt} />
        <meta name="twitter:creator" content="@iyanski" />
        
        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": title,
            "description": excerpt,
            "author": {
              "@type": "Person",
              "name": "IanTusil",
              "url": siteUrl
            },
            "publisher": {
              "@type": "Organization",
              "name": "IanTusil",
              "url": siteUrl
            },
            "datePublished": date,
            "url": `${siteUrl}/blog${post.fields.slug}`
          })}
        </script>
      </Helmet>
      <main>
        <section className={styles.hero}>
          <div className={styles.container}>
            <h1 className={styles.heroTitle}>{title}</h1>
            <p className={styles.muted}>{date}</p>
          </div>
        </section>

        <section>
          <div className={styles.container}>
            <div 
              className={styles.blogContent}
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
            <div style={{ marginTop: '2rem' }}>
              <a href="/blog">
                ← Back to Blog
              </a>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
      html
      excerpt
      fields {
        slug
      }
    }
  }
`

export default BlogPost
