import React from 'react';
import './ArticleList.css';

export const ArticleList = (props) => (
    <div className="article-card">
        {props.items.map(item => (
        <>
            <div className="card-image">
                <img src={item.image} className="article-image" alt="Erro ao carregar imagem" />
            </div>
            <div className="card-body">
                <h2>{item.title}</h2>
                <p>{item.text}</p>  
            </div>
        </>
    ))}
    </div>
);