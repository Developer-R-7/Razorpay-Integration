import { config } from "dotenv";
config();
export const CONSTANTS = {
    ORDER_API: "https://api.razorpay.com/v1/orders",
    AUTH_USERNAME:process.env.AUTH_USERNAME || "",
    AUTH_PASSWORD:process.env.AUTH_PASSWORD || "",
    DATABASE_URI:process.env.DATABASE_URI || ""
};