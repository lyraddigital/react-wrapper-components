import style from './FancyTextBox.module.scss';

export const FancyTextBox = ({ hideText, value }) => {
    const type = hideText ? 'password': 'text';

    return (
        <input className={style.fancyTextbox} type={type} defaultValue={value} />
    );
};