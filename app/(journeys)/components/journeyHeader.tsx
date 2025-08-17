import Link from "next/link";
import { Button } from "@/components/ui/button"

interface JourneyHeaderProps {
    journeyName: string;
}

const JourneyHeader = ({ journeyName }: JourneyHeaderProps) => {
    return (
        <nav className="flex justify-between items-center px-5 p-3 border-b-black border-1">
            <Button asChild>
                <Link className="font-medium" href="/">Go back.</Link>
            </Button>
            <span className="font-medium text-xl">{journeyName}</span>
        </nav>
    )
}

export default JourneyHeader;