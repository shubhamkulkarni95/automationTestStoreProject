export class CartPage {
    elements = {
        titlePage: () => cy.get('[title="Automation Test Store"]'),
        lnkWelComeBack: () => cy.get('[class="top menu_account"] [class="menu_text"]').eq(0),
        lnkSpecial: () => cy.get('[class="menu_text"]').contains('Specials'),
        lnkAccount: () => cy.get('[class="menu_text"]').contains('Account'),
        lnkCart: () => cy.get('[class="menu_text"]').contains('Cart'),
        lnkCheckout: () => cy.get('[class="menu_text"]').contains('Checkout'),
        lblProductName : () => cy.get('[class="align_left"]'),
        txtUnitPrice : () => cy.get('[class="table table-striped table-bordered"] tbody tr:nth-child(2) td:nth-child(4)'),
        txtTotalPrice : () => cy.get('[class="table table-striped table-bordered"] tbody tr:nth-child(2) td:nth-child(6)'),
        btnCheckout : () => cy.get('[id="cart_checkout1"]'),
        btnConfirmOrder : () => cy.get('[onclick="confirmSubmit();"]'),
    }
    verifyProductNameLbl(productName){
        this.elements.lblProductName().should('contain',productName)
    }
    verifyUnitPriceTxt(price){
        this.elements.txtUnitPrice().should('contain',price)
    }
    verifyTotalPriceTxt(price){
        this.elements.txtTotalPrice().should('contain',price)
    }
    clickCheckoutBtn(){
        this.elements.btnCheckout().click()
    }
    clickConfirmOrderBtn(){
        this.elements.btnConfirmOrder().click()
    }
}
export const cartPage = new CartPage()