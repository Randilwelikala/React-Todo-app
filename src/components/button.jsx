function Button ({text,onClicked}){
    return(
        <button onClick={onClicked}>
            {text}
        </button>
    );
}
export default Button;