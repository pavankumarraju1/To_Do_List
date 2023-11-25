import "./Card.css"
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

const Card = (props) => {

    const deleteBtn = () => {
        props.onDelete(props.id);
    }

    return (
        <div className="Card">
            <h2>{props.title}</h2>
            <br />
            <p>{props.description}</p>
            <button className="card-btn" onClick={deleteBtn}>
                <DeleteOutlinedIcon />
            </button>
        </div>
    )
}

export default Card;