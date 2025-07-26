import JourneyHeader from "../components/journeyHeader";

const PagesLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <>
            <JourneyHeader journeyName="Book a service." />
            {children}
        </>
    )
}

export default PagesLayout;