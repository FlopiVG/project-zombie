export class HomePage {
  constructor(wrapper) {
    this.wrapper = wrapper;
  }

  open() {
    this.wrapper.visit("/home");
  }

  getUserTitle() {
    return this.wrapper.get(".user__title");
  }

  clickStartExploring() {
    const button = this.wrapper.contains("Start exploring");
    button.click();
    return button;
  }
}
