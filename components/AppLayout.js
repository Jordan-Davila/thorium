import Head from "next/head";
export default function AppLayout({ children }) {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Thorium Digital Coding Test 💖</title>
            </Head>
            {children}
        </>
    );
}
