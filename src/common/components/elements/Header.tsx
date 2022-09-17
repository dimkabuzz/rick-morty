import Link from 'next/link';
import Image from 'next/image';

import Container from '@/layouts/Container';

export default function Header() {
  return (
    <header className="header">
      <Container>
        <Link href="/">
          <a className="logo">
            <Image
              src="/images/logo.png"
              layout="fill"
              alt="Logo Ricky and Morty"
            />
          </a>
        </Link>
        <nav>
          <ul className="nav">
            <li>
              <Link href="/">
                <a className="nav__link nav__link--active">Characters</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className="nav__link">Favorites</a>
              </Link>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
}
