import {css} from "@emotion/css";
import DayCard from "../DayCard/DayCard";
import React from "react";
import {getConfigValue} from '@brojs/cli';
import axios from "axios";
import useSWRImmutable from "swr/immutable";

const fetcher = async (url: string) => {
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export default function WeeklyCalendar() {

    // fetch plants
    const {data: plants, error, isValidating: loading} = useSWRImmutable(
        `${getConfigValue('ecliptica.backend')}/plants/list?alias=a`,
        fetcher
    );

    // Render loading, error, or plants
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error loading plants: {error.message}</div>;

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