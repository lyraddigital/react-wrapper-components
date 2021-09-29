import { Flex } from 'components/Layout';

import { InsightTile } from "components/Insights";

import style from './InsightsPage.module.scss';

export const InsightsPage = () => {
    const insights = [
        { title: 'Stream Duration', subTitle: '5h20m last stream', insight: '2h1m' },
        { title: 'Average Viewers', subTitle: '+0 from last stream', insight: '0' },
        { title: 'Max Viewers', subTitle: '+1 from last stream', insight: '3' },
        { title: 'Unique Viewers', subTitle: '+1 from last stream', insight: '14' },
        { title: 'Unique Chatters', subTitle: '-3 from last stream', insight: '1' },
        { title: 'Live Views', subTitle: '-13 from last stream', insight: '15' },
        { title: 'Followers', subTitle: '-11 from last stream', insight: '1' },
        { title: 'New Subscriptions', subTitle: '+0 from last stream', insight: '0' }
    ];

    const insightEls = insights.map((insight, i) => (
        <InsightTile
            key={i}
            title={insight?.title}
            subTitle={insight?.subTitle}
            insight={insight?.insight} />
    ));

    return (
        <Flex justifyContent="center" alignItems="start">
            <div id={ style.insightsGrid }>
                { insightEls } 
            </div>         
        </Flex>
    );
}