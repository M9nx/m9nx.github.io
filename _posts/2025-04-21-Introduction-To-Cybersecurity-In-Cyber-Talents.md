---
title: Introduction To Cybersecurity In-Cyber Talents
date:  2025-03-28 07:40:00 +0200
categories: [cybertalents]
tags: [- Intro-To-Sec
- cybertalents]
img_path: ""  # leave blank
image: "https://raw.githubusercontent.com/M9nx/m9nx.github.io/main/assets/img/pic1.jpeg"
---

![](https://m9nx-11.gitbook.io/~gitbook/image?url=https%3A%2F%2F1666899571-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGLiEQLEOptj89uzbA35s%252Fuploads%252FxpzY9ClWsf84MvG41Ulk%252FStarting%2520Episode%25204%2520GIF%2520by%2520PBS.gif%3Falt%3Dmedia%26token%3D2e341b03-e130-49bb-956f-80adb9427c08&width=768&dpr=4&quality=100&sign=7d9bce14&sv=2)

# This is Sparta

Challenge Information

- **Category:** Web Security
    
- **Level:** easy
    
- **Points:** 50


**description**

Morning has broken today they're fighting in the shade when arrows blocked the sun they fell tonight they dine in hell


**Solution**

after access the lab we open it browser

![](https://m9nx-11.gitbook.io/~gitbook/image?url=https%3A%2F%2F1666899571-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGLiEQLEOptj89uzbA35s%252Fuploads%252FUciYOrQV36kPsbzZFdCY%252Fimage.png%3Falt%3Dmedia%26token%3D98655d4c-0f0b-4a5b-810a-a599e3bd61d9&width=768&dpr=4&quality=100&sign=15a7d6eb&sv=2)


now we try to review source code (ctrl+u)

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

well, I'll explain what this function do


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

user ⇒ Cyber-Talent

pass ⇒ Cyber-Talent

after submit you see this pop-up

![](https://m9nx-11.gitbook.io/~gitbook/image?url=https%3A%2F%2F1666899571-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGLiEQLEOptj89uzbA35s%252Fuploads%252FZZmtJqmGPTD1iNzFzTj4%252Fimage.png%3Falt%3Dmedia%26token%3D50b0f9e3-5adb-4828-a3dc-995fe4a836b0&width=768&dpr=4&quality=100&sign=7a3cbd81&sv=2)

---


# Hash3rror


Challenge Information

- **Category:** Cryptography
    
- **Level:** easy
    
- **Points:** 50


**description**

we got this corrupted hash password from a Pcap file with a note (password = sha-1(hash-result)).

HASH:77be5d24ed2e3e590045e1d6o7e84i50d2799c19f48ede46804a8734e287df120f


**Solution**

**we look on the** corrupted hash **⇒** 77be5d24ed2e3e590045e1d6o7e84i50d2799c19f48ede46804a8734e287df120f, so it seems to be maybe 64 characters (We have more letters),well let's say the hash is (SHA-256) , well the hash SHA-256 only include from 0 to f , yeah We now know the two extra letters, which are: i and o after remove them hash will be ⇒ 77be5d24ed2e3e590045e1d6o7e84i50d2799c19f48ede46804a8734e287df120f

we will use this site to decode it ⇒ [https://www.dcode.fr/sha256-has](https://www.dcode.fr/sha256-has)

![](https://m9nx-11.gitbook.io/~gitbook/image?url=https%3A%2F%2F1666899571-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGLiEQLEOptj89uzbA35s%252Fuploads%252FFuAxpei1pDzAmazAqrHF%252Fimage.png%3Falt%3Dmedia%26token%3D80ba1c32-19ad-4b43-9d34-767f88e6dfea&width=768&dpr=4&quality=100&sign=38cd4889&sv=2)

and we know the password = sha-1(hash-result),so we do it in same site :

![](https://m9nx-11.gitbook.io/~gitbook/image?url=https%3A%2F%2F1666899571-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGLiEQLEOptj89uzbA35s%252Fuploads%252FiIUh0JOYXlkwKyYdFBMK%252Fimage.png%3Falt%3Dmedia%26token%3D2673e412-9713-4021-bf43-859dee1b0d13&width=768&dpr=4&quality=100&sign=17bdccdb&sv=2)

---

# who am i?


Challenge Information

- **Category:** Web Security
    
- **Level:** easy
    
- **Points:** 50

**description**

Do not Start a fight you can not stop it


**Solution**

after access the lab we open it browser

![](https://m9nx-11.gitbook.io/~gitbook/image?url=https%3A%2F%2F1666899571-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGLiEQLEOptj89uzbA35s%252Fuploads%252Fz6jDDOwQ3hccO5q6Qi6j%252Fimage.png%3Falt%3Dmedia%26token%3D1def694b-248d-487a-a2c4-a18ff76a05b6&width=768&dpr=4&quality=100&sign=f2ddefb7&sv=2)

now we try to review source code (ctrl+u)

![](https://m9nx-11.gitbook.io/~gitbook/image?url=https%3A%2F%2F1666899571-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGLiEQLEOptj89uzbA35s%252Fuploads%252Fz5wCyxGgqpaKbqLMLWUO%252Fimage.png%3Falt%3Dmedia%26token%3D3997e5e2-f77f-4ba8-b802-06cb6ef4f503&width=768&dpr=4&quality=100&sign=f0bd81d6&sv=2)

focus on line 25,26 you see login credentials login with them

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

# I am Legend


Challenge Information

- **Category:** Web Security
    
- **Level:** easy
    
- **Points:** 50


**description**

If I am a legend, then why am I so lonely?

Flag Format : FLAG{}

**Solution**

after access the lab we open it browser

![](https://m9nx-11.gitbook.io/~gitbook/image?url=https%3A%2F%2F1666899571-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGLiEQLEOptj89uzbA35s%252Fuploads%252Fs5cwe1rI1eWcfgKGEsC5%252Fimage.png%3Falt%3Dmedia%26token%3De699de06-c491-4ecb-b2e5-7cc548ec44fb&width=768&dpr=4&quality=100&sign=25e8db31&sv=2)

now we try to review source code (ctrl+u)

![](https://m9nx-11.gitbook.io/~gitbook/image?url=https%3A%2F%2F1666899571-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGLiEQLEOptj89uzbA35s%252Fuploads%252FGVm1KFtxODapkT9aOya5%252Fimage.png%3Falt%3Dmedia%26token%3D022b02b0-df9c-475e-9896-8889337d6f5b&width=768&dpr=4&quality=100&sign=15c837cd&sv=2)

the line 26 is Obfuscation , so we will try to Deobfuscation in PoisonJS :

link : [https://filipemgs.github.io/poisonjs/](https://filipemgs.github.io/poisonjs/)

hint : (you already delete script tag 😄)

![](https://m9nx-11.gitbook.io/~gitbook/image?url=https%3A%2F%2F1666899571-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGLiEQLEOptj89uzbA35s%252Fuploads%252F4LkWTBDd3HiDU8jVOjc9%252Fimage.png%3Falt%3Dmedia%26token%3D1043d639-f5ec-4f60-81df-736cf509788d&width=768&dpr=4&quality=100&sign=80172b80&sv=2)

you can submit the flag or login in with this credentials it's up to you 😂

---

# Searching for the cookie

Challenge Information

- **Category:** Web Security
    
- **Level:** medium
    
- **Points:** 100

**description**

simple search website we need to know which cookie to eat ;)

**Solution**

after access the lab we open it browser

![](https://m9nx-11.gitbook.io/~gitbook/image?url=https%3A%2F%2F1666899571-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGLiEQLEOptj89uzbA35s%252Fuploads%252Fd0pxrQjHWVvyj63CpLtA%252Fimage.png%3Falt%3Dmedia%26token%3Ddd020948-1280-43e9-bbe4-71e23a03b49f&width=768&dpr=4&quality=100&sign=cdffd505&sv=2)

first we input anything in search to see where stored in source code

![](https://m9nx-11.gitbook.io/~gitbook/image?url=https%3A%2F%2F1666899571-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGLiEQLEOptj89uzbA35s%252Fuploads%252F0As29s5WkkZI6qo4jWKY%252Fimage.png%3Falt%3Dmedia%26token%3Dbbcf7f54-90af-407d-9149-89010d35ec7b&width=768&dpr=4&quality=100&sign=ba29daea&sv=2)

ctrl + u to open source code badge and search for text you already input in my case i search for admin

![](https://m9nx-11.gitbook.io/~gitbook/image?url=https%3A%2F%2F1666899571-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGLiEQLEOptj89uzbA35s%252Fuploads%252FjvxF2BB9sp6qZhZjlY6x%252Fimage.png%3Falt%3Dmedia%26token%3Dc42aebbf-a627-40d9-b0e8-7144d6c12a64&width=768&dpr=4&quality=100&sign=61451a58&sv=2)

```
<<<<<<< HEAD
now we try to put payload to make alert : `<script>alert(2)</script>`
=======
now we try to put payload to make alert : `<script>alert(1)</script>`
>>>>>>> 0835f0bafa7f2e2966c28b9be6cbce05ba334738
```

![](https://m9nx-11.gitbook.io/~gitbook/image?url=https%3A%2F%2F1666899571-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGLiEQLEOptj89uzbA35s%252Fuploads%252FsMNwkKXFWIlqMfaR2T7I%252Fimage.png%3Falt%3Dmedia%26token%3D97724459-62fb-4dfd-8702-019f56a45ed6&width=768&dpr=4&quality=100&sign=9b5f72a8&sv=2)

but it's doesn't work so let's go to see source code 😄

![](https://m9nx-11.gitbook.io/~gitbook/image?url=https%3A%2F%2F1666899571-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGLiEQLEOptj89uzbA35s%252Fuploads%252F0hODsN9bEugLcF7FgK69%252Fimage.png%3Falt%3Dmedia%26token%3D49cb37a2-d265-4fae-a5c7-db5e324dabe1&width=768&dpr=4&quality=100&sign=a25f0043&sv=2)


<<<<<<< HEAD
soo, i see it we can close the first script in first of payload like this : </script>......,and open new script tags with the payload finally : `</script><script>alert(1)</script>`
=======
soo, i see it we can close the first script in first of payload like this : </script>......,and open new script tags with the payload finally : `</script><script>alert(2)</script>`
>>>>>>> 0835f0bafa7f2e2966c28b9be6cbce05ba334738

![](https://m9nx-11.gitbook.io/~gitbook/image?url=https%3A%2F%2F1666899571-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGLiEQLEOptj89uzbA35s%252Fuploads%252FivoNkRTScJx9ocxnW1BW%252Fimage.png%3Falt%3Dmedia%26token%3D5c21bd98-b48b-46a8-80f8-478afb8bd8bd&width=768&dpr=4&quality=100&sign=905c51a8&sv=2)

it's a good news, so let's go to get cookie 😄

we remove 1 and put document.cookie final payload ⇒

<<<<<<< HEAD
`</script><script>alert(document.cookie)</script>`
=======
`</script><script>alert(document.cookie)</script>`
>>>>>>> 0835f0bafa7f2e2966c28b9be6cbce05ba334738

![](https://m9nx-11.gitbook.io/~gitbook/image?url=https%3A%2F%2F1666899571-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGLiEQLEOptj89uzbA35s%252Fuploads%252FK6aavPC0R765rWH2Gdqz%252Fimage.png%3Falt%3Dmedia%26token%3Ddefc4933-ccf8-4816-9abf-c33f180bb54f&width=768&dpr=4&quality=100&sign=1be86730&sv=2)

---

# bean

Challenge Information

- **Category:** Web Security
    
- **Level:** medium
    
- **Points:** 50

**description**

Come back home Mr. Bean.

**Solution**

after access the lab we open it browser

![](https://m9nx-11.gitbook.io/~gitbook/image?url=https%3A%2F%2F1666899571-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGLiEQLEOptj89uzbA35s%252Fuploads%252FP5QAS2gpx1aKPBgqGQHt%252FScreenshot%25202025-02-13%2520014943.png%3Falt%3Dmedia%26token%3D1eb4ac98-4344-4817-bea9-ddb97954c33f&width=768&dpr=4&quality=100&sign=649422f9&sv=2)

okay let's go to brute-force directory using **dirsearch**

![](https://m9nx-11.gitbook.io/~gitbook/image?url=https%3A%2F%2F1666899571-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGLiEQLEOptj89uzbA35s%252Fuploads%252FNKk12t6SZa4wVaTwnFro%252FScreenshot%25202025-02-13%2520014927.png%3Falt%3Dmedia%26token%3D6ac40940-d982-45f6-aa79-c2a690d13428&width=768&dpr=4&quality=100&sign=4187c7f6&sv=2)

**okay we have good findings , now open this link**

![](https://m9nx-11.gitbook.io/~gitbook/image?url=https%3A%2F%2F1666899571-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGLiEQLEOptj89uzbA35s%252Fuploads%252F2HTqqHSRi4sr4Bgj6GYV%252Fimage.png%3Falt%3Dmedia%26token%3D0ec94a67-92dc-45cd-a2fd-b80297f200ba&width=768&dpr=4&quality=100&sign=94f68185&sv=2)

**well ,** Let’s try to using **Path Traversal attack**

```http
pay load ⇒ [**http://wlemyw93xjyc7zr8r4gvmkxal3dmm73p4y52iqvq-web.cybertalentslabs.com/files/**](http://wlemyw93xjyc7zr8r4gvmkxal3dmm73p4y52iqvq-web.cybertalentslabs.com/files/)**../../../../etc/passwd**
```

![](https://m9nx-11.gitbook.io/~gitbook/image?url=https%3A%2F%2F1666899571-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGLiEQLEOptj89uzbA35s%252Fuploads%252FqaHlGGut2qM6ch820AlZ%252Fimage.png%3Falt%3Dmedia%26token%3D243fcc2e-4849-43e1-a80f-e302e0415f3a&width=768&dpr=4&quality=100&sign=b2a73b69&sv=2)

bad thing it doesn't work and the good thing we now know the web server in nginx and know it's maybe vuln with alias_traversal what is alias dir ? okay The alias directive is used to replace path of the specified location. so by the we now try put two dots before the slash like ../,final path is example.com/name../,in our case it's files../, now we go to try it.

![](https://m9nx-11.gitbook.io/~gitbook/image?url=https%3A%2F%2F1666899571-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGLiEQLEOptj89uzbA35s%252Fuploads%252FLMlpk3eJpYC1FZ4AhuF7%252Fimage.png%3Falt%3Dmedia%26token%3D566d8f79-1f6a-4e51-bf77-f13887a23fbd&width=768&dpr=4&quality=100&sign=d8849ea7&sv=2)

last thing to find the path of flag ,I searched for it a lot before. You can do that, but for now I will say the path directly. well path is /files../home/flag.txt

![](https://m9nx-11.gitbook.io/~gitbook/image?url=https%3A%2F%2F1666899571-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGLiEQLEOptj89uzbA35s%252Fuploads%252Fg1MmEnHlIlq795HteKhl%252Fimage.png%3Falt%3Dmedia%26token%3Deb742eaf-d814-42dd-ab16-975c3f699292&width=768&dpr=4&quality=100&sign=804b2461&sv=2)

for more info about alias ⇒ [https://github.com/yandex/gixy/blob/master/docs/en/plugins/aliastraversal.md](https://github.com/yandex/gixy/blob/master/docs/en/plugins/aliastraversal.md)

---

# Maximum Courage


Challenge Information

- **Category:** Web Security
    
- **Level:** easy
    
- **Points:** 50

**description**

Max prefers to learn by practicing and not just reading all day, so he set up a webserver and hopes it stays secret, can you prove it has a weakness?

**Solution**

after access the lab we open it browser

![](https://m9nx-11.gitbook.io/~gitbook/image?url=https%3A%2F%2F1666899571-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGLiEQLEOptj89uzbA35s%252Fuploads%252FyyK7nOyBgoruu2y7AYtG%252Fimage.png%3Falt%3Dmedia%26token%3D37d32baa-b274-4cd9-92af-208b129a53ab&width=768&dpr=4&quality=100&sign=83a7cd39&sv=2)

okaay we don't have access to open flag.php (the aim is to open it because it contain the flag )

![](https://m9nx-11.gitbook.io/~gitbook/image?url=https%3A%2F%2F1666899571-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGLiEQLEOptj89uzbA35s%252Fuploads%252FZ9OC94j2n64JoDRZHTSv%252Fimage.png%3Falt%3Dmedia%26token%3Dbb804b07-31ea-4349-8641-9fc6df01ea84&width=768&dpr=4&quality=100&sign=6e41735b&sv=2)

now we need a tool to Scan the web server for directories, i will use drib you can find it here [https://github.com/andrenth/drib](https://github.com/andrenth/drib),well let's go to our terminal command line (drib target )

![](https://m9nx-11.gitbook.io/~gitbook/image?url=https%3A%2F%2F1666899571-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGLiEQLEOptj89uzbA35s%252Fuploads%252F0GAaGQjcyTA18Y2ivaGW%252Fimage.png%3Falt%3Dmedia%26token%3D10fd4be6-40e9-4f38-8fbc-9c836aa76cfe&width=768&dpr=4&quality=100&sign=8fcdef82&sv=2)

okay goog findings if we open this url we found another path , i opend it and it's unuseful but we know that this website has /.git so that’s mean that this website has Git directories , i will gittools for it you can got it from here [https://github.com/internetwache/GitTools](https://github.com/internetwache/GitTools) , well we will actually use ./gitdumper

i will explain command line first ./gitdumper.sh(script) and url (our target ) and name folder(the output will store in ) final ⇒ `./gitdumper <target> <name of folder>`

![](https://m9nx-11.gitbook.io/~gitbook/image?url=https%3A%2F%2F1666899571-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGLiEQLEOptj89uzbA35s%252Fuploads%252FUSexR3y7BJMd3CFkBFxv%252Fimage.png%3Falt%3Dmedia%26token%3D7ccd38f1-56f8-400c-b419-b4e6819529f0&width=768&dpr=4&quality=100&sign=3097313e&sv=2)

okay open the folder and type ls -a <-a to appear hidden files>

![](https://m9nx-11.gitbook.io/~gitbook/image?url=https%3A%2F%2F1666899571-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGLiEQLEOptj89uzbA35s%252Fuploads%252FWfOwL9H23EIGAT1rHdeK%252Fimage.png%3Falt%3Dmedia%26token%3D062a6281-2dc2-41c5-bf8a-15b45e42c101&width=768&dpr=4&quality=100&sign=9fb2b868&sv=2)

i already serach on it but i did't find anything (you can search if you want it's up to you), now we try another tool called [_git_](https://www.kali.org/tools/git/) we will use git status to see the changes that have been made for this repository command ⇒ git status

![](https://m9nx-11.gitbook.io/~gitbook/image?url=https%3A%2F%2F1666899571-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGLiEQLEOptj89uzbA35s%252Fuploads%252FhXgUvZqkcfg9rTvQ8fu4%252Fimage.png%3Falt%3Dmedia%26token%3Df6be5d82-1967-4e5b-b4e4-f1a7502af333&width=768&dpr=4&quality=100&sign=4a0cb2bb&sv=2)

yeah it's just type git restore flag.php to solve the challenge 😄

![](https://m9nx-11.gitbook.io/~gitbook/image?url=https%3A%2F%2F1666899571-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGLiEQLEOptj89uzbA35s%252Fuploads%252FPB1K73I8t2froWnX0wRB%252Fimage.png%3Falt%3Dmedia%26token%3Da327fd65-aa8a-43be-80c6-488832397369&width=768&dpr=4&quality=100&sign=3110024&sv=2)

---
# The Restricted Sessions


Challenge Information

- **Category:** Web Security
    
- **Level:** medium
    
- **Points:** 100


**description**

Flag is restricted to logged users only , can you be one of them.


**Solution**

after access the lab we open it browser

![](https://m9nx-11.gitbook.io/~gitbook/image?url=https%3A%2F%2F1666899571-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGLiEQLEOptj89uzbA35s%252Fuploads%252F3qCcwjvTo3ncrkI1mUrL%252FScreenshot%25202025-02-13%2520090312.png%3Falt%3Dmedia%26token%3D2742d04a-56f5-4b78-a10a-5407ec9638fa&width=768&dpr=4&quality=100&sign=525f7e75&sv=2)

now we review source code for this lab

![](https://m9nx-11.gitbook.io/~gitbook/image?url=https%3A%2F%2F1666899571-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGLiEQLEOptj89uzbA35s%252Fuploads%252FTpb2kx3dk5Grmb8U5Kbn%252Fimage.png%3Falt%3Dmedia%26token%3Daafa9002-1f34-4881-9448-2d628973e6a3&width=768&dpr=4&quality=100&sign=e7ae72fb&sv=2)

well i'll explain what this block of code.

first checks if the browser has any cookies stored. If there are no cookies, the script does nothing.

![](https://m9nx-11.gitbook.io/~gitbook/image?url=https%3A%2F%2F1666899571-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGLiEQLEOptj89uzbA35s%252Fuploads%252FvwW2PDCFQWvCbdCjDqdX%252Fimage.png%3Falt%3Dmedia%26token%3Dbbcb5a82-3bf2-441f-813b-9219b26bade8&width=768&dpr=4&quality=100&sign=f2c5de72&sv=2)

It uses a regular expression (`/PHPSESSID=([^;]+)/`) to search the cookies for the `PHPSESSID` value and the `match()` method returns an array, and `[1]` accesses the actual session ID value from the capturing group `([^;]+)` (everything after `PHPSESSID=` until the next semicolon),Sends a `POST` request to `getcurrentuserinfo.php` with the session ID in the request body.

![](https://m9nx-11.gitbook.io/~gitbook/image?url=https%3A%2F%2F1666899571-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGLiEQLEOptj89uzbA35s%252Fuploads%252FC9wooCKvcxCo7ZG9Rzt7%252Fimage.png%3Falt%3Dmedia%26token%3D3cf28580-8f52-4d89-8bd5-b7750ac22152&width=768&dpr=4&quality=100&sign=62ada215&sv=2)

now we go to play in cookie i'll use cookie editor (you can burp to intercept and a cookie header but my way it's easier ), well first add cookie named `PHPSESSID` and any value on it and reload the site

![](https://m9nx-11.gitbook.io/~gitbook/image?url=https%3A%2F%2F1666899571-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGLiEQLEOptj89uzbA35s%252Fuploads%252F7uiRdVmcuu7aNoXL5Iy8%252FScreenshot%25202025-02-13%2520092052.png%3Falt%3Dmedia%26token%3D0d118b6a-a8c9-464f-a295-170bf5e9e600&width=768&dpr=4&quality=100&sign=6d2f27de&sv=2)

after reload

![](https://m9nx-11.gitbook.io/~gitbook/image?url=https%3A%2F%2F1666899571-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGLiEQLEOptj89uzbA35s%252Fuploads%252FfOH8Ndp9O4j9JzNJRHue%252FScreenshot%25202025-02-13%2520092048.png%3Falt%3Dmedia%26token%3D2c533747-00f4-44d1-a7f6-96a80bd7c315&width=768&dpr=4&quality=100&sign=676164c7&sv=2)

okay , we goona open this endpoint

![](https://m9nx-11.gitbook.io/~gitbook/image?url=https%3A%2F%2F1666899571-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGLiEQLEOptj89uzbA35s%252Fuploads%252Fr6HdknKTmPBV4TqXtuAU%252FScreenshot%25202025-02-13%2520092109.png%3Falt%3Dmedia%26token%3D9d6fe0ef-249b-4453-816a-ea1b64d30e9b&width=768&dpr=4&quality=100&sign=bea7f314&sv=2)

i think it's cookies's values well we try it (replace vlaue) you can use any value

![](https://m9nx-11.gitbook.io/~gitbook/image?url=https%3A%2F%2F1666899571-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGLiEQLEOptj89uzbA35s%252Fuploads%252F7x7fcaRGAj8ddKKVkFUg%252Fimage.png%3Falt%3Dmedia%26token%3D4f28705b-ac1e-4a0f-9a62-d2aff4effa37&width=768&dpr=4&quality=100&sign=22208b73&sv=2)

welll, now we try to access in this endpoint (getcurrentuserinfo.php), first try in your browser to sent request and go to http request to the find it then send it to repeater and modified the request method from Get to Post

![](https://m9nx-11.gitbook.io/~gitbook/image?url=https%3A%2F%2F1666899571-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGLiEQLEOptj89uzbA35s%252Fuploads%252FNsUmYoDCjkl8mAlv5uVx%252FScreenshot%25202025-02-13%2520091349.png%3Falt%3Dmedia%26token%3Daa8db481-c557-469e-a8af-62314da8cb98&width=768&dpr=4&quality=100&sign=c2512547&sv=2)

now send it

![](https://m9nx-11.gitbook.io/~gitbook/image?url=https%3A%2F%2F1666899571-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGLiEQLEOptj89uzbA35s%252Fuploads%252FDH3UnHAKUs9zkAuEb3qh%252FScreenshot%25202025-02-13%2520091419.png%3Falt%3Dmedia%26token%3Daf26b23f-62de-4176-89fa-a1e54c43f5bc&width=768&dpr=4&quality=100&sign=f31def9c&sv=2)

yeah haha, now we have the credentiales it's just put it cookie editor (or request i prefer cookie editor it's up to you 😄).

![](https://m9nx-11.gitbook.io/~gitbook/image?url=https%3A%2F%2F1666899571-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGLiEQLEOptj89uzbA35s%252Fuploads%252FJPVZ6bRZ451DOry05MCG%252Fimage.png%3Falt%3Dmedia%26token%3D2475727e-281b-4048-b573-34eb1e8a77a0&width=768&dpr=4&quality=100&sign=f6d2af4f&sv=2)

---

# Newsletter


Challenge Information

- **Category:** Web Security
    
- **Level:** easy
    
- **Points:** 50


**description**

the administrator put the backup file in the same root folder as the application, help us download this backup by retrieving the backup file name


**Solution**

after access the lab we open it

![](https://m9nx-11.gitbook.io/~gitbook/image?url=https%3A%2F%2F1666899571-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGLiEQLEOptj89uzbA35s%252Fuploads%252F1kMaCKwIMh3En8aQhZG5%252Fimage.png%3Falt%3Dmedia%26token%3D418d00ae-ac38-4047-8fc5-dce4f2c2bf2a&width=768&dpr=4&quality=100&sign=30512e8a&sv=2)

now type any valid email and intercepted it in burp and send it to repeater and put the payload (you can search for it ) i will use email ; ls || ,The semicolon (;) will end the statement (line or block of code whatever )to start our commands and the (||) to let the code know the start from (ls) and ignore the dummy mail in the first after typing send the request

![](https://m9nx-11.gitbook.io/~gitbook/image?url=https%3A%2F%2F1666899571-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGLiEQLEOptj89uzbA35s%252Fuploads%252FhJGJwIR1Be8BnPrPDOZD%252Fimage.png%3Falt%3Dmedia%26token%3Debe80395-bc2b-4678-bd03-1d2ecb4ad523&width=768&dpr=4&quality=100&sign=1e15ccc0&sv=2)

now send it

![](https://m9nx-11.gitbook.io/~gitbook/image?url=https%3A%2F%2F1666899571-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGLiEQLEOptj89uzbA35s%252Fuploads%252Fd1Vfhh0eSL1FztmYUwta%252Fimage.png%3Falt%3Dmedia%26token%3Dbbfaec4b-e340-4e63-a680-e88aad0b740d&width=768&dpr=4&quality=100&sign=10ebbccd&sv=2)

---

# Hashable


Challenge Information

- **Category:** Web Security
    
- **Level:** medium
    
- **Points:** 100



**description**

A famous enterprise blog was hacked, can you figure out how it was hacked?


**Solution**

after access the lab we open it

![](https://m9nx-11.gitbook.io/~gitbook/image?url=https%3A%2F%2F1666899571-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGLiEQLEOptj89uzbA35s%252Fuploads%252FDdbBxlL2foDLwOy46GoE%252Fimage.png%3Falt%3Dmedia%26token%3D9da7cbea-7188-41b5-8021-b6db6134dc4e&width=768&dpr=4&quality=100&sign=92642a6a&sv=2)

now search for find any input field to inject it , well i think contact it's contain input field

![](https://m9nx-11.gitbook.io/~gitbook/image?url=https%3A%2F%2F1666899571-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGLiEQLEOptj89uzbA35s%252Fuploads%252Ffx7TOfB2ZLukKbP8PNdx%252Fimage.png%3Falt%3Dmedia%26token%3Dd89cc9cc-10fc-4cf3-9819-dd3efc33663e&width=768&dpr=4&quality=100&sign=570761cd&sv=2)

we have 3 goood , now try to see if the page contain input filtration by type (@$<>|\'";:)

![](https://m9nx-11.gitbook.io/~gitbook/image?url=https%3A%2F%2F1666899571-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGLiEQLEOptj89uzbA35s%252Fuploads%252FS68LKRQGPMYOlKJ5xj3z%252Fimage.png%3Falt%3Dmedia%26token%3Ddd334f9b-d1a7-47f0-9a5d-ac70d21d1f13&width=768&dpr=4&quality=100&sign=c28a1497&sv=2)

Well from error we see that the website execute the commands with the eval function, if you don't what is eval() function ? In some programming languages, `eval` , short for evaluate, is a function which evaluates a string as though it were an expression in the language, and returns a result; in others, it executes multiple lines of code as though they had been included instead of the line including the `eval:` ,okay i will try to type thank${system('ls')} this payload to list all files and directors

![](https://m9nx-11.gitbook.io/~gitbook/image?url=https%3A%2F%2F1666899571-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGLiEQLEOptj89uzbA35s%252Fuploads%252FhpDXTchX0RT10MpBq6yK%252Fimage.png%3Falt%3Dmedia%26token%3De41d0dcc-cd32-4ff9-ac3e-d1ce0e31196f&width=768&dpr=4&quality=100&sign=16e9dad3&sv=2)

we got it , just type thank${system('cat flag_23894ABCX1.txt')} to show the file contet

![](https://m9nx-11.gitbook.io/~gitbook/image?url=https%3A%2F%2F1666899571-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGLiEQLEOptj89uzbA35s%252Fuploads%252FxbVHkVKfmHd9vsxLJccj%252Fimage.png%3Falt%3Dmedia%26token%3D5205aa6e-6a88-4d47-bede-56783e210647&width=768&dpr=4&quality=100&sign=cb39d6b8&sv=2)

---

# Easy access


Challenge Information

- **Category:** Web Security
    
- **Level:** easy
    
- **Points:** 50


**description**

Only superpower makes you see unlimited view.


**Solution**

after access the lab we open it browser

![](https://m9nx-11.gitbook.io/~gitbook/image?url=https%3A%2F%2F1666899571-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGLiEQLEOptj89uzbA35s%252Fuploads%252FtmVhCZeC6ESMSxkLo5X2%252Fimage.png%3Falt%3Dmedia%26token%3D43a70b2f-d02a-4c55-b889-2d4d8013e54b&width=768&dpr=4&quality=100&sign=1de8df4b&sv=2)

now we try to review source code (ctrl+u)

![](https://m9nx-11.gitbook.io/~gitbook/image?url=https%3A%2F%2F1666899571-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGLiEQLEOptj89uzbA35s%252Fuploads%252FIc3jmyeunw7s9bJCVeeH%252Fimage.png%3Falt%3Dmedia%26token%3D9035c5a2-ebf5-4ac9-a291-96d80ade99d5&width=768&dpr=4&quality=100&sign=58794032&sv=2)

now try to login in with this credentials :

```
username : bob

pass : password
```

![](https://m9nx-11.gitbook.io/~gitbook/image?url=https%3A%2F%2F1666899571-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGLiEQLEOptj89uzbA35s%252Fuploads%252Fv138AKmoXfDTpaw89qHG%252Fimage.png%3Falt%3Dmedia%26token%3Da62b7402-744a-4be1-b7d3-0e2d9a0bf5ab&width=768&dpr=4&quality=100&sign=db5bae06&sv=2)

well, know we try to type payload to bypass authentication and gain unauthorized access to a system. the common one is (' OR 1=1-- -) , I'll try it with above credentials

![](https://m9nx-11.gitbook.io/~gitbook/image?url=https%3A%2F%2F1666899571-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGLiEQLEOptj89uzbA35s%252Fuploads%252FKCzYBBlYVO2kqiEPDtRl%252Fimage.png%3Falt%3Dmedia%26token%3Da64de787-7c07-402a-b851-2365ce34fa79&width=768&dpr=4&quality=100&sign=84918b55&sv=2)

now login

![](https://m9nx-11.gitbook.io/~gitbook/image?url=https%3A%2F%2F1666899571-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGLiEQLEOptj89uzbA35s%252Fuploads%252Fj2zMgnehdNZy9cFaIA1n%252Fimage.png%3Falt%3Dmedia%26token%3Dbfac5baf-7838-4e08-9e68-19d1eee77e6e&width=768&dpr=4&quality=100&sign=d76a5b27&sv=2)

well, it's easy one, in common case it's doesn't like this (i mean easy) .

---

# Keep it Simple


Challenge Information

- **Category:** Digital Forensics
    
- **Level:** easy
    
- **Points:** 50


**description**

The answer is simple


**Solution**

after access the lab we open it browser

![](https://m9nx-11.gitbook.io/~gitbook/image?url=https%3A%2F%2F1666899571-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGLiEQLEOptj89uzbA35s%252Fuploads%252F38rkknrFCxMR1TvreOMa%252Fimage.png%3Falt%3Dmedia%26token%3D8e836b1e-3b04-400e-afa5-30617f055929&width=768&dpr=4&quality=100&sign=75d1d28e&sv=2)

okay let's go to see what is the hint

![](https://m9nx-11.gitbook.io/~gitbook/image?url=https%3A%2F%2F1666899571-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGLiEQLEOptj89uzbA35s%252Fuploads%252F8bjEqtowXvCuyYGe7MgX%252FScreenshot%25202025-02-14%2520033307.png%3Falt%3Dmedia%26token%3D8548c539-54af-417b-ba5b-407ab2212c1f&width=768&dpr=4&quality=100&sign=7f8b5f84&sv=2)

well, i don't completely understand so i 'll gonna review source code

![](https://m9nx-11.gitbook.io/~gitbook/image?url=https%3A%2F%2F1666899571-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGLiEQLEOptj89uzbA35s%252Fuploads%252F29Rp6TW9evuY3NtDprdq%252FScreenshot%25202025-02-14%2520033156.png%3Falt%3Dmedia%26token%3D98815071-096a-4e1f-9840-a6c6db23fcb3&width=768&dpr=4&quality=100&sign=21d4b3a6&sv=2)

well, look at this pic it's doesn't appear in front end

![](https://m9nx-11.gitbook.io/~gitbook/image?url=https%3A%2F%2F1666899571-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGLiEQLEOptj89uzbA35s%252Fuploads%252FN5GjqITneWtm039CUYt8%252Fimage.png%3Falt%3Dmedia%26token%3Ddbe942b2-abd1-4843-bbb6-0f31a3c859d9&width=768&dpr=4&quality=100&sign=5cfe4573&sv=2)

okay the flag or pass must be hidden in this pic i will this [website](https://aperisolve.fr/) (you can use exiftool on your terminal)

![](https://m9nx-11.gitbook.io/~gitbook/image?url=https%3A%2F%2F1666899571-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGLiEQLEOptj89uzbA35s%252Fuploads%252FHe33a7n9nhxrUuCeztiW%252Fimage.png%3Falt%3Dmedia%26token%3D59a7399e-dc64-4daf-9c54-794178549ad3&width=768&dpr=4&quality=100&sign=61bfabb3&sv=2)

this is website now upload above pic and click submit

![](https://m9nx-11.gitbook.io/~gitbook/image?url=https%3A%2F%2F1666899571-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGLiEQLEOptj89uzbA35s%252Fuploads%252FP37cM48zOxEUdJRCmNcA%252Fimage.png%3Falt%3Dmedia%26token%3D7cc2336f-5318-4d41-a891-178bfd46c8f2&width=768&dpr=4&quality=100&sign=22db9598&sv=2)

don't login with this just submit it 😄

---

# I love music


Challenge Information

- **Category:** Digital Forensics
    
- **Level:** mideum
    
- **Points:** 50


**description**

listen and focus , you will listen another thin


**Solution**

after open the link we download it

![](https://m9nx-11.gitbook.io/~gitbook/image?url=https%3A%2F%2F1666899571-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGLiEQLEOptj89uzbA35s%252Fuploads%252FGqzm35Un4wWNQzl4gjii%252Fimage.png%3Falt%3Dmedia%26token%3Db04f9cd0-2fe5-4997-a53b-8617ab2cf8c2&width=768&dpr=4&quality=100&sign=54889b9b&sv=2)

and now we know the flag is hidden in the audio waves i'll use this website [academo.org](https://academo.org/demos/spectrum-analyzer/)

![](https://m9nx-11.gitbook.io/~gitbook/image?url=https%3A%2F%2F1666899571-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGLiEQLEOptj89uzbA35s%252Fuploads%252FVtp6W2OkntwQSC3mDuKU%252Fimage.png%3Falt%3Dmedia%26token%3D1ba429b3-104f-4ce3-bb4a-635832209251&width=768&dpr=4&quality=100&sign=d81ee7e1&sv=2)

and upload the audio file you already download it and see content of waves

![](https://m9nx-11.gitbook.io/~gitbook/image?url=https%3A%2F%2F1666899571-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGLiEQLEOptj89uzbA35s%252Fuploads%252FOjzhDjiQN2l5dWNCA4QH%252Fimage.png%3Falt%3Dmedia%26token%3Da48d53d1-fd4d-4c28-9738-ab78f3886e6c&width=768&dpr=4&quality=100&sign=b19942cd&sv=2)

---

# bflag


Challenge Information

- **Category:** Digital Forensics
    
- **Level:** mideum
    
- **Points:** 50


**description**

All of us started from the bottom. Now it's your turn.


**Solution**

after download the file open it in wireshark

![](https://m9nx-11.gitbook.io/~gitbook/image?url=https%3A%2F%2F1666899571-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGLiEQLEOptj89uzbA35s%252Fuploads%252FJMwH5ENN98QlcnSFM7yM%252Fimage.png%3Falt%3Dmedia%26token%3Dac55bc77-7802-4085-989e-f8aeec099dd1&width=768&dpr=4&quality=100&sign=68afe2a5&sv=2)

now add the http in serach filtration to show only http packet

![](https://m9nx-11.gitbook.io/~gitbook/image?url=https%3A%2F%2F1666899571-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGLiEQLEOptj89uzbA35s%252Fuploads%252FF3mdkEtb75kuhv052V6R%252Fimage.png%3Falt%3Dmedia%26token%3D5a8b9016-7e01-4f7d-b3df-a0ea69781626&width=768&dpr=4&quality=100&sign=73944b80&sv=2)

okay, now if you don't find the flag this problem in the lab and the packet contain the is

![](https://m9nx-11.gitbook.io/~gitbook/image?url=https%3A%2F%2F1666899571-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGLiEQLEOptj89uzbA35s%252Fuploads%252F7wD827CA4jLwQV3nUJVr%252Fimage.png%3Falt%3Dmedia%26token%3D815b0329-ad2a-4bdd-93a9-517aa806635f&width=768&dpr=4&quality=100&sign=7ac8b624&sv=2)

now submit this analyze_packet_for_fun , and if you found this packet `<GET /f14g/analyze_packet_for_fun HTTP/1.1\r>` this mean the problem is solved

---

# Cypher Anxiety


Challenge Information

- **Category:** Digital Forensics
    
- **Level:** easy
    
- **Points:** 50


**description**

An image was leaked from a babies store. the manager is so annoyed because he needs to identify the image to fire charges against the responsible employee. the key is the md5 of the image


**Solution**

after download the file unzip it and let’s see there is something hidden inside or not with strings tool

command : `strings find\ the\ image.pcap | less`

![](https://m9nx-11.gitbook.io/~gitbook/image?url=https%3A%2F%2F1666899571-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGLiEQLEOptj89uzbA35s%252Fuploads%252FEf2oLfy353PZdHoZVvM1%252Fimage.png%3Falt%3Dmedia%26token%3D87142bda-95f4-409a-931a-7ae8426ba191&width=768&dpr=4&quality=100&sign=4400bdbd&sv=2)

well we have hint tell us that the password description key is P@sswordaya and the port is 7070, okay now let's to open file in Wireshark and put search filtration (tcp.port==7070)

![](https://m9nx-11.gitbook.io/~gitbook/image?url=https%3A%2F%2F1666899571-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGLiEQLEOptj89uzbA35s%252Fuploads%252F9n9bzch2aMwcoZ2XyrBb%252Fimage.png%3Falt%3Dmedia%26token%3D4e7b81e0-9e06-43b6-afe1-4c43616bded0&width=768&dpr=4&quality=100&sign=3c933ebb&sv=2)

well , we'll follow this packet because his lenght , after open it and change show to raw he look this

![](https://m9nx-11.gitbook.io/~gitbook/image?url=https%3A%2F%2F1666899571-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGLiEQLEOptj89uzbA35s%252Fuploads%252FG0MH7nG26UyGvLqWjAme%252Fimage.png%3Falt%3Dmedia%26token%3Dcac1bcb2-92f6-4f81-b34d-f8ac76b889c9&width=768&dpr=4&quality=100&sign=512f09b2&sv=2)

now save it and go to your terminal for use netcat, okay open two tapes first type this command (nc localhost 7070 < cyber) and the second type this (cryptcat -l -k P@ssawordaya -p 7070 > cyber1) this credentials from strings output , after end use md5sum to show the flag

![](https://m9nx-11.gitbook.io/~gitbook/image?url=https%3A%2F%2F1666899571-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGLiEQLEOptj89uzbA35s%252Fuploads%252FPC3QCgEpfS39bghCMC2L%252Fimage.png%3Falt%3Dmedia%26token%3D5cab5081-392a-4a3a-8108-2330e9784bf8&width=768&dpr=4&quality=100&sign=40affeaa&sv=2)

---

# bronze ASM


Challenge Information

- **Category:** Digital Forensics
    
- **Level:** easy
    
- **Points:** 50

**description**

An image was leaked from a babies store. the manager is so annoyed because he needs to identify the image to fire charges against the responsible employee. the key is the md5 of the image


**Solution**

![](https://m9nx-11.gitbook.io/~gitbook/image?url=https%3A%2F%2F1666899571-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGLiEQLEOptj89uzbA35s%252Fuploads%252FuPJZRnZih0iuE5Qj3gRH%252FStart%2520GIF%2520by%2520memecandy.gif%3Falt%3Dmedia%26token%3D483d8f10-fb44-454c-8ac0-0e17bae4dc15&width=768&dpr=4&quality=100&sign=b62d2ea8&sv=2)

we we'll start review source code and implementaion it

![](https://m9nx-11.gitbook.io/~gitbook/image?url=https%3A%2F%2F1666899571-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGLiEQLEOptj89uzbA35s%252Fuploads%252FvMVQa7YMrE8iU90I9tCw%252Fimage.png%3Falt%3Dmedia%26token%3D4c320ffb-678b-46b5-b53e-ba77f1c0328c&width=768&dpr=4&quality=100&sign=ff6e5bfe&sv=2)

becuse my information in assembly is so limited I'll get info from other blog the function means to take the local variable stored in rbp-4 multiply it by 8 (left shift by 3) and compare the result with 5744.

Yes ! The parameter that we are looking for is the value stored in rbp-4, but how we are supposed to know it ? Simply suppose that **parameter*8=5744,** that makes the **parameter=718**.

Still have the message _wrong submission_ popping up ? Easy, just have another look in the challenge description, it indicates that the format should be : **FLAG{0_%X_0}**, %X refers to Hexadecimal; As you can already guess the flag is : **FLAG{0_2CE_0}**

---

# LOUDER


Challenge Information

- **Category:** Digital Forensics
    
- **Level:** easy
    
- **Points:** 50


**description**

My sales manager was annoyed by this sound. However my accountant thought it might mean something. Can you figure it out? P.S: submit flag in a single string


**Solution**

![](https://m9nx-11.gitbook.io/~gitbook/image?url=https%3A%2F%2F1666899571-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGLiEQLEOptj89uzbA35s%252Fuploads%252FJvKwiH05qTjR6zNahNzl%252FStart%2520GIF%2520by%2520memecandy.gif%3Falt%3Dmedia%26token%3Dc20c6fdb-208a-4646-b3fe-d5e98b3e52d3&width=768&dpr=4&quality=100&sign=64708e27&sv=2)

first download the audio file and go to this website [](https://morsecode.world/international/decoder/audio-decoder-adaptive.html)to get morse code and convert it to text (flag )

![](https://m9nx-11.gitbook.io/~gitbook/image?url=https%3A%2F%2F1666899571-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGLiEQLEOptj89uzbA35s%252Fuploads%252FqtXGz2yCoOEfypyRjCLe%252Fimage.png%3Falt%3Dmedia%26token%3D00621a9c-739f-42f9-a522-4b2de9e47b5e&width=768&dpr=4&quality=100&sign=eb877a75&sv=2)

now upload the noesy audio and get the flag

![](https://m9nx-11.gitbook.io/~gitbook/image?url=https%3A%2F%2F1666899571-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGLiEQLEOptj89uzbA35s%252Fuploads%252FYk5RdDQtezK35Fk36TWI%252Fimage.png%3Falt%3Dmedia%26token%3D39d5978b-3b10-46fd-907c-6a1107fb32a4&width=768&dpr=4&quality=100&sign=37948cbe&sv=2)

now submit it and i know you have a problem to submit it , try to remove the spaces between Letters and submit it 😂

---


![](https://m9nx-11.gitbook.io/~gitbook/image?url=https%3A%2F%2F1666899571-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGLiEQLEOptj89uzbA35s%252Fuploads%252FyjUlFigR46zwmhk4mssf%252FYou%2520Cant%2520See%2520Me%2520John%2520Cena%2520GIF%2520by%2520WWE.gif%3Falt%3Dmedia%26token%3Defdd24a6-27ba-4ea8-807c-3823aa024f23&width=768&dpr=4&quality=100&sign=23ea3d39&sv=2)
