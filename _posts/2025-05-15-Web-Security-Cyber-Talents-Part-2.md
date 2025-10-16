---
title:  Walkthrough For Web Security Category In Cyber Talents Part 2 
date: 2025-05-16 07:40:00 +0200
categories: [Web Security,CyberTalents]
tags: [Web Security] 
img_path: ""  # leave blank
image: "https://i.pinimg.com/736x/89/ef/aa/89efaa19bb81a5ad3a4d00c37c53f888.jpg"
---
السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللَّهِ وَبَرَكَاتُهُ، بِسْمِ اللَّهِ، وَالصَّلَاةُ وَالسَّلَامُ عَلَى رَسُولِ اللَّهِ، الْحَمْدُ لِلَّهِ الَّذِي عَلَّمَ بِالْقَلَمِ، عَلَّمَ الإِنسَانَ مَا لَمْ يَعْلَمْ، وَالصَّلَاةُ وَالسَّلَامُ عَلَى خَيْرِ مُعَلِّمٍ النَّاسَ الْخَيْرَ، مُحَمَّدٍ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ، أَمَّا بَعْدُ



### Back to basics


#### Challenge Information

- **Category:** Web Security
    
- **Level:** easy
    
- **Points:** 50

#### **description**

I Have a Message for you.

#### **Solution**

well,  if you try to review source code you got this

