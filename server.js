const soap = require("soap");
const fs = require("node:fs");
const http = require("http");

// Implémentation du service SOAP
const service = {
    ProductsService: {
        ProductsPort: {
            CreateProduct: function ({ name, about, price }, callback) {
                if (!name || !about || !price) {
                    throw {
                        Fault: {
                            Code: {
                                Value: "soap:Sender",
                                Subcode: { value: "rpc:BadArguments" },
                            },
                            Reason: { Text: "Processing Error" },
                            statusCode: X,
                        },
                    };
                }
                callback({ ...args, id: "myid" });
            },
        },
    },
};

// Création du serveur HTTP de base
const server = http.createServer(function (request, response) {
    response.end("404: Not Found: " + request.url);
});

server.listen(8000);

// Lecture du WSDL
const xml = fs.readFileSync("productsService.wsdl", "utf8");



// Création du serveur SOAP
soap.listen(server, "/products", service, xml, function () {
    console.log("SOAP server running at http://localhost:8000/products?wsdl");
});

const soap = require("soap");
const fs = require("node:fs");
const http = require("http");
const postgres = require("postgres");

const sql = postgres({ db: "mydb", user: "user", password: "password" });