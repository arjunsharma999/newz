import React, { Component } from 'react'

export class NewsItem extends Component {
 render() {

        let { tittle, description, imageUrl, newsUrl } = this.props;
        return (
            <div className="my-3">
                <div className="card" style={{ width: "18rem" }}>
                    <img src= {!imageUrl?"https://media.cnn.com/api/v1/images/stellar/prod/230223110500-05-retirement-savings-stock.jpg?c=16x9&q=w_800,c_fill":imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-tittle">{tittle}</h5>
                        <p className="card-text">{description}</p>
                        <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>

            </div>
        )
    }
}

export default NewsItem