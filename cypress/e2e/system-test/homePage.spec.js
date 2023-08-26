import { cartPage } from "../../pages/cartPage/cartPage"
import { homePage } from "../../pages/homePage/homePage"
import { loginPage } from "../../pages/loginPage/loginPage"
import { successPage } from "../../pages/successPage/successPage"

describe("Home Page E2E Testing",()=>{
    before("Login",()=>{
        cy.visit("/index.php?rt=account/login")
        loginPage.verifyLoginNamelbl("Login Name:")
        loginPage.verifyPasswordlbl("Password:")
        loginPage.enterLoginNameTxt("Test001")
        loginPage.enterPasswordTxt("Test@123")
        loginPage.clickLoginBtn()
        loginPage.verifyPageURL('/index.php?rt=account/account') 
    })

    it("Select Tshirt from Apparel and accessories",()=>{
        cy.visit("/index.php?rt=account/account")
        homePage.clickOptionTshirtDDLOption()
        homePage.selectPerticularProductFromAllProductTxt('Designer Men Casual Formal Double Cuffs Grandad Band Collar Shirt Elegant Tie')
        homePage.selectSizeDDL("Medium")
        homePage.enterQuantityTxt("10")
        homePage.clickAddToCartBtn()
        cartPage.verifyProductNameLbl('Designer Men Casual Formal Double Cuffs Grandad Band Collar Shirt Elegant Tie')
        cartPage.verifyUnitPriceTxt('$32.00')
        cartPage.verifyTotalPriceTxt('$320.00')
        cartPage.clickCheckoutBtn()
        cartPage.clickConfirmOrderBtn()
        successPage.verifySuccessOrderlbl(' Your Order Has Been Processed!')
    })
})