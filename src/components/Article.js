function Article(props) {
    
    const {title, date, preview, minutes} = props;
    

    return (
        <article>
            <h3>{title}</h3>
            <small>{date ? date : 'January 1, 1970'}</small>
            <p>{preview}</p>
            <p>{minutes} min read</p>
        </article>
    )
}

export default Article;