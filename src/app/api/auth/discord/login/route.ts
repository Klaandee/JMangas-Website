import {
  DISCORD_CLIENT_ID,
  DISCORD_CLIENT_SECRET,
  REDIRECT_URI,
} from "@/config";
import { DiscordStrategy } from "@/app/utils/discordstrategy";

export async function GET(req: Request) {
  const discordStrategy = new DiscordStrategy({
    clientID: DISCORD_CLIENT_ID,
    clientSecret: DISCORD_CLIENT_SECRET,
    redirectURI: REDIRECT_URI,
    scopes: ["identify"],
  });
  return new Response(null, {
    status: 307,
    headers: {
      Location: discordStrategy.getauthorizeURL(),
    },
  });
}
