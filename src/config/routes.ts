const routes = {
    home: '/',
    marketplace : '/marketplace',
    portfolio : '/portfolio',
    minter : '/minter',
    nftDetails: (contractAddress: string, id: string) =>
    `/nft-details/${contractAddress.toLowerCase()}/${id}`,
  };
  
  export default routes;
  