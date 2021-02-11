
// This mimics the "like" system from Facebook and other pages.
// Takes an array of names as the argument


function likes(names) {
      switch(names.length) {
        case 0:
          return '0 likes';
        case 1:
          return `${names[0]} likes this!`;
        case 2:
          return `${names[0]} and ${names[1]} like this!`;
        case 3:
          return `${names[0]}, ${names[1]} and ${names[2]} like this!`;
        default:
          return `${names[0]}, ${names[1]} and ${names.length - 2} others like this!`;
      }
    }



// Test Cases

console.log(likes([]));   //Expected Results: '0 likes');
console.log(likes(['Peter']));   //Expected Results: 'Peter likes this!');
console.log(likes(['Jacob', 'Alex']));   //Expected Results: 'Jacob and Alex like this!');
console.log(likes(['Max', 'John', 'Mark']));   //Expected Results: 'Max, John and Mark like this!');
console.log(likes(['Alex', 'Jacob', 'Mark', 'Max']));   //Expected Results: 'Alex, Jacob and 2 others like this!');