import React from 'react';
import { useNavigate } from 'react-router-dom';
import dataSource from './dataSource';

const Card = ({ card }) => {
    const navigate = useNavigate();

    const handleDelete = async (event) => {
        event.preventDefault();
        await dataSource.delete(`/posts/${card.postId}`);
        console.log(card.postId);
        navigate('/', {replace: true});
    }

    const handleEdit = () => {
        navigate(`/edit/${card.postId}`);
    }

    return (
        <div className="card" style={{width: '18rem'}}>
            <img src={card.img} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{card.username}</h5>
                <p className="card-text">{card.caption}</p>
                <a href="" className="btn btn-primary" onClick={handleEdit}>Edit</a>
                <a href="" className="btn btn-danger" onClick={handleDelete}>Delete</a>
            </div>
        </div>
    );
};

export default Card;