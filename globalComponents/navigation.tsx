import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

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
  { title: "Book a service", path: "/book-a-service" },
];

const Navigation = () => {
  return (
    <NavigationMenu className="grow-0 p-3 border-b-black border-1">
      <NavigationMenuList className="w-screen">
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
    </NavigationMenu>
  );
};

export default Navigation;
