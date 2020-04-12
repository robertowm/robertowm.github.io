import React from 'react'
import styled from '@emotion/styled'

const FooterBase = styled.div`
  padding: 10px 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  font-size: 12px;
`
export function CopyrightProtectedFooter() {
  return (
    <FooterBase>
      <p>Copyright &copy; 2020 All Rights Reserved to <a href="#">Roberto Weidmann Menezes</a>.</p>
    </FooterBase>
  )
}

function CCLink({ children }) {
  return (
    <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">
      {children}
    </a>
  )
}

export function CreativeCommonsFooter() {
  return (
    <FooterBase>
      <p>
        This work is licensed under a <CCLink>Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License</CCLink>.
        <CCLink>
          <img alt="Creative Commons License" style={{ borderWidth: 0, margin: '0 10px', width: '80px' }} src="https://i.creativecommons.org/l/by-nc-sa/4.0/80x15.png" />
        </CCLink>
      </p>
    </FooterBase>
  )
}
