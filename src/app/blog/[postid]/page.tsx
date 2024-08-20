import React from 'react';

export default function DetailsPage({
  params,
}: {
  params: { postid: string };
}) {
  return (
    <div>
      <h1 className="text-9xl">Details Page with the id: {params.postid}</h1>
    </div>
  );
}
