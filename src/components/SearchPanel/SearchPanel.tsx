import React, {FC, ChangeEvent} from "react";
import SearchInput from "../SearchInput/SearchInput";
import ButtonFilter from "../ButtonFilter/ButtonFilter";
import './SearchPanel.css';
import {buttonFilterArray} from "../../utils/constants";

interface SearchPanelInterface {
    onFilter: (value: string) => void,
    filter: string,
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void,
    textForSearch: string,
}

const SearchPanel: FC<SearchPanelInterface> = ({onFilter, filter, textForSearch, handleChange}) => {
    return (
        <section className="search-panel">
            <SearchInput textForSearch={textForSearch} handleChange={handleChange}/>
            <div className="btn-group ms-1">
                {buttonFilterArray.map(item =>
                    <ButtonFilter key={item.name} label={item.label} name={item.name} filter={filter} onFilter={() => {
                        onFilter(item.name);
                    }}/>
                )}
            </div>
        </section>
    );
}

export default SearchPanel;
