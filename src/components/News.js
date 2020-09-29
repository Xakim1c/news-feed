import React from 'react'
import NewsCard from './Feed'

const News = (props) => {
 
    //console.log('NEWS')
    //console.log(props.news)
    //console.log(Object.keys(props.news).length)

    return (
        <div>
            {Object.keys(props.news).map(news => (
                <NewsCard news={props.news[news]}></NewsCard>
            ))}
        </div>
        
    )
}
const areEqual = (prevProps, nextProps) => {
    return (prevProps.news === nextProps.news)
}
  
export default React.memo(News, areEqual); 

//export default News