function make_capital(sentence) {
  let word = sentence.split(" ");
  for (let i = 0; i < word.length; i++) {
    word[i] = word[i][0].toUpperCase() + word[i].slice(1);
  }
  let newSentence = word.join(" ");
  return newSentence;
}

console.log(make_capital("you are my sunshine"));

function max(num1, num2, num3) {
  let largest_number = num1;

  if (num2 > largest_number) {
    largest_number = num2;
  }
  if (num3 > largest_number) {
    largest_number = num3;
  }
  return largest_number;
}
console.log(max(100, 50, 80));

function right(string) {
  if (string.length < 3) {
    return string;
  }

  let last_3 = string.substr(-3);
  let rest = string.slice(0, -3);

  let new_string = last_3 + rest;

  return new_string;
}

console.log(right("school"));

function angle_Type(num) {
  if (num < 90) {
    return "Acute";
  } else if (num == 90) {
    return "Right";
  } else if (90 < num && num < 180) {
    return "Obtuse";
  } else if (num == 180) {
    return "Straight";
  }
}

console.log(angle_Type(90));







function array_max_sum(array,k){
let sum =0;
  for(i=0;i<k;i++){
  sum+=array[i];
}


let maxsum=sum;

for (let i = k; i < array.length; i++) {
    let newsum = sum - array[i - k] + array[i];
    sum=newsum;
}



if(sum>maxsum){
  maxsum=sum;
}

return maxsum;
}


console.log(array_max_sum([1, 2, 3, 14, 5], 2));
console.log(array_max_sum([2, 3, 5, 1, 6], 3))
console.log(array_max_sum([9, 3, 5, 1, 7], 2))
