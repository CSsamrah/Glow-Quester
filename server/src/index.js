const express = require('express')
const app = express()
const multer = require('multer');
const cors = require("cors")
const pool = require('./db')
const bcrypt = require('bcryptjs');



app.use(cors());
app.use(express.json());

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// routes
// add product in product table
app.post("/add-product", upload.single('picture'), async (req, res) => {
    try {
        const { product_id, product_name, description, price, quantity, category_id, rating } = req.body;
        const picture = req.file.buffer;

        const addProduct = await pool.query('INSERT INTO product(product_id,product_name,description,price,picture,quantity,category_id,rating)values($1, $2, $3, $4, $5, $6, $7, $8)', [product_id, product_name, description, price, picture, quantity, category_id, rating])
        res.status(201).send('Product added successfully');
    } catch (error) {
        console.error(error.message)
    }
});

// get product details
app.get('/product/:product_id', async (req, res) => {
    const { product_id } = req.params;

    try {
        const selectQuery = 'SELECT * FROM product WHERE product_id = $1';
        const result = await pool.query(selectQuery, [product_id]);

        if (result.rows.length > 0) {
            const product = result.rows[0];
            res.json(product);
        } else {
            res.status(404).send('Product not found');
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

//delete product
app.delete("/product/:product_id", async (req, res) => {
    try {
        const { product_id } = req.params;
        const deleteproduct = await pool.query("DELETE FROM product WHERE product_id=$1", [product_id])

        if (deleteproduct.rowCount > 0) {
            res.status(200).send('Product deleted successfully');
        } else {
            res.status(404).send('Product not found');
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }

});
// edit product quantity
app.put("/product/:product_id/quantity", async (req, res) => {
    const { quantity } = req.body;
    const { product_id } = req.params;
    if (quantity === undefined) {
        return res.status(400).send("Quantity is required");
    }
    try {
        const editquantity = await pool.query("UPDATE product SET quantity=$1 WHERE product_id=$2", [quantity, product_id])

        if (editquantity.rowCount > 0) {
            res.status(200).send('Product quantity updated successfully');
        } else {
            res.status(404).send('Product not found');
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

// edit product price
app.put("/product/:product_id/price", async (req, res) => {
    const { price } = req.body;
    const { product_id } = req.params;
    if (price === undefined) {
        return res.status(400).send("price is required");
    }
    try {
        const editprice = await pool.query("UPDATE product SET price=$1 WHERE product_id=$2", [price, product_id])

        if (editprice.rowCount > 0) {
            res.status(200).send('Product price updated successfully');
        } else {
            res.status(404).send('Product not found');
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

// get all products
app.get('/product', async (req, res) => {
    try {
        const selectQuery = 'SELECT * FROM product';
        const result = await pool.query(selectQuery);
        res.json(result.rows)
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

//  get customer information
app.get('/customers', async (req, res) => {
    try {
        const selectQuery = 'SELECT * FROM customer';
        const result = await pool.query(selectQuery);
        res.json(result.rows)
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

// insert customer information(sign up)
app.post("/sign-up", async (req, res) => {
    try {
        const { username, password, email, phoneno } = req.body;

        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        const addcustomer = await pool.query('INSERT INTO customer(username,password,email,phoneno)values($1, $2, $3, $4)', [username, hashedPassword, email, phoneno])
        res.status(201).send('customer added successfully');
    } catch (error) {
        console.error(error.message)
    }
});

// sign in

app.get("/sign-In", async (req, res) => {
    try {
        const { password, email } = req.body;

        const verifyCustomer = await pool.query('SELECT * FROM customer WHERE email=$1 AND password=$2', [email, password])
        if (verifyCustomer.rowCount > 0) {
            res.status(200).send('signed in');
        } else {
            res.status(404).send('customer not found');
        }
    } catch (error) {
        console.error(error.message)
    }
});

// get all order details
app.get("/orderDetails", async (req, res) => {
    try {
        try {
            const selectQuery = 'SELECT * FROM customer_order';
            const result = await pool.query(selectQuery);
            res.json(result.rows)
        } catch (error) {
            console.error(error);
            res.status(500).send('Internal Server Error');
        }

    } catch (error) {

    }
})

// get particular order detail

app.get('/orderDetails/:order_id', async (req, res) => {
    const { order_id } = req.params;

    try {
        const selectQuery = 'SELECT * FROM customer_order WHERE order_id = $1';
        const result = await pool.query(selectQuery, [order_id]);

        if (result.rows.length > 0) {
            const order = result.rows[0];
            res.json(order);
        } else {
            res.status(404).send('order detail not found');
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

app.post('/checkout', async (req, res) => {
    const {
        username,
        phoneno,
        product_id,
        total_amount,
        total_quantity,
        email,
        address,
        city,
        payment_method
    } = req.body;

    try {
        // Function to generate unique order ID
        function generateOrderId() {
            return 'OR' + Math.floor(Math.random() * 1000000);
        }
        const order_id = generateOrderId();

        // Insert order details into customer_order table
        const orderQuery = `
            INSERT INTO customer_order (username, phoneno, order_id, product_id, total_amount, total_quantity, email, address, city, payment_method) 
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
        `;

        const orderValues = [username, phoneno, order_id, product_id, total_amount, total_quantity, email, address, city, payment_method];

        await pool.query(orderQuery, orderValues);

        // Function to generate unique shipping ID
        function generateShippingId() {
            return 'SH' + Math.floor(Math.random() * 1000000);
        }
        const shipping_id = generateShippingId();

        // Function to generate unique tracking number
        function generateTrackingNumber() {
            return 'TR' + Math.floor(Math.random() * 1000000);
        }
        const tracking_number = generateTrackingNumber();

        // Function to generate shipment and delivery dates
        function generateShipmentAndDeliveryDates() {
            const currentDate = new Date();

            // Create shipment date: 2 days from the current date
            const shipmentDate = new Date(currentDate);
            shipmentDate.setDate(shipmentDate.getDate() + 2);

            // Create delivery date: 7 days from the current date
            const deliveryDate = new Date(currentDate);
            deliveryDate.setDate(deliveryDate.getDate() + 7);

            const formatDate = (date) => {
                const year = date.getFullYear();
                const month = String(date.getMonth() + 1);
                const day = String(date.getDate());
                return `${year}-${month}-${day}`;
            };

            return {
                shipment_date: formatDate(shipmentDate),
                delivery_date: formatDate(deliveryDate)
            };
        }

        const { shipment_date, delivery_date } = generateShipmentAndDeliveryDates();

        // Insert shipment details into shipment table
        const shipmentQuery = `
            INSERT INTO shipment (shipping_id, order_id, shipping_address, shipment_date, delivery_date, tracking_number) 
            VALUES ($1, $2, $3, $4, $5, $6)
        `;

        const shipmentValues = [shipping_id, order_id, address, shipment_date, delivery_date, tracking_number];
        await pool.query(shipmentQuery, shipmentValues);

        // Fetch and return the shipment details to the customer
        const shipmentDetailsQuery = 'SELECT * FROM shipment WHERE order_id = $1';
        const shipmentDetailsResult = await pool.query(shipmentDetailsQuery, [order_id]);

        res.status(201).json({ message: 'Order and shipment successfully placed', shipment: shipmentDetailsResult.rows[0] });
    } catch (error) {
        console.error('Error saving shipment details:', error);
        res.status(500).json({ error: 'An error occurred while entering shipment details' });
    }
});

// get all shipment details
app.get("/shipment", async (req, res) => {
    try {
        try {
            const selectQuery = 'SELECT * FROM shipment';
            const result = await pool.query(selectQuery);
            res.json(result.rows)
        } catch (error) {
            console.error(error);
            res.status(500).send('Internal Server Error');
        }

    } catch (error) {

    }
})

// get particular shipment detail

app.get('/shipment/:shipping_id', async (req, res) => {
    const { shipping_id } = req.params;

    try {
        const selectQuery = 'SELECT * FROM shipment WHERE shipping_id = $1';
        const result = await pool.query(selectQuery, [shipping_id]);

        if (result.rows.length > 0) {
            const order = result.rows[0];
            res.json(order);
        } else {
            res.status(404).send('shipment detail not found');
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});




app.listen(5000, () => {
    console.log(`Server is running on http://localhost:5000`);
});