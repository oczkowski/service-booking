import { auth0 } from "@/lib/auth0";
import Link from "next/link";
import Image from "next/image";

const BusinessDashboard = async () => {
    const session = await auth0.getSession();

    if (!session) {
        return (
            <div>
                Not authenticated. <Link href="/auth/login">Log in</Link>
            </div>
        );
    }
    return (
        <>
            <p>Dashboard</p>
            <div>
                {session.user.picture && session.user.name && (
                    <Image src={session?.user.picture} alt={session?.user.name} />
                )}
                <h2>{session?.user.name}</h2> <p>{session?.user.email}</p>
                <Link href="/auth/logout">Log out</Link>
            </div>
        </>
    );
};

export default BusinessDashboard;
