"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
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
exports.Charge = void 0;
const type_graphql_1 = require("type-graphql");
const stripe_1 = __importDefault(require("stripe"));
let Charge = class Charge {
    charge(id, amount) {
        return __awaiter(this, void 0, void 0, function* () {
            const stripe = new stripe_1.default("sk_test_51I0hdrLCnusGqFH6t7kgt9tSdgHR0mfoIrnPv4Ey4PeyoHNHwIjhA72eQNDZd8gYnEqT7ucdIzzUlqkFsjzMyMGx00phnxunYM", { apiVersion: "2020-08-27" });
            try {
                const payment = yield stripe.paymentIntents.create({
                    amount,
                    currency: "USD",
                    description: "PHONE ORDERS ",
                    payment_method: id,
                });
                console.log(payment.client_secret);
                return true;
            }
            catch (error) {
                console.error(error);
                return false;
            }
        });
    }
};
__decorate([
    type_graphql_1.Mutation(() => Boolean),
    __param(0, type_graphql_1.Arg("id")), __param(1, type_graphql_1.Arg("amount")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", Promise)
], Charge.prototype, "charge", null);
Charge = __decorate([
    type_graphql_1.Resolver()
], Charge);
exports.Charge = Charge;
//# sourceMappingURL=charge.js.map