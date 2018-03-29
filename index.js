function takeANumber(katzDeliLine, customer) {
  katzDeliLine.push(customer)
  return "Welcome, " + customer + ". You are number " + katzDeliLine.length + " in line.";
}

function nowServing(deliLine) {
  var first = deliLine.shift()
  if (deliLine.length === 0){
    return "There is nobody waiting to be served!"
}
  if (deliLine.length > 0)
    return "Currently servin " + first + "."
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  }
  var serve = "";
<<<<<<< HEAD
  //creates empty string to store customers and their placements
  var place = 0;
  // used to store placement in line
  var i = 0;
    for (i=0; i<katzDeliLine.length; i++) {
      place = katzDeliLine.indexOf(katzDeliLine[i]) + 1
      // for loop to used to create the line of customers and their place
      // indexOf katzDeliLine array to determine the placement
      if (i<katzDeliLine.length-1) {
      serve = serve + place.toString() + ". " + katzDeliLine[i] + ", "
      }
      else {
      serve = serve + place.toString() + ". " + katzDeliLine[i]
    }
  }
  return ("The line is currently: " + serve)
}
=======
  var place = 0;
  var i = 0;
    for (i=0; i<katzDeliLine.length; i++) {
      place = katzDeliLine.indexOf(katzDeliLine[i]) + 1
    //if (i<katzDeliLine.length-1) {
      serve = serve + place.toString() + ". " + katzDeliLine[i] + " "
    //}
    //else {
    //  serve = serve + place.toString() + ". " + katzDeliLine[i]
    //}
  return ("The line is currently: " + serve)
}
}
  // var i = 0
  // var x
  // var who = katzDeliLine[i]
  // // this will take care of person's placement
  // for (x = 1; x <= katzDeliLine.length; x++){
  //   var test = x + ". " + katzDeliLine[x]
  // }
  // // this will take care of person's name
  // if (katzDeliLine.length > 0)
  //   return "The line is currently: 1. " + test
>>>>>>> 7d4e919df641264a1e009ac5400cdcfed875f9b0
