/* 
১. \d (সব সংখ্যা খুঁজে বের করা)
ধরুন আপনার কাছে একটি টেক্সট আছে যেখানে নাম এবং ফোন নম্বর মিশে আছে। আপনি শুধু নম্বরগুলো বের করতে চান।
টিপস: এখানে + মানে হলো সব সংখ্যা একসাথে নেয়া, আর g (global) মানে পুরো টেক্সট জুড়ে খোঁজা।
*/
let info = "Amir: 0181, Kamal:0171";
let numbers = info.match(/\d+/g);
// console.log(numbers)

/* 
২. \w (ইউজারনেম চেক করা)
ইউজার যখন সাইন-আপ করে, তখন সে কোনো স্পেশাল ক্যারেক্টার (যেমন: !, @, #) দিচ্ছে কি না তা চেক করতে এটি ব্যবহার হয়।
*/
let useName = "user_123!@#";
let pattern = useName.match(/\w+/);
// console.log(pattern)

/* 
৩. ^ এবং $ (শুরু এবং শেষ ঠিক করা)
এটি সবচেয়ে বেশি ব্যবহৃত হয় যখন আপনি চান একটি স্ট্রিং ঠিক একটি নির্দিষ্ট শব্দ দিয়েই শুরু এবং শেষ হোক। */

let email = "admin@gmail.com";
let check = /^admin/.test(email);
// console.log(check)

/* 
৪. [ ] (ভাওয়েল গোনা সহজ করা)
আগে আমরা if (char === 'a' || char === 'e'...) দিতাম। এখন দেখুন কত সহজ:
টিপস: i দেওয়ার কারণে এটি বড় হাতের 'A' এবং ছোট হাতের 'a' দুটোই গুনবে।
*/
let text = "HellO World";
let vowels = text.match(/[aeiou]/gi);
// console.log(vowels)

/* 
৫. . (যেকোনো একটি ক্যারেক্টার)
এটি একটি ওয়াইল্ডকার্ড। ধরুন আপনি এমন শব্দ খুঁজছেন যার শুরুতে 'h', শেষে 't' এবং মাঝখানে যেকোনো ১টি অক্ষর আছে (যেমন: hat, hot, hit)।
*/
let patterns = /h.t/g;
let testText = "The cat sat on a hot hat";
// console.log(testText.match(patterns))

/* 
6. quantifiers (কতবার আছে সেটা বলে দেওয়া)
আগে আমরা শুধু + দেখতাম (১ বা তার বেশি)। কিন্তু আপনি যদি নির্দিষ্ট করে দিতে চান যে কোনো জিনিস কতবার থাকবে, তবে { } ব্যবহার করতে হয়।
উদাহরণ: কোনো পাসওয়ার্ডে ঠিক ৮টি সংখ্যা আছে কি না চেক করা।
(যদি ৮টির কম বা বেশি হয় তবে false)
*/
let pass = "12345678";
let check2 = /^\d{8}$/.test(pass);
console.log(check2);

/* 
7. Groups এবং Capturing (অংশ ভাগ করা)
ব্র্যাকেট ( ) ব্যবহার করে আপনি একটি বড় স্ট্রিং থেকে ছোট ছোট অংশ আলাদা করতে পারেন। যেমন ইমেইল থেকে শুধু নামটুকু বের করা।
*/

let email2 = "shono@gemini.com";
let pattern3 = /(\w+)@(\w+)\.com/;
let result = email2.match(pattern3)
// console.log(result[1])
// console.log(result[2])

/* 
8. Lookahead এবং Lookbehind (শর্ত সাপেক্ষে খোঁজা)
এটি সবচেয়ে অ্যাডভান্সড। ধরুন আপনি এমন একটি সংখ্যা খুঁজছেন যার ঠিক পরে একটি $ চিহ্ন আছে, কিন্তু আপনি চিহ্নটি আউটপুটে চান না।
উদাহরণ (Positive Lookahead):
যদি সংখ্যাগুলো দশমিক হয়? (যেমন: 99.99$)
সেক্ষেত্রে শুধু \d+ কাজ করবে না, কারণ ডট (.) সংখ্যা নয়। তখন প্যাটার্নটি হবে এমন: /[\d.]+(?=\$)/g
*/
let price = "100$ 200tk 330$"
let pattern4 = /\d+(?=\$)/g;
let dollarAmonunt = price.match(pattern4)
// console.log(dollarAmonunt)
let price2 = "100.55$ 200tk 33.30$"
let pattern5 = /[\d.]+(?=\$)/g;
let dollarAmonunt2 = price2.match(pattern5)
// console.log(dollarAmonunt2)