import { Component } from 'react';
import { BrowserRouter, Route, Routes, Redirect } from 'react-router-dom'
import DogList from './DogList';
import DogDetails from './DogDetails';
import Navbar from './Navbar';
// import './App.css';
import whiskey from './whiskey.jpg'
import hazel from './hazel.png'
import tubby from './tubby.jpg'

class App extends Component {
  static defaultProps = {
    dogs: [
      {
        name: "Whiskey",
        age: 5,
        src: whiskey,
        facts: [
          "Whiskey loves eating popcorn.",
          "Whiskey is a terrible guard dog.",
          "Whiskey wants to cuddle with you!"
        ]
      },
      {
        name: "Hazel",
        age: 3,
        src: hazel,
        facts: [
          "Hazel has soooo much energy!",
          "Hazel is highly intelligent.",
          "Hazel loves people more than dogs."
        ]
      },
      {
        name: "Tubby",
        age: 4,
        src: tubby,
        facts: [
          "Tubby is not the brightest dog",
          "Tubby does not like walks or exercise.",
          "Tubby loves eating food."
        ]
      }
    ]
  }
  render() {
    return (
      <div className="App" >
        <BrowserRouter>
          <Navbar dogs={this.props.dogs} />
          <Routes>
            <Route
              exact
              path='/dogs/:name'
              loader={({ params }) => {
                console.log(params)
                // return getDog(params);
              }}
              action={({ params }) => { }}
              element={<DogDetails dogs={this.props.dogs} />}
            />
            <Route exact path='/dogs' element={<DogList dogs={this.props.dogs} />} />

          </Routes>
        </BrowserRouter>
      </div >
    );
  }
}
export default App;

// export function App2() {
//   let dogs = [
//     {
//       name: "Whiskey",
//       age: 5,
//       src: whiskey,
//       facts: [
//         "Whiskey loves eating popcorn.",
//         "Whiskey is a terrible guard dog.",
//         "Whiskey wants to cuddle with you!"
//       ]
//     },
//     {
//       name: "Hazel",
//       age: 3,
//       src: hazel,
//       facts: [
//         "Hazel has soooo much energy!",
//         "Hazel is highly intelligent.",
//         "Hazel loves people more than dogs."
//       ]
//     },
//     {
//       name: "Tubby",
//       age: 4,
//       src: tubby,
//       facts: [
//         "Tubby is not the brightest dog",
//         "Tubby does not like walks or exercise.",
//         "Tubby loves eating food."
//       ]
//     }
//   ];
//   function getDog(params) {
//     let name = params.name;
//     let currentDog = dogs.find(
//       dog => dog.name.toLowerCase() === name.toLowerCase()
//     );
//     console.log(currentDog);
//     return currentDog
//   };
//   return (
//     <div className="App" >
//       <BrowserRouter>
//         <Routes>
//           <Route
//             exact
//             path='/dogs/:name'
//             loader={({ params }) => {
//               console.log(params)
//               return getDog(params);
//             }}
//             action={({ params }) => { }}
//             element={<DogDetails dogs={dogs} />}
//           />
//           <Route exact path='/dogs' element={<DogList dogs={getDog} />} />
//         </Routes>
//       </BrowserRouter>
//     </div >
//   );
// }




