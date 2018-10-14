export class HomePage {
  constructor(wrapper) {
    this.wrapper = wrapper;
  }

  open() {
    this.wrapper.visit("/home");
  }

  getUserTitle() {
    console.log(this.wrapper.get(".user__title"));
    return this.wrapper.get(".user__title");
  }
}
