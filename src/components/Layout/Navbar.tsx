import * as React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import InnerWrapper from '@components/InnerWrapper';
import styles from './Navbar.module.scss';
import { Cancel, HalfMoon, Menu, SunLight } from 'iconoir-react';
import MobileNav from './MobileNav';

export default function Navbar() {
  const router = useRouter();
  const [showMobileNav, setShowMobileNav] = React.useState(false);
  const [darkMode, setDarkMode] = React.useState(false);
  const [activeButton, setActiveButton] = React.useState<React.MutableRefObject<HTMLAnchorElement>>();
  const homeButton = React.useRef<HTMLAnchorElement>(null);
  const aboutButton = React.useRef<HTMLAnchorElement>(null);
  const projectsButton = React.useRef<HTMLAnchorElement>(null);
  const blogButton = React.useRef<HTMLAnchorElement>(null);
  const contactButton = React.useRef<HTMLAnchorElement>(null);

  function handleMenuClick() {
    setShowMobileNav((current) => !current);
    document.body.classList.toggle('no-scroll');
  }

  function handleModeClick() {
    setDarkMode((current) => !current);
    document.body.classList.toggle('dark-mode');
  }

  React.useEffect(() => {
    document.body.classList.remove('no-scroll');
  }, []);

  React.useEffect(() => {
    if (router.pathname === '/') setActiveButton(homeButton);
    if (router.pathname === '/about') setActiveButton(aboutButton);
    if (router.pathname === '/projects') setActiveButton(projectsButton);
    if (router.pathname === '/blog') setActiveButton(blogButton);
    if (router.pathname === '/contact') setActiveButton(contactButton);
  }, [router.pathname]);

  return (
    <div className={styles.navbarContainer}>
      <InnerWrapper>
        <div className={styles.navbar}>
          <Link href="/">
            <a className={styles.logo}>
              <svg viewBox="0 0 67 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M66.0732 8C66.0732 3.58172 62.4915 0 58.0732 0H8C3.58172 0 0 3.58172 0 8V55C0 59.4183 3.58172 63 8 63H58.0732C62.4915 63 66.0732 59.4183 66.0732 55V8ZM19.2267 50.5223C18.2061 50.1684 16.9145 50.6624 16.5967 51.6949L16.5337 51.8997C16.3062 52.6387 16.5886 53.454 17.2858 53.7882C17.8247 54.0466 18.3907 54.2576 18.9838 54.4213C20.0095 54.7044 21.1836 54.8459 22.5062 54.8459C24.7465 54.8459 26.528 54.5114 27.8505 53.8422C29.2001 53.1731 30.2123 52.2209 30.8871 50.9855C31.5619 49.7244 32.0072 48.2446 32.2232 46.546C32.4661 44.8474 32.5876 42.9816 32.5876 40.9484V29.2998C32.5876 28.0364 31.5634 27.0123 30.3 27.0123C29.0367 27.0123 28.0125 28.0364 28.0125 29.2998V41.5661C28.0125 43.1875 27.9315 44.5901 27.7696 45.7739C27.6346 46.9578 27.3647 47.9358 26.9598 48.7079C26.5819 49.4542 26.0151 50.0204 25.2593 50.4065C24.5306 50.7668 23.5724 50.9469 22.3847 50.9469C21.1701 50.9469 20.1175 50.8054 19.2267 50.5223ZM52.6421 52.1945C52.6421 53.4243 53.6391 54.4213 54.8689 54.4213C56.0987 54.4213 57.0957 53.4243 57.0957 52.1945V42.1065C57.0957 40.9999 57.0012 39.9576 56.8123 38.9796C56.6504 37.9759 56.3265 37.1009 55.8406 36.3545C55.3818 35.5824 54.734 34.9776 53.8972 34.5401C53.0875 34.1026 52.0483 33.8838 50.7797 33.8838C49.5381 33.8838 48.3639 34.064 47.2573 34.4243C46.1506 34.7846 45.1519 35.2993 44.2612 35.9685C43.552 36.4968 42.1559 35.9995 42.1559 35.1152C42.1559 34.63 41.7625 34.2313 41.2773 34.2313H40.1315C39.0135 34.2313 38.1071 35.1376 38.1071 36.2556V52.1945C38.1071 53.4243 39.1041 54.4213 40.3339 54.4213C41.5638 54.4213 42.5607 53.4243 42.5607 52.1945V43.6659C42.5607 42.8372 42.6523 41.9929 43.0568 41.2697C43.3172 40.8041 43.6377 40.3753 44.0183 39.9833C44.6931 39.2627 45.4488 38.6965 46.2856 38.2847C47.1493 37.8729 48.013 37.6671 48.8768 37.6671C50.1184 37.6671 51.0496 38.1046 51.6704 38.9796C52.3182 39.8546 52.6421 41.2315 52.6421 43.1103V52.1945Z"
                  fill="#333333"
                />
              </svg>
            </a>
          </Link>

          <button onClick={handleModeClick}>{darkMode ? <SunLight /> : <HalfMoon />}</button>

          <nav>
            <div className={styles.navLinks}>
              <Link href="/">
                <a ref={homeButton}>Home</a>
              </Link>

              <Link href="/about">
                <a ref={aboutButton}>About</a>
              </Link>

              <Link href="/projects">
                <a ref={projectsButton}>Projects</a>
              </Link>

              <Link href="/blog">
                <a ref={blogButton}>Blog</a>
              </Link>

              <Link href="/contact">
                <a ref={contactButton}>Contact</a>
              </Link>

              <button className={styles.menu} onClick={handleMenuClick}>
                {showMobileNav ? <Cancel /> : <Menu />}
              </button>
            </div>

            <div
              className={styles.underline}
              style={{
                width: `${activeButton?.current?.clientWidth}px`,
                transform: `translatex(${activeButton?.current?.offsetLeft}px)`,
              }}
            />
          </nav>
        </div>
      </InnerWrapper>

      {showMobileNav && <MobileNav />}
    </div>
  );
}
