describe("Form Inputs", () => {
    it("Can type in form fields", () => {
        cy.visit("http://localhost:3000/");

        cy.contains("Order Pizza").click();
        cy.contains("Home").click();
        cy.contains("Order Pizza").click();

        cy.get('input[name="name"]').type("Jeff").should("have.value", "Jeff");

        cy.get('select[name="size"]').select("18");

        cy.get('input[name="sauce"]').check().should("have.value", "original");

        cy.get('[name="toppings"]').check().should("have.value", "on");
        cy.get('[name="toppings"]').uncheck();
        cy.get('[name="toppings"]').first().check();

        cy.get('input[name="specialInstructions"]')
            .type("side of ranch")
            .should("have.value", "side of ranch");

        cy.get(".subButton").click();
    })
})