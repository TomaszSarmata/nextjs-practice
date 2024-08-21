import React from 'react';

export default function Comment({
  params,
}: {
  params: {
    postid: string;
    commentid: string;
  };
}) {
  console.log('hello');

  console.log(params, 'here params');
  return (
    <div>
      <h1>
        Comment {params.commentid} for blog post {params.postid}
      </h1>
    </div>
  );
}
