import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'

export class News extends Component {

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
    let url = `https://newsdata.io/api/1/latest?apikey=pub_8c7cf993596149b79408d3974974907b&language=en,hi,mr&size=${this.props.size}`;

    if (this.state.nextPage) {
      url += `&page=${this.state.nextPage}`;
    }

    let data = await fetch(url);
    let parsedData = await data.json();
      

    this.setState({
      articles: parsedData.results,
      nextPage: parsedData.nextPage,
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
        <h1 className="text-center">Daily News Top Headlines</h1>
        {this.state.loading && <Spinner />}

        <div className="row">
          {this.state.articles.map((element) => (
            <div className="col-md-4 d-flex" key={element.link}>
              <NewsItem
                title={element.title ? element.title.slice(0, 45) : ""}
                description={element.description ? element.description.slice(0, 88) : ""}
                imgurl={element.image_url}
                newsUrl={element.link}
              />
            </div>
          ))}
        </div>

        <div className="container d-flex justify-content-end mt-3">
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
