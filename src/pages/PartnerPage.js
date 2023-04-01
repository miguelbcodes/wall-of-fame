import React, { useState } from 'react';
import ContentLayout from '../components/ContentLayout';

const partners = [
    {
        name: 'Algorand',
        description: 'Algorand is a next-generation layer-1 blockchain platform, featuring ALGO as its native token. It has many powerful features allowing it to solve the blockchain trilemma, and can support a wide range of important use cases, making it an attractive blockchain technology for any developer to learn.',
        link: 'https://app.stackup.dev/campaign_page/explore-the-world-of-algorand-run-2',
        status: 'finished',
        logo: require('../assets/partners-logos/algorand.png')
    },
    {
        name: 'Polkadot',
        description: 'Polkadot is a next-generation blockchain protocol connecting multiple specialized blockchains into one unified network. It has many powerful features allowing for scalability and specialization, and can support a wide range of important use cases, making it an attractive blockchain technology for any developer to learn.',
        link: 'https://app.stackup.dev/campaign_page/entering-the-world-of-polkadot',
        status:'finished',
        logo: require('../assets/partners-logos/polkadot.png')
    },
    {
        name: 'Zilliqa',
        description: 'Zilliqa is a low-cost and scalable blockchain founded by a group of researchers from the National University of Singapore. The Zilliqa network offers many features such as smart contracts, transaction settlement, and token issuance - supporting a wide range of important use cases.',
        link: 'https://app.stackup.dev/campaign_page/exploring-the-world-of-zilliqa',
        status: 'finished',
        logo: require('../assets/partners-logos/zilliqa.png')
    },
    {
        name: 'Avalanche',
        description: 'Avalanche is a blockchain platform that utilizes scaling capabilities and quick confirmation times through its Avalanche Consensus Protocol. Since Avalanche is EVM-compatible, it uses Solidity smart contracts to run decentralized applications (dApps) on its network. This also means that Avalanche is highly interoperable with a number of the largest decentralized finance (DeFi) ecosystems in the Web3 world, making it a very attractive protocol to learn about.',
        link: 'https://app.stackup.dev/campaign_page/advancing-into-avalanche',
        status: 'finished',
        logo: require('../assets/partners-logos/avalanche.png')
    },
    {
        name: 'Zepeto',
        description: 'The ZEPETO app is a South Korean mobile chat app where users create and interact as 3D avatars in different worlds. Some of these worlds are chat-based while others are game-based, and users can decide on whether these worlds are public or for friends only. With similarities in interaction to platforms like Roblox and Minecraft, ZEPETO has taken steps into the metaverse.',
        link: 'https://app.stackup.dev/quest_page/exploring-the-world-of-zepeto',
        status: 'finished',
        logo: require('../assets/partners-logos/zepeto.png')
    },
    {
        name: 'Circle',
        description: 'Circle is a global financial technology company with the goal of helping money move at internet speed through the power of USD Coin (USDC) and Euro Coin (EUROC). It is time for you to get acquainted with Circle and its technology.',
        link: 'https://app.stackup.dev/campaign_page/enabling-payments-with-circle',
        status: 'finished',
        logo: require('../assets/partners-logos/circle.png')
    },
    {
        name: 'Filecoin',
        description: 'Filecoin is a peer-to-peer network with built-in economic incentives on top of the IPFS protocol and cryptography and leverages content addressing to ensure files are stored reliably over time. There is no time like the present to get on board with this game-changing technology!',
        link: 'https://app.stackup.dev/campaign_page/decentralizing-storage-for-web3-with-filecoin',
        status: 'active',
        logo: require('../assets/partners-logos/filecoin.png')
    },
    {
        name: 'Hedera',
        description: 'Hedera is a decentralized, open-source, proof-of-stake public ledger that utilizes the leaderless, asynchronous Byzantine Fault Tolerance (aBFT) hashgraph consensus algorithm. It is governed by a collusion-resistant, decentralized council of leading enterprises, universities, and web3 projects from around the world.',
        link: 'https://app.stackup.dev/campaign_page/',
        status: 'Upcoming',
        logo: require('../assets/partners-logos/hedera.png')
    }
    
]

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
                            <button key={id} className="px-12" onClick={() => handleClick(id)}><img alt={`${partner.name} logo`} src={partner.logo} className="hover:-hue-rotate-15"/></button>
                        })}
                    </ul>
                </article>
                <article className="relative overflow-hidden py-10 px-5">
                    <h2 className="text-6xl leading-tight font-bold text-transparent bg-clip-text bg-gradient-to-r from-stackup to-[#60006F]">{partners[currentPartner].name}</h2>
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