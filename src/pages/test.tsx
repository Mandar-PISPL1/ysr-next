import { GetStaticProps } from 'next';
import Script from 'next/script';
import React, { useEffect, useRef } from 'react';

const YourComponent = ({ elementorData }: { elementorData: string }) => {
  return <div></div>;
};

export default function test(props: any) {
  console.log(props.data);
  return (
    <div>
      <YourComponent elementorData={props.data.x_metadata._elementor_data} />
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const url = `https://yourspiritualrevolution.org/wp-json/wp/v2/pages/26318`;
  const resp = await fetch(url).then((r) => r.json());

  return {
    props: {
      data: resp,
    },
  };
};
