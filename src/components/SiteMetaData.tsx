import Head from "next/head";

interface SiteMetaDataProps {
  metaTitle: string;
  metaContent: string;
  metaContent2: string;
}

const SiteMetaData = ({
  metaTitle,
  metaContent,
  metaContent2,
}: SiteMetaDataProps) => {
  return (
    <Head>
      <title>{metaTitle}</title>
      <meta name="description" content={metaContent} />
      <meta property="og:title" content={metaContent} />
      <meta property="og:description" content={metaContent2} />
      <meta property="og:image" content="/images/Prognosis.png" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default SiteMetaData;
