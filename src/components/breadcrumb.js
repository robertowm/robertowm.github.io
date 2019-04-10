import React from 'react'
import { Link } from 'gatsby'

import { blockCss } from './block'

export const Breadcrumb = ({ children }) => (
  <div className="p-2" css={blockCss}>
    {children}
  </div>
)
export const BreadcrumbItem = ({ to, label }) => (
  <Link to={to} className="mx-2">
    {label}
  </Link>
)
export const BreadcrumbActiveItem = ({ label }) => (
  <span className="mx-2">{label}</span>
)

export const breadcrumbGenerator = (active, items) => (
  <Breadcrumb>
    {items
      .filter(item => item.to)
      .map(({ to, label }, index) => (
        <span key={index}>
          <BreadcrumbItem to={to} label={label} /> /{' '}
        </span>
      ))}
    <BreadcrumbActiveItem label={active} />
  </Breadcrumb>
)
