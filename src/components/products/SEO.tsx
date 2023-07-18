import Head from 'next/head';
export default function SeoByRankMath(props: any) {
  const { meta_tags, jsonLtdScheam } = props;
  if (!meta_tags || meta_tags == undefined) {
    return <></>;
  }
  return (
    <>
      <Head>
        {meta_tags['og:title'] && <title>{meta_tags['og:title']}</title>}

        {Object.keys(meta_tags).map((key) => (
          <meta name={key} content={meta_tags[key].join('')} />
        ))}

        {jsonLtdScheam && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: jsonLtdScheam.join('') }}
          />
        )}
      </Head>
    </>
  );
}
