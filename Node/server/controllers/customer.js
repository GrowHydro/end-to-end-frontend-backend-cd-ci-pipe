const Customer = require("../models").Customer;

module.exports = {
    create(req,res){
        return Customer.create({
            customer_id: req.body.customer_id,
            name: req.body.name,
            phone_number: req.body.phone_number,
            email: req.body.email
        })
        .then(customer =>
            res
            .status(201)
            .send({
                success: true,
                message: "Successfully created Customer.",
                customer 
            })
            )
            .catch(err =>{
                console.log(err);
                return res.status(400).send(err);
            
    });
    }
};