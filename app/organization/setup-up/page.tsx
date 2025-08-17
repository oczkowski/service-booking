import { auth0 } from "@/lib/auth0";
import { Input } from "@/components/ui/input"
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

const BusinessDashboard = async () => {
    const session = await auth0.getSession();

    if (!session) {
        return;
    }

    return (
        <div className="bg-black h-screen text-white flex gap-4 flex-col justify-center items-center">
            <Card className="w-sm">
                <CardHeader>
                    <CardTitle >
                        <h1 className="text-2xl">Setup organization</h1>
                    </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-3">
                    <Input type="legalName" placeholder="Legal organization name" />
                    <Input type="firstLineOfAddress" placeholder="First line of address" />
                    <Input type="city" placeholder="City" />
                    <Input type="postCode" placeholder="Post code" />
                </CardContent>
            </Card>
        </div>
    );
};

export default BusinessDashboard;
