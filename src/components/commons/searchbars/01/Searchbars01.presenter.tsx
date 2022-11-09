import { Search, SearchBar, SearchIcon } from "./Searchbars01.styles";
import { ISearchbars01UIProps } from "./Searchbars01.types";

export default function Searchbars01UI(props: ISearchbars01UIProps) {
  return (
    <SearchBar>
      <SearchIcon src="images/search.png" />
      <Search
        placeholder="검색어를 입력해 주세요."
        onChange={props.onChangeSearchbar}
      />
    </SearchBar>
  );
}
