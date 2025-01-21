import {
  DISCORD_CLIENT_ID,
  DISCORD_CLIENT_SECRET,
  REDIRECT_URI,
} from "@/config";
import {DiscordStrategy} from "@/app/api/utils";
import JWT from "jsonwebtoken";
import {hash} from "bcrypt";


export async function GET(req: Request) {
  const discordStrategy = new DiscordStrategy({
    clientID: DISCORD_CLIENT_ID,
    clientSecret: DISCORD_CLIENT_SECRET,
    redirectURI: REDIRECT_URI,
    scopes: ["identify"],
  });
  return new Response(
    JSON.stringify({
      message: discordStrategy.getauthorizeURL(),
    }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}