import Footer from '../components/Footer';
import Header from '../components/Header';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="h-screen">
      <h1 className="text-4xl">Main Part of the App</h1>
      <Link href="/blog">Blog Page</Link>
    </div>
  );
}
