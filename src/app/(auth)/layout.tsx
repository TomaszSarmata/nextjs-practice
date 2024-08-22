import Link from 'next/link';
import { usePathname } from 'next/navigation';

// export const metadata = {
//   title: 'Next.js',
//   description: 'Generated by Next.js',
// };

const navlinks = [
  { name: 'Register', href: '/register' },
  { name: 'Login', href: '/login' },
  { name: 'Forgotpassword', href: '/forgotpassword' },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        {navlinks.map((link) => {
          return (
            <Link
              href={link.href}
              key={link.href}>
              {link.name}
            </Link>
          );
        })}
      </body>
    </html>
  );
}
