import s from './Header.module.scss'
import Navigation from '../Navigation'

export default function Header() {

    return (
        <header className={s.header}>
            <Navigation />
        </header>
    )
}
