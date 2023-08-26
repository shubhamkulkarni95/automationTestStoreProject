export class HomePage {
    elements = {
        titlePage: () => cy.get('[title="Automation Test Store"]'),
        lnkWelComeBack: () => cy.get('[class="top menu_account"] [class="menu_text"]').eq(0),
        lnkSpecial: () => cy.get('[class="menu_text"]').contains('Specials'),
        lnkAccount: () => cy.get('[class="menu_text"]').contains('Account'),
        lnkCart: () => cy.get('[class="menu_text"]').contains('Cart'),
        lnkCheckout: () => cy.get('[class="menu_text"]').contains('Checkout'),
        ddlApparelAndAccessories: () => cy.get('[href="https://automationteststore.com/index.php?rt=product/category&path=68"]'),
        ddlOptionTshirt: () => cy.get('[class="subcategories"] ul li:nth-child(2)').contains('T-shirts'),
        propSubCategories: () => cy.get('.subcategories'),
        txtAllProduct : () => cy.get('[class="fixed"] [class="prdocutname"]'),
        ddlSize : () => cy.get('[class="input-group col-sm-10"] select'),
        txtQuantity : () => cy.get('[id="product_quantity"]'),
        txtTotalPrice : () => cy.get('[class="total-price"]'),
        btnAddToCart : () => cy.get('[class="cart"]'),
        lblProductName : () => cy.get('[class="align_left"]'),
    }
    clickOptionTshirtDDLOption() {
        this.elements.propSubCategories().invoke('css', 'display', 'block')
        this.elements.ddlApparelAndAccessories().trigger('mouseover')
        this.elements.ddlApparelAndAccessories().invoke('show')
        this.elements.propSubCategories().should('be.visible');
        this.elements.ddlOptionTshirt().click()
    }
    selectPerticularProductFromAllProductTxt(productName){
        this.elements.txtAllProduct().each((ele)=>{
            if(ele.text().includes(productName)){
                cy.wrap(ele).click()
            }
        })
    }
    selectSizeDDL(size){
        this.elements.ddlSize().then((ddlsize) => {
            if (ddlsize.length === 2) {
                cy.wrap(ddlsize[1]).select(size)
            } else if (ddlsize.length === 1) {
                cy.wrap(ddlsize[0]).select(size)
            } else {
                cy.log('Unexpected number of elements:'+ ddlsize.length)
            }
        })
    }
    enterQuantityTxt(quantity){
        cy.wait(1000)
        this.elements.txtQuantity().clear().type(quantity)
        this.elements.txtTotalPrice().then((price)=>{
           let actualPrice = price.text().split('$')[1]*quantity
           cy.wrap(price).should('contain','$'+actualPrice,{timeout:4000})
        })
    }
    clickAddToCartBtn(){
        this.elements.btnAddToCart().click()
    }
    verifyProductNameLbl(productName){
        this.elements.lblProductName().should('contain',productName)
    }

}
export const homePage = new HomePage()