import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

export default function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink href="/hello">About Me</NavigationMenuLink>
          <NavigationMenuLink href="/hello">About Me</NavigationMenuLink>
          <NavigationMenuTrigger>About</NavigationMenuTrigger>
          <NavigationMenuContent className="flex flex-col text-white">
            <NavigationMenuLink href="/hello">About Me</NavigationMenuLink>
            <NavigationMenuLink>Skills </NavigationMenuLink>
            <NavigationMenuLink>Resume</NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
