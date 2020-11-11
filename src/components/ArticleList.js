import React from 'react';
import './Article.css';

export const ArticleList = (props) => (
    <div className="article-card">
        {props.items.map(item => (
        <>
            <img src={item.image} className="article-imagem" alt="Erro ao carregar imagem" />
            <div className="card-title">
                <h2>{item.title}</h2>
            </div>
            <div className="card-body">
                <h2>{item.title}</h2>
            </div>
        </>
    ))}
    </div>
);