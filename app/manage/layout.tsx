import Navigation from "@/globalComponents/navigation";
import Footer from "@/globalComponents/footer";

const PagesLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <div className="flex flex-col min-h-screen max-w-screen">
            <Navigation />
            <div className="grow">{children}</div>
        </div>
    )
}

export default PagesLayout;