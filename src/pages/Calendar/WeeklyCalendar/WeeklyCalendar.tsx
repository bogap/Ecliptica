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

    // fetch plants
    const {data: plants, error, isValidating: loading} = useSWR(
        `${getConfigValue('ecliptica.backend')}/plants/list?alias=a`,
        fetcher,
        {
            revalidateOnFocus: false,
            refreshInterval: 0,
        }
    );

    // Render loading, error, or plants
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error loading plants: {error.message}</div>;

    console.log(plants)

    return (
        <div id="calendars" className={css` display: flex; `}>
            {[0, 1, 2, 3, 4, 5, 6].map(dayOffset => {
                const plant = plants?.results ? plants.results[dayOffset] : null;
                return (
                    <DayCard
                        key={dayOffset}
                        day={dayOffset}
                        plant={plant}
                    />
                );
            })}
        </div>
    );
}