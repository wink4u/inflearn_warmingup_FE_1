import Component from "../core/Component.js";

export default class ChooseButton extends Component {
  template() {
    return `
            <style>
              .choose-box {
                display: flex;
                justify-content: center;
                gap: 40px;
              }

              a.button {
                display: block;
                position: relative;
                float: left;
                width: 120px;
                padding: 0;
                margin: 10px 20px 10px 0;
                font-weight: 600;
                text-align: center;
                line-height: 50px;
                color: #FFF;
                border-radius: 5px;
                transition: all 0.2s ;
              }

              .blue {
                background: #5DC8CD;
              }

              .chooseBtn {
                background: none;
                box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.5);
              }

              .chooseBtn.r:before {
                content: '바위';
              }
              .chooseBtn.s:before {
                content: '가위';
              }
              .chooseBtn.p:before {
                content: '보';
              }
              
              .chooseBtn:before {
                display: block;
                position: absolute;
                top: 0;
                left: 0;
                width: 120px;
                height: 50px;
                border-radius: 5px;
                transition: all 0.2s ;
              }

              .blue.chooseBtn:before {
                background: #5DC8CD;
              }

              .chooseBtn:before {
                box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.4);
              }
              
              .chooseBtn:hover:before {
                
              }
              
              .chooseBtn:hover:before {
                margin-top: -2px;
                margin-left: 0px;
                transform: scale(1.1,1.1);
                -ms-transform: scale(1.1,1.1);
                -webkit-transform: scale(1.1,1.1);
                box-shadow: 0px 5px 5px -2px rgba(0, 0, 0, 0.25);
              }
            </style>
            
            <div class="choose-box">
              <a class="chooseBtn button blue s" data-is-result="scissor">가위</a>
              <a class="chooseBtn button blue r" data-is-result="rock">바위</a>
              <a class="chooseBtn button blue p" data-is-result="papaer">보</a>
            </div>
        `;
  }

  setEvent() {
    const { buttonresult } = this.props;

    this.addEvent("click", ".chooseBtn", ({ target }) => {
      buttonresult(target.dataset.isResult);
    });
  }
}
