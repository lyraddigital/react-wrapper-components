import style from './GroupForm.module.scss';

export const GroupForm = ({ title, children }) => {
    return (
        <form className={ style.groupForm }>
            <h2>{ title }</h2>
            <div className={ style.groupFormBody }> 
                { children }
            </div>
            <div className={style.buttonRow}>
                <button type="button">Save</button>
            </div>
        </form>
    );
};