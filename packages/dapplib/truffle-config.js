require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid arena occur venture stone dash ridge column gesture bag army gasp'; 
let testAccounts = [
"0x8670f6ca2819f7680df5014371309b8dce5d33b2ae06fb4af942914078e1be13",
"0xffdcda4c4d79d28ed6ea3c1e33f02143c9cccb05a9f3d2dc7bd00887df111613",
"0xa0ff8b1cf20527297ff1ab12a496ebd693edfc406577c6fcbff46465853894d6",
"0xc025f042f018a51f121882a74ae1b341901aee3c6b01001441a7c3eaaf3a4a3f",
"0x626bab00240eda99939051b6828b7706035deedbf0ca6c16c972a443d252df5b",
"0x7330a8072347e949edb85b58357260ecd4ce48cb53d35d8aabf4f0803766fab1",
"0xb8fbadefa51c2327665dbc007af6e2472f5ccc505b261a6765bc030f2912e963",
"0x6e5a0aa34b684c6bdadc38eb8b0be6575e239b9f17bec522da75bfb7b5203363",
"0xc75337dd78bb1d9ba39933b3a5dac41cb089d56baefc3a6286151dd9b2c822a5",
"0xa45f001e3d244f80b41604d44cbd0e825f115999b143b8aee4c7ccef6cfb18de"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

