import React, { Component } from 'react';
import { render } from 'react-dom';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';


const localizer = momentLocalizer(moment);
const events = [
    {
        id: 0,
        title: 'All Day Event very long title',
        allDay: true,
        start: new Date(2019, 11, 0),
        end: new Date(2019, 11, 1),
    },
    {
        id: 1,
        title: 'Long Event',
        start: new Date(2019, 11, 7),
        end: new Date(2019, 11, 10),
    },

    {
        id: 2,
        title: 'DTS STARTS',
        start: new Date(2016, 2, 13, 0, 0, 0),
        end: new Date(2016, 2, 20, 0, 0, 0),
    },

    {
        id: 3,
        title: 'DTS ENDS',
        start: new Date(2016, 10, 6, 0, 0, 0),
        end: new Date(2016, 10, 13, 0, 0, 0),
    },

    {
        id: 4,
        title: 'Some Event',
        start: new Date(2019, 11, 9, 0, 0, 0),
        end: new Date(2019, 11, 10, 0, 0, 0),
    },
    {
        id: 5,
        title: 'Conference',
        start: new Date(2019, 11, 11),
        end: new Date(2019, 11, 13),
        desc: 'Big conference for important people',
    },
    {
        id: 6,
        title: 'Meeting',
        start: new Date(2019, 11, 12, 10, 30, 0, 0),
        end: new Date(2019, 11, 12, 12, 30, 0, 0),
        desc: 'Pre-meeting meeting, to prepare for the meeting',
    },
    {
        id: 7,
        title: 'Lunch',
        start: new Date(2019, 11, 12, 12, 0, 0, 0),
        end: new Date(2019, 11, 12, 13, 0, 0, 0),
        desc: 'Power lunch',
    },
    {
        id: 8,
        title: 'Meeting',
        start: new Date(2019, 11, 12, 14, 0, 0, 0),
        end: new Date(2019, 11, 12, 15, 0, 0, 0),
    },
    {
        id: 9,
        title: 'Happy Hour',
        start: new Date(2019, 11, 12, 17, 0, 0, 0),
        end: new Date(2019, 11, 12, 17, 30, 0, 0),
        desc: 'Most important meal of the day',
    },
    {
        id: 12,
        title: 'Late Night Event',
        start: new Date(2019, 11, 17, 19, 30, 0),
        end: new Date(2019, 11, 18, 2, 0, 0),
    },
    {
        id: 12.5,
        title: 'Late Same Night Event',
        start: new Date(2019, 11, 17, 19, 30, 0),
        end: new Date(2019, 11, 17, 23, 30, 0),
    },
    {
        id: 13,
        title: 'Multi-day Event',
        start: new Date(2019, 11, 20, 19, 30, 0),
        end: new Date(2019, 11, 22, 2, 0, 0),
    },
    {
        id: 14,
        title: 'Today',
        start: new Date(new Date().setHours(new Date().getHours() - 3)),
        end: new Date(new Date().setHours(new Date().getHours() + 3)),
    },
]

export default function CalendarScreen() {
    
    const now = new Date();
    return (
        <div>
            <Calendar
                events={events}
                startAccessor="start"
                endAccessor="end"
                defaultDate={moment().toDate()}
                localizer={localizer}
            />
        </div> 
    );
}