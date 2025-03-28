---
published: true
title: This Is Sparta
date: 2025-03-28 07:40:00 +0200
categories: cyertalents
tags: web-sec
---

Challenge Information

-   **Category:** Web Security
    
-   **Level:** easy
    
-   **Points:** 50
    



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

user ⇒ Cyber-Talent

pass ⇒ Cyber-Talent

after submit you see this pop-up

![](https://m9nx-11.gitbook.io/~gitbook/image?url=https%3A%2F%2F1666899571-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGLiEQLEOptj89uzbA35s%252Fuploads%252FZZmtJqmGPTD1iNzFzTj4%252Fimage.png%3Falt%3Dmedia%26token%3D50b0f9e3-5adb-4828-a3dc-995fe4a836b0&width=768&dpr=4&quality=100&sign=7a3cbd81&sv=2)


![](https://m9nx-11.gitbook.io/~gitbook/image?url=https%3A%2F%2F1666899571-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGLiEQLEOptj89uzbA35s%252Fuploads%252FfRwAa7McPgT73KwTHeHd%252Fimage.png%3Falt%3Dmedia%26token%3D9191beb4-01f8-4f81-bd50-e0279046e63a&width=768&dpr=4&quality=100&sign=88213e44&sv=2)
<!--stackedit_data:
eyJoaXN0b3J5IjpbMTI0MDg5MzI0NSwxMjkzMzY5Mjc5XX0=
-->
