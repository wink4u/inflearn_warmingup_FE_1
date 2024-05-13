import Component from "../core/Component.js";

export default class LeftTime extends Component {
    template() {
        return `
            <style>
              .play-button {
                height: 140px;
              }
            </style>
            <div class="play-button">
                ${this.renderPlayButton()}
            </div>
        `
    }

    renderPlayButton() {
        const presentState = this.props.restState;
    
        if (presentState[0] === 0) {
          return `
            <div class="choose">
              ${this.renderResult()}
              <button class="replayBtn">
                  다시 플레이하기
              </button>
            </div>
          `;
        } else {
          return `
            <div class="choose">
                <p class="left">남은 기회 : ${presentState[0]}</p>
            </div>
          `;
        }
      }

    renderResult() {
      const presentState = this.props.restState;
  
      if (presentState[1] > presentState[2]) {
        return `
          <div class="winner">
            <p>당신이 이겼습니다!</p>
          </div>
        `;
      } else if (presentState[1] < presentState[2]) {
        return `
          <div class="winner">
            <p>컴퓨터가 이겼습니다!</p>
          </div>
        `
      } else {
        return `
          <div class="winner">
            <p>비겼습니다!</p>
          </div>
        `
      }
    }

    setEvent() {
      const replay = this.props.replay;
  
      this.addEvent("click", ".replayBtn", () => {
        replay();
      });
    }
}