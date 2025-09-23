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

## Learning Objectives:

- AD Enumeration
- Kerberos
- Cracking Hashes
- Impacket
## [Challenge](https://tryhackme.com/room/attacktivedirectory)


## Tools

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


