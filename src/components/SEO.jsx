import { Helmet } from "react-helmet-async";

const SITE_URL = "https://al-anon-app.vercel.app";
const SITE_NAME =
  "English Speaking Al-Anon Berlin & European Roundups";


export default function SEO({ title,
  description,
  url = SITE_URL,
  image, }) {

    const absoluteUrl = url.startsWith("http")
    ? url
    : `${SITE_URL}${url}`;

  const absoluteImage = image
    ? image.startsWith("http")
      ? image
      : `${SITE_URL}${image}`
    : null;

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE_NAME,
        description,
        publisher: {
          "@id": `${SITE_URL}/#organization`,
        },
      },
      {
        "@type": "NGO",
        "@id": `${SITE_URL}/#organization`,
        name: "English Speaking Al-Anon Berlin",
        url: SITE_URL,
        ...(absoluteImage && {
          logo: {
            "@type": "ImageObject",
            url: absoluteImage,
          },
        }),
      },
      {
        "@type": "WebPage",
        "@id": `${absoluteUrl}#webpage`,
        url: absoluteUrl,
        name: title,
        description,
        isPartOf: {
          "@id": `${SITE_URL}/#website`,
        },
        about: {
          "@id": `${SITE_URL}/#organization`,
        },
      },
    ],
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={absoluteUrl} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={absoluteUrl} />

      {absoluteImage && (
        <meta property="og:image" content={absoluteImage} />
      )}

      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}
