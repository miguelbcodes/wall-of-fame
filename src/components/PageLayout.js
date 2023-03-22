import React from "react";
import { useState } from "react";
import Header from "./Header";
import CommunityPage from "../pages/CommunityPage";

const tabs = [
    {
        id: 1,
        tabTitle: 'Community',
        content: <CommunityPage />
    },
    {
        id: 2,
        tabTitle: 'In Progress',
        content: '🚧 Work In Progress 🚧'
    }
];

export default function PageLayout() {
    const [currentTab, setCurrentTab] = useState('1');
    function handleTabClick(currentTab) {
        setCurrentTab(currentTab);
    }

    return (
        <>
            <Header tabs={tabs} currentTab={currentTab} onTabClick={handleTabClick}/>
            {tabs.map((tab, i) =>
                <div key={i}>
                    {currentTab === `${tab.id}` && tab.content}
                </div>
            )}
        </>
    )
}