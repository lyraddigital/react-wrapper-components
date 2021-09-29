import style from './InsightTile.module.scss';

export const InsightTile = ({ insight, subTitle, title }) => {
    return (
        <section className={ style.insightTile }>
            <h3>{ title }</h3>
            <h4>{ subTitle }</h4>

            <div className={ style.insight }>{ insight }</div>
        </section>
    );
}