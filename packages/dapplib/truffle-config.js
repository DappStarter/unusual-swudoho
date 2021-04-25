require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'install inhale fresh turn bitter birth soccer upgrade good kitten bridge gather'; 
let testAccounts = [
"0xda0b3fe77ecfc209efa57ca0d9d18f434db5cb29dbc258a2026296c539a3bee7",
"0x3b3c4e4eae101f1276ac9624993233f66fccdf165941da84e88ca35c73eb6822",
"0x57298130e09988c2a0bb28db7f0fe5088d94fccb88892e7c053254c2d6fd69c2",
"0x24587d0a3a1d0dfa1c40b41e01b8cc99b8721092ac6b766338e5adb706ed0e2c",
"0xf0b50676896b90cd99cb0035d2fc61e940efd0f0c21030ee1632d532d3a99bc0",
"0xca768ca961039c125469431a393a551b5612283dcfb9292a4e771b18edef51c3",
"0x1441ac2c679c43c186ff2c8b243abfb2237ed775d347664b19095d018ebb2bf5",
"0x632007305b6708d8450f82eedafa0bc3312b69e39a8c00cd2b11475784bbc2b9",
"0xe5ba62db098674d19f2931c5bb04bfcf15460833d041121515e6dfd5406681d8",
"0x07587069d59fa4673b09d9ae0ed887acd0bdc936f1a804260447065df811ab4e"
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
            version: '^0.5.11'
        }
    }
};
