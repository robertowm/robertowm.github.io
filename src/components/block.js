import React from 'react'
import { css } from '@emotion/core'

export const blockCss = css`
  background-color: #fff;
  border: 1px solid #000;
  border-radius: 5px;
`

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
