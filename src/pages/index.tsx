// src/pages/index.tsx
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push('/blog'); 
  }, [router]);

  return <p>Redirecting to blog...</p>;
}
