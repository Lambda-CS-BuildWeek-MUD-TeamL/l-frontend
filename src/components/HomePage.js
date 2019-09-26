import React from "react";
import axios from "axios";
import { white } from "ansi-colors";

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
      rmImg: "",
      error_msg: ""
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
        rmPlayers: res.data.players
        });

          if (res.data.title === "Room 1") {
            const imgUrl = "https://picsum.photos/190?random=1";
            this.setState({
              rmImg: imgUrl
            });
          }

          if (res.data.title === "Room 2") {
            const imgUrl = "https://picsum.photos/id/508/190";
            this.setState({
              rmImg: imgUrl
            });
          }

          if (res.data.title === "Room 3") {
            const imgUrl = "https://picsum.photos/id/546/190";
            this.setState({
              rmImg: imgUrl
            });
          }

          if (res.data.title === "Room 4") {
            const imgUrl = "https://picsum.photos/id/564/190";
            this.setState({
              rmImg: imgUrl
            });
          }

          if (res.data.title === "Room 5") {
            const imgUrl = "https://picsum.photos/id/573/190";
            this.setState({
              rmImg: imgUrl
            });
          }

          if (res.data.title === "Room 6") {
            const imgUrl = "https://picsum.photos/id/952/190";
            this.setState({
              rmImg: imgUrl
            });
          }

          if (res.data.title === "Room 7") {
            const imgUrl = "https://picsum.photos/id/995/190";
            this.setState({
              rmImg: imgUrl
            });
          }

          if (res.data.title === "Room 8") {
            const imgUrl = "https://picsum.photos/id/914/190";
            this.setState({
              rmImg: imgUrl
            });
          }

          if (res.data.title === "Room 9") {
            const imgUrl = "https://picsum.photos/id/926/190";
            this.setState({
              rmImg: imgUrl
            });
          }

          if (res.data.title === "Room 10") {
            const imgUrl = "https://picsum.photos/id/886/190";
            this.setState({
              rmImg: imgUrl
            });
          }

          if (res.data.title === "Room 11") {
            const imgUrl = "https://picsum.photos/id/879/190";
            this.setState({
              rmImg: imgUrl
            });
          }

          if (res.data.title === "Room 12") {
            const imgUrl = "https://picsum.photos/id/878/190";
            this.setState({
              rmImg: imgUrl
            });
          }

          if (res.data.title === "Room 13") {
            const imgUrl = "https://picsum.photos/id/807/190";
            this.setState({
              rmImg: imgUrl
            });
          }

          if (res.data.title === "Room 14") {
            const imgUrl = "https://picsum.photos/id/803/190";
            this.setState({
              rmImg: imgUrl
            });
          }

          if (res.data.title === "Room 15") {
            const imgUrl = "https://picsum.photos/id/78/190";
            this.setState({
              rmImg: imgUrl
            });
          }

          if (res.data.title === "Room 16") {
            const imgUrl = "https://picsum.photos/id/741/190";
            this.setState({
              rmImg: imgUrl
            });
          }

          if (res.data.title === "Room 17") {
            const imgUrl = "https://picsum.photos/id/733/190";
            this.setState({
              rmImg: imgUrl
            });
          }

          if (res.data.title === "Room 18") {
            const imgUrl = "https://picsum.photos/id/631/190";
            this.setState({
              rmImg: imgUrl
            });
          }

          if (res.data.title === "Room 19") {
            const imgUrl = "https://picsum.photos/id/307/190";
            this.setState({
              rmImg: imgUrl
            });
          }

          if (res.data.title === "Room 20") {
            const imgUrl = "https://picsum.photos/id/292/190";
            this.setState({
              rmImg: imgUrl
            });
          }

          if (res.data.title === "Room 21") {
            const imgUrl = "https://picsum.photos/id/284/190";
            this.setState({
              rmImg: imgUrl
            });
          }

          if (res.data.title === "Room 22") {
            const imgUrl = "https://picsum.photos/id/1025/190";
            this.setState({
              rmImg: imgUrl
            });
          }

          if (res.data.title === "Room 23") {
            const imgUrl = "https://picsum.photos/id/619/190";
            this.setState({
              rmImg: imgUrl
            });
          }

          if (res.data.title === "Room 24") {
            const imgUrl = "https://picsum.photos/id/1014/190";
            this.setState({
              rmImg: imgUrl
            });
          }

          if (res.data.title === "Room 25") {
            const imgUrl = "https://picsum.photos/id/1019/190";
            this.setState({
              rmImg: imgUrl
            });
          }

          if (res.data.title === "Room 26") {
            const imgUrl = "https://picsum.photos/id/528/190";
            this.setState({
              rmImg: imgUrl
            });
          }

          if (res.data.title === "Room 27") {
            const imgUrl = "https://picsum.photos/id/1021/190";
            this.setState({
              rmImg: imgUrl
            });
          }

          if (res.data.title === "Room 28") {
            const imgUrl = "https://picsum.photos/id/1028/190";
            this.setState({
              rmImg: imgUrl
            });
          }

          if (res.data.title === "Room 29") {
            const imgUrl = "https://picsum.photos/id/146/190";
            this.setState({
              rmImg: imgUrl
            });
          }

          if (res.data.title === "Room 30") {
            const imgUrl = "https://picsum.photos/id/555/190";
            this.setState({
              rmImg: imgUrl
            });
          }

          if (res.data.title === "Room 31") {
            const imgUrl = "https://picsum.photos/id/1062/190";
            this.setState({
              rmImg: imgUrl
            });
          }

          if (res.data.title === "Room 32") {
            const imgUrl = "https://picsum.photos/id/227/190";
            this.setState({
              rmImg: imgUrl
            });
          }

          if (res.data.title === "Room 33") {
            const imgUrl = "https://picsum.photos/id/40/190";
            this.setState({
              rmImg: imgUrl
            });
          }

          if (res.data.title === "Room 34") {
            const imgUrl = "https://picsum.photos/id/42/190";
            this.setState({
              rmImg: imgUrl
            });
          }

          if (res.data.title === "Room 35") {
            const imgUrl = "https://picsum.photos/id/478/190";
            this.setState({
              rmImg: imgUrl
            });
          }

          if (res.data.title === "Room 36") {
            const imgUrl = "https://picsum.photos/id/491/190";
            this.setState({
              rmImg: imgUrl
            });
          }

          if (res.data.title === "Room 37") {
            const imgUrl = "https://picsum.photos/id/515/190";
            this.setState({
              rmImg: imgUrl
            });
          }

          if (res.data.title === "Room 38") {
            const imgUrl = "https://picsum.photos/id/611/190";
            this.setState({
              rmImg: imgUrl
            });
          }

          if (res.data.title === "Room 39") {
            const imgUrl = "https://picsum.photos/id/755/190";
            this.setState({
              rmImg: imgUrl
            });
          }

          if (res.data.title === "Room 40") {
            const imgUrl = "https://picsum.photos/id/935/190";
            this.setState({
              rmImg: imgUrl
            });
          }

          if (res.data.title === "Room 41") {
            const imgUrl = "https://picsum.photos/id/967/190";
            this.setState({
              rmImg: imgUrl
            });
          }

          if (res.data.title === "Room 42") {
            const imgUrl = "https://picsum.photos/id/1028/190";
            this.setState({
              rmImg: imgUrl
            });
          }

          if (res.data.title === "Room 43") {
            const imgUrl = "https://picsum.photos/id/104/190";
            this.setState({
              rmImg: imgUrl
            });
          }

          if (res.data.title === "Room 44") {
            const imgUrl = "https://picsum.photos/id/959/190";
            this.setState({
              rmImg: imgUrl
            });
          }

          if (res.data.title === "Room 45") {
            const imgUrl = "https://picsum.photos/id/115/190";
            this.setState({
              rmImg: imgUrl
            });
          }
      })
        .catch(err => {
        console.log("Crap:", err)
    })

  }

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
        if (res.data.title === "Room 1" && !res.data.error_msg) {
          const imgUrl = "https://picsum.photos/190?random=1";
          this.setState({
            rmImg: imgUrl
          });
        } else if (res.data.title === "Room 2" && !res.data.error_msg) {
          const imgUrl = "https://picsum.photos/id/508/190";
          this.setState({
            rmImg: imgUrl
          });
        } else if (res.data.title === "Room 3" && !res.data.error_msg) {
          const imgUrl = "https://picsum.photos/id/546/190";
          this.setState({
            rmImg: imgUrl
          });
        } else if (res.data.title === "Room 4" && !res.data.error_msg) {
          const imgUrl = "https://picsum.photos/id/564/190";
          this.setState({
            rmImg: imgUrl
          });
        } else if (res.data.title === "Room 5" && !res.data.error_msg) {
          const imgUrl = "https://picsum.photos/id/573/190";
          this.setState({
            rmImg: imgUrl
          });
        } else if (res.data.title === "Room 6" && !res.data.error_msg) {
          const imgUrl = "https://picsum.photos/id/952/190";
          this.setState({
            rmImg: imgUrl
          });
        } else if (res.data.title === "Room 7" && !res.data.error_msg) {
          const imgUrl = "https://picsum.photos/id/995/190";
          this.setState({
            rmImg: imgUrl
          });
        } else if (res.data.title === "Room 8" && !res.data.error_msg) {
          const imgUrl = "https://picsum.photos/id/914/190";
          this.setState({
            rmImg: imgUrl
          });
        } else if (res.data.title === "Room 9" && !res.data.error_msg) {
          const imgUrl = "https://picsum.photos/id/926/190";
          this.setState({
            rmImg: imgUrl
          });
        } else if (res.data.title === "Room 10" && !res.data.error_msg) {
          const imgUrl = "https://picsum.photos/id/886/190";
          this.setState({
            rmImg: imgUrl
          });
        } else if (res.data.title === "Room 11" && !res.data.error_msg) {
          const imgUrl = "https://picsum.photos/id/879/190";
          this.setState({
            rmImg: imgUrl
          });
        } else if (res.data.title === "Room 12" && !res.data.error_msg) {
          const imgUrl = "https://picsum.photos/id/878/190";
          this.setState({
            rmImg: imgUrl
          });
        } else if (res.data.title === "Room 13" && !res.data.error_msg) {
          const imgUrl = "https://picsum.photos/id/807/190";
          this.setState({
            rmImg: imgUrl
          });
        } else if (res.data.title === "Room 14" && !res.data.error_msg) {
          const imgUrl = "https://picsum.photos/id/803/190";
          this.setState({
            rmImg: imgUrl
          });
        } else if (res.data.title === "Room 15" && !res.data.error_msg) {
          const imgUrl = "https://picsum.photos/id/78/190";
          this.setState({
            rmImg: imgUrl
          });
        } else if (res.data.title === "Room 16" && !res.data.error_msg) {
          const imgUrl = "https://picsum.photos/id/741/190";
          this.setState({
            rmImg: imgUrl
          });
        } else if (res.data.title === "Room 17" && !res.data.error_msg) {
          const imgUrl = "https://picsum.photos/id/733/190";
          this.setState({
            rmImg: imgUrl
          });
        } else if (res.data.title === "Room 18" && !res.data.error_msg) {
          const imgUrl = "https://picsum.photos/id/631/190";
          this.setState({
            rmImg: imgUrl
          });
        } else if (res.data.title === "Room 19" && !res.data.error_msg) {
          const imgUrl = "https://picsum.photos/id/307/190";
          this.setState({
            rmImg: imgUrl
          });
        } else if (res.data.title === "Room 20" && !res.data.error_msg) {
          const imgUrl = "https://picsum.photos/id/292/190";
          this.setState({
            rmImg: imgUrl
          });
        } else if (res.data.title === "Room 21" && !res.data.error_msg) {
          const imgUrl = "https://picsum.photos/id/284/190";
          this.setState({
            rmImg: imgUrl
          });
        } else if (res.data.title === "Room 22" && !res.data.error_msg) {
          const imgUrl = "https://picsum.photos/id/1025/190";
          this.setState({
            rmImg: imgUrl
          });
        } else if (res.data.title === "Room 23" && !res.data.error_msg) {
          const imgUrl = "https://picsum.photos/id/619/190";
          this.setState({
            rmImg: imgUrl
          });
        } else if (res.data.title === "Room 24" && !res.data.error_msg) {
          const imgUrl = "https://picsum.photos/id/1014/190";
          this.setState({
            rmImg: imgUrl
          });
        } else if (res.data.title === "Room 25" && !res.data.error_msg) {
          const imgUrl = "https://picsum.photos/id/1019/190";
          this.setState({
            rmImg: imgUrl
          });
        } else if (res.data.title === "Room 26" && !res.data.error_msg) {
          const imgUrl = "https://picsum.photos/id/528/190";
          this.setState({
            rmImg: imgUrl
          });
        } else if (res.data.title === "Room 27" && !res.data.error_msg) {
          const imgUrl = "https://picsum.photos/id/1021/190";
          this.setState({
            rmImg: imgUrl
          });
        } else if (res.data.title === "Room 28" && !res.data.error_msg) {
          const imgUrl = "https://picsum.photos/id/1028/190";
          this.setState({
            rmImg: imgUrl
          });
        } else if (res.data.title === "Room 29" && !res.data.error_msg) {
          const imgUrl = "https://picsum.photos/id/146/190";
          this.setState({
            rmImg: imgUrl
          });
        } else if (res.data.title === "Room 30" && !res.data.error_msg) {
          const imgUrl = "https://picsum.photos/id/555/190";
          this.setState({
            rmImg: imgUrl
          });
        } else if (res.data.title === "Room 31" && !res.data.error_msg) {
          const imgUrl = "https://picsum.photos/id/1062/190";
          this.setState({
            rmImg: imgUrl
          });
        } else if (res.data.title === "Room 32" && !res.data.error_msg) {
          const imgUrl = "https://picsum.photos/id/227/190";
          this.setState({
            rmImg: imgUrl
          });
        } else if (res.data.title === "Room 33" && !res.data.error_msg) {
          const imgUrl = "https://picsum.photos/id/40/190";
          this.setState({
            rmImg: imgUrl
          });
        } else if (res.data.title === "Room 34" && !res.data.error_msg) {
          const imgUrl = "https://picsum.photos/id/42/190";
          this.setState({
            rmImg: imgUrl
          });
        } else if (res.data.title === "Room 35" && !res.data.error_msg) {
          const imgUrl = "https://picsum.photos/id/478/190";
          this.setState({
            rmImg: imgUrl
          });
        } else if (res.data.title === "Room 36" && !res.data.error_msg) {
          const imgUrl = "https://picsum.photos/id/491/190";
          this.setState({
            rmImg: imgUrl
          });
        } else if (res.data.title === "Room 37" && !res.data.error_msg) {
          const imgUrl = "https://picsum.photos/id/515/190";
          this.setState({
            rmImg: imgUrl
          });
        } else if (res.data.title === "Room 38" && !res.data.error_msg) {
          const imgUrl = "https://picsum.photos/id/611/190";
          this.setState({
            rmImg: imgUrl
          });
        } else if (res.data.title === "Room 39" && !res.data.error_msg) {
          const imgUrl = "https://picsum.photos/id/755/190";
          this.setState({
            rmImg: imgUrl
          });
        } else if (res.data.title === "Room 40" && !res.data.error_msg) {
          const imgUrl = "https://picsum.photos/id/935/190";
          this.setState({
            rmImg: imgUrl
          });
        } else if (res.data.title === "Room 41" && !res.data.error_msg) {
          const imgUrl = "https://picsum.photos/id/967/190";
          this.setState({
            rmImg: imgUrl
          });
        } else if (res.data.title === "Room 42" && !res.data.error_msg) {
          const imgUrl = "https://picsum.photos/id/1028/190";
          this.setState({
            rmImg: imgUrl
          });
        } else if (res.data.title === "Room 43" && !res.data.error_msg) {
          const imgUrl = "https://picsum.photos/id/104/190";
          this.setState({
            rmImg: imgUrl
          });
        } else if (res.data.title === "Room 44" && !res.data.error_msg) {
          const imgUrl = "https://picsum.photos/id/959/190";
          this.setState({
            rmImg: imgUrl
          });
        } else if (res.data.title === "Room 45" && !res.data.error_msg) {
          const imgUrl = "https://picsum.photos/id/115/190";
          this.setState({
            rmImg: imgUrl
          });
        }
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
                  borderRight: room.e_to === 0 ? "5px solid #4f4f4f" : "none",
                  borderLeft: room.w_to === 0 ? "5px solid #4f4f4f" : "none",
                  borderTop: room.n_to === 0 ? "5px solid #4f4f4f" : "none",
                  borderBottom: room.s_to === 0 ? "5px solid #4f4f4f" : "none",
                }}
              >
                <p
                  className="room-id"
                  style={{
                    color: room.title === this.state.rmTitle ? 'dodgerblue' : '#c4c4c4'
                  }}
                >
                  {room.title === this.state.rmTitle ? (
                    <i id='av-horse' className="fas fa-horse"></i>
                  ) : (
                    <i id='av-circle' className="fas fa-circle"></i>
                  )}
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
            <img src={this.state.rmImg} alt="random" />
          </div>
          <div className="sub-control-text">
            <p className="player">{this.state.player}</p>
            <p>{this.state.rmTitle}</p>
            <p>{this.state.rmDescrip}</p>
            {/* <p>{this.state.rmPlayers}</p> */}
            {!this.state.error_msg ? (
              ""
            ) : (
              <p>
                <i id="dir-warning" className="fas fa-exclamation-circle"></i>
                {this.state.error_msg}
              </p>
            )}
          </div>
        </div>
      </div>
    );
  }
}
