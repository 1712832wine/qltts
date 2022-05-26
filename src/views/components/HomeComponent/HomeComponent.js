import React from 'react'
import './HomeComponent.scss'

export default function HomeComponent() {
    return (
        <div className="home-wrapper">
            <div className="home-wrapper__title">
                This is home page
            </div>
            <div className="home-wrapper__content">
                This project using ReactJS as frontend and Laravel as backend,
                to build a system can manage interns (CRUD).
            </div>
        </div>
    )
}
