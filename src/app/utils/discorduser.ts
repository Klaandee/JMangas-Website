export async function getUser(token: string) {
  try {
    const response = await fetch("https://discord.com/api/v10/users/@me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
  }
}
