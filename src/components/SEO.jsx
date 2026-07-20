import { Helmet } from "react-helmet-async";

export default function SEO({
  title,
  description,
  url,
  image
}) {
  return (
    <Helmet>
      <title>{title}</title>

      <meta name="description" content={description} />

      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
        <meta
        property="og:site_name"
        content="English Speaking Al-Anon Berlin & European Roundups"
      />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image}/>
    
    </Helmet>
  );
}
