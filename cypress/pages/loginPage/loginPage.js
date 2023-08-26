export class LoginPage{
    elements={
        titlePage : ()=> cy.get('[title="Automation Test Store"]'),
        lnkLoginOrRegister: () => cy.contains('Login or register'),
        lnkSpecial: () => cy.get('[class="menu_text"]').contains('Specials'),
        lnkAccount : () => cy.get('[class="menu_text"]').contains('Account'),
        lnkCart : () => cy.get('[class="menu_text"]').contains('Cart'),
        lnkCheckout : () => cy.get('[class="menu_text"]').contains('Checkout'),
        lblLoginName : () => cy.contains('Login Name:'),
        txtLoginName : () => cy.get('[id="loginFrm_loginname"]'),
        lblPassword : () => cy.contains('Password:'),
        txtPassword : () => cy.get('[id="loginFrm_password"]'),
        btnLogin : () => cy.get('[class="btn btn-orange pull-right"]').eq(1),
        txtAlert : () => cy.get('[class^="alert"]')
    }
    verifyLoginNamelbl(loginLabel){
        this.elements.lblLoginName().should('contain',loginLabel)
    }
    verifyPasswordlbl(passwordLabel){
        this.elements.lblPassword().should('contain',passwordLabel)
    }
    enterLoginNameTxt(loginText){
        this.elements.txtLoginName().type(loginText)
    }
    enterPasswordTxt(passwordText){
        this.elements.txtPassword().type(passwordText)
    }
    clickLoginBtn(){
        this.elements.btnLogin().click()
    }
    verifyAlertTxt(alertText){
        this.elements.txtAlert().should('contain',alertText)
    }
    verifyPageURL(urlText){
        cy.url().should('contain',urlText)
    }

}
export const loginPage=new LoginPage()