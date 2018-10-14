import { HomePage } from "../pageObjects/HomePage";

describe("Home page with logged user", () => {
  let homePage;

  beforeEach(() => {
    homePage = new HomePage(cy);
    homePage.open();
  });

  it("should display the correct username title", () => {
    homePage.getUserTitle().should("contain", "Flopi");
  });
});
