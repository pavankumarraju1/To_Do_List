import { useState } from "react";
import AddCircleTwoToneIcon from '@mui/icons-material/AddCircleTwoTone';
import "./Form.css"

const Form = (props) => {

    // const [title, setTitle] = useState("");
    // const [content, setContent] = useState("");

    const [data, setData] = useState(
        {
            title: "",
            content: ""
        }
    )

    const changeHandler = (e) => {
        const { name, value } = e.target;
        setData(
            (prevState) => {
                return {
                    ...prevState,
                    [name]: value
                }
            }
        )
    }


    // const changeContent = (e) => {
    //     if (e.target.value.trim().length > 0) {
    //         isValid(true);
    //     }

    //     setContent(e.target.value);
    // }

    // const FinalValues = {
    //     title: title,
    //     description: content
    // }

    const submitHandler = (e) => {       
        props.onSubmit(data);
        setData(
            {
                title: "",
                content: ""
            }
        )
        e.preventDefault();
    }

    return (
        <div className="formDiv">
            <form className="form" onSubmit={submitHandler}>
                <input name="title" placeholder="title here" className="title" value={data.title} onChange={changeHandler} required/>
                <textarea name="content" placeholder="content here" className="content" value={data.content} onChange={changeHandler} required/>
                <button type="submit" className="btn"> 
                    <AddCircleTwoToneIcon />
                </button>
            </form>
        </div>
    )
}
export default Form;