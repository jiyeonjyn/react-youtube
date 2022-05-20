/// <reference types="cypress" />

import "@testing-library/cypress/add-commands";

describe("Youtube", () => {
  beforeEach(() => {
    cy.intercept("GET", /(mostPopular)/g, {
      fixture: "popular.json",
    }).as("getMostPopular");
    // mostPopular가 들어가는 GET 요청이 생기면 cypress>fixtures>popular.json의 데이터로 치환하고
    // 이 행위를 getMostPopular라고 이름 짓는다
    cy.visit("/");
  });

  it("renders", () => {
    cy.findByText("Youtube").should("exist");
  });

  it("displays most popular videos first", () => {
    cy.findByText(
      "Test Data: Official Trailer | She-Hulk: Attorney at Law | Disney+"
    ).should("exist");
  });
});
