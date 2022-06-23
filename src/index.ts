import {ethers} from 'ethers';
// eslint-disable-next-line prettier/prettier
import * as dotenv from 'dotenv';

dotenv.config();
async function main() {
  const NETWORK = process.env.ETHEREUM_NETWORK;
  const INFURA_PROJECT_ID = process.env.INFURA_PROJECT_ID;
  const WETH_CONTRACT_ADDRESS = process.env.WETH_CONTRACT_ADDRESS;
  const SIGNER = process.env.SIGNER_PRIVATE_KEY;
  const rpcUri = `https://${NETWORK}.infura.io/v3/${INFURA_PROJECT_ID}`;

  if (SIGNER === undefined) {
    throw Error('SIGNER is underfined');
  }

  const provider = new ethers.providers.JsonRpcProvider(rpcUri);
  const providerSigner = new ethers.Wallet(SIGNER, provider);

  console.log(await providerSigner.getAddress());
  // const filter = {
  //   address: WETH_CONTRACT_ADDRESS,
  //   topics: [
  //     // the name of the event, parnetheses containing the data type of each event, no spaces
  //     ethers.utils.id('Transfer(address,address,uint256)'),
  //   ],
  // };
  // provider.on(filter, async () => {
  //   console.log(await provider.getBlockNumber());
  // });
}

main()
  .then(() => {
    console.log('main()...');
  })
  .catch(console.error);
