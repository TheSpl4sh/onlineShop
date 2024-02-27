const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const mongoose = require("mongoose");
const Customer = mongoose.model("customers");

module.exports = async passport => {
  const opts = {};
  opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
  opts.secretOrKey = process.env.SECRET_OR_KEY

  passport.use(
    "jwt",
    new JwtStrategy(opts, (jwt_payload, done) => {
      Customer.findById(jwt_payload.id)
        .then(customer => {
          if (customer) {
            return done(null, customer);
          }
          return done(null, false);
        })
        .catch(err => console.log(err));
    })
  );

  passport.use(
    "jwt-admin",
    new JwtStrategy(opts, (jwt_payload, done) => {
      Customer.findById(jwt_payload.id)
        .then(customer => {
          if (customer && customer.isAdmin) {
            return done(null, customer);
          }
          return done(null, false, {
            message: "You have not enough permissions for this operation"
          });
        })
        .catch(err => console.log(err));
    })
  );
};
