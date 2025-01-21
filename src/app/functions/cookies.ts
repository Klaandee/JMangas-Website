const setCookie = (nombre: string, valor: string, ms: number) => {
  const fecha = new Date();
  fecha.setTime(fecha.getTime() + ms);
  const expiracion = "expires=" + fecha.toUTCString();
  document.cookie = `${encodeURIComponent(nombre)}=${encodeURIComponent(
    valor
  )}; ${expiracion}; path=/; SameSite=Lax`;
};

const getCookie = (nombre: string) => {
  const cookies = document.cookie.split("; ");
  for (let i = 0; i < cookies.length; i++) {
    const [key, value] = cookies[i].split("=");
    if (decodeURIComponent(key) === nombre) return decodeURIComponent(value);
  }
  return null;
};

export { setCookie, getCookie };
