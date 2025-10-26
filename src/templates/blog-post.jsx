import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import * as styles from "../components/index.module.css"

const BlogPost = ({ data }) => {
  const post = data.markdownRemark
  const { title, date } = post.frontmatter

  return (
    <Layout>
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
    }
  }
`

export default BlogPost
