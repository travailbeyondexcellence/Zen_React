function Card({children}) {
    return (
    <div style={{ border: "1px solid white", borderRadius: "8px", padding: "20px"}}>
        <h1>Card Title</h1>
        {children}
    </div>)
}

export default Card;