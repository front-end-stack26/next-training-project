import Link from 'next/link'

const Navbar = () => {
  const  properties = {
    display: "flex",
    justifyContent: "space-between"
  }
  return (
    <nav className='px-12 py-4'>
        <ul style={properties}>
            <li>Logo</li>
            <ul style={{...properties, gap: 20}}>
                <li>
                    <Link href="/">Home</Link>
                </li>
            </ul>
        </ul>
    </nav>
  )
}

export default Navbar