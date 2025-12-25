import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NewsItem from './NewsItem'
// news item is in news component
export class News extends Component {
  static propTypes = {

  }

  render() {
    return (
      <div>
        this is the news components
        <NewsItem/>
        <NewsItem/>
        <NewsItem/>
        <NewsItem/>
      </div>
    )
  }
}

export default News
