import Link from "next/link";
import { useRouter } from "next/router";

const HeaderNavContent = () => {
  const router = useRouter();

  return (
    <>
      <nav className="nav main-menu">
        <ul className="navigation" id="navbar">
          <li>
            <Link href="/">Főoldal</Link>
          </li>
          <li>
            <Link href="/job-list">Munkák</Link>
          </li>
          <li>
            <Link href="/about">Rólunk</Link>
          </li>
          <li>
            <Link href="/blog-details/2">Blog</Link>
          </li>
          <li>
            <Link href="/contact">Kapcsolat</Link>
          </li>

          {/* End Pages menu items */}
        </ul>
      </nav>
    </>
  );
};

export default HeaderNavContent;
