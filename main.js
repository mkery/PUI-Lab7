
var picts = ["taro.png", "bun2.jpg", "bunny.jpg"]
var names = ["Steve", "Finn", "Jake", "Taro", "Luna"]
var ages = [2, 3, 89, 680, 1, 0]



class Animal{

  constructor(img, name, age)
  {
    this.pic = img
    this.name = name
    this.age = age
  }
}


$(document).ready(()=>{
  console.log("ready")

  var animal = new Animal(picts[1], names[2], ages[4])
  console.log(animal)
  $("#animal-img").attr("src", animal.pic);
  $("#animal-name").html(animal.name);
  $("#animal-age").html(animal.age+" years old");
})
