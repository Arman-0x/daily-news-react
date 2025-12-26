import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class NewsItem extends Component {
  static propTypes = {

  }

  render() {
    let {title, description , imgurl , newsUrl} = this.props
    return (
      <div className="my-3">
      <div class="card" style={{width: "18rem"}}>
        <img src={imgurl} class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">{title}...</h5>
          <p class="card-text">{description}...</p>
          <a href={newsUrl} target="_blank" class="btn btn-sn btn-primary">Read more</a>
        </div>
      </div>
      </div>
    )
  }
}

export default NewsItem
