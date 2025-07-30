import { auth0 } from "@/lib/auth0";
import Link from 'next/link';

const BusinessDashboard = async () => {
    const session = await auth0.getSession();

    if (!session) {
        return <div>Not authenticated. <Link href="/auth/login">Log in</Link></div>;
    }
    return (
        <>
            <p>Dashboard</p>
            <div>
                <img src={session?.user.picture} alt={session?.user.name} />{" "}
                <h2>{session?.user.name}</h2> <p>{session?.user.email}</p>{" "}
                <Link href="/auth/logout">Log out</Link>
            </div>

        </>
    );
};

export default BusinessDashboard;
