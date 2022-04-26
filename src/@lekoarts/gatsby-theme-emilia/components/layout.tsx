import * as React from "react"
import { get } from "theme-ui"
import { Global } from "@emotion/react"
import Footer from "./footer"
import SEO from "./seo"

type LayoutProps = { children: React.ReactNode }

const Layout = ({ children }: LayoutProps) => (
  <React.Fragment>
    <Global
      styles={(t) => ({
        "*": {
          boxSizing: `inherit`,
        },
        html: {
          fontSize: `18px`,
          WebkitTextSizeAdjust: `100%`,
        },
        img: {
          borderStyle: `none`,
        },
        btn: {
                  outline: '0',
                  gridGap: '8px',
                  alignItems: 'center',
                  background: 'white',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  flexShrink: '0',
                  fontSize: '16px',
                  gap: '8px',
                  justifyContent: 'center',
                  lineHeight: '1.5',
                  overflow: 'hidden',
                  padding: '12px 16px',
                  textDecoration: 'none',
                  textOverflow: 'ellipsis',
                  transition: 'all .14s ease-out',
                  whiteSpace: 'nowrap',
                  '&:hover': {
                      boxShadow: '4px 4px 0 #000',
                      background:'yellow',
                      transform: 'translate(-4px,-4px)',
                  },
                  '&:focus-visible' :{
                      outlineOffset: '1px',
                  },
                },

        pre: {
          fontFamily: `monospace`,
          fontSize: `1em`,
        },
        "[hidden]": {
          display: `none`,
        },
        "::selection": {
          background: get(t, `colors.text`),
          color: get(t, `colors.background`),
        },
        "@media(max-width: 600px)": {
          html: {
            fontSize: `16px`,
          },
        },
      })}
    />
    <SEO />
    {children}
    <Footer />
  </React.Fragment>
)

export default Layout
