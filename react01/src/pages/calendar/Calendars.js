import React from 'react'
import { Calendar } from 'antd';

import './Calendars.css'

function onPanelChange(value, mode) {
    console.log(value, mode);
}

export default class Calendars extends React.Component {
    render() {
        return (
            <div className="site-calendar-demo-card">
                <Calendar fullscreen={false} onPanelChange={onPanelChange} />
            </div>
        )
    }
}
