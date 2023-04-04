import React, { useState } from 'react';
import ContentLayout from '../components/ContentLayout';

let partners;

const fetchData = async () => {
    const response = await fetch(`https://opensheet.elk.sh/1ipQgxTiBT8VBTHHoRVjRa01Oscmm1IrF3yaqJgQWAfI/Partners`);
    partners = await response.json();
}

fetchData();

export default function PartnerPage() {
    const [currentPartner, setCurrentPartner] = useState(0);

    function handleClick(currentPartner) {
        setCurrentPartner(currentPartner);
    }

    return(
        <ContentLayout>
            <section className="h-full grid grid-cols-2 grid-rows-1 items-center px-12 gap-12">
                <article>
                    <p className="text-center mb-8 text-xl font-semibold text-gray-700">Mega Campaigns Partners</p>
                    <ul className="grid grid-cols-2 gap-3">
                        {partners.map((partner, id) => {
                            return id === currentPartner ? 
                            <button key={id} className="px-12 flex gap-2 items-center pointer-events-none" onClick={() => handleClick(id)}><div className="h-3/5 rounded-full w-[2px] flex-shrink-0 bg-stackup"></div><img alt={`${partner.name} logo`} src={partner.logo} /></button>
                            :
                            <button key={id} className="px-12" onClick={() => handleClick(id)}><img alt={`${partner.partner} logo`} src={partner.logo} className="hover:-hue-rotate-15"/></button>
                        })}
                    </ul>
                </article>
                <article className="relative overflow-hidden py-10 px-5">
                    <h2 className="text-6xl leading-tight font-bold text-transparent bg-clip-text bg-gradient-to-r from-stackup to-[#60006F]">{partners[currentPartner].partner}</h2>
                    <p className="mt-5 text-gray-700">{partners[currentPartner].description}</p>
                    <a className="block mt-5 bg-stackup text-white rounded-sm w-fit px-2 py-1 hover:-translate-y-1 hover:shadow-lg hover:shadow-rose-300" href={partners[currentPartner].link} target="_blank" rel="noreferrer">See on StackUp</a>
                    <div className="flex items-center gap-1 mt-3 animate-pulse">
                        {partners[currentPartner].status === 'finished' &&
                            <>
                                <span className="h-2 w-2 bg-red-500 rounded-full"></span>
                                <p className="text-sm">Finished</p>
                            </>
                        }
                        {partners[currentPartner].status === 'active' &&
                            <>
                                <span className="h-2 w-2 bg-green-500 rounded-full"></span>
                                <p className="text-sm">Active</p>
                            </>
                        }     
                        {partners[currentPartner].status === 'Upcoming' &&
                            <>
                                <span className="h-2 w-2 bg-blue-500 rounded-full"></span>
                                <p className="text-sm">UpComing</p>
                            </>
                        }                    
                    </div>
                </article>
            </section>
        </ContentLayout>
    )
}