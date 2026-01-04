import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class NewsItem extends Component {
  static propTypes = {

  }

  render() {
    let {title, description , imgurl , newsUrl} = this.props
    return (
     
      <div className="cardcard mx-auto my-3" style={{width: "18rem"}}>
        <img src={imgurl?imgurl:"https://placehold.co/300x180/png?text=News"} className="card-img-top" alt="..."/>
        <div className="card-body text-center">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description}...</p>
          <a href={newsUrl} target="_blank" className="btn btn-sn btn-primary bg-dark">Read more</a>
        </div>
      </div>
     
    )
  }
}

export default NewsItem
