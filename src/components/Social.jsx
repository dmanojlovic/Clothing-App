import React from "react";

import './socialSearchBar/App.css';

import NamesContainer from './socialSearchBar/NamesContainer';
import scroll from './scroll';
class App extends React.Component {

  state = {
    names: [
      'John', 'Abigail', 'X Æ A-Xii', 'Beyonce', 'Khloe Kardashian', 'George Bush', 'Queen Elizabeth', 'Yeezy', 'Ivanka Trump', 'Leonardo DiCaprio', 
    ],
    searchTerm: ''
  }

  editSearchTerm = (e) => {
    this.setState({searchTerm: e.target.value})
  }

  dynamicSearch = () => {
    return this.state.names.filter(name => name.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
  }


    render(){
      return (
        <div style = {{textAlign: 'center', paddingTop: '30vh'}}>
          <input type= 'text' value = {this.state.searchTerm} onChange = {this.editSearchTerm} placeholder = 'Search for a name!'/>
          <br></br>
          <h3>These are the important names:</h3>
          <NamesContainer names = {this.dynamicSearch()}/>
        </div>
      );
    }
}

function Social() {
  return (
    <div className="social">
      <div class="container">
        <div class="row align-items-center my-50">
          <div class="col-lg-7">
            <a href = "https://scontent-ort2-1.xx.fbcdn.net/v/t1.18169-9/18740637_736694153169035_5617506210929128334_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=z3bzOutspYoAX_h7gE1&_nc_ht=scontent-ort2-1.xx&oh=dd6ae483dda86139fed19be3b37a8496&oe=616B2FB5"><img
              class="img-fluid rounded mb-4 mb-lg-0"
              
              alt=""
            />
            </a>
          </div>
          <div class="col-lg-60">
            <h1 class="font-weight-light">Friends</h1>
            <p>
              Check out what your friends are buying and wearing. Get
              your friends and family clothing that you know will fit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
// import React from "react";
// import "../App.css";

// class AddTask extends React.Component {
//   render() {
//     return (
//       <div className="add-task">
//         <input
//           name="task-input"
//           type="text"
//           id="task"
//           className="text-input"
//           placeholder="Enter your next task..."
//           autoComplete="off"
//         />
//         <button onClick={this.props.handleAddButton} className="add-button">
//           Add task
//         </button>
//       </div>
//     );
//   }
// }

// export default AddTask;
export default Social;