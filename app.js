const express = require('express');
const app = express();
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const port = process.env.PORT || 9000

// Configurations
const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: 'Admin API',
            description: "Admin API Information",
            contact: {
                name: "Admin"
            },
        servers: ["https://localhost:9000"]
        }
    },
    // Tell doc generator where to look for api
    apis:["app.js"]
};

const swaggerDocs = swaggerJSDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

//Routes
/**
 * @swagger
 *  /customers:
 *   get:
 *      description: Use to request all customers
 *      responses:
 *        '200':
 *          description: A succesful response
 */

/**
 * @swagger
 *  /Admin:
 *   post:
 *      description: Use to maintain all customers
 *      responses:
 *        '400':
 *          description: Response succeccefully POSTED
 */
/**
 * @swagger
 *  /Customer:
 *   delete:
 *      description: Use to maintain all customers
 *      responses:
 *        '400':
 *          description: Response succeccefully POSTED
 */
/**
 * @swagger
 *  /Customer:
 *   delete:
 *      description: Use to maintain all customers
 *      responses:
 *        '400':
 *          description: Response succeccefully POSTED
 */
/**
 * @swagger
 *  /Admin:
 *   patch:
 *      description: Use to maintain all customers
 *      responses:
 *        '400':
 *          description: Response succeccefully PATCHED
 */
/**
 * @swagger
 *  /Admin:
 *   head:
 *      description: Use to maintain all customers
 *      responses:
 *        '400':
 *          description: HEAD
 */
/**
 * @swagger
 *  /Customer:
 *   options:
 *      description: Use to maintain all customers
 *      responses:
 *        '400':
 *          description: Options
 */

app.post('HomePage', function(req, res) {
    res.send("Home Page")
})
app.post('About', function(req, res) {
    res.send("About")
})
app.post('Contact', function(req, res) {
    res.send("Contact")
})
app.post('Gallery', function(req, res) {
    res.send("Gallery")
})

app.listen(9000, function(req, res) {
    console.log("Server running...")
});
