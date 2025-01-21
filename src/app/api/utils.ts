import {
    DISCORD_CLIENT_ID,
    DISCORD_CLIENT_SECRET,
    JWT_SECRET,
    SALT_ROUNDS,
    REDIRECT_URI,
} from "@/config";

interface DiscordStrategyOptions {
    clientID: string;
    clientSecret: string;
    redirectURI: string;
    scopes: string[];
}

export class DiscordStrategy {
    public redirectURI: string;
    public clientID: string;
    public scopes: string[];
    public clientSecret: string;

    constructor(
        options: DiscordStrategyOptions
    ) {
        this.redirectURI = encodeURI(options.redirectURI);
        this.clientID = options.clientID;
        this.scopes = options.scopes;
        this.clientSecret = options.clientSecret;
    }

    getauthorizeURL() {
        return `https://discord.com/oauth2/authorize?client_id=${this.clientID}&response_type=code&redirect_uri=${this.redirectURI}&scope=${this.scopes.join('+')}`
    }
}