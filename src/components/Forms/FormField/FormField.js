import style from './FormField.module.scss';

export const FormField = ({ fieldName, children, explanation }) => {
    const explanationEl = explanation ? (
        <div className={ style.formFieldExplanation }>{explanation}</div>
    ): null;

    return (
        <>
            <label className={ style.formFieldLabel }>{ fieldName }</label>
            <div className={ style.formField }>
                { children }
                { explanationEl }
            </div>
        </>
    );
};