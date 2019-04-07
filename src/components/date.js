import React from 'react';

export const DateRange = ({ begin, end, className }) => {
    const content = !end ? `Since ${begin}` : (begin === end) ? begin : `${begin} - ${end}`;
    return <div className={className}>({content})</div>;
}