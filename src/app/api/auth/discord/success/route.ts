import {REDIRECT_URI, DISCORD_CLIENT_ID, DISCORD_CLIENT_SECRET} from "@/config";
import {NextResponse} from "next/server";

export async function GET(req: Request) {
    let code = (req.url.split("?")[1].split("&").find(x => x.startsWith("code=")))?.split("=")[1];
    if (!code) {
        return new Response("No code found", { status: 400 });
    }

    try {
        const response = await fetch("https://discord.com/api/v10/oauth2/token", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: new URLSearchParams({
                grant_type: "authorization_code",
                code: code,
                redirect_uri: REDIRECT_URI,
                client_id: DISCORD_CLIENT_ID,
                client_secret: DISCORD_CLIENT_SECRET,
            }),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data: {
            access_token: string;
            token_type: string;
            expires_in: number;
            refresh_token: string;
            scope: string;
        } = await response.json();

        console.log(data);

        return new Response(null, {
            status: 307,
            headers: {
                Location: `/?token=${data.access_token}&expires_in=${data.expires_in}&refresh_token=${data.refresh_token}`,
            },
        });
    } catch (error: any) {
        console.error(error);
        return new Response(error.message, { status: 500 });
    }
}