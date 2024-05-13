import Component from "../core/Component.js";

export default class ResultButton extends Component {
  template() {
    const presentState = this.props.restState;
    const choice = this.props.choice;
    console.log(choice);
    console.log(presentState);
    return `
            <style>
              .board {
                display: flex;
                justify-content: center;
                flex-direction: column;
              }
              .title {
                background-color: #f0f0f0;
                border-radius: 5px;
                border-style: solid;
                padding: 20px;
                font-size: 30px;
                display: flex;
                justify-content:center;
                border-radius : 5px;
              }

              .result {
                display: flex;
                border-radius: 5px;
                border: none;
                background: #00A3E8;
                justify-content: center;
                align-items: center;
                gap: 50px;
                color: white;
              }

              .main-box {
                width: 150px;
                display: flex;
                justify-content: center;
                flex-direction: column;
                align-items: center;
              }

              .main {
                display: flex;
                justify-content: center;
                align-items: center;
              }
              
              .choose {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                margin: 30px 0px;
                text-align: center;
              }

              .left {
                font-size: 35px;
                font-weight: bold;
              }

              .result-name {
                font-size: 25px;
              }

              .result-value {
                font-size: 28px;
                font-weight: bold;
              }
              
              .winner {
                font-size: 25px;
                font-weight: bold;
              }
              
              .replayBtn {
                font-size: 20px;
                color: white;
                background: #FFAA40;
                border-radius: 5px;
                border: none;
                width: 240px;
                height: 40px;
              }
            </style>


            <div class="result">
              <div class="player main-box">
                <p class="result-name">플레이어</p>
                <p class="result-value">${presentState[1]}</p>
              </div>
              <p class="result-value">VS</p>
              <div class="computer main-box">
                <p class="result-name">컴퓨터</p>
                <p class="result-value">${presentState[2]}</p>
              </div>
            </div>
        `;
  }
}
