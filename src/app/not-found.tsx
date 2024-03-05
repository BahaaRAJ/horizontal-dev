import Link from 'next/link'

export default function NotFound() {
    return (
        <div style={{ textAlign: 'center', paddingTop: '40rem' }}>
            <h1>404</h1>
            <p>Whoops, we couldn&apos;d that page.</p>
            <Link style={{ color: '#77E41B' }} href="/">
                Head Home
            </Link>
        </div>
    )
}
