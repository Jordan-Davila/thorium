import Link from "next/link";

export default function Logo() {
    return (
        <Link href="/">
            <a className="logo w-20 overflow-hidden inline-block">
                <img src="assets/icon-logo.svg" alt="Thorium Digital Logo" className="object-cover w-full" />
            </a>
        </Link>
    );
}
