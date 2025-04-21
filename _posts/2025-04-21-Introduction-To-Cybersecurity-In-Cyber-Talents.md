
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

