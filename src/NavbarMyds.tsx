import { Button } from "@govtechmy/myds-react/button";
import { ThemeProvider } from "@govtechmy/myds-react/hooks";
import { ButtonIcon, SearchIcon, GlobeIcon } from "@govtechmy/myds-react/icon";
import {
    Navbar,
    NavbarLogo,
    NavbarMenu,
    NavbarMenuItem,
    NavbarAction,
} from "@govtechmy/myds-react/navbar";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@govtechmy/myds-react/select";
import { ThemeSwitch } from "@govtechmy/myds-react/theme-switch";

export default function NavbarMyds() {
    return <Navbar>
        <NavbarLogo
            src="https://d2391uizq0pg2.cloudfront.net/common/logo.svg"
            alt="Malaysian Government Design System"
        >
            PortalMY
        </NavbarLogo>
        <NavbarMenu>
            <NavbarMenuItem href="/menu1">Utama</NavbarMenuItem>
            <NavbarMenuItem href="/menu2">Analitik</NavbarMenuItem>
            <NavbarMenuItem href="/menu3">Siaran</NavbarMenuItem>
            <NavbarMenuItem href="/menu3">Acara</NavbarMenuItem>
        </NavbarMenu>
        <NavbarAction>
            {/* Button Search  : mobile hide if needed  */}
            <Button
                variant="default-ghost"
                iconOnly
                aria-label="search-button"
                size={"small"}
            >
                <ButtonIcon>
                    <SearchIcon />
                </ButtonIcon>
            </Button>

            {/* Button Light Mode Toggle  : mobile hide if needed  */}
            <ThemeProvider>
                <ThemeSwitch as="toggle" />
            </ThemeProvider>


            {/* Select Language Toggle  : mobile hide if needed  */}
            <div className="hidden sm:block">
                <Select defaultValue="EN" variant="outline" size="small">
                    <SelectTrigger aria-label="language-selection">
                        <GlobeIcon className="h-4 w-4"></GlobeIcon>
                        <SelectValue />
                    </SelectTrigger>
                    <SelectContent
                        align="end"
                        className="font-body rounded-[4px] py-1"
                    >
                        <SelectItem value="EN">EN</SelectItem>
                        <SelectItem value="BM">BM</SelectItem>
                    </SelectContent>
                </Select>
            </div>

        </NavbarAction>
    </Navbar>
}