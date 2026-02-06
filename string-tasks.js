// দুটি সংখ্যা যোগ করার একটি প্রোগ্রাম লেখো
// দুটি সংখ্যার বিয়োগ, গুণ ও ভাগ বের করো
// একটি সংখ্যা even না odd চেক করো
// একটি সংখ্যা positive, negative না zero চেক করো
// তিনটি সংখ্যার গড় (average) বের করো
// Celsius থেকে Fahrenheit convert করো
// Rectangle এর area বের করো
// একটি সংখ্যা 3 এবং 5 উভয় দিয়ে divisible কিনা চেক করো
function checkWords(sentence) {
  const spaceRemove = sentence.trim();
  if(spaceRemove === '')return 0
  const words = spaceRemove.split(/\s+/);
  
  return words.length;
}
console.log(checkWords(" Hello World from JavaScript 5151"));


