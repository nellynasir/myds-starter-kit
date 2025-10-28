import {
    SearchBar,
    SearchBarInput,
    SearchBarInputContainer,
    SearchBarSearchButton,
    SearchBarHint,
} from "@govtechmy/myds-react/search-bar";
import { Pill } from "@govtechmy/myds-react/pill";


export default function SearchBarMyds() {
    return <SearchBar size="large" className="w-full max-w-[600px]">
        <SearchBarInputContainer>
            <SearchBarInput placeholder="Cari kata kunci: " />
            <SearchBarHint className="hidden lg:flex">
                Tekan <Pill size="small">/</Pill> untuk cari
            </SearchBarHint>
            <SearchBarSearchButton />
        </SearchBarInputContainer>
    </SearchBar>
}