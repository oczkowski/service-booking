import JourneyHeader from "../components/journeyHeader";

const PagesLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <>
            <JourneyHeader journeyName="Make a booking.
            " />
            {children}
        </>
    )
}

export default PagesLayout;