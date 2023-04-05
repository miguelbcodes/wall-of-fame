import React, { useState } from 'react';
import ContentLayout from '../components/ContentLayout';

let data;
let reverseData;

const fetchData = async () => {
    const response = await fetch(`https://opensheet.elk.sh/1ipQgxTiBT8VBTHHoRVjRa01Oscmm1IrF3yaqJgQWAfI/Stackies`);
    data = await response.json();
    reverseData = data.reverse();
}

fetchData();

export default function AwardsPage() {

    const [currentMonth, setCurrentMonth] = useState(reverseData[0]);

    function handleChange(e) {
        setCurrentMonth(data[e.target.value]);
    }

    function arrayToMatrix(list, elementsPerSubArray) {
        let matrix = [], i, k;
    
        for (i = 0, k = -1; i < list.length; i++) {
            if (i % elementsPerSubArray === 0) {
                k++;
                matrix[k] = [];
            }
    
            matrix[k].push(list[i]);
        }
    
        return matrix;
    }
    
    return (
        <ContentLayout>
            <section className="h-full flex flex-col gap-6 items-center justify-center text-gray-800">
                <div className="flex flex-col items-end">
                    <h1 className="text-7xl font-semibold text-transparent bg-gradient-to-t from-stackup/50 to to-stackup bg-clip-text">Stackies of <br/> the month</h1>
                    <select className="bg-transparent focus:outline-none" onChange={handleChange}>
                        {data.map((obj, index) => {
                            if (obj === currentMonth) {
                                return <option key={index} value={index}>{obj.month} {obj.year}</option>
                            }
                            return <option key={index} value={index}>{obj.month} {obj.year}</option>
                        })}
                    </select>
                </div>
                <div className="flex flex-col gap-3">
                    {arrayToMatrix(currentMonth['powerstackies'].split(', '), 3).map((row, index) => {
                        return (
                            <div key={index} className="flex h-10 gap-4 justify-center items-center">
                                {!(index % 2 === 0) && <img src={require('../assets/world.png')} alt="Globe Icon" className="h-4/5 rotate-90"/>}
                                {row.map((stackie, index) => {
                                    return (
                                        <div key={index} className="polygon-bevel p-[1px] bg-stackup">
                                            <p className="bg-[rgb(255,240,240)] px-4 py-2 polygon-bevel font-medium">{stackie}</p>
                                        </div>
                                    )
                                })}
                                {index % 2 === 0 && <img src={require('../assets/world.png')} alt="Globe Icon" className="h-4/5"/>}
                            </div>
                        )
                    })}
                </div>
            </section>
        </ContentLayout>
    )
}