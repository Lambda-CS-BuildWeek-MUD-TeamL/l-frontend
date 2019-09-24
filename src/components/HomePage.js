import React from "react";

export default class HomePage extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="homepage-div">
        <h1 className="homepage-header">Team L - MUD</h1>
        <div className="game-div"></div>
        <div className="controls-div">
          <div className="sub-control">
            <div className="button-div">
              <button className="ind-button"><i class="fas fa-arrow-up"></i></button>
            </div>
            <div className="button-div">
              <button className="ind-button"><i class="fas fa-arrow-left"></i></button>
              <button className="ind-button"><i class="fas fa-arrow-right"></i></button>
            </div>
            <div className="button-div">
              <button className="ind-button"><i class="fas fa-arrow-down"></i></button>
            </div>
          </div>
          <div className="sub-control"></div>
        </div>
      </div>
    );
  }
}
