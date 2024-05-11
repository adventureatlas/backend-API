import passport from "passport";
import User from "../database/model/user.js";
import { Strategy as JwtStrategy } from "passport-jwt";
import { ExtractJwt } from "passport-jwt";
import dotenv from "dotenv";
dotenv.config();

const jwtSecret = process.env.JWTSECRET;

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: jwtSecret,
};

passport.use(
  new JwtStrategy(jwtOptions, (jwtPayload, done) => {
    User.findOne({ where: { id: jwtPayload.id } })
      .then((user) => {
        if (!user) {
          return done(null, false);
        }
        return done(null, user);
      })
      .catch((err) => done(err, false));
  }),
);

export default passport;
