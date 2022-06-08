var db = require("../db");

let model = {
    signup: (input, cb) => {

        let data = {
            full_name: input.full_name,
            email: input.email,
            password: input.passwordData
        };
        return db.query("INSERT INTO userreg SET ?", [data], cb)
    }
}

module.exports = model;
