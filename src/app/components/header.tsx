import Link from 'next/link'

const links = [
  { href: '/home', label: 'Home' },
  { href: '/page1', label: 'Page1' }
]

export default function Header() {
  return (
    <header>
      <nav className="flex gap-x-2 p-2">
        {links.map(link => (
          <Link
            key={link.label}
            href={link.href}>
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  )
}
