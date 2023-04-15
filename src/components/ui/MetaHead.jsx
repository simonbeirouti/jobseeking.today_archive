import Head from "next/head";

export default function MetaHead({ page, description }) {
  const title = `Jobseeking.today | ${page}`;
  return (
    <Head>
      <meta charSet="utf-8" />
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta content="Job Seeking Today" name="apple-mobile-web-app-title" />

      <meta content="summary_large_image" name="twitter:card" />
      {/* <meta content="/bcs.png" name="twitter:image" /> */}
      <meta content="@jobseekingtoday" name="twitter:site" />

      <meta content={title} property="og:title" />
      <meta content={description} property="og:description" />
      {/* <meta content="/bcs.png" property="og:image" /> */}

      <link
        href="/apple-touch-icon.png"
        rel="apple-touch-icon"
        sizes="180x180"
      />
    </Head>
  );
}
