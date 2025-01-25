import "dotenv/config";

export const DISCORD_CLIENT_ID: string = process.env.DISCORD_CLIENT_ID!;
export const DISCORD_CLIENT_SECRET: string = process.env.DISCORD_CLIENT_SECRET!;
export const JWT_SECRET: string = process.env.JWT_SECRET!;
export const SALT_ROUNDS: number = Number(process.env.SALT_ROUNDS!);
export const REDIRECT_URI: string = process.env.REDIRECT_URI!;
export const IMGUR_CLIENT_ID: string = process.env.IMGUR_CLIENT_ID!;
export const IMGUR_CLIENT_SECRET: string = process.env.IMGUR_CLIENT_SECRET!;
