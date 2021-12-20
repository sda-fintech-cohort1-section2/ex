const contractAddress = "0x82BFC222a5A61E2b52146c2393Ce7DA66673A1d8";

const dApp = {
main: async function() {
    
    ethEnabled: function() {
    // If the browser has an Ethereum provider (MetaMask) installed
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      window.ethereum.enable();
      return true;
    }
    return false;
  },
  
  setString: async function(newString) {
      await this.simpleContract.methods.setString(newString).send({from: this.accounts[0]}).on("receipt", async (receipt) => {
      M.toast({ html: "String updated!"});
    });
    },
  getString: async function() {
      result = await this.simpleContract.methods.getString().call();
      M.toast({ html: "Your String is: ${result}"});
  },
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
//     await this.updateUI();
}

dApp.main();


// function buttonClick(){
//     alert("Code entered.");
// }


// $(document).ready(function () {
//     $("#submit").on('click', function (event) {
//         alert("I am an alert box! val:  $("#newStringInput").val()");
// //         dApp.setString($("#newStringInput").val());
// //         M.toast({ html: "String updated!: $("#newStringInput").val()"})
//     });
}
