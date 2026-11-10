export default function MenuCard({emoji='☕', name, price, desc}){

    return(
        <div className="card">
            <h3>{emoji}{name}</h3>
            <p className="price">{price.toLocaleString()}원</p>
            <p className="desc">{desc}</p>
        </div>
    );
}