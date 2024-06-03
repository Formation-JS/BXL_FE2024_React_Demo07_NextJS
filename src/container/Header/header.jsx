import Link from "next/link";

const Header = () => {

    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link href="/">Accueil</Link>
                    </li>
                    <li>
                        <Link href="/region">Region</Link>
                    </li>
                    <li>
                        <Link href="/pokemon">Pokemon</Link>
                    </li>
                    <li>
                        <Link href="/about">A propos</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;