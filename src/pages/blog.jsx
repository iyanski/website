import React from "react"
import { Link, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"

const BlogPage = ({ data }) => {
  const posts = data.allMarkdownRemark.nodes

  return (
    <Layout>
      <Helmet>
        <title>Blog | IanTusil</title>
        <meta
          name="description"
          content="Thoughts on systems, automation, and building things that work. Insights from a Systems & Automation Engineer."
        />
        <meta property="og:title" content="Blog | IanTusil" />
        <meta
          property="og:description"
          content="Thoughts on systems, automation, and building things that work. Insights from a Systems & Automation Engineer."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://iantusil.com/blog" />
        <meta property="og:site_name" content="IanTusil" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Blog | IanTusil" />
        <meta
          name="twitter:description"
          content="Thoughts on systems, automation, and building things that work. Insights from a Systems & Automation Engineer."
        />
        <meta name="twitter:creator" content="@iyanski" />
      </Helmet>

      <main className="min-h-screen bg-white text-zinc-900 antialiased">
        {/* Header */}
        <section className="border-b border-zinc-200 bg-zinc-50/60">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
              Blog
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-950 md:text-5xl">
              Thoughts on systems, automation,
              <br className="hidden md:block" /> and building things that work.
            </h1>
          </div>
        </section>

        {/* Post list */}
        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          {posts.length === 0 ? (
            <p className="text-zinc-500">No posts yet.</p>
          ) : (
            <div className="divide-y divide-zinc-100">
              {posts.map(post => (
                <article key={post.id} className="group py-10">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-baseline sm:justify-between">
                    <Link
                      to={`/blog${post.fields.slug}`}
                      className="text-xl font-semibold text-zinc-950 transition group-hover:text-zinc-600"
                    >
                      {post.frontmatter.title}
                    </Link>
                    <span className="shrink-0 text-sm text-zinc-400">
                      {post.frontmatter.date}
                    </span>
                  </div>
                  <p className="mt-3 max-w-2xl text-sm leading-7 text-zinc-600">
                    {post.excerpt}
                  </p>
                  <Link
                    to={`/blog${post.fields.slug}`}
                    className="mt-4 inline-flex text-sm font-medium text-zinc-900 transition hover:text-zinc-500"
                  >
                    Read more →
                  </Link>
                </article>
              ))}
            </div>
          )}
        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
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
