import { useState } from "react";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

export default function DropdownMenuDemo() {
    const [bookmarksChecked, setBookmarksChecked] = useState(true);
    const [urlsChecked, setUrlsChecked] = useState(false);
    const [person, setPerson] = useState("pedro");

    return (
        <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
                <button className="IconButton" aria-label="Customise options">
                    asdf
                </button>
            </DropdownMenu.Trigger>

            <DropdownMenu.Portal>
                <DropdownMenu.Content className="DropdownMenuContent" sideOffset={5}>
                    <DropdownMenu.Item className="DropdownMenuItem">
                        New Tab <div className="RightSlot">⌘+T</div>
                    </DropdownMenu.Item>
                    <DropdownMenu.Item className="DropdownMenuItem">
                        New Window <div className="RightSlot">⌘+N</div>
                    </DropdownMenu.Item>
                    <DropdownMenu.Item className="DropdownMenuItem" disabled>
                        New Private Window <div className="RightSlot">⇧+⌘+N</div>
                    </DropdownMenu.Item>
                    <DropdownMenu.Sub>
                        <DropdownMenu.SubTrigger className="DropdownMenuSubTrigger">
                            More Tools
                            <div className="RightSlot">
                                -+
                            </div>
                        </DropdownMenu.SubTrigger>
                        <DropdownMenu.Portal>
                            <DropdownMenu.SubContent
                                className="DropdownMenuSubContent"
                                sideOffset={2}
                                alignOffset={-5}
                            >
                                <DropdownMenu.Item className="DropdownMenuItem">
                                    Save Page As… <div className="RightSlot">⌘+S</div>
                                </DropdownMenu.Item>
                                <DropdownMenu.Item className="DropdownMenuItem">
                                    Create Shortcut…
                                </DropdownMenu.Item>
                                <DropdownMenu.Item className="DropdownMenuItem">
                                    Name Window…
                                </DropdownMenu.Item>
                                <DropdownMenu.Separator className="DropdownMenu.Separator" />
                                <DropdownMenu.Item className="DropdownMenuItem">
                                    Developer Tools
                                </DropdownMenu.Item>
                            </DropdownMenu.SubContent>
                        </DropdownMenu.Portal>
                    </DropdownMenu.Sub>

                    <DropdownMenu.Separator className="DropdownMenuSeparator" />

                    <DropdownMenu.CheckboxItem
                        className="DropdownMenuCheckboxItem"
                        checked={bookmarksChecked}
                        onCheckedChange={setBookmarksChecked}
                    >
                        <DropdownMenu.ItemIndicator className="DropdownMenuItemIndicator">
                            *
                        </DropdownMenu.ItemIndicator>
                        Show Bookmarks <div className="RightSlot">⌘+B</div>
                    </DropdownMenu.CheckboxItem>
                    <DropdownMenu.CheckboxItem
                        className="DropdownMenuCheckboxItem"
                        checked={urlsChecked}
                        onCheckedChange={setUrlsChecked}
                    >
                        <DropdownMenu.ItemIndicator className="DropdownMenuItemIndicator">
                            *
                        </DropdownMenu.ItemIndicator>
                        Show Full URLs
                    </DropdownMenu.CheckboxItem>

                    <DropdownMenu.Separator className="DropdownMenuSeparator" />

                    <DropdownMenu.Label className="DropdownMenuLabel">
                        People
                    </DropdownMenu.Label>
                    <DropdownMenu.RadioGroup value={person} onValueChange={setPerson}>
                        <DropdownMenu.RadioItem
                            className="DropdownMenuRadioItem"
                            value="pedro"
                        >
                            <DropdownMenu.ItemIndicator className="DropdownMenuItemIndicator">
                                ~
                            </DropdownMenu.ItemIndicator>
                            Pedro Duarte
                        </DropdownMenu.RadioItem>
                        <DropdownMenu.RadioItem
                            className="DropdownMenuRadioItem"
                            value="colm"
                        >
                            <DropdownMenu.ItemIndicator className="DropdownMenuItemIndicator">
                                ~
                            </DropdownMenu.ItemIndicator>
                            Colm Tuite
                        </DropdownMenu.RadioItem>
                    </DropdownMenu.RadioGroup>

                    <DropdownMenu.Arrow className="DropdownMenuArrow" />
                </DropdownMenu.Content>
            </DropdownMenu.Portal>
        </DropdownMenu.Root>
    );
}
