import Head from "next/head";

import { SiteMetaDataProps } from "@interfaces/index";

const SiteMetaData: React.FC<SiteMetaDataProps> = ({
  metaTitle,
  metaContent,
  metaContent2,
}) => {
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
