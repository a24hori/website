import App, {Container} from 'next/app'
import React from 'react'
import BlogLayout from '../components/BlogLayout'

export default class MyApp extends App {

  render () {
    const { Component, pageProps } = this.props
    const { pathname } = this.props.router
    return (
      <Container>
        <BlogLayout pathname={pathname}>
          <Component {...pageProps} />
        </BlogLayout>
      </Container>
    )
  }

}
