import React from 'react';

export default function HeaderTwo(props) {
    return (
        <React.Fragment>
            <h2 className="mt-0 mb-10 font-size-16">{props.headerTitle}</h2>
        </React.Fragment>
    );
}