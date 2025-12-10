function Card ({title,description,footer}){
    return(
        <div>
            <h2>{title}</h2>
            <p>{description}</p>
            <div>{footer}</div>
        </div>
    );
}

export default Card;