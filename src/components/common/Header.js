import React from 'react';

export default function Header(props) {
    return (
        <React.Fragment>
            <h2 className="mt-0 mb-10 font-size-20">{props.headerTitle}</h2>
        </React.Fragment>
    );
}