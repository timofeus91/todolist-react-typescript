import React, {FC} from "react";
import SearchInput from "../SearchInput/SearchInput";
import ButtonFilter from "../ButtonFilter/ButtonFilter";
import './SearchPanel.css';
import {buttonFilterArray} from "../../utils/constants";

const SearchPanel: FC = () => {
    return (
        <section className="search-panel">
            <SearchInput/>
            <div className="btn-group ms-1">
                {buttonFilterArray.map(item =>
                    <ButtonFilter key={item.name} label={item.label} name={item.name} filter={item.name} />
                )}
            </div>
        </section>
    );
}

export default SearchPanel;
