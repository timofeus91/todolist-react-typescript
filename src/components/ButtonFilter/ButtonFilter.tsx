import React, {FC} from "react";
import './ButtonFilter.css';

interface ButtonFilterInterface {
    label: string,
    name: string,
    filter: string,
    onFilter: () => void,
}

const ButtonFilter: FC<ButtonFilterInterface> = ({label,name,filter,onFilter}) => {

    const isActive = name === filter;
    const classNames = 'btn ' + (isActive ? 'btn-secondary' : 'btn-outline-secondary');

    return (
        <button className={classNames} type="button" onClick={onFilter}>{label}</button>
    );
}

export default ButtonFilter;
