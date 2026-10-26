// Nombre de un archivo de la copia de GitHub (25-10-2026, cuando sevsevillano.com se sirvio desde alli).
// Si el navegador aun tiene guardada aquella pagina, pide la de ahora saltandose su cache.
const url = new URL(location.href);
url.searchParams.set('r', Date.now().toString(36));
location.replace(url);
