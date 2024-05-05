import Component from "../core/Component.js";
// import "../style/main.css";

export default class VentiMenu extends Component {
  template() {
    const { test2 } = this.props;
    console.log(test2);
    console.log(this.temp);
    // if (!this.test2 || this.test2.length === 0) {
    //   return `<div>메뉴가 없습니다.</div>`;
    // }

    // console.log(this.state);
    return `
        <style>
            .menus {
              display: flex;
              width: 100%;
              justify-content: center;
              flex-wrap: wrap;
              font-size: 28px;
              font-weight: bold;
            }

            .menu {
              width: 40%;
              margin: 20px;
              padding: 10px;
              display: flex;
            }

            .menu-name, .menu-describe {
              margin-bottom: 5px;
            }

            .menu-describe {
              font-size: 20px;
            }

            .menu-img {
              height: auto;
              margin: 0px 20px;
            }
          </style>

          <div class="menus">
            ${test2.map(
              ({ id, name, describe, img }) => `
                <div class="menu" data-seq="${id}">
                  <div>
                    <img src="${img}" class="menu-img" />
                  </div>
                  <div>
                    <p class="menu-name">${name}</p>
                    <hr>
                    <p class="menu-describe">${describe}</p>
                  </div>
                </div>
            `).join('')
            }
          </div>
      `;
  }
}
