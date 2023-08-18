// Setup
var collection = {
    "2548": {
      albumTitle: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    "2468": {
      albumTitle: '1999',
      artist: 'Prince',
      tracks: ['1999', 'Little Red Corvette']
    },
    "1245": {
      artist: 'Robert Palmer',
      tracks: []
    },
    "5439": {
      albumTitle: 'ABBA Gold'
    }
}; 
// Only change code below this line
var collectionCopy = JSON.parse(JSON.stringify(collection));
function updateRecords(id, prop, value) {
    if (value == "") {
        delete collection[id][prop];
    } else if (prop === "tracks") {
        collection[id][prop] = collection[id][prop] || [];
        collection[id][prop].push(value);
    } else {
        collection[id][prop] = value;
    }
    return collection;
}
updateRecords(2468, "tracks", "test");
console.log(updateRecords(5439, 'artist', 'ABBA'));
