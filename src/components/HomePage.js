import React from "react";
import axios from "axios";

export default class HomePage extends React.Component {
  constructor() {
    super();
    this.state = {
      rooms: []
    };
  }

  componentDidMount() {
    const endpoint = "https://cs21teaml.herokuapp.com/api/adv/rooms";
    axios
      .get(endpoint)
      .then(res => {
        console.log(res.data);
        const newArr = res.data.rooms;
        this.setState({
          rooms: newArr.sort(function(a, b) {
            return a.id - b.id;
          })
        });
        console.log("state rooms:", this.state.rooms);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="homepage-div">
        <h1 className="homepage-header">Team L - MUD</h1>
        <div className="game-div">
          {this.state.rooms.map(room => {
            return (
              <div
                className="rooms-div"
                style={{
                  borderRight:
                    room.e_to === 0 ? "5px solid #c4c4c4" : "none",
                  borderLeft:
                    room.w_to === 0 ? "5px solid #c4c4c4" : "none",
                    borderTop:
                    room.n_to === 0 ? "5px solid #c4c4c4" : "none",
                    borderBottom:
                    room.s_to === 0 ? "5px solid #c4c4c4" : "none"
                }}
              >
                <p className="room-id">{room.id}</p>
              </div>
            );
          })}
        </div>
        <div className="controls-div">
          <div className="sub-control">
            <div className="button-div">
              <button className="ind-button">
                <i className="fas fa-arrow-up"></i>
              </button>
            </div>
            <div className="button-div">
              <button className="ind-button">
                <i className="fas fa-arrow-left"></i>
              </button>
              <button className="ind-button">
                <i className="fas fa-arrow-right"></i>
              </button>
            </div>
            <div className="button-div">
              <button className="ind-button">
                <i className="fas fa-arrow-down"></i>
              </button>
            </div>
          </div>
          <div className="sub-control"></div>
        </div>
      </div>
    );
  }
}
