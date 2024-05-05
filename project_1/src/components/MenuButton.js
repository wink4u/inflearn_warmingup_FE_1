import Component from "../core/Component.js";

export default class MenuButton extends Component {
  template() {
    return `
          <style>
            .menu-button {
              display: flex;
              justify-content:center;
              gap: 40px;
              margin: 30px;
            }

            .filterBtn {
              width: 140px;
              height: 60px;
              font-size: 30px;
              font-weight: bold;
              background-color: white;
              border: none;
              color: purple;
              font-size: 14px;
              cursor: pointer;
              transition: background-color 0.3s, color 0.3s;
            }
            
            .filterBtn:hover,
            .filterBtn:active {
                background-color: purple; 
                color: white; 
            }

          </style>
          <div class="menu-button">
            <button class="filterBtn" data-is-filter="all">전체 메뉴</button>
            <button class="filterBtn" data-is-filter="coffee">커피</button>
            <button class="filterBtn" data-is-filter="juice">주스/에이드</button>
            <button class="filterBtn" data-is-filter="side">사이드 메뉴</button>
          </div>
        `;
  }

  setEvent() {
    const { filterMenu } = this.props;

    this.addEvent("click", ".filterBtn", ({ target }) => {
      filterMenu(target.dataset.isFilter);
    });
  }
}
