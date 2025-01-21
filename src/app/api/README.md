# API

## /api/auth/discord

Esta ruta es para autenticar el usuario usando discord.

Para hacer que el usuario vaya a autenticarse, basta con hacer que el usuario vaya a la ruta `/api/auth/discord/login`

Luego, el usuario se va a redireccionar a discord, y luego se va a redirigir a la ruta `/api/auth/discord/callback`

Esta ruta se encarga de obtener el token de discord y almacenar su token en el localStorage.

Una vez que el token se almacena en el localStorage, se va a redireccionar al usuario a la ruta raiz
