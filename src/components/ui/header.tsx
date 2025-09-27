import { Button } from "@/components/ui/button";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Menu, MoveRight, X, Stars } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

function Header() {
    const navigationItems = [
        {
            title: "Home",
            href: "/",
            description: "",
        },
        {
            title: "Constellation",
            description: "Explore the cosmic connections and stellar networks.",
            items: [
                {
                    title: "Star Maps",
                    href: "/star-maps",
                },
                {
                    title: "Nebula Analytics",
                    href: "/analytics",
                },
                {
                    title: "Cosmic Dashboard",
                    href: "/dashboard",
                },
                {
                    title: "Stellar Records",
                    href: "/records",
                },
            ],
        },
        {
            title: "Union",
            description: "Join the galactic community and celestial alliance.",
            items: [
                {
                    title: "About Lyra",
                    href: "/about",
                },
                {
                    title: "Stellar Funding",
                    href: "/funding",
                },
                {
                    title: "Cosmic Partners",
                    href: "/partners",
                },
                {
                    title: "Contact Mission",
                    href: "/contact",
                },
            ],
        },
    ];

    const [isOpen, setOpen] = useState(false);
    
    return (
        <header className="w-full z-40 fixed top-0 left-0 bg-background/95 backdrop-blur-lg border-b border-border/40">
            <div className="container relative mx-auto min-h-20 flex gap-4 flex-row lg:grid lg:grid-cols-3 items-center">
                <div className="justify-start items-center gap-4 lg:flex hidden flex-row">
                    <NavigationMenu className="flex justify-start items-start">
                        <NavigationMenuList className="flex justify-start gap-4 flex-row">
                            {navigationItems.map((item) => (
                                <NavigationMenuItem key={item.title}>
                                    {item.href ? (
                                        <NavigationMenuLink asChild>
                                            <Link to={item.href}>
                                                <Button variant="ghost" className="font-vanilla">
                                                    {item.title}
                                                </Button>
                                            </Link>
                                        </NavigationMenuLink>
                                    ) : (
                                        <>
                                            <NavigationMenuTrigger className="font-vanilla font-medium text-sm">
                                                {item.title}
                                            </NavigationMenuTrigger>
                                            <NavigationMenuContent className="!w-[450px] p-4">
                                                <div className="flex flex-col lg:grid grid-cols-2 gap-4">
                                                    <div className="flex flex-col h-full justify-between">
                                                        <div className="flex flex-col">
                                                            <p className="text-base font-sunshine font-bold">{item.title}</p>
                                                            <p className="text-muted-foreground text-sm font-vanilla">
                                                                {item.description}
                                                            </p>
                                                        </div>
                                                        <Button size="sm" className="mt-10 font-vanilla" variant="cosmic">
                                                            Join the Union
                                                        </Button>
                                                    </div>
                                                    <div className="flex flex-col text-sm h-full justify-end">
                                                        {item.items?.map((subItem) => (
                                                            <NavigationMenuLink
                                                                key={subItem.title}
                                                                asChild
                                                                className="flex flex-row justify-between items-center hover:bg-muted py-2 px-4 rounded"
                                                            >
                                                                <Link to={subItem.href} className="flex flex-row justify-between items-center w-full">
                                                                    <span className="font-vanilla">{subItem.title}</span>
                                                                    <MoveRight className="w-4 h-4 text-muted-foreground" />
                                                                </Link>
                                                            </NavigationMenuLink>
                                                        ))}
                                                    </div>
                                                </div>
                                            </NavigationMenuContent>
                                        </>
                                    )}
                                </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
                <div className="flex lg:justify-center items-center gap-2">
                    <img src={logo} className="h-8 w-8" />
                    <p className="font-sunshine font-bold text-xl bg-gradient-primary bg-clip-text text-white">
                        Lyra Union
                    </p>
                </div>
                <div className="flex justify-end w-full gap-4">
                    <Button variant="ghost" className="hidden md:inline font-vanilla">
                        Explore Stars
                    </Button>
                    <div className="border-r hidden md:inline border-border/40"></div>
                    <Button variant="outline" className="font-vanilla">
                        Sign in
                    </Button>
                    <Button variant="cosmic" className="font-vanilla">
                        Join Union
                    </Button>
                </div>
                <div className="flex w-12 shrink lg:hidden items-end justify-end">
                    <Button variant="ghost" onClick={() => setOpen(!isOpen)}>
                        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </Button>
                    {isOpen && (
                        <div className="absolute top-20 border-t flex flex-col w-full right-0 bg-background/95 backdrop-blur-lg shadow-lg py-4 container gap-8 border-border/40">
                            {navigationItems.map((item) => (
                                <div key={item.title}>
                                    <div className="flex flex-col gap-2">
                                        {item.href ? (
                                            <Link
                                                to={item.href}
                                                className="flex justify-between items-center"
                                                onClick={() => setOpen(false)}
                                            >
                                                <span className="text-lg font-vanilla">{item.title}</span>
                                                <MoveRight className="w-4 h-4 stroke-1 text-muted-foreground" />
                                            </Link>
                                        ) : (
                                            <p className="text-lg font-sunshine font-bold">{item.title}</p>
                                        )}
                                        {item.items &&
                                            item.items.map((subItem) => (
                                                <Link
                                                    key={subItem.title}
                                                    to={subItem.href}
                                                    className="flex justify-between items-center"
                                                    onClick={() => setOpen(false)}
                                                >
                                                    <span className="text-muted-foreground font-vanilla">
                                                        {subItem.title}
                                                    </span>
                                                    <MoveRight className="w-4 h-4 stroke-1" />
                                                </Link>
                                            ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}

export { Header };