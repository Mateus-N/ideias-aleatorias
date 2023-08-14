import './styles.css'

export default function Input({ placeholderText, labelText, nameId, tipo = "text" }) {
    return (
        <label htmlFor={nameId} className="label__input">{labelText}
            <input
                className='input__form'
                type={tipo}
                placeholder={placeholderText}
                id={nameId}
                name={nameId}
            />
        </label>
    )
}
