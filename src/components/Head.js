import React from 'react'
import Helmet from 'react-helmet'

const SeoMeta = () => (
  <Helmet
    defaultTitle="Ninjality"
    titleTemplate="%s - Ninjality"
  >
    <html lang="en" />
    <meta name="description" content="Building open source." />
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: `
          {
            "@context" : "http://schema.org",
            "@type" : "WebSite",
            "name" : "",
            "alternateName" : "NinjalityDesign",
            "url" : "https://ninjality.com",
            "sameAs" : [
              "https://twitter.com/NinjalityDesign",
              "https://www.facebook.com/NinjalityDesign",
              "https://www.linkedin.com/company/ninjality"
            ]
          }
        `
      }}
    />
    <meta name="twitter:site" content="@NinjalityDesign" />
    <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png?v=ngGzKMween" />
    <link rel="icon" type="image/png" href="/favicons/favicon-32x32.png?v=ngGzKMween" sizes="32x32" />
    <link rel="icon" type="image/png" href="/favicons/favicon-16x16.png?v=ngGzKMween" sizes="16x16" />
    <link rel="manifest" href="/favicons/manifest.json?v=ngGzKMween" />
    <link rel="shortcut icon" href="/favicons/favicon.ico?v=ngGzKMween" />
    <meta name="apple-mobile-web-app-title" content="Ninjality" />
    <meta name="application-name" content="Ninjality" />
    <meta name="msapplication-config" content="/favicons/browserconfig.xml?v=ngGzKMween" />
    <meta name="theme-color" content="#323232" />
  </Helmet>
)

export default SeoMeta
