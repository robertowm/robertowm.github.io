import React from 'react'
import { blockCss } from '../components/block'
import { DateRange } from '../components/date'

export default ({ education, certifications }) => {
  const Entry = ({ title, children }) => (
    <div style={{ fontSize: '14px' }}>
      <div className="font-weight-bold">{title}</div>
      {children}
    </div>
  )

  return (
    <>
      <div className="p-3 my-2" css={blockCss}>
        <h4>Education</h4>
        {education.map(({ title, institution, start_year, end_year }) => (
          <div style={{ fontSize: '14px' }}>
            <div className="font-weight-bold">{title}</div>
            <div>{institution}</div>
            <DateRange begin={start_year} end={end_year} />
          </div>
        ))}
      </div>
      <div className="p-3 my-2" css={blockCss}>
        <h4>Most relevant certifications</h4>
        {certifications.map(({ name, institutions, url, date }) => (
          <div style={{ fontSize: '14px' }}>
            <a href={url} style={{ color: 'black' }}>
              <div className="font-weight-bold">{name}</div>
            </a>
            {institutions.map(elem => (
              <div>{elem}</div>
            ))}
            <div>{date}</div>
          </div>
        ))}
      </div>
    </>
  )
}
