import React from 'react';
import ContentLayout from '../components/ContentLayout';
import BarChart from '../components/charts/BarChart';

export default function CommunityPage() {
    return (
        <ContentLayout>
            <section className="container mx-auto px-3 py-4 h-full grid grid-cols-3 grid-rows-2 gap-5">
                 <article className="flex flex-col items-center">
                    <h2 className="text-xl font-poppins font-semibold text-stackup">StackUp Official Events</h2>
                    <BarChart dataset={require('../data/events.json')} dimensions={['event', 'Percentage Signedup and Attended', 'Total Attendance over Expected Attendance', 'Industry Average']} series={[{ type: 'bar' }, { type: 'bar' }, { type: 'line' }]} />
                </article>
                <article className="flex flex-col items-center">
                    <h2 className="text-xl font-poppins font-semibold text-stackup text-center">Community Impact</h2>
                    <BarChart dataset={require('../data/hardStats.json')} dimensions={['month', 'stackies who have managed to buy things thanks to stackup', 'stackies who have managed to gain opportunities because of stackup', 'stackies who found support in the community']} series={[{ type: 'line', smooth: true, areaStyle: {} }, { type: 'line', smooth: true, areaStyle: {} }, { type: 'line', smooth: true, areaStyle: {} }]} />
                </article>
                <article className="flex flex-col items-center justify-end col-start-2 row-start-2">
                    <img src={require('../assets/trophy.png')} className="h-24"/>
                    <h2 className="text-2xl font-poppins font-semibold text-stackup">Stackies Awards</h2>
                    <p className="text-sm font-poppins text-gray-700">Stackie of the Month, new Power Stackies and more!</p>
                    <a href="/" className="bg-stackup text-sm font-poppins text-white px-3 py-2 rounded-lg mt-2 hover:bg-stackup/90">Check Out</a>
                </article>
                <article className="flex flex-col items-center">
                    <h2 className="text-xl font-poppins font-semibold text-stackup">Server Highlights Stats</h2>
                    <BarChart dataset={require('../data/hardStats.json')} dimensions={['month', 'message volume', 'activated users']} series={[{ type: 'bar' }, { type: 'line', smooth: true },]} />
                </article>
                <article className="flex flex-col items-center">
                    <h2 className="text-xl font-poppins font-semibold text-stackup">Skillful Stackies from StackUp</h2>
                    <BarChart dataset={require('../data/hardStats.json')} dimensions={['month', 'stackies who did well (top 10) in hackathons and quizzes outside of StackUp', 'stackies who successfully completed 3 partner campaigns and above', 'stackies who successfully completed 5 partner campaigns and above']} series={[{ type: 'line' }, { type: 'line', smooth: true }, { type: 'line' }]} />
                </article>
                <article className="flex flex-col items-center">
                    <h2 className="text-xl font-poppins font-semibold text-stackup">Community-led Events</h2>
                    <BarChart dataset={require('../data/hardStats.json')} dimensions={['month', 'community-led events held']} series={[{ type: 'line', smooth: true  }]} />
                </article>  
            </section>
        </ContentLayout>
    )
}