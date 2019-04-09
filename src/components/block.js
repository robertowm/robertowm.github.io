import React from 'react'

export const style = {
  backgroundColor: '#fff',
  border: '1px solid #000',
  borderRadius: '5px',
}

export const TextBlock = ({ content, className, children }) => (
  <div className={`text-justify ${className}`} style={{ fontSize: '13px' }}>
    {content}
    {children}
  </div>
)

export const HtmlBlock = ({ body, className, id }) => (
  <div
    id={id}
    className={`text-justify ${className}`}
    style={{ fontSize: '13px' }}
    dangerouslySetInnerHTML={{ __html: body }}
  />
)
