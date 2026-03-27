(async () => {
  const {
    cookieStore,
    document
  } = await import('./index.mjs');
  console.log(cookieStore);
  cookieStore.set('sanity', 'check');
  console.log(await cookieStore.get('sanity'));
  console.log(document.cookie);
})();
