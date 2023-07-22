const Customer = require("../models").Customer;

module.exports = {
    create(req,res){
        return Customer.create({
            customer_id: req.body.customer_id,
            name: req.body.name,
            
        })
    }
}