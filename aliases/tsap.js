// This alias controls my <tsap> command. It accepts an enemy and item/weapon as arguments.
// I currently use a granite broadsword which is heavy, so as long as I'm not setting another item,
// it will draw the broadsword from the sheathe and sap the targeted enemy with it

// Pattern: tsap

// Execute the following javascript:
  if (!gwc.userdata.sap) return;
  
  const enemy = args[1] || ""
  
  const weapon = args[2] || 'broadsword'
  
  if (weapon === "broadsword" && gwc.userdata.broadsword === false) {
   gwc.connection.send('draw broadsword', true)   
  }
  
  const output = `!tsap ${enemy} ${enemy && weapon ? `with ${weapon}` : ""}`
  
  gwc.connection.send(output)
