describe("test the ", () =>{

    beforeEach(() => cy.visit("https://ticket-box.s3.eu-central-1.amazonaws.com/index.html"));

    it("Verify the application header", ()=>{
        cy.get("header h1").should('contain', "TICKETBOX");
    });

    it("fill all fields", ()=>{

        const customer = {
            firstName : "Alessandro",
            lastName :  "Mortari",
            email : "mortari7@hotmail.com",
            fullName : "Alessandro Mortari"    
        }

        //const firstName = "Alessandro";
        //const lastName =  "Mortari";
        //const email = "mortari7@hotmail.com";
        //const fullName = (`${firstName} ${lastName}`);        
        cy.fillAllFields(customer);

        cy.get("button[type='submit']").should("not.be.disabled");
        cy.get("button[type='reset']").click();
        cy.get("button[type='submit']").should("be.disabled");
    });
});