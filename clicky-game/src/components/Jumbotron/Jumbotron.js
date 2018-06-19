import React from "react";
import "./Jumbotron.css";

const Jumbotron = props => (
    <div className="jumbotron jumbotron-fluid">
        <div className="container">
            <div className="dark-box mx-auto">
                <h1 className="display-4 text-center">ClickBros</h1>
                <p className="lead text-center">Click a bro to earn points but don't click the same bro twice.</p>
                <h3 className="text-center">Score: {props.score} | Top Score: {props.topScore}</h3>
                <h5 className="text-center">{props.message}</h5>
            </div>
        </div>
    </div>
);

export default Jumbotron;