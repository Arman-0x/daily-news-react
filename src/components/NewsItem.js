import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class NewsItem extends Component {
  

  render() {
    let {title, description , imgurl , newsUrl, source_name } = this.props
    return (
     <div className="my-3">
      <div className="card">
         <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger">{source_name}</span>
        <img src={imgurl?imgurl:"https://placehold.co/300x180/png?text=News"} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title position-relative">{title} </h5>
          <p className="card-text">{description}...</p>
          <p className="card-text"><small className="text-muted">By {this.props.author?this.props.author:"Unknown"} on {this.props.date}</small></p>
          <a  rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sn btn-primary bg-dark">Read more</a>
        </div>
      </div>
      </div>
     
    )
  }
}

export default NewsItem
