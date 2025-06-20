import Link from 'next/link';

const links = [
  { href: '/client', label: 'client-side counter' },
  { href: '/drinks', label: 'API calls drinks' },
  { href: '/tasks', label: 'CRUD tasks' },
  { href: './parallel', label: 'parallel with PPR'}
];


const Navbar = () => {
  return ( 
        <nav className='bg-base-300 py-4'>
      <div className='navbar px-8 max-w-6xl mx-auto flex-col sm:flex-row'>
        <li>
        <Link href='/' className='btn btn-primary'>Home</Link>
        </li>
        <ul className='menu menu-horizontal md:ml-8'>
            {links.map((link => {
                return (
                    <li key={link.href}>
                        <Link href={link.href} className='capitalize'>{link.label}</Link>
                    </li>
                )
            }))}
        </ul>

      </div>
      </nav>
  )}
  export default Navbar