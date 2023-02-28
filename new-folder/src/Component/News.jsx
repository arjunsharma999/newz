import React, { Component, useState, setState } from 'react'
import NewsItem from './NewsItem'


export default class extends Component {

    article = []


    constructor() {
        super();
        console.log("hello world")
        this.state = {
            article: [],
            loading: false,
            page: 1
        }
    }



    async componentDidMount() {
        let url = 'https://newsapi.org/v2/everything?q=apple&from=2023-02-24&to=2023-02-24&sortBy=popularity&apiKey=69bc22ed5b114449aeac50ca395a3568&Page=1&pageSize=50';
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({ article: parsedData.articles });
    }


    handleNextclick = async () => {

        console.log("next");

        let url = 'https://newsapi.org/v2/everything?q=apple&from=2023-02-24&to=2023-02-24&sortBy=popularity&apiKey=69bc22ed5b114449aeac50ca395a3568&Page=${this.state.page+1}&pageSize=50';
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({
            Page: this.state.page + 1,
            articles: parsedData.articles
        });



    }

    handlePrevclick = async () => {
        console.log("previous");
        let url = 'https://newsapi.org/v2/everything?q=apple&from=2023-02-24&to=2023-02-24&sortBy=popularity&apiKey=69bc22ed5b114449aeac50ca395a3568&Page=${this.state.Page - 1}&pageSize=50';
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({
            Page: this.state.page - 1,
            articles: parsedData.articles
        });
    }





    render() {


        return (
            <div className="container my-3">
                <h1 className='text-center'>Newzz - Headlines</h1>


                <div className='row'>
                    {this.state.article.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <NewsItem tittle={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} />




                        </div>

                    })}

                    <div className='container d-flex justify-content-evenly'>
                        <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevclick}>&larr; Previous</button>
                        <button type="button" className="btn btn-dark" onClick={this.handleNextclick}>Next &rarr;</button>



                    </div>

                </div>



            </div>
        )
    }
}

