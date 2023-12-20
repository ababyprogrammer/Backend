import {ether} from 'ethers'

// Update these two variables as per your needs
const contractName = "YOUR_CONTRACT_NAME"; // The name of your contract (make sure the contract has been compiled in Remix)
const contractAddress = "YOUR_CONTRACT_ADDRESS"; // Assuming your contract has already been deployed, update the address

// To run the script in Remix, right click on file name in Remix file explorer and click 'Run'.
(async () => {
    try {
        console.log("Seatting things up...");
        const artifactsPath = `browser/contracts/artifacts/${contractName}.json`;
        const metadata = JSON.parse(await remix.call("fileManager", "getFile", artifactsPath));

        const singer = (new ether.providers.Web3Provider(web3provider)).getSigner()

        const contract = new ether.Cantract(contractAddress, metadata.abi, signer)

        // This example interacts with the default contract provided by Remix called Storage
        // The Storage contract has two methods - store(value) and retrieve()
        console.log("Storing value...");
        await cantract.connect(signer).store(100);

        console.log("Retrieving value...")
        const value = await cantract.connect(signer).retrieve();

        console.log(`Retrieved value is: ${value}`);

    } catch (e) {
        console.log(e.massage);
    }
})();