import "./LoginDropdown.css";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

export default function LoginDropdownDesktop() {
  return (
    <DropdownMenu.Root>
      <div className="sw-login-dropdown">
        <DropdownMenu.Trigger asChild>
          <button className="sw-login-dropbtn">
            <span className="sw-login-text sw-header-text">
              Log in
            </span>
          </button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Portal>
          <DropdownMenu.Content className="DropdownMenuContent">
            <div className="sw-login-desktop-content">
              <DropdownMenu.Item className="sw-login-link">
                <a
                  href="https://www.sydneywater.com.au/accounts-billing/my-account/log-in-to-my-account.html"
                  target="_self">
                  My Account
                </a>
              </DropdownMenu.Item>
              <DropdownMenu.Item className="sw-login-link">
                <a
                  href="https://www.sydneywater.com.au/plumbing-building-developing/building/sydney-water-tap-in.html"
                  target="_self">Sydney Water
                  Tap in</a>
              </DropdownMenu.Item>
            </div>
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </div>
    </DropdownMenu.Root>

  )
}