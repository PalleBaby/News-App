// import React, { Component } from 'react'
import React, {useEffect, useState} from 'react'
import NewsItems from './NewsItems'
import Loading from './Loading';
import PropTypes from 'prop-types';

import InfiniteScroll from "react-infinite-scroll-component";


// export class News extends Component {
const News = (props) => {

  // static defaultProp = {
  //   country: 'us',
  //   pageSize: 12,
  //   category: 'General',
    
  // }

  // static propTypes ={
  //   country: PropTypes.string,
  //   pageSize: PropTypes.number,
  //   category: PropTypes.string,
  // }

  const [articles, setArticles]=useState([])
  const [loading, setLoading]=useState(true)
  const [page, setPage]=useState(1)
  const [totalResults, setTotalResults]=useState(0)

  // constructor(props) {
  //   super();
  //   this.state = {
  //     articles: [],
  //     page: 1,
  //     totalResults: 0,
  //   }
  // }

  // async updateNews(){
  const updateNews = async () => {
    props.setProgress(10);//props used in class based 
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=b4aed3cee8e04f7a8ffc7ffaa74da23c&page=${page+1}&pageSize=12`;
    setLoading(true)
    const data = await fetch(url);
    props.setProgress(30);
    const parsedData = await data.json();
    props.setProgress(70);
    console.log(parsedData);
    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setLoading(false)
    // this.setState({ 
    //   articles: parsedData.articles,
    //   totalResults: parsedData.totalResults
    // });
    props.setProgress(100);
  }

  useEffect(() => {
    updateNews()
  }, [])
  

  // async componentDidMount() {
  // const componentDidMount= async () => {
  //   this.updateNews();
  // }

  const fetchMoreData = async () => {

    
    // this.setState({page : this.state.page+1});
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=b4aed3cee8e04f7a8ffc7ffaa74da23c&page=${page+1}&pageSize=12`;
    setPage(page +1)

    const data = await fetch(url);
    setLoading(true)
    const parsedData = await data.json();
    console.log(parsedData);

    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)
    // setLoading(false)

    // this.setState({ 
    //   articles: this.state.articles.concat(parsedData.articles),
    //   totalResults: parsedData.totalResults
    // });
  }

  // const prevPg = async () => {
  //   setPage(page - 1)
  //   // this.setState({page: this.state.page - 1});
  //   updateNews();//this.updateNews();
  // }

  // const nxtPg = async () => {
  //   // if (this.state.page +1 > Math.ceil(this.state.totalResults/12)) {
  //   if (page +1 > Math.ceil(totalResults/12)) {
      
  //   } else {
  //     setPage(page +1)
  //     // this.setState({page: this.state.page + 1});
  //     updateNews();//this.updateNews();
  //   }
  // }

  // render() {
    return (
      <>
        <div className='container my-3'>

          <h2>Headlines</h2>
          {/* {this.state.loading && <Loading/>} */}
          {loading && <Loading/>}

          <InfiniteScroll
            dataLength={articles.length}//{this.state.articles.length}
            next={fetchMoreData}//{this.fetchMoreData}
            hasMore={articles.length !== totalResults}//{this.state.articles.length !== this.state.totalResults}
            loader={<Loading/>}
          >
          <div className='container'>

          <div className='row'>

            {/* {!this.state.loading && this.state.articles.map((element) => { */}

            {articles.map((element) => {//{this.state.articles.map((element) => {
              return <div className='col-md-4' key={element.url}>
                <NewsItems title={element.title ? element.title.slice(0, 50) : ""} description={element.description ? element.description.slice(0, 50) : ""} imgUrl={element.urlToImage} newsUrl={element.url} />
              </div>
            })}
          </div>
          </div>

          </InfiniteScroll>

          {/* <div className="container d-flex justify-content-between">
            <button type="button" disabled={this.state.page<=1} onClick={this.prevPg} className="btn btn-dark">&larr; Previous</button>
            <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/12)} onClick={this.nxtPg} className="btn btn-dark">Next &rarr;</button>
          </div> */}

        </div>
      </>
    )
  //}
}

News.defaultProp = {
  country: 'us',
  pageSize: 12,
  category: 'General',
  
}

News.propTypes ={
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
}
export default News