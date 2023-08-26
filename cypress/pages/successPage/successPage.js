export class SuccessPage{
    elements={
        titlePage : ()=> cy.get('[title="Automation Test Store"]'),
        lnkLoginOrRegister: () => cy.contains('Login or register'),
        lnkSpecial: () => cy.get('[class="menu_text"]').contains('Specials'),
        lnkAccount : () => cy.get('[class="menu_text"]').contains('Account'),
        lnkCart : () => cy.get('[class="menu_text"]').contains('Cart'),
        lnkCheckout : () => cy.get('[class="menu_text"]').contains('Checkout'),
        lblSuccessOrder : () => cy.get('[class="maintext"]'),
    }
    verifySuccessOrderlbl(successMessage){
        this.elements.lblSuccessOrder().should('have.text',successMessage)
    }
}
export const successPage=new SuccessPage()