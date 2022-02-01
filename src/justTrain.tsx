import React, {ChangeEvent, FC, FormEvent, useState} from "react";


const WordForm : FC = () => {
    const [value, setValue] = useState('');

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        alert('Отправленный текст: ' + value);
    }

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);

    }

    return (
        <form onSubmit={handleSubmit} >
            <label>Текст</label>
            <input value={value} onChange={handleChange} type='text' required />
            <button type="submit" >Открой alert</button>
        </form>
    )
}
export default WordForm;