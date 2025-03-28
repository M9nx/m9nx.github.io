---
published: true
title: This Is Sparta
date: 2025-03-28 07:40:00 +0200
categories: cybertalents
tags: web-sec-easy
---


Challenge Information

-   **Category:** Web Security
    
-   **Level:** easy
    
-   **Points:** 50
    



**description**

Administrators only has the power to see the flag , can you be one ?



**Solution**

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

after login with this credentials

![](https://m9nx-11.gitbook.io/~gitbook/image?url=https%3A%2F%2F1666899571-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGLiEQLEOptj89uzbA35s%252Fuploads%252FFyRqkTaXfEFri1gbLTYN%252Fimage.png%3Falt%3Dmedia%26token%3D73bd0ae9-e707-4283-9984-29d451d83e70&width=768&dpr=4&quality=100&sign=ae2681de&sv=2)

now we open cookie editor and change role's value

![](https://m9nx-11.gitbook.io/~gitbook/image?url=https%3A%2F%2F1666899571-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGLiEQLEOptj89uzbA35s%252Fuploads%252FCeX4ux1lw0GAaWFqnJjr%252Fimage.png%3Falt%3Dmedia%26token%3Db5f0f6cf-e5d2-4f99-b409-e64c8dc00f0c&width=768&dpr=4&quality=100&sign=ff597985&sv=2)

from support to admin and and click save and reload the page

![](https://m9nx-11.gitbook.io/~gitbook/image?url=https%3A%2F%2F1666899571-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGLiEQLEOptj89uzbA35s%252Fuploads%252FhugeNwGB7vsa8k7qXKq5%252Fimage.png%3Falt%3Dmedia%26token%3Dfe534435-00df-4285-8abb-9387c1b3e170&width=768&dpr=4&quality=100&sign=32ce95a2&sv=2)

flag

done 🎉

![](https://m9nx-11.gitbook.io/~gitbook/image?url=https%3A%2F%2F1666899571-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGLiEQLEOptj89uzbA35s%252Fuploads%252FGH629P9vpmhHWkgmY2pp%252FMy%2520Work%2520Is%2520Done%2520Reaction%2520GIF%2520by%2520SpongeBob%2520SquarePants.gif%3Falt%3Dmedia%26token%3D926d381a-dc76-4ce1-8f71-abe761491bb9&width=768&dpr=4&quality=100&sign=6decead2&sv=2)
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTE1Mjg5ODk4ODddfQ==
-->