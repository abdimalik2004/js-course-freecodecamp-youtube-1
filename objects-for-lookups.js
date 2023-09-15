// Setup
function phoneticLookup(val) {
  let result = "";

  // Only change code below this line
  var lookups = {
    alpha: "Adams",
    bravo: "Boston",
    charlie: "Chicago",
    delta: "Denver",
    echo: "Easy",
    foxtrot: "Frank",
  };

  // Only change code above this line
  result = lookups[val];
  return result;
}
console.log(phoneticLookup("charlie"));
