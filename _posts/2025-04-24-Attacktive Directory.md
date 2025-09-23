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

