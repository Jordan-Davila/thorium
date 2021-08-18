import AppLayout from "../components/AppLayout";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Content from "../components/Content";

export default function Home() {
    return (
        <AppLayout>
            <main className="bg-spring-wood w-screen h-screen overflow-y-auto">
                <Header />
                <Hero />
                <Content />
            </main>
        </AppLayout>
    );
}
