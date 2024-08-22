import React from 'react';
import { Metadata } from 'next';

type Props = {
  params: {
    postid: string;
  };
};

export const generateMetadata = ({ params }: Props): Metadata => {
  return {
    title: `Blog Post ${params.postid}`,
  };
};

export default function DetailsPage({ params }: Props) {
  console.log(params, 'here params');
  return (
    <div>
      <h1 className="text-9xl">Details Page with the id: {params.postid}</h1>
    </div>
  );
}
