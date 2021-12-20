const contractAddress = "0x7a377fAd8c7dB341e662c93A79d0B0319DD3DaE8";

const dApp = {
main: async function() {
    
    if (!this.ethEnabled()) {
      alert("Please install MetaMask to use this dApp!");
    }

    this.accounts = await window.web3.eth.getAccounts();
    this.contractAddress = contractAddress;

    this.simpleJson = await (await fetch("./Simple.json")).json();
    
    this.simpleContract = new window.web3.eth.Contract(
      this.simpleJson,
      this.contractAddress,
      { defaultAccount: this.accounts[0] }
    );
    console.log("Contract object", this.simpleContract);
    await this.updateUI();
}

dApp.main();
