import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

const News = (props) => {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const updateNews = async () => {
        props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=6b20ea1306324b08b2110713a36c1c4b&page=${page}&pageSize=9`;
        setLoading(true)
        let data = await fetch(url);
        props.setProgress(30);
        let parsedData = await data.json()
        props.setProgress(70);
        setArticles(parsedData.articles)
        setLoading(false)
        props.setProgress(100);
    }
    useEffect(() => {
        updateNews();
    }, [])
    const Getpreviouspage = async () => {
        setPage(page - 1)
        updateNews();
    }
    const Getnextpage = async () => {
        setPage(page + 1)
        updateNews()
    }
    return (
        <>
            <h1 className="text-center" style={{ margin: '35px 0px', marginTop: '80px' }}>News24*7 - Top Headlines</h1>
            {loading && <Spinner />}

            <div className="container">

                <div className="row">
                    {articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description.slice(0, 127) : ""} imgurl={element.urlToImage} newsUrl={element.url} author={element.author} articledate={element.publishedAt} />
                        </div>
                    })}
                </div>
                <div className="container d-flex justify-content-between">
                    <button disabled={page <= 1} type="button" className="btn btn-dark" onClick={Getpreviouspage}>&larr; Previous</button>
                    <button disabled={page >= 8} type="button" className="btn btn-dark" onClick={Getnextpage}>Next &rarr;</button>
                </div>
            </div>
        </>
    )
}
News.defaultProps = {
    country: 'in',
    category: 'general',
}
News.propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
}

export default News

