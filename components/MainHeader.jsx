import Link from 'next/link';
import NavLinks from '@/components/NavLinks';

const MainHeader = () => {
  return (
    <>
      <header id="main-header">
        <div id="logo">
          <Link href="/">NextNews</Link>
        </div>
        <nav>
          <ul>
            <li>
              <NavLinks href='/archive'>Archive</NavLinks>
            </li>
            <li>
              <NavLinks href="/news">News</NavLinks>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
export default MainHeader;
