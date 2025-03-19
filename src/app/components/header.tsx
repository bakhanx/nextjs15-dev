import Link from 'next/link'

const links = [
  { href: '/', label: 'Home' },
  { href: '/page1', label: 'Page1' },
  { href: '/draft', label: 'Draft' },
  { href: '/auth', label: 'Auth' },
]

export default function Header() {
  return (
    <header>
      <nav className="flex gap-x-2 p-2 border-b-2">
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
