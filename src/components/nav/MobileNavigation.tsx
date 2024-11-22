import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import "../LoginDropdown.css";
import Navigation from "./Navigation";

export default function MobileNavTrigger() {

    return (
        <div className="mobile-nav">
            <DropdownMenu.Root>
                <DropdownMenu.Trigger asChild>
                    <button className="IconButton" aria-label="Site navigation">
                        <img src="/images/hamburger-menu.svg" alt="" />
                    </button>
                </DropdownMenu.Trigger>
                
                    <DropdownMenu.Content asChild className="DropdownMenuContent" sideOffset={5}>
                        <Navigation orientation="vertical" />
                    </DropdownMenu.Content>
                
            </DropdownMenu.Root>
        </div>
    );
}
