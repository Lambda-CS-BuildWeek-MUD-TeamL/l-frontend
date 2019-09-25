import React from "react";
import axios from "axios";

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rooms: [],
      token: "",
      player: "",
      rmPlayers: "",
      rmTitle: "",
      rmDescrip: "",
    };
  }

  componentDidMount() {
    this.init();

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

  init = () => {
    const key = "31bf15bfdc6114ce8fdac6c86b8b1b98b0fe9911";
    const backendurl = "https://cs21teaml.herokuapp.com";

    axios({
      url: `${backendurl}/api/adv/init`,
      method: "GET",
      headers: {
        Authorization: `Token ${key}`
      }
    }).then(res => {
      this.setState({
        player: res.data.name,
        rmPlayers: res.data.players,
        rmTitle: res.data.title,
        rmDescrip: res.data.description
      })
    })

  }

  render() {
    return (
      <div className="homepage-div">
        <h1 className="homepage-header">Team L - MUD</h1>
        <div className="game-div">
          {this.state.rooms.map(room => {
            return (
              <div
                key={room.id}
                className="rooms-div"
                style={{
                  borderRight: room.e_to === 0 ? "5px solid #c4c4c4" : "5px solid green",
                  borderLeft: room.w_to === 0 ? "5px solid #c4c4c4" : "5px solid green",
                  borderTop: room.n_to === 0 ? "5px solid #c4c4c4" : "5px solid green",
                  borderBottom: room.s_to === 0 ? "5px solid #c4c4c4" : "5px solid green"
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
          <div className="sub-control">
            <ul>
              <li>{this.state.player}</li>
              <li>{this.state.rmTitle}</li>
              <li>{this.state.rmDescrip}</li>
              <li>{this.state.rmPlayers}</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
