import React from 'react'
import './HomeComponent.scss'
import { useTranslation } from 'react-i18next';

export default function HomeComponent() {
    const { t } = useTranslation();
    return (
        <div className="home-wrapper">
            <div className="home-wrapper__title">
                {t('HOME_TITLE')}
            </div>
            <div className="home-wrapper__content">
                {t('HOME_CONTENT')}
            </div>
        </div>
    )
}
