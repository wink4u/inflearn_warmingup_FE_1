import Component from "./core/Component.js";
import MenuButton from "./components/MenuButton.js";
import Menu from "./components/VentiMenu.js";

export default class App extends Component {
  async setup() {
    this.state = {};
    await this.loadJSON();
  }

  template() {
    return `
      <div data-component="menu-button"></div>
      <div data-component="menu" />
    `;
  }

  mounted() {
    const { test, test2 } = this;
    const $menuButton = this.$target.querySelector(
      '[data-component="menu-button"]'
    );
    const $menu = this.$target.querySelector('[data-component="menu"]');

    new Menu($menu, {
      test2
    });

    new MenuButton($menuButton, {
      filterMenu: test.bind(this),
    });
  }

  async loadJSON() {
    try {
      const response = await fetch("venti.json");
      if (!response.ok) {
        throw new Error("데이터 오류 발생");
      }

      const data = await response.json();
      this.setState(data);
      this.temp = data;
      console.log(data);

    } catch (error) {
      console.log(error);
    }
  }

  get test2() {
    return Object.values(this.state);
  }

  test(menuType) {
    const preMenu = this.temp.menus;
    let filterMenu;
    if (menuType === "all") {
      filterMenu = preMenu;
    } else {
      filterMenu = preMenu.filter((item) => item.menu === menuType);
    }

    this.setState(filterMenu);
  }
}
