import style from './Follower.module.scss';

export const Follower = ({ follower }) => {
    return (
        <article className={ style.follower }>
            <img src={ follower?.imagePath } alt={ follower?.username } />
            <div>{ follower?.username }</div>
        </article>
    );
}