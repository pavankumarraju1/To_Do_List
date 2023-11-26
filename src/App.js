import { useState } from "react";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Card from "./Components/Main/Card";
import Form from "./Components/Form/Form";
import './Components/Main/Card.css'

const App = () => {

    const [value, setValue] = useState([]);

    const addValues = (val) => {
        setValue(
            (prevState) => {
                return [val, ...prevState];
            }
        );
    }


    const deleteValues = (id) => {
        setValue(
            (prevState) => {
                return prevState.filter(
                    (val, idx) => {
                        return idx !== id;
                    }
                )
            }
        )
    }


    return (
        <div>
            <Header />
            <h1 className="txt">Type here to add the task</h1>
            <Form onSubmit={addValues} />
            <div className="CardBody">
                {
                    value.map(
                        (val, index) => {
                            return (
                                <Card
                                    key={index}
                                    id={index}
                                    title={val.title}
                                    description={val.content}
                                    onDelete={deleteValues}
                                />
                            )
                        }
                    )
                }
            </div>
            <Footer />
        </div>
    )
}

export default App;