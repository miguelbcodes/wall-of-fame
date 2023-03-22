import React from 'react';
import ContentLayout from '../components/ContentLayout';
import BarChart from '../components/charts/BarChart';
import DonutChart from '../components/charts/DonutChart'

export default function CommunityPage() {
    return (
        <ContentLayout>
            <article className="flex flex-col items-center col-span-5">
                <h2>Community Impact</h2>
                <p>Instances of Stackies who have managed to</p>
                <BarChart dataset={require('../data/hardStats.json')} dimensions={['month', 'stackies who have managed to buy things thanks to stackup', 'stackies who have managed to gain opportunities because of stackup', 'stackies who found support in the community']} series={[{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }]} />
            </article>
            <article className="flex flex-col items-center col-span-3">
                <h2>Community Impact</h2>
                <p>Instances of Stackies who have managed to</p>
                <DonutChart dataset={require('../data/partnerCampaign.json')} name={'partner'} value={'No. of Stackies engaged with each partner campaign'} />
            </article>
            <article className="flex flex-col items-center col-span-3">
                <h2>Community Impact</h2>
                <p>Instances of Stackies who have managed to</p>
                <BarChart dataset={require('../data/hardStats.json')} dimensions={['month', 'stackies who did well (top 10) in hackathons and quizzes outside of StackUp', 'stackies who successfully completed 3 partner campaigns and above', 'stackies who successfully completed 5 partner campaigns and above']} series={[{ type: 'line' }, { type: 'line', smooth: true }, { type: 'bar' }]} />
            </article>
            <article className="flex flex-col items-center col-span-5">
                <h2>Community Impact</h2>
                <p>Instances of Stackies who have managed to</p>
                <BarChart dataset={require('../data/events.json')} dimensions={['event', 'Percentage Signedup and Attended', 'Total Attendance over Expected Attendance', 'Industry Average']} series={[{ type: 'bar' }, { type: 'bar' }, { type: 'line' }]} />
            </article>
        </ContentLayout>
    )
}