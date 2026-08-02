import React from "react"
import { Link, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"

const BlogPost = ({ data }) => {
  const post = data.markdownRemark
  const { title, date } = post.frontmatter
  const excerpt =
    post.excerpt || post.rawMarkdownBody?.substring(0, 160) + "..."
  const siteUrl = "https://iantusil.com"

  return (
    <Layout>
      <Helmet>
        <title>{title} | IanTusil</title>
        <meta name="description" content={excerpt} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={excerpt} />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content={`${siteUrl}/blog${post.fields.slug}`}
        />
        <meta property="og:site_name" content="IanTusil" />
        <meta property="article:published_time" content={date} />
        <meta property="article:author" content="IanTusil" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={excerpt} />
        <meta name="twitter:creator" content="@iyanski" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: title,
            description: excerpt,
            author: { "@type": "Person", name: "IanTusil", url: siteUrl },
            publisher: {
              "@type": "Organization",
              name: "IanTusil",
              url: siteUrl,
            },
            datePublished: date,
            url: `${siteUrl}/blog${post.fields.slug}`,
          })}
        </script>
      </Helmet>

      <main className="min-h-screen bg-white text-zinc-900 antialiased">
        {/* Header */}
        <section className="border-b border-zinc-200 bg-zinc-50/60">
          <div className="mx-auto max-w-3xl px-6 py-16 lg:px-8">
            <Link
              to="/blog"
              className="inline-flex items-center gap-1 text-sm text-zinc-400 transition hover:text-zinc-900"
            >
              ← Blog
            </Link>
            <h1 className="mt-8 text-center text-5xl font-bold leading-tight tracking-tight text-zinc-950 md:text-6xl md:leading-[1.15]">
              {title}
            </h1>
            <p className="mt-6 text-center text-sm text-zinc-400">{date}</p>
          </div>
        </section>

        {/* Content */}
        <section className="mx-auto max-w-3xl px-6 py-16 lg:px-8">
          <div
            className="prose prose-lg prose-zinc max-w-none
              prose-headings:font-semibold prose-headings:tracking-tight prose-headings:text-zinc-950 prose-headings:font-heading
              prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-4
              prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-3
              prose-p:text-zinc-600 prose-p:leading-9
              prose-a:text-zinc-900 prose-a:underline prose-a:underline-offset-4 hover:prose-a:text-zinc-500
              prose-strong:text-zinc-900 prose-strong:font-semibold
              prose-ul:text-zinc-600 prose-ol:text-zinc-600
              prose-li:leading-8
              prose-blockquote:border-l-2 prose-blockquote:border-zinc-200 prose-blockquote:text-zinc-500 prose-blockquote:not-italic
              prose-code:text-zinc-800 prose-code:bg-zinc-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-base prose-code:font-normal
              prose-pre:bg-zinc-950 prose-pre:text-zinc-100 prose-pre:rounded-2xl
              prose-hr:border-zinc-100"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />

          <div className="mt-16 border-t border-zinc-100 pt-10">
            <Link
              to="/blog"
              className="inline-flex items-center gap-1 text-sm font-medium text-zinc-900 transition hover:text-zinc-500"
            >
              ← Back to Blog
            </Link>
          </div>
        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query ($id: String!) {
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