![](https://m9nx-11.gitbook.io/~gitbook/image?url=https%3A%2F%2F1666899571-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGLiEQLEOptj89uzbA35s%252Fuploads%252F1YUCMYWbcAnJPpCXZmtI%252Fimage.png%3Falt%3Dmedia%26token%3D788e0e71-c493-4775-b4ae-717ae93432a0&width=768&dpr=4&quality=100&sign=5bb6c9c2&sv=2)

so, from the name of lab tell us to back to basics , so i open dev tools and review network tarffic you can use burp but it doesn't need it , just click f-12 to see dev tools

![](https://m9nx-11.gitbook.io/~gitbook/image?url=https%3A%2F%2F1666899571-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGLiEQLEOptj89uzbA35s%252Fuploads%252F9fpZ0kOS8toJ29m6DBw1%252Fimage.png%3Falt%3Dmedia%26token%3Df9308dc6-05a6-48d6-bcb1-9dd5b69f6304&width=768&dpr=4&quality=100&sign=d7ab4388&sv=2)

like this , now click on network and reload page

![](https://m9nx-11.gitbook.io/~gitbook/image?url=https%3A%2F%2F1666899571-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGLiEQLEOptj89uzbA35s%252Fuploads%252FhprdapycoIQpaLnEi1Fn%252Fimage.png%3Falt%3Dmedia%26token%3De1626cb7-0bb9-4cae-834e-789fde6d5d31&width=768&dpr=4&quality=100&sign=4527a44a&sv=2)

you got this , now go to and check every request, and you found it ( i mean flag ) in second request

![](https://m9nx-11.gitbook.io/~gitbook/image?url=https%3A%2F%2F1666899571-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGLiEQLEOptj89uzbA35s%252Fuploads%252FnWhneqFhqtBiLCqwZmaH%252Fimage.png%3Falt%3Dmedia%26token%3D8841167f-29e8-4ea6-b53d-8ce94d520c77&width=768&dpr=4&quality=100&sign=c7fc3678&sv=2)

---

### Maximum Courage


#### Challenge Information

- **Category:** Web Security
    
- **Level:** easy
    
- **Points:** 50

#### **description**

Max prefers to learn by practicing and not just reading all day, so he set up a webserver and hopes it stays secret, can you prove it has a weakness?


#### **Solution**

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

----

### Easy access


#### Challenge Information

- **Category:** Web Security
    
- **Level:** easy
    
- **Points:** 50

#### **description**

Only superpower makes you see unlimited view.

#### **Solution**

 we review source code (ctrl+u)

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

----

### ConCmarks


#### Challenge Information

- **Category:** Web Security
    
- **Level:** easy
    
- **Points:** 50

#### **description**

it might be useful to find a mark.


#### Solution

after access the lab we inspect main page

![](https://m9nx-11.gitbook.io/~gitbook/image?url=https%3A%2F%2F1666899571-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGLiEQLEOptj89uzbA35s%252Fuploads%252FAQPXmjrjhiKmwg96COdZ%252Fimage.png%3Falt%3Dmedia%26token%3Dda0f2582-c49f-479c-933e-2ad7d0259877&width=768&dpr=4&quality=100&sign=24216ea8&sv=2)

this mean we have endpoint called `sourceXXXX` and `XXXX` have value from 7000 --> 9000 so I'll first send request and intercepted it and send it to intruder to fuzz correct value to get access in this endpoint

![](https://m9nx-11.gitbook.io/~gitbook/image?url=https%3A%2F%2F1666899571-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGLiEQLEOptj89uzbA35s%252Fuploads%252FhLI57tV45jcxZ4kAXR89%252FScreenshot%25202025-02-21%2520095815.png%3Falt%3Dmedia%26token%3Db9fd7a8c-90fa-4f51-a1f3-0110ecc0565d&width=768&dpr=4&quality=100&sign=8857c2c7&sv=2)

![](https://m9nx-11.gitbook.io/~gitbook/image?url=https%3A%2F%2F1666899571-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGLiEQLEOptj89uzbA35s%252Fuploads%252Fjs9zF4mOEBnOzT1qfWXp%252FScreenshot%25202025-02-21%2520095839.png%3Falt%3Dmedia%26token%3D971e5334-210c-4197-aeb9-9dba14864a19&width=768&dpr=4&quality=100&sign=d89de86b&sv=2)

![](https://m9nx-11.gitbook.io/~gitbook/image?url=https%3A%2F%2F1666899571-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGLiEQLEOptj89uzbA35s%252Fuploads%252FS9tdpbGw4f0NFZxznMuG%252FScreenshot%25202025-02-21%2520095857.png%3Falt%3Dmedia%26token%3D37e8fb20-5f06-4a31-b9da-8ebd670a95d3&width=768&dpr=4&quality=100&sign=7f34dc91&sv=2)

![](https://m9nx-11.gitbook.io/~gitbook/image?url=https%3A%2F%2F1666899571-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGLiEQLEOptj89uzbA35s%252Fuploads%252Fg2QNJuK6mzJOKWXOkCns%252FScreenshot%25202025-02-21%2520095916.png%3Falt%3Dmedia%26token%3Dc8e48908-baef-435d-a3c4-e5e7e0e8ce41&width=768&dpr=4&quality=100&sign=1ba3f160&sv=2)

now select payload type --> number and make number range from 7000 to 9000 and count step equal one so now we have 2001 request to check it

![](https://m9nx-11.gitbook.io/~gitbook/image?url=https%3A%2F%2F1666899571-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGLiEQLEOptj89uzbA35s%252Fuploads%252Fovwi0gbuk3mFi2O4S2Th%252FScreenshot%25202025-02-21%2520100011.png%3Falt%3Dmedia%26token%3D97aca76e-1f9d-49c6-a20e-2f9e216a1b84&width=768&dpr=4&quality=100&sign=2429bd89&sv=2)

and select sniper attack

![](https://m9nx-11.gitbook.io/~gitbook/image?url=https%3A%2F%2F1666899571-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGLiEQLEOptj89uzbA35s%252Fuploads%252Ftn0PStrdgXhMIdHA50BW%252FScreenshot%25202025-02-21%2520100019.png%3Falt%3Dmedia%26token%3Df4b26ba2-1d0e-4f95-b5c1-c4617a4ca13b&width=768&dpr=4&quality=100&sign=883d6deb&sv=2)

from status code select 200 OK one

![](https://m9nx-11.gitbook.io/~gitbook/image?url=https%3A%2F%2F1666899571-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGLiEQLEOptj89uzbA35s%252Fuploads%252FZ8KfRAHJUhHviqwWPXTk%252FScreenshot%25202025-02-21%2520101432.png%3Falt%3Dmedia%26token%3D655c5e1a-5e4a-485f-845a-8be7d102b1d4&width=768&dpr=4&quality=100&sign=44e72e19&sv=2)

and i search to bypass this condition and get flag

![](https://m9nx-11.gitbook.io/~gitbook/image?url=https%3A%2F%2F1666899571-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGLiEQLEOptj89uzbA35s%252Fuploads%252FIN2oRn2ikiYfJ8tP8ne7%252FScreenshot%25202025-02-21%2520101504.png%3Falt%3Dmedia%26token%3Dfc2bb8c3-7b1b-4d06-996b-dd9796102fa0&width=768&dpr=4&quality=100&sign=f3fa62a0&sv=2)

First i we'll explain what this condition do well, The code is a PHP script that takes two GET parameters (`n1` and `n2`), hashes them using `md5` with a salt, and checks if the hashes are identical while ensuring that `input1` and `input2` are different. If the condition is met, it prints the flag; otherwise, it prints "Sorry this value not valid."

```
if( $input1 !== $input2 && @hash("md5", $salt.$input1) === @hash("md5", $salt.$input2) ) /*check input1 must not be identical (!==) to input2 (strict comparison)
  and The MD5 hashes of salt + input1 and salt + input2 must be identical.*/
```

this means we need two **different** inputs that produce the same MD5 hash when concatenated with `$salt` so after search again i found the way to bypass this condition using **PHP type juggling** with arrays ,so i already use this payload to bypass n1[]= & n2[]=any_value , I'll explain it now . Instead of sending normal string values for `n1` and `n2`,i send them as **arrays** using `n1[]= & n2[]=1` and PHP automatically converts query parameters with `[]` into arrays (`$_GET['n1']` and `$_GET['n2']` become arrays instead of strings) , When PHP hashes an array with `@hash("md5", $salt.$input1)`, it **throws a warning** and returns `NULL` so the condition **evaluates to** `**true**`, because `$input1 !== $input2` (arrays are different ) and `@hash("md5", NULL) === @hash("md5", NULL)` is **true. Now** put this payload and send it

![](https://m9nx-11.gitbook.io/~gitbook/image?url=https%3A%2F%2F1666899571-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGLiEQLEOptj89uzbA35s%252Fuploads%252Fq0CmRqBAIAS2Pq3yJD1K%252Fimage.png%3Falt%3Dmedia%26token%3D52d62987-eba6-4119-84b9-907e01e07936&width=768&dpr=4&quality=100&sign=19d5543c&sv=2)

---

### Private Agent


#### Challenge Information

- **Category:** Web Security
    
- **Level:** easy
    
- **Points:** 50


#### **description**

Only private agents can make their way to the gate.


#### **Solution**

after access the lab we inspect main page

![](https://m9nx-11.gitbook.io/~gitbook/image?url=https%3A%2F%2F1666899571-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGLiEQLEOptj89uzbA35s%252Fuploads%252Fac4xIGlcMp371ApIA0M7%252FScreenshot%25202025-02-21%2520105905.png%3Falt%3Dmedia%26token%3D029648bc-3ba4-4c86-9452-231afc316704&width=768&dpr=4&quality=100&sign=6c21245&sv=2)

from above he get us value for user agent to get private access so got to burp and intercept request and change user agent value to given value --> givittome

![](https://m9nx-11.gitbook.io/~gitbook/image?url=https%3A%2F%2F1666899571-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGLiEQLEOptj89uzbA35s%252Fuploads%252FtDpBaz8rrlCyw3SG0zVj%252FScreenshot%25202025-02-21%2520105811.png%3Falt%3Dmedia%26token%3Db2b0bc11-45f2-4229-9973-00b11c191a20&width=768&dpr=4&quality=100&sign=4c685da&sv=2)

![](https://m9nx-11.gitbook.io/~gitbook/image?url=https%3A%2F%2F1666899571-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGLiEQLEOptj89uzbA35s%252Fuploads%252FwD2hmDxnHfS4VtS4woXm%252FScreenshot%25202025-02-21%2520105846.png%3Falt%3Dmedia%26token%3Da16bdd1a-6278-4c60-8b11-138b2ba7114a&width=768&dpr=4&quality=100&sign=e1d8d8d9&sv=2)

and we found flag as header in response

![](https://m9nx-11.gitbook.io/~gitbook/image?url=https%3A%2F%2F1666899571-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGLiEQLEOptj89uzbA35s%252Fuploads%252FGvklpWlnn60aplBzBuz1%252Fimage.png%3Falt%3Dmedia%26token%3D0269c121-b435-4437-bd1b-761f511e5e52&width=768&dpr=4&quality=100&sign=62911fc0&sv=2)

----

### COMRADE III


#### Challenge Information

- **Category:** Web Security
    
- **Level:** easy
    
- **Points:** 50

#### **description**

Hey Comrade , World War III will begin soon , we need to reveal what was hidden.


#### **Solution**

after access the lab we review source code

![](https://m9nx-11.gitbook.io/~gitbook/image?url=https%3A%2F%2F1666899571-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGLiEQLEOptj89uzbA35s%252Fuploads%252FjnLyAlDSzR1ZuDdnXJZ6%252FScreenshot%25202025-02-21%2520112903.png%3Falt%3Dmedia%26token%3De5ebcf4e-82db-456d-80e6-6a2bcd25af04&width=768&dpr=4&quality=100&sign=12075441&sv=2)

and we have nothing so , I'll use `dirb` tool

![](https://m9nx-11.gitbook.io/~gitbook/image?url=https%3A%2F%2F1666899571-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGLiEQLEOptj89uzbA35s%252Fuploads%252FSPAv0SnXJYEqKsGByxAY%252FScreenshot%25202025-02-21%2520112922.png%3Falt%3Dmedia%26token%3Dbcf66f9e-3dd2-45ea-b95d-ba3464535871&width=768&dpr=4&quality=100&sign=ac26db06&sv=2)

good findings, we now know .git endpoint so ,I'll use dumber from GitTools

![](https://m9nx-11.gitbook.io/~gitbook/image?url=https%3A%2F%2F1666899571-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGLiEQLEOptj89uzbA35s%252Fuploads%252FlO1DgPLab9efWf9KTu00%252FScreenshot%25202025-02-21%2520112930.png%3Falt%3Dmedia%26token%3D6b9d41db-8d71-455a-8430-679b9948b033&width=768&dpr=4&quality=100&sign=be18a50b&sv=2)

now use this command to see status of folder --> `git status`

![](https://m9nx-11.gitbook.io/~gitbook/image?url=https%3A%2F%2F1666899571-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGLiEQLEOptj89uzbA35s%252Fuploads%252Fx0LlgfoxpORbMHmbCkqx%252FScreenshot%25202025-02-21%2520112937.png%3Falt%3Dmedia%26token%3Da9038b22-a673-4dda-8a1b-cff940c6483e&width=768&dpr=4&quality=100&sign=e70fe30&sv=2)

and use this command to restore any file --> `git restore <name of file>` i already restore all of them and i found good findings on api.php

![](https://m9nx-11.gitbook.io/~gitbook/image?url=https%3A%2F%2F1666899571-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGLiEQLEOptj89uzbA35s%252Fuploads%252FIQJ6cRCBtoZF2e5JQ4vL%252FScreenshot%25202025-02-21%2520113001.png%3Falt%3Dmedia%26token%3D81092b69-4804-45aa-94d8-3a87fa00cdea&width=768&dpr=4&quality=100&sign=56e53c3f&sv=2)

okay if we bypass this condition we got the flag so, i well explain how to bypass it . in this condition found cookie called api_key and it's check if it's true or false so , after i search i found the value of api_key in file called contact_process.php

![](https://m9nx-11.gitbook.io/~gitbook/image?url=https%3A%2F%2F1666899571-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGLiEQLEOptj89uzbA35s%252Fuploads%252FDhQKdQPDlFFUTDSO4ssP%252Fimage.png%3Falt%3Dmedia%26token%3Db49c73e0-1d39-4fe5-a878-eaa1cf24a321&width=768&dpr=4&quality=100&sign=8e3bb20e&sv=2)

bin2hex !! let's go to convert this string to hex from this [site](https://onlinestringtools.com/convert-string-to-hexadecimal)

![](https://m9nx-11.gitbook.io/~gitbook/image?url=https%3A%2F%2F1666899571-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGLiEQLEOptj89uzbA35s%252Fuploads%252FC90qmDDUpR2Yw5AwHLSs%252Fimage.png%3Falt%3Dmedia%26token%3D143a6590-4b40-4462-9962-2661a20e3c5f&width=768&dpr=4&quality=100&sign=ba5c4d11&sv=2)

okay we got value (first remove spaces ) and go to lab and create cookie called api_key and set it's value to `746869735f69735f746f705f736563726574` and reload page to see flag

![](https://m9nx-11.gitbook.io/~gitbook/image?url=https%3A%2F%2F1666899571-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGLiEQLEOptj89uzbA35s%252Fuploads%252FoUQZ7rXE3uBGhOz5A37N%252FScreenshot%25202025-02-21%2520113206.png%3Falt%3Dmedia%26token%3Dd7bf5d9d-d63f-493a-8ea8-95eb51559af6&width=768&dpr=4&quality=100&sign=88ecad53&sv=2)

![](https://m9nx-11.gitbook.io/~gitbook/image?url=https%3A%2F%2F1666899571-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGLiEQLEOptj89uzbA35s%252Fuploads%252Flghduva5sUXYmFFXsQRR%252Fimage.png%3Falt%3Dmedia%26token%3D4418c734-db81-4a2b-9d13-8f76ea8b1cd6&width=768&dpr=4&quality=100&sign=6ebfe988&sv=2)

----

### x corp


#### Challenge Information

- **Category:** Web Security
    
- **Level:** easy
    
- **Points:** 50

#### **description**

X corp made a new filtration for input data , prove it is secure enough

#### **Solution**

after access the lab we review source code

![](https://m9nx-11.gitbook.io/~gitbook/image?url=https%3A%2F%2F1666899571-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGLiEQLEOptj89uzbA35s%252Fuploads%252FnDViFth0W9CdWCxBUJkI%252FScreenshot%25202025-02-21%2520114837.png%3Falt%3Dmedia%26token%3Dcce0ee85-b4be-4151-8d76-5c149a037d04&width=768&dpr=4&quality=100&sign=6b691d48&sv=2)

well we missing quote and it based in span so I'll try to close quote

![](https://m9nx-11.gitbook.io/~gitbook/image?url=https%3A%2F%2F1666899571-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGLiEQLEOptj89uzbA35s%252Fuploads%252Fh6Mlpgxig6qUQhcUD6i5%252FScreenshot%25202025-02-21%2520114843.png%3Falt%3Dmedia%26token%3D93e24856-21ff-427f-a9bd-da34ddbeba6a&width=768&dpr=4&quality=100&sign=790be2f6&sv=2)

![](https://m9nx-11.gitbook.io/~gitbook/image?url=https%3A%2F%2F1666899571-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGLiEQLEOptj89uzbA35s%252Fuploads%252FRcWd1r5lBKtUjMfIkP4a%252FScreenshot%25202025-02-21%2520114905.png%3Falt%3Dmedia%26token%3D1ee62f33-6167-4b59-ab08-4b27f3daa35c&width=768&dpr=4&quality=100&sign=5ed52620&sv=2)

well , now try to input payload to make alert (XSS) u can use this payload `admin'onload=alert(1)'` first quote to close opne one and add onload action

![](https://m9nx-11.gitbook.io/~gitbook/image?url=https%3A%2F%2F1666899571-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGLiEQLEOptj89uzbA35s%252Fuploads%252FYsSdJQO2S5vVEOwHGceX%252FScreenshot%25202025-02-21%2520115111.png%3Falt%3Dmedia%26token%3De6913a0b-965d-40a8-8d96-346a06f0bd23&width=768&dpr=4&quality=100&sign=e06de7b6&sv=2)

![](https://m9nx-11.gitbook.io/~gitbook/image?url=https%3A%2F%2F1666899571-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGLiEQLEOptj89uzbA35s%252Fuploads%252FHzYbNgrWFUx9OFFZHqY5%252FScreenshot%25202025-02-21%2520115132.png%3Falt%3Dmedia%26token%3D627ccb24-a5c3-473c-9059-51fc65f94f00&width=768&dpr=4&quality=100&sign=c01621dd&sv=2)

![](https://m9nx-11.gitbook.io/~gitbook/image?url=https%3A%2F%2F1666899571-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGLiEQLEOptj89uzbA35s%252Fuploads%252F2bzZqgiDHjkNbe31alNL%252Fimage.png%3Falt%3Dmedia%26token%3D84510c45-1be2-444c-bea1-714587d505c6&width=768&dpr=4&quality=100&sign=d3ae90e3&sv=2)

----

### uGame


#### Challenge Information

- **Category:** Web Security
    
- **Level:** easy
    
- **Points:** 50

#### **description**

we are creating a new social media app for gaming , make sure its secure enough.

#### **Solution**

after access the lab u see input text i try to input any value to see where it's stored in source code

![](https://m9nx-11.gitbook.io/~gitbook/image?url=https%3A%2F%2F1666899571-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGLiEQLEOptj89uzbA35s%252Fuploads%252FNYbMLTNNI5axD1ky0UOa%252Fimage.png%3Falt%3Dmedia%26token%3D5dc77dec-bbc1-4683-a632-d4ab747ae237&width=768&dpr=4&quality=100&sign=2c3e1c85&sv=2)

![](https://m9nx-11.gitbook.io/~gitbook/image?url=https%3A%2F%2F1666899571-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGLiEQLEOptj89uzbA35s%252Fuploads%252FWqClNL7hA9KatGS6rFvH%252Fimage.png%3Falt%3Dmedia%26token%3De027bb05-a557-468d-9aee-7f3abf658da7&width=768&dpr=4&quality=100&sign=12cff6d3&sv=2)

![](https://m9nx-11.gitbook.io/~gitbook/image?url=https%3A%2F%2F1666899571-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGLiEQLEOptj89uzbA35s%252Fuploads%252FoYUI4SXN0pbnNYjfk3cH%252Fimage.png%3Falt%3Dmedia%26token%3D5721473b-7a78-45a5-ad5f-a940f4c45c46&width=768&dpr=4&quality=100&sign=d5876915&sv=2)

now after type any value I'll try to input simple payload to get alert

![](https://m9nx-11.gitbook.io/~gitbook/image?url=https%3A%2F%2F1666899571-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGLiEQLEOptj89uzbA35s%252Fuploads%252FPtOL28YT5trQodwLXBkg%252Fimage.png%3Falt%3Dmedia%26token%3D18b277c4-94db-47b9-adb3-c2fce8f70d4d&width=768&dpr=4&quality=100&sign=7e0c9087&sv=2)

![](https://m9nx-11.gitbook.io/~gitbook/image?url=https%3A%2F%2F1666899571-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGLiEQLEOptj89uzbA35s%252Fuploads%252FH2v53eEd0UWDg8fSuHmK%252Fimage.png%3Falt%3Dmedia%26token%3De261bd4b-f956-409e-9be2-69e7dea6fb95&width=768&dpr=4&quality=100&sign=fd8c7fc8&sv=2)

![](https://m9nx-11.gitbook.io/~gitbook/image?url=https%3A%2F%2F1666899571-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGLiEQLEOptj89uzbA35s%252Fuploads%252F5RcxmZ2SXhyPnfMlqjIN%252Fimage.png%3Falt%3Dmedia%26token%3Da9ca98de-b441-440e-a272-c31d39ea6481&width=768&dpr=4&quality=100&sign=b5c5172&sv=2)

![](https://m9nx-11.gitbook.io/~gitbook/image?url=https%3A%2F%2F1666899571-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGLiEQLEOptj89uzbA35s%252Fuploads%252FsSlfeKEsGfRaawHn6MFK%252Fimage.png%3Falt%3Dmedia%26token%3D23a68b3f-5afb-4c85-9963-cf0ecca948a5&width=768&dpr=4&quality=100&sign=85d0e09c&sv=2)

okay , from above we now know the validation skip any thing after `<script` so , I'll try to use < svg or <img , anything without `<script >`so the final payload is :

``<svg src=<any_invalid_value> onerror=alert(1)>``

you should input in src invalid value to make onerror true to get alert and typr it you get the flag in alert

![](https://m9nx-11.gitbook.io/~gitbook/image?url=https%3A%2F%2F1666899571-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGLiEQLEOptj89uzbA35s%252Fuploads%252FfMz2BYGdZ2y7xdZVqsAk%252Fimage.png%3Falt%3Dmedia%26token%3Deaf390e5-ca04-480d-8686-7a17cdadc33d&width=768&dpr=4&quality=100&sign=5f3cfc&sv=2)

![](https://m9nx-11.gitbook.io/~gitbook/image?url=https%3A%2F%2F1666899571-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGLiEQLEOptj89uzbA35s%252Fuploads%252FsiVgnHGnG7g7Qm8D83jw%252Fimage.png%3Falt%3Dmedia%26token%3De69a30cb-74f5-4eef-8e27-e665ec999768&width=768&dpr=4&quality=100&sign=ede7110f&sv=2)


----

### bean


Challenge Information

- **Category:** Web Security
    
- **Level:** medium
    
- **Points:** 50


#### **description**

Come back home Mr. Bean.

#### **Solution**

after access the lab we open it browser okay let's go to brute-force directory using **dirsearch**

![](https://m9nx-11.gitbook.io/~gitbook/image?url=https%3A%2F%2F1666899571-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGLiEQLEOptj89uzbA35s%252Fuploads%252FNKk12t6SZa4wVaTwnFro%252FScreenshot%25202025-02-13%2520014927.png%3Falt%3Dmedia%26token%3D6ac40940-d982-45f6-aa79-c2a690d13428&width=768&dpr=4&quality=100&sign=4187c7f6&sv=2)

**okay we have good findings , now open this link**

![](https://m9nx-11.gitbook.io/~gitbook/image?url=https%3A%2F%2F1666899571-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGLiEQLEOptj89uzbA35s%252Fuploads%252F2HTqqHSRi4sr4Bgj6GYV%252Fimage.png%3Falt%3Dmedia%26token%3D0ec94a67-92dc-45cd-a2fd-b80297f200ba&width=768&dpr=4&quality=100&sign=94f68185&sv=2)

**well ,** Let’s try to using **Path Traversal attack**

**pay load ⇒** `[**http://wlemyw93xjyc7zr8r4gvmkxal3dmm73p4y52iqvq-web.cybertalentslabs.com/files/**](http://wlemyw93xjyc7zr8r4gvmkxal3dmm73p4y52iqvq-web.cybertalentslabs.com/files/)**../../../../etc/passwd**`

![](https://m9nx-11.gitbook.io/~gitbook/image?url=https%3A%2F%2F1666899571-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGLiEQLEOptj89uzbA35s%252Fuploads%252FqaHlGGut2qM6ch820AlZ%252Fimage.png%3Falt%3Dmedia%26token%3D243fcc2e-4849-43e1-a80f-e302e0415f3a&width=768&dpr=4&quality=100&sign=b2a73b69&sv=2)

bad thing it doesn't work and the good thing we now know the web server in nginx and know it's maybe vuln with alias_traversal what is alias dir ? okay The alias directive is used to replace path of the specified location. so by the we now try put two dots before the slash like ../,final path is example.com/name../,in our case it's files../, now we go to try it.

![](https://m9nx-11.gitbook.io/~gitbook/image?url=https%3A%2F%2F1666899571-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGLiEQLEOptj89uzbA35s%252Fuploads%252FLMlpk3eJpYC1FZ4AhuF7%252Fimage.png%3Falt%3Dmedia%26token%3D566d8f79-1f6a-4e51-bf77-f13887a23fbd&width=768&dpr=4&quality=100&sign=d8849ea7&sv=2)

last thing to find the path of flag ,I searched for it a lot before. You can do that, but for now I will say the path directly. well path is /files../home/flag.txt

![](https://m9nx-11.gitbook.io/~gitbook/image?url=https%3A%2F%2F1666899571-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGLiEQLEOptj89uzbA35s%252Fuploads%252Fg1MmEnHlIlq795HteKhl%252Fimage.png%3Falt%3Dmedia%26token%3Deb742eaf-d814-42dd-ab16-975c3f699292&width=768&dpr=4&quality=100&sign=804b2461&sv=2)

for more info about alias ⇒ [https://github.com/yandex/gixy/blob/master/docs/en/plugins/aliastraversal.md](https://github.com/yandex/gixy/blob/master/docs/en/plugins/aliastraversal.md)

----

### DarkSide


#### Challenge Information

- **Category:** Web Security
    
- **Level:** easy
    
- **Points:** 50



#### **description**

Light up the darkness

#### **Solution**

okay, this lab is too easy it just click f12 to see web sources and found js file called disable open it and get the flag 

![image](https://github.com/user-attachments/assets/59972944-da53-4d7b-97fc-cccf035bdd93)


![image](https://github.com/user-attachments/assets/9adbe38a-4a0c-48a9-a730-d05250cae81e)


----