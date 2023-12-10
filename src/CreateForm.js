import React, { useState } from "react";
import dataSource from "./dataSource";
import { useNavigate } from 'react-router-dom';


const CreateForm = () => {
    const [data, setData] = useState({
        userId: 12,
        username: "luberdoodle",
        caption: '',
        date: '',
        img: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setData({
            ...data,
            [name]: value,
        });
    };

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log('Form submitted:', data);
        await dataSource.post('/posts', data);
        navigate('/', {replace: true});
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="caption">Caption:</label>
                <input
                    type="text"
                    id="caption"
                    name="caption"
                    value={data.caption}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="date">Date:</label>
                <input
                    type="date"
                    id="date"
                    name="date"
                    value={data.date}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="img">Image Url:</label>
                <input
                    type="text"
                    id="img"
                    name="img"
                    value={data.img}
                    onChange={handleChange}
                />
            </div>
            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
    );
};

export default CreateForm;