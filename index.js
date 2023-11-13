//ite your solution here!
const cats = ["Milo", "Otis", "Garfield"]
function destructivelyAppendCat(name){
  cats.push(name) 
}
function destructivelyPrependCat(name){
    cats.unshift(name)
}
function destructivelyRemoveLastCat(){
    cats.pop()
}
function destructivelyRemoveFirstCat(){
    cats.shift()
}
function appendCat(name) {
    const newCatsArray = [...cats];
    newCatsArray.push(name);
    return newCatsArray;
  }
  function prependCat(name) {
    const newCatsArray = [...cats];
    newCatsArray.unshift(name);
    return newCatsArray;
  }
  function removeLastCat(name) {
    const newCatsArray = [...cats];
    newCatsArray.pop(name);
    return newCatsArray;
  }
  function removeFirstCat(name) {
    const newCatsArray = [...cats];
    newCatsArray.shift(name);
    return newCatsArray;
  } 
