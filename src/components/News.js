import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'

export class News extends Component {
  static defaultProps = {
    country: "in",
    size: 8,
    category: "general"
  }

  static propTypes = {
    country: PropTypes.string,
    size: PropTypes.number,
    category: PropTypes.string
  }

  constructor() {
    super();
    this.state = {
      articles: [],
      nextPage: null,
      loading: false
    };
  }

  async fetchNews() {
    this.setState({ loading: true });
    let url = `https://newsdata.io/api/1/latest?apikey=pub_8c7cf993596149b79408d3974974907b&category=${this.props.category}&country=${this.props.country}&language=en,hi,mr&size=${this.props.size}`;

    if (this.state.nextPage) {
      url += `&page=${this.state.nextPage}`;
    }

    let data = await fetch(url);
    let parsedData = await data.json();
      

    this.setState({
      articles: Array.isArray(parsedData.results) ? parsedData.results : [],
      nextPage: parsedData.nextPage || null,
      loading: false
    });

  }

  componentDidMount() {
    this.fetchNews();
  }

  handleNext = () => {
    if (this.state.nextPage) {
      this.fetchNews();
    }
  };

  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center" style={{color:"purple", margin:"35px 0px"}}>Daily News Top Headlines</h1>
        {this.state.loading && <Spinner />}

        <div className="row justify-content-center">
  {!this.state.loading &&
    this.state.articles.map((element) => (
      <div
        className="col-12 col-md-4 d-flex justify-content-center mb-4"
        key={element.link}
      >
        <NewsItem
          title={element.title ? element.title.slice(0, 45) : ""}
          description={element.description ? element.description.slice(0, 88) : ""}
          imgurl={element.image_url}
          newsUrl={element.link} 
          author={element.source_name}
          date={new Date(element.pubDate).toGMTString()}
          source_name={element.source_name}
        />
      </div>
    ))}
</div>

        <div className="container d-flex justify-content-center mb-4" >
          <button
            type="button"
            className="btn btn-dark"
            onClick={this.handleNext}
            disabled={!this.state.nextPage}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
