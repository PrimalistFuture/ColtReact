import React, { Component } from "react";
import { useParams, Link } from 'react-router-dom';
import './DogDetails.css';



function DogDetails(props) {
    let params = useParams();

    function getDog(params) {
        let name = params.name;
        let currentDog = props.dogs.find(
            dog => dog.name.toLowerCase() === name.toLowerCase()
        );
        return currentDog
    }
    let dog = getDog(params);

    return (
        <div className="container">
            <div className="DogDetails row justify-content-center mt-5">
                <div className="col-11 col-lg-5">
                    <div className="DogDetails-card card">
                        <img className='card-img-top' src={dog.src} alt={dog.name}></img>
                        <div className="card-body">
                            <h2 className="card-title">{dog.name}</h2>
                            <h4 className="card-subtitle text-muted">
                                {dog.age} years old
                            </h4>
                        </div>
                        <ul className="list-group list-group-flush">
                            {dog.facts.map((fact, i) => (
                                <li className="list-group-list-item" key={i}>{fact}
                                </li>
                            ))}
                        </ul>
                        <div className="card-body">
                            <Link to={'/dogs'} className="btn btn-info">
                                Go back
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DogDetails;



// class DogDetails extends Component {
//     constructor(props) {
//         super(props);

//     }
//     render() {
//         return (
//             <div className="DogDetails">
//                 <h1></h1>

//             </div>
//         )
//     }
// }