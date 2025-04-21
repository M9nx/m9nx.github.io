
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

now we try to put payload to make alert : <script>alert(1)</script>

![](https://m9nx-11.gitbook.io/~gitbook/image?url=https%3A%2F%2F1666899571-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGLiEQLEOptj89uzbA35s%252Fuploads%252FsMNwkKXFWIlqMfaR2T7I%252Fimage.png%3Falt%3Dmedia%26token%3D97724459-62fb-4dfd-8702-019f56a45ed6&width=768&dpr=4&quality=100&sign=9b5f72a8&sv=2)

but it's doesn't work so let's go to see source code 😄

![](https://m9nx-11.gitbook.io/~gitbook/image?url=https%3A%2F%2F1666899571-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGLiEQLEOptj89uzbA35s%252Fuploads%252F0hODsN9bEugLcF7FgK69%252Fimage.png%3Falt%3Dmedia%26token%3D49cb37a2-d265-4fae-a5c7-db5e324dabe1&width=768&dpr=4&quality=100&sign=a25f0043&sv=2)


soo, i see it we can close the first script in first of payload like this : </script>......,and open new script tags with the payload finally : </script><script>alert(1)</script>

![](https://m9nx-11.gitbook.io/~gitbook/image?url=https%3A%2F%2F1666899571-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGLiEQLEOptj89uzbA35s%252Fuploads%252FivoNkRTScJx9ocxnW1BW%252Fimage.png%3Falt%3Dmedia%26token%3D5c21bd98-b48b-46a8-80f8-478afb8bd8bd&width=768&dpr=4&quality=100&sign=905c51a8&sv=2)

it's a good news, so let's go to get cookie 😄

we remove 1 and put document.cookie final payload ⇒

</script><script>alert(document.cookie)</script>

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
