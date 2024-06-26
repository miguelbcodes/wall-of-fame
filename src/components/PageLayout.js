import React from "react";
import { useState, useCallback, useEffect } from "react";
import CommunityPage from "../pages/CommunityPage";
import PartnerPage from "../pages/PartnerPage";
import AwardsPage from "../pages/AwardsPage";

const tabs = [
    {
        tabTitle: 'Stackies Awards',
        content: <AwardsPage />
    },
    {
        tabTitle: 'Community Highlights',
        content: <CommunityPage />
    },
    {
        tabTitle: 'Partners Board',
        content: <PartnerPage />
    }
];

export default function PageLayout() {
    const [currentTab, setCurrentTab] = useState(1);
    function handleTabClick(currentTab) {
        setCurrentTab(currentTab);
    }

    const handleKeyPress = useCallback((event) => {
        if (event.key === "ArrowRight" && currentTab + 1 < tabs.length) {
            setCurrentTab(currentTab => currentTab + 1);
        }
        if (event.key === "ArrowLeft" && currentTab -1 >= 0) {
            setCurrentTab(currentTab => currentTab - 1);
        }
        return;
    }, [currentTab]);
    
    useEffect(() => {
        document.addEventListener('keydown', handleKeyPress);   
        return () => {
            document.removeEventListener('keydown', handleKeyPress);
        };
    }, [handleKeyPress]);

    return (
        <>
            <div className="h-screen font-poppins p-4 relative bg-slate-100 [background-image:url(./assets/crosshair.svg)]">
                <div className="h-full w-full p-0.5 bg-stackup polygon-cyberpunk-wrapper">
                    <div className="h-full w-full polygon-cyberpunk-frame px-12 py-6 bg-[rgb(255,240,240)]">
                        {tabs[currentTab].content}
                    </div>
                </div>  
                {(tabs[currentTab - 1]) &&
                    <div className="absolute h-5 top-[calc(50%-0.5rem)] left-4 group flex items-center gap-1">
                        <button onClick={() => handleTabClick(currentTab - 1)}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" className="w-5 h-5 fill-gray-700 group-hover:fill-stackup">
                                <path fillRule="evenodd" d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z" clipRule="evenodd" />
                            </svg>
                        </button>
                        <div className="hidden group-hover:block w-auto px-2.5 py-0.5 rounded-sm bg-stackup text-sm text-white shadow-md">
                            {tabs[currentTab - 1].tabTitle}
                        </div>
                    </div>
                }
                {tabs[currentTab + 1] &&
                    <div className="absolute h-5 top-[calc(50%-0.5rem)] right-4 group flex items-center flex-row-reverse gap-1">
                        <button onClick={() => handleTabClick(currentTab + 1)}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" className="w-5 h-5 fill-gray-700 group-hover:fill-stackup">
                                <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                            </svg>
                        </button>
                        <div className="hidden group-hover:block w-auto px-2.5 py-0.5 rounded-sm bg-stackup text-sm text-white shadow-md">
                            {tabs[currentTab + 1].tabTitle}
                        </div>
                    </div>
                }
            </div>
        </>
    )
}