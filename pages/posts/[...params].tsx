import { useRouter } from 'next/router';
import * as React from 'react';

export interface PostDetailProps {
}

export default function PostList (props: PostDetailProps) {
  const router = useRouter();
  return (
    <div>
    Create post page !!!
    <p>Query: {JSON.stringify(router.query)}</p>
    </div>
  );
}
