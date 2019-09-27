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

          if (res.data.title === "Room 46") {
            const imgUrl = "https://picsum.photos/id/111/190";
            this.setState({
              rmImg: imgUrl
            });
          }

          if (res.data.title === "Room 47") {
            const imgUrl = "https://picsum.photos/id/112/190";
            this.setState({
              rmImg: imgUrl
            });
          }

          if (res.data.title === "Room 48") {
            const imgUrl = "https://picsum.photos/id/122/190";
            this.setState({
              rmImg: imgUrl
            });
          }

          if (res.data.title === "Room 49") {
            const imgUrl = "https://picsum.photos/id/134/190";
            this.setState({
              rmImg: imgUrl
            });
          }

          if (res.data.title === "Room 50") {
            const imgUrl = "https://picsum.photos/id/1082/190";
            this.setState({
              rmImg: imgUrl
            });
          }

          if (res.data.title === "Room 51") {
            const imgUrl = "https://picsum.photos/id/1026/190";
            this.setState({
              rmImg: imgUrl
            });
          }

          if (res.data.title === "Room 52") {
            const imgUrl = "https://picsum.photos/id/100/190";
            this.setState({
              rmImg: imgUrl
            });
          }

          if (res.data.title === "Room 53") {
            const imgUrl = "https://picsum.photos/id/1005/190";
            this.setState({
              rmImg: imgUrl
            });
          }

          if (res.data.title === "Room 54") {
            const imgUrl = "https://picsum.photos/id/1018/190";
            this.setState({
              rmImg: imgUrl
            });
          }

          if (res.data.title === "Room 55") {
            const imgUrl = "https://picsum.photos/id/103/190";
            this.setState({
              rmImg: imgUrl
            });
          }

          if (res.data.title === "Room 56") {
            const imgUrl = "https://picsum.photos/id/1047/190";
            this.setState({
              rmImg: imgUrl
            });
          }

          if (res.data.title === "Room 57") {
            const imgUrl = "https://picsum.photos/id/1079/190";
            this.setState({
              rmImg: imgUrl
            });
          }

          if (res.data.title === "Room 58") {
            const imgUrl = "https://picsum.photos/id/1084/190";
            this.setState({
              rmImg: imgUrl
            });
          }

          if (res.data.title === "Room 59") {
            const imgUrl = "https://picsum.photos/id/113/190";
            this.setState({
              rmImg: imgUrl
            });
          }

          if (res.data.title === "Room 60") {
            const imgUrl = "https://picsum.photos/id/118/190";
            this.setState({
              rmImg: imgUrl
            });
          }

          if (res.data.title === "Room 61") {
            const imgUrl = "https://picsum.photos/id/117/190";
            this.setState({
              rmImg: imgUrl
            });
          }

          if (res.data.title === "Room 62") {
            const imgUrl = "https://picsum.photos/id/12/190";
            this.setState({
              rmImg: imgUrl
            });
          }

          if (res.data.title === "Room 63") {
            const imgUrl = "https://picsum.photos/id/120/190";
            this.setState({
              rmImg: imgUrl
            });
          }

          if (res.data.title === "Room 64") {
            const imgUrl = "https://picsum.photos/id/126/190";
            this.setState({
              rmImg: imgUrl
            });
          }

          if (res.data.title === "Room 65") {
            const imgUrl = "https://picsum.photos/id/133/190";
            this.setState({
              rmImg: imgUrl
            });
          }

          if (res.data.title === "Room 66") {
            const imgUrl = "https://picsum.photos/id/132/190";
            this.setState({
              rmImg: imgUrl
            });
          }

          if (res.data.title === "Room 67") {
            const imgUrl = "https://picsum.photos/id/1069/190";
            this.setState({
              rmImg: imgUrl
            });
          }

          if (res.data.title === "Room 68") {
            const imgUrl = "https://picsum.photos/id/1073/190";
            this.setState({
              rmImg: imgUrl
            });
          }

          if (res.data.title === "Room 69") {
            const imgUrl = "https://picsum.photos/id/1053/190";
            this.setState({
              rmImg: imgUrl
            });
          }

          if (res.data.title === "Room 70") {
            const imgUrl = "https://picsum.photos/id/1016/190";
            this.setState({
              rmImg: imgUrl
            });
          }

          if (res.data.title === "Room 71") {
            const imgUrl = "https://picsum.photos/id/1019/190";
            this.setState({
              rmImg: imgUrl
            });
          }

          if (res.data.title === "Room 72") {
            const imgUrl = "https://picsum.photos/id/1055/190";
            this.setState({
              rmImg: imgUrl
            });
          }

          if (res.data.title === "Room 73") {
            const imgUrl = "https://picsum.photos/id/1060/190";
            this.setState({
              rmImg: imgUrl
            });
          }

          if (res.data.title === "Room 74") {
            const imgUrl = "https://picsum.photos/id/129/190";
            this.setState({
              rmImg: imgUrl
            });
          }

          if (res.data.title === "Room 75") {
            const imgUrl = "https://picsum.photos/id/130/190";
            this.setState({
              rmImg: imgUrl
            });
          }

          if (res.data.title === "Room 76") {
            const imgUrl = "https://picsum.photos/id/10/190";
            this.setState({
              rmImg: imgUrl
            });
          }

          if (res.data.title === "Room 77") {
            const imgUrl = "https://picsum.photos/id/1024/190";
            this.setState({
              rmImg: imgUrl
            });
          }

          if (res.data.title === "Room 78") {
            const imgUrl = "https://picsum.photos/id/136/190";
            this.setState({
              rmImg: imgUrl
            });
          }

          if (res.data.title === "Room 79") {
            const imgUrl = "https://picsum.photos/id/137/190";
            this.setState({
              rmImg: imgUrl
            });
          }

          if (res.data.title === "Room 80") {
            const imgUrl = "https://picsum.photos/id/143/190";
            this.setState({
              rmImg: imgUrl
            });
          }

          if (res.data.title === "Room 81") {
            const imgUrl = "https://picsum.photos/id/15/190";
            this.setState({
              rmImg: imgUrl
            });
          }

          if (res.data.title === "Room 82") {
            const imgUrl = "https://picsum.photos/id/145/190";
            this.setState({
              rmImg: imgUrl
            });
          }

          if (res.data.title === "Room 83") {
            const imgUrl = "https://picsum.photos/id/153/190";
            this.setState({
              rmImg: imgUrl
            });
          }

          if (res.data.title === "Room 84") {
            const imgUrl = "https://picsum.photos/id/167/190";
            this.setState({
              rmImg: imgUrl
            });
          }

          if (res.data.title === "Room 85") {
            const imgUrl = "https://picsum.photos/id/171/190";
            this.setState({
              rmImg: imgUrl
            });
          }

          if (res.data.title === "Room 86") {
            const imgUrl = "https://picsum.photos/id/175/190";
            this.setState({
              rmImg: imgUrl
            });
          }

          if (res.data.title === "Room 87") {
            const imgUrl = "https://picsum.photos/id/200/190";
            this.setState({
              rmImg: imgUrl
            });
          }

          if (res.data.title === "Room 88") {
            const imgUrl = "https://picsum.photos/id/217/190";
            this.setState({
              rmImg: imgUrl
            });
          }

          if (res.data.title === "Room 89") {
            const imgUrl = "https://picsum.photos/id/22/190";
            this.setState({
              rmImg: imgUrl
            });
          }

          if (res.data.title === "Room 90") {
            const imgUrl = "https://picsum.photos/id/212/190";
            this.setState({
              rmImg: imgUrl
            });
          }

          if (res.data.title === "Room 91") {
            const imgUrl = "https://picsum.photos/id/214/190";
            this.setState({
              rmImg: imgUrl
            });
          }

          if (res.data.title === "Room 92") {
            const imgUrl = "https://picsum.photos/id/21/190";
            this.setState({
              rmImg: imgUrl
            });
          }

          if (res.data.title === "Room 93") {
            const imgUrl = "https://picsum.photos/id/210/190";
            this.setState({
              rmImg: imgUrl
            });
          }

          if (res.data.title === "Room 94") {
            const imgUrl = "https://picsum.photos/id/211/190";
            this.setState({
              rmImg: imgUrl
            });
          }

          if (res.data.title === "Room 95") {
            const imgUrl = "https://picsum.photos/id/22/190";
            this.setState({
              rmImg: imgUrl
            });
          }

          if (res.data.title === "Room 96") {
            const imgUrl = "https://picsum.photos/id/183/190";
            this.setState({
              rmImg: imgUrl
            });
          }

          if (res.data.title === "Room 97") {
            const imgUrl = "https://picsum.photos/id/186/190";
            this.setState({
              rmImg: imgUrl
            });
          }

          if (res.data.title === "Room 98") {
            const imgUrl = "https://picsum.photos/id/159/190";
            this.setState({
              rmImg: imgUrl
            });
          }

          if (res.data.title === "Room 99") {
            const imgUrl = "https://picsum.photos/id/160/190";
            this.setState({
              rmImg: imgUrl
            });
          }

          if (res.data.title === "Room 100") {
            const imgUrl = "https://picsum.photos/id/158/190";
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
        } else if (res.data.title === "Room 46" && !res.data.error_msg) {
          const imgUrl = "https://picsum.photos/id/111/190";
          this.setState({
            rmImg: imgUrl
          });
        } else if (res.data.title === "Room 47" && !res.data.error_msg) {
          const imgUrl = "https://picsum.photos/id/112/190";
          this.setState({
            rmImg: imgUrl
          });
        } else if (res.data.title === "Room 48" && !res.data.error_msg) {
          const imgUrl = "https://picsum.photos/id/122/190";
          this.setState({
            rmImg: imgUrl
          });
        } else if (res.data.title === "Room 49" && !res.data.error_msg) {
          const imgUrl = "https://picsum.photos/id/134/190";
          this.setState({
            rmImg: imgUrl
          });
        } else if (res.data.title === "Room 50" && !res.data.error_msg) {
          const imgUrl = "https://picsum.photos/id/1082/190";
          this.setState({
            rmImg: imgUrl
          });
        } else if (res.data.title === "Room 51" && !res.data.error_msg) {
          const imgUrl = "https://picsum.photos/id/1026/190";
          this.setState({
            rmImg: imgUrl
          });
        } else if (res.data.title === "Room 52" && !res.data.error_msg) {
          const imgUrl = "https://picsum.photos/id/100/190";
          this.setState({
            rmImg: imgUrl
          });
        } else if (res.data.title === "Room 53" && !res.data.error_msg) {
          const imgUrl = "https://picsum.photos/id/1005/190";
          this.setState({
            rmImg: imgUrl
          });
        } else if (res.data.title === "Room 54" && !res.data.error_msg) {
          const imgUrl = "https://picsum.photos/id/1018/190";
          this.setState({
            rmImg: imgUrl
          });
        } else if (res.data.title === "Room 55" && !res.data.error_msg) {
          const imgUrl = "https://picsum.photos/id/103/190";
          this.setState({
            rmImg: imgUrl
          });
        } else if (res.data.title === "Room 56" && !res.data.error_msg) {
          const imgUrl = "https://picsum.photos/id/1047/190";
          this.setState({
            rmImg: imgUrl
          });
        } else if (res.data.title === "Room 57" && !res.data.error_msg) {
          const imgUrl = "https://picsum.photos/id/1079/190";
          this.setState({
            rmImg: imgUrl
          });
        } else if (res.data.title === "Room 58" && !res.data.error_msg) {
          const imgUrl = "https://picsum.photos/id/1084/190";
          this.setState({
            rmImg: imgUrl
          });
        } else if (res.data.title === "Room 59" && !res.data.error_msg) {
          const imgUrl = "https://picsum.photos/id/113/190";
          this.setState({
            rmImg: imgUrl
          });
        } else if (res.data.title === "Room 60" && !res.data.error_msg) {
          const imgUrl = "https://picsum.photos/id/118/190";
          this.setState({
            rmImg: imgUrl
          });
        } else if (res.data.title === "Room 61" && !res.data.error_msg) {
          const imgUrl = "https://picsum.photos/id/117/190";
          this.setState({
            rmImg: imgUrl
          });
        } else if (res.data.title === "Room 62" && !res.data.error_msg) {
          const imgUrl = "https://picsum.photos/id/12/190";
          this.setState({
            rmImg: imgUrl
          });
        } else if (res.data.title === "Room 63" && !res.data.error_msg) {
          const imgUrl = "https://picsum.photos/id/120/190";
          this.setState({
            rmImg: imgUrl
          });
        } else if (res.data.title === "Room 64" && !res.data.error_msg) {
          const imgUrl = "https://picsum.photos/id/126/190";
          this.setState({
            rmImg: imgUrl
          });
        } else if (res.data.title === "Room 65" && !res.data.error_msg) {
          const imgUrl = "https://picsum.photos/id/133/190";
          this.setState({
            rmImg: imgUrl
          });
        } else if (res.data.title === "Room 66" && !res.data.error_msg) {
          const imgUrl = "https://picsum.photos/id/132/190";
          this.setState({
            rmImg: imgUrl
          });
        } else if (res.data.title === "Room 67" && !res.data.error_msg) {
          const imgUrl = "https://picsum.photos/id/1069/190";
          this.setState({
            rmImg: imgUrl
          });
        } else if (res.data.title === "Room 68" && !res.data.error_msg) {
          const imgUrl = "https://picsum.photos/id/1073/190";
          this.setState({
            rmImg: imgUrl
          });
        } else if (res.data.title === "Room 69" && !res.data.error_msg) {
          const imgUrl = "https://picsum.photos/id/1053/190";
          this.setState({
            rmImg: imgUrl
          });
        } else if (res.data.title === "Room 70" && !res.data.error_msg) {
          const imgUrl = "https://picsum.photos/id/1016/190";
          this.setState({
            rmImg: imgUrl
          });
        } else if (res.data.title === "Room 71" && !res.data.error_msg) {
          const imgUrl = "https://picsum.photos/id/1019/190";
          this.setState({
            rmImg: imgUrl
          });
        } else if (res.data.title === "Room 72" && !res.data.error_msg) {
          const imgUrl = "https://picsum.photos/id/1055/190";
          this.setState({
            rmImg: imgUrl
          });
        } else if (res.data.title === "Room 73" && !res.data.error_msg) {
          const imgUrl = "https://picsum.photos/id/1060/190";
          this.setState({
            rmImg: imgUrl
          });
        } else if (res.data.title === "Room 74" && !res.data.error_msg) {
          const imgUrl = "https://picsum.photos/id/129/190";
          this.setState({
            rmImg: imgUrl
          });
        } else if (res.data.title === "Room 75" && !res.data.error_msg) {
          const imgUrl = "https://picsum.photos/id/130/190";
          this.setState({
            rmImg: imgUrl
          });
        } else if (res.data.title === "Room 76" && !res.data.error_msg) {
          const imgUrl = "https://picsum.photos/id/10/190";
          this.setState({
            rmImg: imgUrl
          });
        } else if (res.data.title === "Room 77" && !res.data.error_msg) {
          const imgUrl = "https://picsum.photos/id/1024/190";
          this.setState({
            rmImg: imgUrl
          });
        } else if (res.data.title === "Room 78" && !res.data.error_msg) {
          const imgUrl = "https://picsum.photos/id/136/190";
          this.setState({
            rmImg: imgUrl
          });
        } else if (res.data.title === "Room 79" && !res.data.error_msg) {
          const imgUrl = "https://picsum.photos/id/137/190";
          this.setState({
            rmImg: imgUrl
          });
        } else if (res.data.title === "Room 80" && !res.data.error_msg) {
          const imgUrl = "https://picsum.photos/id/143/190";
          this.setState({
            rmImg: imgUrl
          });
        } else if (res.data.title === "Room 81" && !res.data.error_msg) {
          const imgUrl = "https://picsum.photos/id/15/190";
          this.setState({
            rmImg: imgUrl
          });
        } else if (res.data.title === "Room 82" && !res.data.error_msg) {
          const imgUrl = "https://picsum.photos/id/145/190";
          this.setState({
            rmImg: imgUrl
          });
        } else if (res.data.title === "Room 83" && !res.data.error_msg) {
          const imgUrl = "https://picsum.photos/id/153/190";
          this.setState({
            rmImg: imgUrl
          });
        } else if (res.data.title === "Room 84" && !res.data.error_msg) {
          const imgUrl = "https://picsum.photos/id/167/190";
          this.setState({
            rmImg: imgUrl
          });
        } else if (res.data.title === "Room 85" && !res.data.error_msg) {
          const imgUrl = "https://picsum.photos/id/171/190";
          this.setState({
            rmImg: imgUrl
          });
        } else if (res.data.title === "Room 86" && !res.data.error_msg) {
          const imgUrl = "https://picsum.photos/id/175/190";
          this.setState({
            rmImg: imgUrl
          });
        } else if (res.data.title === "Room 87" && !res.data.error_msg) {
          const imgUrl = "https://picsum.photos/id/200/190";
          this.setState({
            rmImg: imgUrl
          });
        } else if (res.data.title === "Room 88" && !res.data.error_msg) {
          const imgUrl = "https://picsum.photos/id/217/190";
          this.setState({
            rmImg: imgUrl
          });
        } else if (res.data.title === "Room 89" && !res.data.error_msg) {
          const imgUrl = "https://picsum.photos/id/22/190";
          this.setState({
            rmImg: imgUrl
          });
        } else if (res.data.title === "Room 90" && !res.data.error_msg) {
          const imgUrl = "https://picsum.photos/id/212/190";
          this.setState({
            rmImg: imgUrl
          });
        } else if (res.data.title === "Room 91" && !res.data.error_msg) {
          const imgUrl = "https://picsum.photos/id/214/190";
          this.setState({
            rmImg: imgUrl
          });
        } else if (res.data.title === "Room 92" && !res.data.error_msg) {
          const imgUrl = "https://picsum.photos/id/21/190";
          this.setState({
            rmImg: imgUrl
          });
        } else if (res.data.title === "Room 93" && !res.data.error_msg) {
          const imgUrl = "https://picsum.photos/id/210/190";
          this.setState({
            rmImg: imgUrl
          });
        } else if (res.data.title === "Room 94" && !res.data.error_msg) {
          const imgUrl = "https://picsum.photos/id/211/190";
          this.setState({
            rmImg: imgUrl
          });
        } else if (res.data.title === "Room 95" && !res.data.error_msg) {
          const imgUrl = "https://picsum.photos/id/22/190";
          this.setState({
            rmImg: imgUrl
          });
        } else if (res.data.title === "Room 96" && !res.data.error_msg) {
          const imgUrl = "https://picsum.photos/id/183/190";
          this.setState({
            rmImg: imgUrl
          });
        } else if (res.data.title === "Room 97" && !res.data.error_msg) {
          const imgUrl = "https://picsum.photos/id/186/190";
          this.setState({
            rmImg: imgUrl
          });
        } else if (res.data.title === "Room 98" && !res.data.error_msg) {
          const imgUrl = "https://picsum.photos/id/159/190";
          this.setState({
            rmImg: imgUrl
          });
        } else if (res.data.title === "Room 99" && !res.data.error_msg) {
          const imgUrl = "https://picsum.photos/id/160/190";
          this.setState({
            rmImg: imgUrl
          });
        } else if (res.data.title === "Room 100" && !res.data.error_msg) {
          const imgUrl = "https://picsum.photos/id/158/190";
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
