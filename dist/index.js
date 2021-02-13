"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const apollo_server_express_1 = require("apollo-server-express");
const type_graphql_1 = require("type-graphql");
const typeorm_1 = require("typeorm");
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const jsonwebtoken_1 = require("jsonwebtoken");
const cors_1 = __importDefault(require("cors"));
const Auth_1 = require("./Auth");
const sendRefreshToken_1 = require("./sendRefreshToken");
const User_1 = require("./entities/User");
const dotenv_1 = require("dotenv");
dotenv_1.config();
const getOptions = () => __awaiter(void 0, void 0, void 0, function* () {
    let connectionOptions;
    connectionOptions = {
        type: "postgres",
        synchronize: true,
        logging: true,
        entities: ["src/entity/**/*.ts"],
    };
    if (process.env.DATABASE_URL) {
        console.log("data base url exist");
        Object.assign(connectionOptions, { url: process.env.DATABASE_URL });
    }
    else {
        connectionOptions = yield typeorm_1.getConnectionOptions();
    }
    return connectionOptions;
});
(() => __awaiter(void 0, void 0, void 0, function* () {
    const app = express_1.default();
    app.use(cors_1.default({
        origin: process.env.ORIGIN,
        credentials: true,
    }));
    app.get("/", (_, res) => {
        res.send("hello");
    });
    app.use(cookie_parser_1.default());
    app.post("/refresh_token", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        console.log("cookies:", req.cookies);
        const token = req.cookies.bid;
        if (!token) {
            return res.send({ ok: false, accessToken: "" });
        }
        let payload;
        try {
            payload = jsonwebtoken_1.verify(token, process.env.REFRESH_TOKEN_SECRET);
        }
        catch (error) {
            console.error(error);
            return res.send({ ok: false, accessToken: "" });
        }
        const user = yield User_1.User.findOne({ id: payload.userId });
        if (!user) {
            return res.send({ ok: false, accessToken: "" });
        }
        sendRefreshToken_1.sendRefreshToken(res, Auth_1.createRefreshToken(user));
        return res.send({ ok: true, accessToken: Auth_1.createAccessToken(user) });
    }));
    const typeormconfig = yield getOptions();
    yield typeorm_1.createConnection(typeormconfig);
    const apolloServer = new apollo_server_express_1.ApolloServer({
        schema: yield type_graphql_1.buildSchema({
            resolvers: [__dirname + "/resolvers/*.ts"],
        }),
        context: ({ req, res }) => ({ req, res }),
    });
    apolloServer.applyMiddleware({ app, cors: false });
    app.listen({ port: process.env.PORT || 4000 }, () => {
        console.log("server started at http://localhost:4000/graphql");
    });
}))().catch((err) => console.log(err));
//# sourceMappingURL=index.js.map