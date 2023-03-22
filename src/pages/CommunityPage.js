import React from 'react';
import ContentLayout from '../components/ContentLayout';
import BarChart from '../components/charts/BarChart';
import DonutChart from '../components/charts/DonutChart'

export default function CommunityPage() {
    return (
        <ContentLayout>
            <article className="flex flex-col items-center col-span-5">
                <h2 className="text-xl font-poppins font-semibold text-stackup">Community Impact</h2>
                <BarChart dataset={require('../data/hardStats.json')} dimensions={['month', 'stackies who have managed to buy things thanks to stackup', 'stackies who have managed to gain opportunities because of stackup', 'stackies who found support in the community']} series={[{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }]} />
            </article>
            <article className="flex flex-col items-center col-span-3">
                <h2 className="text-xl font-poppins font-semibold text-stackup text-center">No. of Engaged Stackies <br /> per Partner Campaign</h2>
                <DonutChart dataset={require('../data/partnerCampaign.json')} name={'partner'} value={'No. of Stackies engaged with each partner campaign'} />
            </article>
            <article className="flex flex-col items-center col-span-3">
                <img src={require('../assets/trophy.png')} className="h-24"/>
                <h2 className="text-2xl font-poppins font-semibold text-stackup">Stackies Awards</h2>
                <p className="text-sm font-poppins text-gray-700">Stackie of the Month, new Power Stackies and more!</p>
                <a href="/" className="bg-stackup text-sm font-poppins text-white px-3 py-2 rounded-lg mt-2 hover:bg-stackup/90">Check Out</a>
            </article>
            <article className="flex flex-col items-center col-span-5">
                <h2 className="text-xl font-poppins font-semibold text-stackup">Skillful Stackies from StackUp</h2>
                <BarChart dataset={require('../data/hardStats.json')} dimensions={['month', 'stackies who did well (top 10) in hackathons and quizzes outside of StackUp', 'stackies who successfully completed 3 partner campaigns and above', 'stackies who successfully completed 5 partner campaigns and above']} series={[{ type: 'line' }, { type: 'line', smooth: true }, { type: 'bar' }]} />
            </article>
        </ContentLayout>
    )
}