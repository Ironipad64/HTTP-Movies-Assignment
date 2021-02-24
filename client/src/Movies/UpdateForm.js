import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";

const initialMovie = {
    id: "",
    title: "",
    director: "",
    metascore: "",
    stars: [],
}

const UpdateForm = props => {
    const [movie, setMovie] = useState(initialMovie)

    const { id } = 1
    // const { push } = = useHistory();

    useEffect(() => {
        axios
            .get(`http://localhost:5000/api/movies/${id}`)
            .then((res) => {
                setMovie(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    })

    // const changeHandler = ev => {
    //     ev.persist()
    //     let value = ev.target.value;
    //     if(ev.target.name === "")
    // }

    const handleSubmit = e => {
        e.preventDefault();
    }



    return (
        <div>
            <form>
                <input
                    type="text"
                    name="id"
                    // onChange={changeHandler}
                    placeholder="id"
                // value={item.id}
                />
                <input
                    type="text"
                    name="title"
                    // onChange={changeHandler}
                    placeholder="title"
                // value={item.title}
                />
                <input
                    type="text"
                    name="director"
                    // onChange={changeHandler}
                    placeholder="director"
                // value={item.director}
                />
                <input
                    type="text"
                    name="metascore"
                    // onChange={changeHandler}
                    placeholder="metascore"
                // value={item.metascore}
                />
                <input
                    type="text"
                    name="stars"
                    // onChange={changeHandler}
                    placeholder="stars"
                // value={item.stars}
                />
            </form>
        </div>
    )
}

export default UpdateForm;