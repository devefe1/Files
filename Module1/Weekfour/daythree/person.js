// class Person {
//     constructor (name,age,eyes,hair ) {
//         this.legs = 2;
//         this.arms = 2;
//         this.eyes = "brown";
//         this.hair = "grey";
//     }
//     greet(otherPerson) {
//         console.log(`Good morning ${otherPerson}`)
//     }
//     walk (whereTo) {
//         console.log(`I love to walk to ${whereTo}`);
//     }
// }

// const me = new Person("Danny", 20, "blue", "black");
// me.hair = "blonde"
// console.log(me)
// // me.walk("per scholas");
// const you = new Person ();

// // console.log(` ${me.greet}`);
// me.greet("Jefe");
// you.greet("Danny");
// you.walk();
// // console.log(` this is you: ${you}`);

// // console.log(typeof me, typeof you);

// class Person {
//   constructor (name, age, eyes, hair, lovesCats = false, lovesDogs) {
//     this.legs = 2;
//     this.arms = 2;
//     this.name = name;
//     this.age = age;
//     this.eyes = eyes;
//     this.hair = hair;
//     this.lovesCats = lovesCats;
//     this.lovesDogs = lovesDogs || false;
//   }
//   greet (otherPerson) {
//     console.log('hi ' + otherPerson + '!');
//   }
//   classyGreeting (otherClassyPerson) {
//     console.log('Greetings ' + otherClassyPerson.name + '!');
//   }
//   setHair (hairColor) {
//     this.hair = hairColor;
//   }
//   walk () {
//     console.log('I hate when my Segway is in the shop.');
//   }
// }
// const me = new Person('Karolin', 41, 'green', 'copper dark ash blonde', true, true);
// const you = new Person('Matt', 36, 'blue', 'blonde');

// me.classyGreeting(you);
// you.classyGreeting(me);

class Person {
    constructor (name, age, eyes, hair, lovesCats = false, lovesDogs) {
      this.legs = 2;
      this.arms = 2;
      this.name = name;
      this.age = age;
      this.eyes = eyes;
      this.hair = hair;
      this.lovesCats = lovesCats;
      this.lovesDogs = lovesDogs || false;
    }
    greet (otherPerson) {
      console.log('hi ' + otherPerson + '!');
    }
    classyGreeting (otherClassyPerson) {
      console.log('Greetings ' + otherClassyPerson.name + '!');
    }
    setHair (hairColor) {
      this.hair = hairColor;
    }
    walk () {
      console.log('I hate when my Segway is in the shop.');
    }
  }
  const karolin = new Person(
      "Karolin",
      41,
      
  )
  
  me.classyGreeting(you);
  you.classyGreeting(me);