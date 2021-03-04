

context("Actions", () => {
    beforeEach(() => {
        
        cy.wait(1000)
             

    });

    afterEach(() => {
        cy.wait(1000)
    });

 it('should be accessible', () => {
    cy.task('sitemapLocations').then(pages => {
     
     pages.forEach(page => {
       cy.visit(page)

     cy.wait(1000)

        cy.eyesOpen({
            appName: ' Cypress!',
            testName: page,
            concurrency: 40,
            // matchlevel: 'STRICT',
            
            browser: [
            {width: 1366, height: 768, name: 'chrome'},
           
        ]
          })
        
          cy.eyesCheckWindow({
            
  
            page,target: 'window', fully: 'true',});
          
          // cy.wait(2000)
          cy.eyesClose(false)
         
        }) 
    })
  })
      
})   
     
  
    
