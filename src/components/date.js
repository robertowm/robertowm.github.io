import React from 'react'

export const DateRange = ({ begin, end, className }) => {
  const content = !end || isNaN(parseInt(end))
    ? `Since ${begin}`
    : begin === end
    ? begin
    : `${begin} - ${end}`
  return <div className={className}>({content})</div>
}
