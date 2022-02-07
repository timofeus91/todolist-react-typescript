import React, {FC, ChangeEvent} from "react";

interface SearchInputInterface {
    handleChange: (e : ChangeEvent<HTMLInputElement>) => void,
    textForSearch: string,
}

const SearchInput: FC<SearchInputInterface> = ({handleChange, textForSearch}) => {




    return (
        <input className="form-control" placeholder="Enter to search" type="text" value={textForSearch}
               onChange={handleChange}/>
    );
}

export default SearchInput;
