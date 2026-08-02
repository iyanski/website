import React from "react"
import Seo from "../components/seo"
import PersonalWebsiteLayout from "./ian"

export const Head = () => (
  <>
    <Seo
      title="IanTusil — Systems that make work flow"
      description="I build systems that connect tools, data, and teams so work flows naturally. I help startups grow faster through thoughtful automation and clean design."
    />
    <meta name="theme-color" content="#0f172a" />
    <meta
      property="og:title"
      content="IanTusil — Systems that make work flow"
    />
    <meta
      property="og:description"
      content="I build systems that connect tools, data, and teams so work flows naturally."
    />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://iantusil.com" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta
      name="twitter:title"
      content="IanTusil — Systems that make work flow"
    />
    <meta
      name="twitter:description"
      content="I help startups grow faster through thoughtful automation and clean design."
    />
    <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        name: "IanTusil",
        description:
          "Builder of systems that connect tools, data, and teams to make work flow naturally.",
        url: "https://iantusil.com",
        sameAs: [
          "https://www.linkedin.com/in/iyanski",
          "https://github.com/iyanski",
          "https://x.com/iyanski",
        ],
        jobTitle: "Systems & Automation Engineer",
        worksFor: { "@type": "Organization", name: "OrcaSoft" },
      })}
    </script>
  </>
)

export default PersonalWebsiteLayout
