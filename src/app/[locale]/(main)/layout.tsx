import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import ScrollToTopButton from "@/components/ui/ScrollToTopButton";

export default function MainLayout({children}: {children: React.ReactNode}) {
    return (
        <div className='min-h-screen flex flex-col'>
            <Header />
            <main className='flex flex-col flex-grow'>
                {children}
                <ScrollToTopButton />
            </main>
            <Footer />
        </div>
    );
};