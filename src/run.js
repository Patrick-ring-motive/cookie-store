(async()=>{
  const {cookieStore,document} = await import('./index.mjs');
  console.log(cookieStore);
  cookieStore.set('test', 'test');
  console.log(await cookieStore.get('test'));
  console.log(document.cookie);
})();