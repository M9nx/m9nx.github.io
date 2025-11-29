---
title: Walkthrough For Web Security Category In Cyber Talents Part 1
date: 2025-04-24 07:40:00 +0200
categories:
  - Web Security
  - CyberTalents
tags:
  - Web Security
img_path: ""
image: https://i.pinimg.com/736x/1f/8f/f4/1f8ff4853ab2c07f6437a214792c6d25.jpg
---

السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللَّهِ وَبَرَكَاتُهُ، بِسْمِ اللَّهِ، وَالصَّلَاةُ وَالسَّلَامُ عَلَى رَسُولِ اللَّهِ، الْحَمْدُ لِلَّهِ الَّذِي عَلَّمَ بِالْقَلَمِ، عَلَّمَ الإِنسَانَ مَا لَمْ يَعْلَمْ، وَالصَّلَاةُ وَالسَّلَامُ عَلَى خَيْرِ مُعَلِّمٍ النَّاسَ الْخَيْرَ، مُحَمَّدٍ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ، أَمَّا بَعْدُ
### Admin-has-the-power


#### Challenge Information

- **Category:** Web Security
    
- **Level:** easy
    
- **Points:** 50


#### **description**

Administrators only has the power to see the flag , can you be one ?

#### Solution


![](https://m9nx-11.gitbook.io/~gitbook/image?url=https%3A%2F%2F1666899571-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGLiEQLEOptj89uzbA35s%252Fuploads%252FxpzY9ClWsf84MvG41Ulk%252FStarting%2520Episode%25204%2520GIF%2520by%2520PBS.gif%3Falt%3Dmedia%26token%3D2e341b03-e130-49bb-956f-80adb9427c08&width=768&dpr=4&quality=100&sign=7d9bce14&sv=2)

first access the lab

![](https://m9nx-11.gitbook.io/~gitbook/image?url=https%3A%2F%2F1666899571-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGLiEQLEOptj89uzbA35s%252Fuploads%252FXdc9w5LQFghgWN9uaSWE%252Fimage.png%3Falt%3Dmedia%26token%3D3b53a302-6fbf-47e5-8f29-c77d6a0430a0&width=768&dpr=4&quality=100&sign=91def19&sv=2)

to solve this lab we you need to install this extension

link ⇒ [https://chromewebstore.google.com/detail/cookie-editor/hlkenndednhfkekhgcdicdfddnkalmdm?hl=en-US&utm_source=ext_sidebar](https://chromewebstore.google.com/detail/cookie-editor/hlkenndednhfkekhgcdicdfddnkalmdm?hl=en-US&utm_source=ext_sidebar)

![](https://m9nx-11.gitbook.io/~gitbook/image?url=https%3A%2F%2F1666899571-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGLiEQLEOptj89uzbA35s%252Fuploads%252FPUR0b7oyBs0oZ7Iv2RX2%252Fimage.png%3Falt%3Dmedia%26token%3D93ed1e12-0b87-4075-9c2f-4a4fee71f4a8&width=768&dpr=4&quality=100&sign=a6892743&sv=2)

well, now we will go to review page source (ctrl+u)

![](https://m9nx-11.gitbook.io/~gitbook/image?url=https%3A%2F%2F1666899571-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGLiEQLEOptj89uzbA35s%252Fuploads%252Fgfn7PJi5Z201Feg1gPaw%252Fimage.png%3Falt%3Dmedia%26token%3D6803820d-70b0-4574-9f5f-6dc6507aff62&width=768&dpr=4&quality=100&sign=dc30b809&sv=2)

focus on line 18, you see login credentials

```
user:support
password:x34245323 
```

after login with this credentials.

![](https://m9nx-11.gitbook.io/~gitbook/image?url=https%3A%2F%2F1666899571-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGLiEQLEOptj89uzbA35s%252Fuploads%252FFyRqkTaXfEFri1gbLTYN%252Fimage.png%3Falt%3Dmedia%26token%3D73bd0ae9-e707-4283-9984-29d451d83e70&width=768&dpr=4&quality=100&sign=ae2681de&sv=2)

now we open cookie editor and change role's value

![](https://m9nx-11.gitbook.io/~gitbook/image?url=https%3A%2F%2F1666899571-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGLiEQLEOptj89uzbA35s%252Fuploads%252FCeX4ux1lw0GAaWFqnJjr%252Fimage.png%3Falt%3Dmedia%26token%3Db5f0f6cf-e5d2-4f99-b409-e64c8dc00f0c&width=768&dpr=4&quality=100&sign=ff597985&sv=2)

from support to admin and and click save and reload the page

![](https://m9nx-11.gitbook.io/~gitbook/image?url=https%3A%2F%2F1666899571-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGLiEQLEOptj89uzbA35s%252Fuploads%252FhugeNwGB7vsa8k7qXKq5%252Fimage.png%3Falt%3Dmedia%26token%3Dfe534435-00df-4285-8abb-9387c1b3e170&width=768&dpr=4&quality=100&sign=32ce95a2&sv=2)

---


### This-is-Sparta


#### Challenge Information

- **Category:** Web Security
    
- **Level:** easy
    
- **Points:** 50


#### **description**

Morning has broken today they're fighting in the shade when arrows blocked the sun they fell tonight they dine in hell

#### **Solution**

 we review source code (ctrl+u)

![](https://m9nx-11.gitbook.io/~gitbook/image?url=https%3A%2F%2F1666899571-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGLiEQLEOptj89uzbA35s%252Fuploads%252FmEEUlIBHsbhF9Dl1UlzR%252Fimage.png%3Falt%3Dmedia%26token%3D79cbc212-e788-401b-aa78-91f191b587b0&width=768&dpr=4&quality=100&sign=dc359643&sv=2)

we focus in this line

```
// Some codevar _0xae5b=["\x76\x61\x6C\x75\x65","\x75\x73\x65\x72","\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x42\x79\x49\x64",
"\x70\x61\x73\x73","\x43\x79\x62\x65\x72\x2d\x54\x61\x6c\x65\x6e\x74","\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\
x20\x20\x20\x20\x20\x20\x20\x20\x43\x6F\x6E\x67\x72\x61\x74\x7A\x20\x0A\x0A","\x77
\x72\x6F\x6E\x67\x20\x50\x61\x73\x73\x77\x6F\x72\x64"];function check(){var _0xeb80x2
=document[_0xae5b[2]](_0xae5b[1])[_0xae5b[0]];var _0xeb80x3=document[_0xae5b[2]](_0xa
e5b[3])[_0xae5b[0]];if(_0xeb80x2==_0xae5b[4]&&_0xeb80x3==_0xae5b[4]){alert(_0xae5b[5]);
} else {alert(_0xae5b[6]);}}
```

well, i'll explain what this function do

```
{var _0xae5b} //is array of 7 elements [0:6]

function check() and if statement

if ( varx2(usename) == array[4] && varx3(pass)=array[4] ){

then show alert array[5]};// which is **Congratz** -if we decode it ,

else {show alert array[6], //which is **wrong Password**}.

//So let’s lets decode array [4] to get it’s content through any website
```

this numbers look like in hex style because the variable start with 0x ,So we will remove everything excepted numbers

```
76616C756575736572676574456C656D656E74427949647061737343796265722d54616c656e742020
2020202020202020202020202020202020202020436F6E677261747A200A0A77726F6E67
2050617373776F7264
```

now let's go to convert it from this site ⇒ [https://cryptii.com/pipes/hex-to-text](https://cryptii.com/pipes/hex-to-text)

![](https://m9nx-11.gitbook.io/~gitbook/image?url=https%3A%2F%2F1666899571-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGLiEQLEOptj89uzbA35s%252Fuploads%252FxMfgjYpPEWIue1evnmiW%252Fimage.png%3Falt%3Dmedia%26token%3Daf455ea5-c36d-4a8e-83ce-549930e2dbac&width=768&dpr=4&quality=100&sign=a77dc293&sv=2)

now copy the numbers , and you will see thing like this

![](https://m9nx-11.gitbook.io/~gitbook/image?url=https%3A%2F%2F1666899571-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGLiEQLEOptj89uzbA35s%252Fuploads%252FdTp4N9T09mmpz9jvZ5hh%252Fimage.png%3Falt%3Dmedia%26token%3D661d2477-6a7f-498e-8503-03135d8f57ac&width=768&dpr=4&quality=100&sign=c63e92ab&sv=2)

lab solve it's just login with this credentials :

```
user ⇒ Cyber-Talent

pass ⇒ Cyber-Talent
```

after submit you see this pop-up

![](https://m9nx-11.gitbook.io/~gitbook/image?url=https%3A%2F%2F1666899571-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGLiEQLEOptj89uzbA35s%252Fuploads%252FZZmtJqmGPTD1iNzFzTj4%252Fimage.png%3Falt%3Dmedia%26token%3D50b0f9e3-5adb-4828-a3dc-995fe4a836b0&width=768&dpr=4&quality=100&sign=7a3cbd81&sv=2)

---

### I am Legend


#### Challenge Information

- **Category:** Web Security
    
- **Level:** easy
    
- **Points:** 50

#### **description**

If I am a legend, then why am I so lonely?

Flag Format : FLAG{}

#### **Solution**

we review source code (ctrl+u)

![](https://m9nx-11.gitbook.io/~gitbook/image?url=https%3A%2F%2F1666899571-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGLiEQLEOptj89uzbA35s%252Fuploads%252FGVm1KFtxODapkT9aOya5%252Fimage.png%3Falt%3Dmedia%26token%3D022b02b0-df9c-475e-9896-8889337d6f5b&width=768&dpr=4&quality=100&sign=15c837cd&sv=2)

the line 26 is Obfuscation , so we will try to Deobfuscation in PoisonJS :

link : [https://filipemgs.github.io/poisonjs/](https://filipemgs.github.io/poisonjs/)

hint : (you already delete script tag 😄)

![](https://m9nx-11.gitbook.io/~gitbook/image?url=https%3A%2F%2F1666899571-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGLiEQLEOptj89uzbA35s%252Fuploads%252F4LkWTBDd3HiDU8jVOjc9%252Fimage.png%3Falt%3Dmedia%26token%3D1043d639-f5ec-4f60-81df-736cf509788d&width=768&dpr=4&quality=100&sign=80172b80&sv=2)

you can submit the flag or login in with this credentials it's up to you 😂

---

### Cool Name Effect


#### Challenge Information

- **Category:** Web Security
    
- **Level:** easy
    
- **Points:** 50

#### **description**

Webmaster developed a simple script to do cool effects on your name, but his code not filtering the inputs correctly execute JavaScript alert and prove it.


#### Solution

after access the lab we open it we try to type any special character like (<,>,(,),etc.) see if there is any filter or not

![](https://m9nx-11.gitbook.io/~gitbook/image?url=https%3A%2F%2F1666899571-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGLiEQLEOptj89uzbA35s%252Fuploads%252FoqCryMVTLsrbq4AdAJAm%252Fimage.png%3Falt%3Dmedia%26token%3D91e9a723-47b4-41ba-9e89-7421ae5fff00&width=768&dpr=4&quality=100&sign=ef25efff&sv=2)

now let's go to see source code to check is the filtering process available or not?

![](https://m9nx-11.gitbook.io/~gitbook/image?url=https%3A%2F%2F1666899571-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGLiEQLEOptj89uzbA35s%252Fuploads%252FA0GDbaQaq0wHyfNYEyfa%252Fimage.png%3Falt%3Dmedia%26token%3Da3fe0d59-aa51-4f44-b6e8-cd9919a19885&width=768&dpr=4&quality=100&sign=b655fa5b&sv=2)

okay we two good findings but we'll focus on line 25 because it's start with eval() function this mean this line is obfuscated and I'll use this `[site](http://deobfuscatejavascript.com/index_html#)` to deobfuscated

![](https://m9nx-11.gitbook.io/~gitbook/image?url=https%3A%2F%2F1666899571-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGLiEQLEOptj89uzbA35s%252Fuploads%252Fa4vhnI5VP7nEggigYl0f%252Fimage.png%3Falt%3Dmedia%26token%3De79235fa-a96b-4567-b350-ddc413e5ceb8&width=768&dpr=4&quality=100&sign=909edcb5&sv=2)

well , i already review this function and found weakness point in this function

![](https://m9nx-11.gitbook.io/~gitbook/image?url=https%3A%2F%2F1666899571-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGLiEQLEOptj89uzbA35s%252Fuploads%252FAUWsfsqK5GZdBQEsM9o8%252Fimage.png%3Falt%3Dmedia%26token%3D9318a374-247c-41c5-92f1-681332627927&width=768&dpr=4&quality=100&sign=3e5d446c&sv=2)

okay , I'll explain what this function do

```
var legacyAlert = alert;
var newAlert = function() { ... }; // to save the same functionality of alert in legacyalert

var z = ['y', 'o', 'u', 'r', ' ', 'f', 'l', 'a', 'g', ' ', 'i', 's', ':']; // array of character (c-string ) contain (your flag is :)

var f = ([]["fill"] + "")[3];
f += ([false] + undefined)[10];
f += (NaN + [Infinity])[10];
f += (NaN + [Infinity])[10];
f += (+211) + "")[3];
f += (+35) ; //this lines make variable called f and every line updates it value by unexpected values

```

well to this value (unexpected values) , i'll use [online interpreter](https://playcode.io/javascript) and makes is to print this value by console.log() function

```
var z = ['y', 'o', 'u', 'r', ' ', 'f', 'l', 'a', 'g', ' ', 'i', 's', ':'];
var f = ([]["fill"] + "")[3];
f += ([false] + undefined)[10];
f += (NaN + [Infinity])[10];
f += (+(211))["to" + String["name"]](31)[1];
f += ([]["entries"]() + "")[3];
f += (+(35))["to" + String["name"]](36);
console.log(z.join('') + f)
```

and you will get output (this is flag )

![](https://m9nx-11.gitbook.io/~gitbook/image?url=https%3A%2F%2F1666899571-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGLiEQLEOptj89uzbA35s%252Fuploads%252F65svD9SZNIunjVBfEJ7D%252Fimage.png%3Falt%3Dmedia%26token%3D97bdcc2d-7144-4af6-b231-9c27cd3bf714&width=768&dpr=4&quality=100&sign=c0f2b536&sv=2)

---

### Encrypted Database


#### Challenge Information

- **Category:** Web Security
    
- **Level:** easy
    
- **Points:** 50


#### **description**

The company hired an inexperienced developer, but he told them he hided the database and have it encrypted so the website is totally secure, can you prove that he is wrong ??


#### **Solution**

**well, after we access the lab we try to find any input field to inject it but i didn't found anu input field**

![](https://m9nx-11.gitbook.io/~gitbook/image?url=https%3A%2F%2F1666899571-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGLiEQLEOptj89uzbA35s%252Fuploads%252F8phFFDyusVAc7NRF9Kcp%252Fimage.png%3Falt%3Dmedia%26token%3D8268b805-95aa-49c7-9612-0e2d1640442e&width=768&dpr=4&quality=100&sign=faef08d8&sv=2)

now , let's go to review page source code hope to find any thing

![](https://m9nx-11.gitbook.io/~gitbook/image?url=https%3A%2F%2F1666899571-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGLiEQLEOptj89uzbA35s%252Fuploads%252FLofozTYf0xDFp1XvnwjY%252Fimage.png%3Falt%3Dmedia%26token%3Daf754b00-a4fc-4855-8794-3f3bedc726b4&width=768&dpr=4&quality=100&sign=976e4aae&sv=2)

okay, now we know we have /admin endpoint let's to access on it

![](https://m9nx-11.gitbook.io/~gitbook/image?url=https%3A%2F%2F1666899571-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGLiEQLEOptj89uzbA35s%252Fuploads%252FIDdRC4uZdSmUlvkynBnq%252Fimage.png%3Falt%3Dmedia%26token%3Db93fc50c-a1e1-4892-9160-1bf1c00ecc8c&width=768&dpr=4&quality=100&sign=ddc0b452&sv=2)

well ,we don't have access let's try baypass it with this [bypass-403](https://github.com/iamj0ker/bypass-403) tool install it and type this command

```
./baypass-403.sh our_target (name of endpoint ) //in our case name of endpoint =>admin
```

![](https://m9nx-11.gitbook.io/~gitbook/image?url=https%3A%2F%2F1666899571-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGLiEQLEOptj89uzbA35s%252Fuploads%252Fcv1aZ7bf5Wvd6Os0m52U%252Fimage.png%3Falt%3Dmedia%26token%3D93ecb113-b935-41c5-93aa-afc81b78cabe&width=768&dpr=4&quality=100&sign=75fc2af9&sv=2)

all of this urls lead to the same endpoint now open it to see admin page login

![](https://m9nx-11.gitbook.io/~gitbook/image?url=https%3A%2F%2F1666899571-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGLiEQLEOptj89uzbA35s%252Fuploads%252FTO6t4XZR6wWwZqHNH6bZ%252Fimage.png%3Falt%3Dmedia%26token%3Db9ad7b36-94b9-4957-8744-bef188547846&width=768&dpr=4&quality=100&sign=872d9fc9&sv=2)

we don't have any credentials to login in so let's review page source code

![](https://m9nx-11.gitbook.io/~gitbook/image?url=https%3A%2F%2F1666899571-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGLiEQLEOptj89uzbA35s%252Fuploads%252FdOYwG3VLHauzjx9sKXT5%252Fimage.png%3Falt%3Dmedia%26token%3D324afc2f-6024-44f7-b9c7-19419a5e5c5b&width=768&dpr=4&quality=100&sign=95a67894&sv=2)

okay we find another endpoint

```
target//admin/secret-database/db.json #final endpoint 
```

![](https://m9nx-11.gitbook.io/~gitbook/image?url=https%3A%2F%2F1666899571-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGLiEQLEOptj89uzbA35s%252Fuploads%252FLR28DnqRO3dkHTo4xnfD%252Fimage.png%3Falt%3Dmedia%26token%3Df546277c-9b13-4b7b-b5ea-c437f728b6f3&width=768&dpr=4&quality=100&sign=f1d510dd&sv=2)

okay if you try to submit this flag you get wrong so let's try to see if it encrypted or no wit this [site](https://www.tunnelsup.com/hash-analyzer/)

![](https://m9nx-11.gitbook.io/~gitbook/image?url=https%3A%2F%2F1666899571-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGLiEQLEOptj89uzbA35s%252Fuploads%252FNNw7WfPzsUY7Ie5WuAi8%252Fimage.png%3Falt%3Dmedia%26token%3D2f71ddfc-356d-42f8-a2b5-f903f15171fd&width=768&dpr=4&quality=100&sign=9aa7a8fe&sv=2)

now we know it's already hashed with MD5 so i'll decrypt it in this [site](https://m9nx-11.gitbook.io/m9nx_11/writeups/cyber-talents/introduction-to-cyber-security-in-cyber-talents/i-am-legend)

![](https://m9nx-11.gitbook.io/~gitbook/image?url=https%3A%2F%2F1666899571-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGLiEQLEOptj89uzbA35s%252Fuploads%252FrPfIshbcQztUMHlaX3o3%252Fimage.png%3Falt%3Dmedia%26token%3Dcdce6963-ad81-4065-a6b4-aad16ac0af93&width=768&dpr=4&quality=100&sign=79f13bdb&sv=2)

---

### Newsletter

#### Challenge Information

- **Category:** Web Security
    
- **Level:** easy
    
- **Points:** 50


#### **description**

the administrator put the backup file in the same root folder as the application, help us download this backup by retrieving the backup file name

#### Solution

well well  type any valid email and intercepted it in burp and send it to repeater and put the payload (you can search for it ) i will use email ; ls || ,The semicolon (;) will end the statement (line or block of code whatever )to start our commands and the (||) to let the code know the start from (ls) and ignore the dummy mail in the first after typing send the request

![](https://m9nx-11.gitbook.io/~gitbook/image?url=https%3A%2F%2F1666899571-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGLiEQLEOptj89uzbA35s%252Fuploads%252FhJGJwIR1Be8BnPrPDOZD%252Fimage.png%3Falt%3Dmedia%26token%3Debe80395-bc2b-4678-bd03-1d2ecb4ad523&width=768&dpr=4&quality=100&sign=1e15ccc0&sv=2)

now send it

![](https://m9nx-11.gitbook.io/~gitbook/image?url=https%3A%2F%2F1666899571-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGLiEQLEOptj89uzbA35s%252Fuploads%252Fd1Vfhh0eSL1FztmYUwta%252Fimage.png%3Falt%3Dmedia%26token%3Dbbfaec4b-e340-4e63-a680-e88aad0b740d&width=768&dpr=4&quality=100&sign=10ebbccd&sv=2)

---

### who am i?

#### Challenge Information

- **Category:** Web Security
    
- **Level:** easy
    
- **Points:** 50


#### **description**

Do not Start a fight you can not stop it

#### Solution

we review source code (ctrl+u)

![](https://m9nx-11.gitbook.io/~gitbook/image?url=https%3A%2F%2F1666899571-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGLiEQLEOptj89uzbA35s%252Fuploads%252Fz5wCyxGgqpaKbqLMLWUO%252Fimage.png%3Falt%3Dmedia%26token%3D3997e5e2-f77f-4ba8-b802-06cb6ef4f503&width=768&dpr=4&quality=100&sign=f0bd81d6&sv=2)

focus on line 25,26 you see login credentials,login with them

![](https://m9nx-11.gitbook.io/~gitbook/image?url=https%3A%2F%2F1666899571-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGLiEQLEOptj89uzbA35s%252Fuploads%252FMqoYKYU7FQPJ3awz4LW8%252Fimage.png%3Falt%3Dmedia%26token%3D5bb485c2-c024-4f36-94f6-e1fbd22118d6&width=768&dpr=4&quality=100&sign=f1e51213&sv=2)

now we try to edit cookie

![](https://m9nx-11.gitbook.io/~gitbook/image?url=https%3A%2F%2F1666899571-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGLiEQLEOptj89uzbA35s%252Fuploads%252FBPLhuCmv2XtyEee8EX1O%252Fimage.png%3Falt%3Dmedia%26token%3D01cf48dc-2f06-4502-91c2-2543e2318e9a&width=768&dpr=4&quality=100&sign=14190f4d&sv=2)

i will decode this value with Base64 (you can use this site ⇒ [https://www.base64decode.org/](https://www.base64decode.org/))

![](https://m9nx-11.gitbook.io/~gitbook/image?url=https%3A%2F%2F1666899571-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGLiEQLEOptj89uzbA35s%252Fuploads%252FSDgVdTBKjzQCahgZuzhA%252Fimage.png%3Falt%3Dmedia%26token%3D44b70516-9444-49ce-96fd-33c9b6dbbb9a&width=768&dpr=4&quality=100&sign=e762dc71&sv=2)

now change the value to login=admin and encode it

![](https://m9nx-11.gitbook.io/~gitbook/image?url=https%3A%2F%2F1666899571-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGLiEQLEOptj89uzbA35s%252Fuploads%252F0iLQAT19m8kYmr3o3Snr%252Fimage.png%3Falt%3Dmedia%26token%3D94e9596b-7124-4039-97c8-ba4024bdcd46&width=768&dpr=4&quality=100&sign=49461cfd&sv=2)

now change the value of cookie to this value and reload site (don't forget save it 😄)

![](https://m9nx-11.gitbook.io/~gitbook/image?url=https%3A%2F%2F1666899571-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGLiEQLEOptj89uzbA35s%252Fuploads%252F0VAnyQxHhxiaLlekhrfL%252Fimage.png%3Falt%3Dmedia%26token%3Dde7a2412-f72c-47e3-9044-9478ded6cea3&width=768&dpr=4&quality=100&sign=7ac9cfb8&sv=2)

---

### Blue Inc


#### Challenge Information

- **Category:** Web Security
    
- **Level:** easy
    
- **Points:** 50


#### **description**

Blue Inc is a new social media website that's still under construction, However it doesn't have registration yet, but if you are interested in seeing our website then you can login with demo/demo.

#### **Solution**

after access the lab we open it browser , we login in with credentials we found in lab's description

Copy

```
username : demo
password : demo
```

![](https://m9nx-11.gitbook.io/~gitbook/image?url=https%3A%2F%2F1666899571-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGLiEQLEOptj89uzbA35s%252Fuploads%252FCPjCedR0xH18CN4PMs7v%252Fimage.png%3Falt%3Dmedia%26token%3Db82576a8-cd29-4305-89a1-b1cb886927f0&width=768&dpr=4&quality=100&sign=f85fdfe6&sv=2)

after login with credentials in above , we check cookies of website with cookie editor extension

![](https://m9nx-11.gitbook.io/~gitbook/image?url=https%3A%2F%2F1666899571-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGLiEQLEOptj89uzbA35s%252Fuploads%252FwUc7bVNLsc2MA2mXDF82%252Fimage.png%3Falt%3Dmedia%26token%3Dea8ca355-bd4f-4686-8bbd-8f6f12e696e5&width=768&dpr=4&quality=100&sign=fd466bdd&sv=2)

okay , let's update this value to admin or administrator (high privileges ) and reload website

![](https://m9nx-11.gitbook.io/~gitbook/image?url=https%3A%2F%2F1666899571-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGLiEQLEOptj89uzbA35s%252Fuploads%252Fcs8gzbCDUgTB80Pn6h47%252Fimage.png%3Falt%3Dmedia%26token%3Dc9160065-58d1-4478-ac37-89c16b400a69&width=768&dpr=4&quality=100&sign=89b24625&sv=2)

well, try to your profile to get the flag 😄

![](https://m9nx-11.gitbook.io/~gitbook/image?url=https%3A%2F%2F1666899571-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGLiEQLEOptj89uzbA35s%252Fuploads%252F7c53aINn2IfOqq13sZFR%252Fimage.png%3Falt%3Dmedia%26token%3D1e92bbbf-fcf3-4dd3-b1f7-912bf94b71f1&width=768&dpr=4&quality=100&sign=dc1e9b39&sv=2)

---

### Easy Message


#### Challenge Information

- **Category:** Web Security
    
- **Level:** easy
    
- **Points:** 50

#### **description**

I Have a Message for you.

#### **Solution**

after access the lab we open it browser , we found sign in page and we don't have any credentials to login so after search i found endpoint called /robots.txt

![](https://m9nx-11.gitbook.io/~gitbook/image?url=https%3A%2F%2F1666899571-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGLiEQLEOptj89uzbA35s%252Fuploads%252FXpC8pfgK2e271iggvp5K%252Fimage.png%3Falt%3Dmedia%26token%3D9421dfbd-0518-4dda-9ece-47716d085ac9&width=768&dpr=4&quality=100&sign=459ae2ff&sv=2)

well, another endpoint let's open it

![](https://m9nx-11.gitbook.io/~gitbook/image?url=https%3A%2F%2F1666899571-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGLiEQLEOptj89uzbA35s%252Fuploads%252FQsj0ojg9PDKlm27U7lhd%252Fimage.png%3Falt%3Dmedia%26token%3Da8398c81-1054-44a4-b483-20792034e590&width=768&dpr=4&quality=100&sign=9ff59ae7&sv=2)

I'll explain the functionality of this block of code

```
$user = $_POST['user'];
$pass = $_POST['pass']; //create two post parameter called user and pass

include('db.php'); //contain file called db.php

if ($user == base64_decode('Q3liZXItVGFsZW50') && $pass == base64_decode('Q3liZXItVGFsZW50'))
    {
        success_login();
    }
    else {
        failed_login();
} // if the condition is true we are able to login and if false were not able to login 
```

well to make the condition true we must login with this credentials , first we'll decode it I'll use this [website](https://www.base64decode.org/)

![](https://m9nx-11.gitbook.io/~gitbook/image?url=https%3A%2F%2F1666899571-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGLiEQLEOptj89uzbA35s%252Fuploads%252FvpHGh2vK2YFtpITRKFDn%252Fimage.png%3Falt%3Dmedia%26token%3D6a653182-2af7-4541-8073-cc1da7249d35&width=768&dpr=4&quality=100&sign=15d6fb37&sv=2)

now let's try to login with this credentials

```
user : Cyber-Talent
pass : Cyber-Talent
```

![](https://m9nx-11.gitbook.io/~gitbook/image?url=https%3A%2F%2F1666899571-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGLiEQLEOptj89uzbA35s%252Fuploads%252F5nrSwTxKaVvYyJd0pX0l%252Fimage.png%3Falt%3Dmedia%26token%3D0b20c9e3-b8ab-45c9-abc6-cd1790419f37&width=768&dpr=4&quality=100&sign=985e63f3&sv=2)

ohh, this like morse code I'll translate it with this [site](https://morsecodetranslator.com/)

![](https://m9nx-11.gitbook.io/~gitbook/image?url=https%3A%2F%2F1666899571-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGLiEQLEOptj89uzbA35s%252Fuploads%252FmJUyUE97FWjHb6s5HT6M%252Fimage.png%3Falt%3Dmedia%26token%3D0d02199b-93f6-48c8-9711-e9b451777c8a&width=768&dpr=4&quality=100&sign=4f2d968a&sv=2)

---

### Cheers


#### Challenge Information

- **Category:** Web Security
    
- **Level:** easy
    
- **Points:** 50

#### **description**

I Have a Message for you.

#### **Solution**

 i already review source and i got no thing

![](https://m9nx-11.gitbook.io/~gitbook/image?url=https%3A%2F%2F1666899571-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGLiEQLEOptj89uzbA35s%252Fuploads%252Fl9n7eI072JQe3Uk9k49j%252Fimage.png%3Falt%3Dmedia%26token%3D84d499d3-05a4-4eb8-87dc-e4b1b7a0597d&width=768&dpr=4&quality=100&sign=f4a2efd8&sv=2)

so , we see he tell us undefined index this mean un initialized (i mean it doesn't have value ) so i'll we try to send it as parameter and set any value like this :

![](https://m9nx-11.gitbook.io/~gitbook/image?url=https%3A%2F%2F1666899571-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGLiEQLEOptj89uzbA35s%252Fuploads%252FSWNVaGYl1AAHj5aLobZp%252FScreenshot%25202025-02-20%2520164534.png%3Falt%3Dmedia%26token%3Dcfaa2203-d6a3-4c96-801b-a5e48363a129&width=768&dpr=4&quality=100&sign=48a10add&sv=2)

and send

![](https://m9nx-11.gitbook.io/~gitbook/image?url=https%3A%2F%2F1666899571-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGLiEQLEOptj89uzbA35s%252Fuploads%252FEQ26JB7WERLgQxkndg1w%252Fimage.png%3Falt%3Dmedia%26token%3D12a9801d-38f3-403d-9b4a-3b41a2bf03bd&width=768&dpr=4&quality=100&sign=e5cf94c8&sv=2)

well, it's great finding now we repeat same proccess with gimme_flag parameter like this :

![](https://m9nx-11.gitbook.io/~gitbook/image?url=https%3A%2F%2F1666899571-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGLiEQLEOptj89uzbA35s%252Fuploads%252FHHmIITJSX8TtA1ndZptF%252FScreenshot%25202025-02-20%2520164611.png%3Falt%3Dmedia%26token%3D8c8a6a02-3fe0-4ea0-9c30-9d7bd058e0f6&width=768&dpr=4&quality=100&sign=d04a5055&sv=2)

and send it

![](https://m9nx-11.gitbook.io/~gitbook/image?url=https%3A%2F%2F1666899571-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGLiEQLEOptj89uzbA35s%252Fuploads%252F5N65WuZyGCbPPpeN8Cyn%252Fimage.png%3Falt%3Dmedia%26token%3Dc36950c2-7f3c-4bff-8c9b-ef0819a80de0&width=768&dpr=4&quality=100&sign=3925be49&sv=2)


----

