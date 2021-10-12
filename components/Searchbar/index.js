import { SearchInputWrapper, SearchInput } from "./styles";

export const Searchbar = ({...rest}) => {
    return (
       <SearchInputWrapper>
           <SearchInput {...rest}/>
       </SearchInputWrapper>
    )
}

export default Searchbar;
