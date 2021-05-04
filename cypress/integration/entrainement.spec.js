describe('API TasteDive', () => {
    let recherche = require('../fixtures/dataList.json')

  recherche.Similar.Info.forEach(recherche => {
    
        it(`Test ${recherche.q} as q, ${recherche.type} as type and ${recherche.limit} as limit`, () => {
            cy.tasteDiveRecherche(recherche.q, recherche.type, recherche.limit).then(response => {
                console.log(JSON.stringify(response.body))
                expect(response.body.Similar.Info[0].Name).eql(recherche.q)
                expect(response.body.Similar.Info[0].Type).eql(recherche.type)
                expect(response.body.Similar.Results).lengthOf(recherche.limit)
            })   
    })
})
});