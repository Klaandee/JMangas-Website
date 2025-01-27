const setCookieWithExpires = (nombre: string, valor: string, days: number) => {
  const maxAge = days * 24 * 60 * 60;
  const expires = new Date(Date.now() + maxAge * 1000).toUTCString();
  document.cookie = `${encodeURIComponent(nombre)}=${encodeURIComponent(
    valor
  )}; max-age=${maxAge}; expires=${expires}; path=/; SameSite=Lax`;
};

const getCookie = (nombre: string) => {
  const cookies = document.cookie.split("; ");
  for (let i = 0; i < cookies.length; i++) {
    const [key, value] = cookies[i].split("=");
    if (decodeURIComponent(key) === nombre) return decodeURIComponent(value);
  }
  return null;
};

export { setCookieWithExpires as setCookie, getCookie };
