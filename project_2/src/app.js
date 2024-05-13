import Component from "./core/Component.js";
import ChooseButton from "./components/ChooseButton.js";
import ResultButton from "./components/ResultBoard.js";
import LeftTime from "./components/LeftTime.js";

export default class App extends Component {
    setup() {
        this.state = {rest : [10, 0, 0] };
        this.choice = ['rock', 'rock'];
    }

    template() {
        return `
          <style>
            img {
              height: 200px;
            }

            .result-board {
              display: flex;
              justify-content: center;
              align-items: center;
              gap: 50px;
              width: 1200px;
              height: 300px;
            }

            .choice-img {
              display : flex;
              justify-content: center;
              align-items:center;
              width: 200px;
              height: 300px;
            }
          </style>
          <header>
            <div class="title">
              <p>wink4u의 가위바위보</p>
            </div>
          </header>
          <div class="result-board">
            <div class="choice-img">
              ${this.choiceImg(this.choice[0])}
            </div>
            <div data-component="result-board"></div>
            <div class="choice-img">
              ${this.choiceImg(this.choice[1])}
            </div>
          </div>
          <div data-component="choose-button"></div>
          <div data-component="left-time"></div>
        `;
    }

    mounted() {
        const { test, restState, replay } = this;

        const $resultBoard = this.$target.querySelector(
          '[data-component = "result-board"]'
        );
        const $chooseButton = this.$target.querySelector(
          '[data-component = "choose-button"]'
        );
        const $leftTime = this.$target.querySelector(
          '[data-component= "left-time"]'
        )

        new ResultButton($resultBoard, {
          restState,
        });

        new ChooseButton($chooseButton, {
          buttonresult: test.bind(this),
        });

        new LeftTime($leftTime, {
          restState,
          replay: replay.bind(this)
        });
    }

    get restState() {
      const { rest } = this.state;
      return rest;
    }

    test(res) {
      if (this.state.rest[0] <= 0) {
        this.setState({ rest : [10, 0, 0]})
      }
      const presentState = this.state.rest;
      const options = ['rock', 'paper', 'scissors'];
      const randomIndex = Math.floor(Math.random() * options.length);
      const computerChoice = options[randomIndex];

      if (res === 'rock') {
        if (computerChoice === 'paper') {
          presentState[2] += 1
        } else if (computerChoice === 'scissors') {
          presentState[1] += 1
        }
      } else if (res === 'paper') {
        if (computerChoice === 'scissors') {
          presentState[2] += 1
        } else if (computerChoice === 'rock') {
          presentState[1] += 1
        }
      } else {
        if (computerChoice === 'rock') {
          presentState[2] += 1
        } else if (computerChoice === 'paper') {
          presentState[1] += 1
        }
      }

      presentState[0] -= 1
      this.choice = [res, computerChoice];
      this.setState({ rest : presentState});
    }

    replay() {
      this.setState({ rest : [10, 0, 0]})
    }

    choiceImg(tmp) {
      if (tmp == 'rock') {
        return `
          <img src="img/rock.PNG"></img>
        `
      } else if (tmp === 'paper') {
        return `
          <img src="img/paper.PNG"></img>
        `
      } else {
        return `
          <img src="img/scissors.PNG"><img>
        `
      }
    }
}