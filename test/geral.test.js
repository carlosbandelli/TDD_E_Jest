let app = require("../src/app")
let supertest = require("supertest")
let request = supertest(app)

// Usando Promise
test("A aplicação deve responder na porta 3131",() => {
    return request.get("/").then(res => expect(res.statusCode).toEqual(200) )
})

test("Deve retornar roxo como cor favorita do Carlos", () => {
    return request.get("/cor/carlos").then(res => {
        expect(res.statusCode). toEqual(200)
        expect(res.body.cor).toEqual("roxo")
        expect(res.body.color).toEqual("purple")
    })
})