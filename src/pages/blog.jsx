import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import * as styles from "../components/index.module.css"

const BlogPage = ({ data }) => {
  const posts = data.allMarkdownRemark.nodes

  return (
    <Layout>
      <main>
        <section className={styles.hero}>
          <div className={styles.container}>
            <h1 className={styles.heroTitle}>Blog</h1>
            <p className={styles.lead}>Thoughts on systems, automation, and building things that work.</p>
          </div>
        </section>

        <section>
          <div className={styles.container}>
            <div className={styles.grid}>
              {posts.map((post) => (
                <article key={post.id} className={styles.card}>
                  <h3>
                    <Link to={`/blog${post.fields.slug}`} className={styles.link}>
                      {post.frontmatter.title}
                    </Link>
                  </h3>
                  <p className={styles.muted}>{post.frontmatter.date}</p>
                  <p>{post.excerpt}</p>
                  <Link to={`/blog${post.fields.slug}`}>
                    Read more
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: { frontmatter: { date: DESC } }
    ) {
      nodes {
        id
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
        }
      }
    }
  }
`

export default BlogPage
