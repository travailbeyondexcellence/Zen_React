function Card({children}) {
    return (
    <div style={{ border: "1px solid white", borderRadius: "8px", padding: "20px"}}>
        {children}
    </div>)
}

export default Card;