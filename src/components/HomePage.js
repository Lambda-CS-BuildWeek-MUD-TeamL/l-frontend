import React from "react";
import axios from "axios";

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rooms: [],
      token: "",
      uuid: "",
      player: "",
      rmPlayers: "",
      rmTitle: "",
      rmDescrip: "",
      direction: "",
      error_msg: ''
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
    const backendurl = "https://cs21teaml.herokuapp.com";
    //const key = "31bf15bfdc6114ce8fdac6c86b8b1b98b0fe9911";
    const key = localStorage.getItem("token");

    axios({
      url: `${backendurl}/api/adv/init/`,
      method: "GET",
      headers: {
        Authorization: `${key}`
      }
    })
      .then(res => {
        console.log("start info", res.data);
        this.setState({
          token: key,
          uuid: res.data.uuid,
          player: res.data.name,
          rmTitle: res.data.title,
          rmDescrip: res.data.description,
          rmPlayers: res.data.players,
        });
      })
      .catch(err => {
        console.log("Crap:", err);
      });
  };

  handleDirection = direction => {
    const backendurl = "https://cs21teaml.herokuapp.com";

    axios({
      url: `${backendurl}/api/adv/move/`,
      method: "POST",
      headers: {
        Authorization: `${this.state.token}`
      },
      data: {
        direction: direction
      }
    })
      .then(res => {
        console.log("Direction", res.data);
        this.setState({
          rmTitle: res.data.title,
          rmDescrip: res.data.description,
          rmPlayers: res.data.players,
          error_msg: res.data.error_msg
        });
      })
      .catch(err => {
        console.log("Shite!", err);
      });
  };

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
                  borderRight: room.e_to === 0 ? "5px solid #c4c4c4" : "none",
                  borderLeft: room.w_to === 0 ? "5px solid #c4c4c4" : "none",
                  borderTop: room.n_to === 0 ? "5px solid #c4c4c4" : "none",
                  borderBottom: room.s_to === 0 ? "5px solid #c4c4c4" : "none",
                  background:
                    room.title === this.state.rmTitle ? "white" : "none"
                }}
              >
                <p
                  className="room-id"
                  style={{
                    color: room.title === this.state.rmTitle ? "black" : "white"
                  }}
                >
                  {room.id}
                </p>
              </div>
            );
          })}
        </div>
        <div className="controls-div">
          <div className="sub-control">
            <div className="button-div">
              <button
                className="ind-button"
                onClick={() => this.handleDirection("n")}
              >
                <i className="fas fa-arrow-up"></i>
              </button>
            </div>
            <div className="button-div">
              <button
                className="ind-button"
                onClick={() => this.handleDirection("w")}
              >
                <i className="fas fa-arrow-left"></i>
              </button>
              <button
                className="ind-button"
                onClick={() => this.handleDirection("e")}
              >
                <i className="fas fa-arrow-right"></i>
              </button>
            </div>
            <div className="button-div">
              <button
                className="ind-button"
                onClick={() => this.handleDirection("s")}
              >
                <i className="fas fa-arrow-down"></i>
              </button>
            </div>
          </div>
          <div className="sub-control">
          </div>
          <div className="sub-control-text">
              <p className='player'>{this.state.player}</p>
              <p>{this.state.rmTitle}</p>
              <p>{this.state.rmDescrip}</p>
              {/* <p>{this.state.rmPlayers}</p> */}
              {!this.state.error_msg ? '' : <p><i id='dir-warning' className="fas fa-exclamation-circle"></i>{this.state.error_msg}</p>}
              
          </div>
        </div>
      </div>
    );
  }
}
