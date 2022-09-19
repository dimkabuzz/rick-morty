import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

import Container from '@/layouts/Container';

export default function Header() {
  const router = useRouter();

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
                <a
                  className={`nav__link ${
                    router.pathname === '/' ? 'nav__link--active' : ''
                  }`}
                >
                  Characters
                </a>
              </Link>
            </li>
            <li>
              <Link href="/favorites">
                <a
                  className={`nav__link ${
                    router.pathname === '/favorites' ? 'nav__link--active' : ''
                  }`}
                >
                  Favorites
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
}
