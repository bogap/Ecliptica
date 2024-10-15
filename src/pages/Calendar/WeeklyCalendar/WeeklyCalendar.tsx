import {css} from "@emotion/css";
import DayCard from "../DayCard/DayCard";
import React, {useState, useEffect} from "react";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import useSWR from "swr";
import {getConfigValue} from '@brojs/cli';
import axios from "axios";

const fetcher = async (url: string) => {
    try {
        const response = await axios.get(url);
        console.log('Response data:', response.data);
        return response.data;
    } catch (error) {
        console.error('Fetch error:', error);
        throw error;
    }
};

export default function WeeklyCalendar() {
    const [searchTerm, setSearchTerm] = useState('');
    const [userPlants, setUserPlants] = useState([]);

    // fetch plants
    const {data: plants, error, isValidating: loading} = useSWR(
        `${getConfigValue('ecliptica.backend')}/plants/search?alias=a`,
        fetcher
    );

    // function getPlantForDay(dayOffset: number) {
    //     const currentDate = new Date();
    //     currentDate.setDate(currentDate.getDate() + dayOffset);
    //     const formattedDate = currentDate.toISOString().split('T')[0];
    //
    //     return plantData.find(plant => plant.wateringDates.includes(formattedDate)) || null;
    // }

    console.log(plants)

    return (
        <>
            <div id='calendars' className={css`
                display: flex;
            `}>
                {[0, 1, 2, 3, 4, 5, 6].map(dayOffset => {
                    // const plantForDay = getPlantForDay(dayOffset);
                    return (
                        <DayCard
                            key={dayOffset}
                            day={dayOffset}
                            plant={plants.results[0]} // Pass the plant data or null if no plant matches
                        />
                    );
                })}
            </div>
        </>
    );
}
