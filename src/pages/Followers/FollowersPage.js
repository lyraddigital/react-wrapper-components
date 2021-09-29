import { Flex } from 'components/Layout';

import { Follower } from 'components/Followers';

import style from './FollowersPage.module.scss';

export const FollowersPage = () => {
    const followers = [
        { username: 'daryl_duck', imagePath: '/images/daryl.png' },
        { username: 'some_tech_girl', imagePath: '/images/kim.jpeg' },
        { username: 'dev_master', imagePath: '/images/ben.png' },
        { username: 'dev_mistress', imagePath: '/images/stacey.jpeg' },
        { username: 'cobol_dev', imagePath: '/images/douglas.png' },
        { username: 'react_guy', imagePath: '/images/jacob.png' },
        { username: 'devops_guru_92', imagePath: '/images/stan.jpeg' },
        { username: 'this_is_random', imagePath: '/images/john.jpeg' },
        { username: 'okyou', imagePath: '/images/sarah.jpeg' }
    ];

    const followerEls = followers.map((follower, i) => (
        <Follower key={i} follower={follower} />
    ));

    return (
        <Flex justifyContent="center">
            <section id={ style.followersSection }>
                { followerEls }
            </section>         
        </Flex>
    );
}
