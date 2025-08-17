import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { Button } from "@/components/ui/button"
import { auth0 } from "@/lib/auth0";

type NavigationItem = {
  title: string;
  path: string;
};

type NavigationItemNested = {
  title: string;
  items: NavigationItem[];
};

type NavigationItemsType = Array<NavigationItem>;

const navigationItems: NavigationItemsType = [
  { title: "Home", path: "/" },
  { title: "Pricing", path: "/pricing" },
  { title: "Make a booking", path: "/book" },
];

const Navigation = async () => {
  const session = await auth0.getSession();

  return (
    <NavigationMenu className="grow-0 p-3 border-b-white border-2 w-screen flex justify-around max-w-none">
      <NavigationMenuList>
        {navigationItems.map((item) => {
          return (
            <NavigationMenuItem key={item.title}>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <Link href={item.path}>{item.title}</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
      {session ? (
        <div className="flex gap-5 items-center">
          Hi {session.user.given_name}!
          <Button asChild>
            <Link className="font-medium" href="/manage/business">Business dashboard</Link>
          </Button>
          <Button asChild>
            <Link className="font-medium" href="/auth/logout">Log out</Link>
          </Button>
        </div>
      ) : (
        <Button asChild>
          <Link className="font-medium" href="/manage/organization/setup">Try free for 21 days</Link>
        </Button>
      )}
    </NavigationMenu>
  );
};

export default Navigation;
