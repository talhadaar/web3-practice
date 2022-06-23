async function main() {
  console.log('Hello there.');
}

main()
  .then(() => console.log('---> main() finished'))
  .catch(console.error);
