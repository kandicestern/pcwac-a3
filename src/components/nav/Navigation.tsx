import "../../App.css";
import NavAboutUs from "./NavAboutUs";
import NavAcctsBilling from './NavAcctsBilling';
import NavEducation from './NavEducation';
import NavPlumbBuildDev from './NavPlumbBuildDev';
import NavWaterEnv from "./NavWaterEnv";
import NavYourBusiness from './NavYourBusiness';
import NavYourHome from './NavYourHome';

import * as NavigationMenu from "@radix-ui/react-navigation-menu";

import "./Navigation.css";
import { ReactNode } from "react";

export default function Navigation() {
    return (
        <div className="navigation aem-GridColumn aem-GridColumn--default--12">
            <NavigationMenu.Root className="NavigationMenuRoot">
                <NavigationMenu.List className="NavigationMenuList">
                    <NavigationMenu.Item>
                        <NavigationMenu.Trigger className="NavigationMenuTrigger">
                            Accounts &amp; billing
                        </NavigationMenu.Trigger>
                        <NavigationMenu.Content className="NavigationMenuContent">
                            <NavAcctsBilling />
                        </NavigationMenu.Content>
                    </NavigationMenu.Item>

                    <NavigationMenu.Item className="NavigationMenuItem">
                        <NavigationMenu.Trigger className="NavigationMenuTrigger">
                            Your home
                        </NavigationMenu.Trigger>
                        <NavigationMenu.Content className="NavigationMenuContent">
                            <NavYourHome />
                        </NavigationMenu.Content>
                    </NavigationMenu.Item>

                    <NavigationMenu.Item className="NavigationMenuItem">
                        <NavigationMenu.Trigger className="NavigationMenuTrigger">
                            Your business
                        </NavigationMenu.Trigger>
                        <NavigationMenu.Content className="NavigationMenuContent">
                            <NavYourBusiness />
                        </NavigationMenu.Content>
                    </NavigationMenu.Item>

                    <NavigationMenu.Item className="NavigationMenuItem">
                        <NavigationMenu.Trigger className="NavigationMenuTrigger">
                            Education
                        </NavigationMenu.Trigger>
                        <NavigationMenu.Content className="NavigationMenuContent">
                            <NavEducation />
                        </NavigationMenu.Content>
                    </NavigationMenu.Item>

                    <NavigationMenu.Item className="NavigationMenuItem">
                        <NavigationMenu.Trigger className="NavigationMenuTrigger">
                            About
                        </NavigationMenu.Trigger>
                        <NavigationMenu.Content className="NavigationMenuContent">
                            <NavAboutUs />
                        </NavigationMenu.Content>
                    </NavigationMenu.Item>
                </NavigationMenu.List>
            </NavigationMenu.Root>
        </div>
    )

}