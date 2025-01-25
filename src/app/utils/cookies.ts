const setCookie = (nombre: string, valor: string, ms: number) => {
  const maxAge = ms / 1000; // Convertir ms a segundos
  document.cookie = `${encodeURIComponent(nombre)}=${encodeURIComponent(
    valor
  )}; max-age=${maxAge}; path=/; SameSite=Lax`;
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
