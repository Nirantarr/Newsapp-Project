import React from 'react'

const NewsItem = (props) => {
  // This is Javascript Destructuring. The following line.
  let { title, description, imgurl, newsurl, author, articledate } = props;
  return (
    <div>
      <div className="card " style={{
        width: "18rem", background: '#060916',
        color: 'white', border: '2px solid white'
      }} >
        <img src={imgurl ? imgurl : "https://img.etimg.com/thumb/msid-97120752,width-1070,height-580,imgsize-66706,overlay-etmarkets/photo.jpg"} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text " style={{ color: 'white' }}><small className="text-muted">By {author ? author : "unknown"} ,
            {new Date(articledate).toLocaleString(undefined, { timeZone: 'Asia/Kolkata' })} </small></p>
          {/* Target=_black use because to open the page in new tab */}
          <a href={newsurl} rel="noreferrer" target="_blank" className="btn btn-sm btn-dark">Read more</a>
        </div>
      </div>
    </div>
  )
}

export default NewsItem
