


import React from 'react';
import { Link } from 'react-router-dom';
const PageHeader = ({ link, title, subtitle }) => {
    return (
        <div className="ant-page-header site-page-header ant-page-header-ghost">
            <div className="ant-page-header-heading">
                <div className="ant-page-header-heading-left">

                    <Link to={link}>
                        <div className="ant-page-header-back">
                            <div role="button" className="ant-page-header-back-button" aria-label="Back" style={{ border: 0, background: "transparent", padding: 0, lineHeight: "inherit", display: "inline-block" }}>
                                <span role="img" aria-label="arrow-left" className="anticon anticon-arrow-left">
                                    <svg viewBox="64 64 896 896" focusable="false" data-icon="arrow-left" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                                        <path d="M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 000 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z">
                                        </path>
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </Link>
                    <span className="ant-page-header-heading-title" title="Intern Detail">
                        {title}
                    </span>
                    <span className="ant-page-header-heading-sub-title" title="Detail of an intern">
                        {subtitle}
                    </span>
                </div>
            </div>
        </div>
    );
}

export default PageHeader;
