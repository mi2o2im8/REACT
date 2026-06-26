import './ItemComponent.css'

function ItemComponent(props){
    return (
        <div className="item" onClick={props.onClick}>
            <div className="line1">
                <img 
                src={props.item.image} alt="" />
                <span>{props.item.name}</span>
            </div>
            <div className="line2">
                {props.item.message}
            </div>
        </div>
    )
}
export default ItemComponent