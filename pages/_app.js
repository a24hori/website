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
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.11.0/dist/katex.min.css" integrity="sha384-BdGj8xC2eZkQaxoQ8nSLefg4AV4/AwB3Fj+8SUSo7pnKP6Eoy18liIKTPn9oBYNG" crossOrigin="anonymous"/>
          <Component {...pageProps} />
        </BlogLayout>
      </Container>
    )
  }

}
