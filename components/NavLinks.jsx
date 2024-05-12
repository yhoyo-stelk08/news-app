'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavLinks = ({ href, children }) => {
  const path = usePathname();
  console.log(path)
  return (
    <Link href={href} className={`${path.startsWith(href) ? ' text-stone-950 bg-[#bcbcb7]' : ' text-yellow-50'}`}>
      {children}
    </Link>
  );
};
export default NavLinks;
