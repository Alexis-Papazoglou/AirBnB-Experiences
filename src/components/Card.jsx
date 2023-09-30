import "./card.css"

export default function Card(props) {

    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }

    return (
        <div className="card-conteiner">
                {badgeText && <div className="card-badge">{badgeText}</div>}
                <img width={250} height={250} src= {props.item.coverImg} />
                <div className="card-text">
                    <span>⭐</span>
                    <span>{props.item.stats.rating}</span>
                    <span>({props.item.stats.reviewCount}) • </span>
                    <span>{props.item.location}</span>
                    <p>{props.item.title}</p>
                    <p>From {props.item.price} $ / Person</p>
                </div>
        </div>
    )
}