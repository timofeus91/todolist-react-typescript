import React, {FC} from "react";
import SearchInput from "../SearchInput/SearchInput";
import ButtonFilter from "../ButtonFilter/ButtonFilter";

const SearchPanel: FC = () => {
    return (
        <section className="search-panel">
            <SearchInput/>
            <ButtonFilter/>
        </section>
    );
}

export default SearchPanel;
