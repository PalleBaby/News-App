// import React, { Component } from 'react'
import React from 'react'


// export class NewsItems extends Component {
const NewsItems = (props) => {
    // render() {
        let { title, description, imgUrl, newsUrl } = props;//this.props in class-based
        return (
            <div>
                <div className="card" >
                    <img src={!imgUrl?"https://image.cnbcfm.com/api/v1/image/107161702-1670336173246-gettyimages-1245409645-GOLDMAN_CONFERENCE.jpeg?v=1697515261&w=1920&h=1080":imgUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <a href={newsUrl} target='_blank' className="btn btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        )
    // }
}

export default NewsItems