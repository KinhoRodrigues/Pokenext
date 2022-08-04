import Link from 'next/link'
import Image from 'next/image'
import styles from '/./styles/Navbar.module.css'
export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Image
          src="/images/pokeball.png"
          width="30"
          height="30"
          alt="Pokenext"
        />
        <h1>Pokenext</h1>
      </div>
      <ul className={styles.link_items}>
        <li>
          <Link href="/">
            <a color='primary' href>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a color='primary' href>Sobre</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
