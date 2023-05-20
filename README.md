# Identitor
## A seeded random user information generator in NodeJS

### Example Data (as of v0.1.0-dev, 2023-05-21)

```json
{
        "Name": {
                "Full": "Sallie Metsinger Schieferstein",
                "First": "Sallie",
                "Middle": "Metsinger",
                "Last": "Schieferstein"
        },
        "Birthday": {
                "Timestamp": 1388942502619,
                "Age": 9,
                "Full": "Sun Jan 05 2014",
                "Day": 5,
                "Month": 1,
                "Year": 2014,
                "Zodiac": "Capricorn"
        },
        "Online": {
                "Email": "sallie-schieferstein@showslow.de",
                "Password": "toj3x9cickq",
                "SocialMediaUsernames": {
                        "Google": "sallieschieferstein",
                        "Microsoft": "Sallie_Metsinger_Schieferstein",
                        "Facebook": "SallieSchieferstein",
                        "Twitter": "Sallie.Metsinger.Schieferstein",
                        "Instagram": "Sallie-Schieferstein",
                        "LinkedIn": "Sallie20141",
                        "Reddit": "Sallie-Schieferstein",
                        "YouTube": "SallieSchieferstein",
                        "Twitch": "SallieSchieferstein",
                        "Pinterest": "SSallie",
                        "Snapchat": "Sallie_Schieferstein",
                        "TikTok": "Sallie15",
                        "WhatsApp": "Schieferstein2014",
                        "Telegram": "Sallie51",
                        "Discord": "Sallie.Metsinger.Schieferstein"
                }
        },
        "Finance": {
                "Card": {
                        "CardType": "prepaid",
                        "CardNumber": "6762521092389527",
                        "CardExpiry": "Wed May 21 2031",
                        "CardCVC": "824",
                        "CardVendor": "Maestro"
                },
                "Bitcoin": {
                        "Address": "jmm8nq5h43l1oyrpflbrzdic42zngdtxis",
                        "PrivateKey": "hkh3vggttd4avib82k43fut8s9ohuyjv2z"
                },
                "PayPal": {
                        "Email": "sallie-schieferstein@showslow.de",
                        "Password": "j7l5hs63rg8"
                }
        },
        "Physical": {
                "Height": "109 cm",
                "Weight": "31 kg",
                "BloodType": "O+"
        },
        "Address": {
                "Full": "",
                "Street": "",
                "City": "",
                "State": "",
                "ZipCode": "",
                "Country": ""
        },
        "SocialSecurityNumber": "",
        "Phone": {
                "Home": {
                        "Full": "",
                        "CountryCode": "",
                        "Number": ""
                },
                "Mobile": {
                        "Full": "",
                        "CountryCode": "",
                        "Number": ""
                },
                "Work": {
                        "Full": "",
                        "CountryCode": "",
                        "Number": ""
                }
        },
        "Other": {
                "FavoriteColor": "",
                "Vehicle": {
                        "Year": "",
                        "Make": "",
                        "Model": "",
                        "Trim": "",
                        "VIN": "",
                        "LicensePlate": ""
                },
                "Avatar": "",
                "UUID": ""
        }
}
```

```json
{
        "Name": {
                "Full": "Helene Griglio",
                "First": "Helene",
                "Middle": null,
                "Last": "Griglio"
        },
        "Birthday": {
                "Timestamp": 638261014382,
                "Age": 33,
                "Full": "Sat Mar 24 1990",
                "Day": 24,
                "Month": 3,
                "Year": 1990,
                "Zodiac": "Aries"
        },
        "Online": {
                "Email": "helene243@mail.co.za",
                "Password": "dn0sq60jsyi",
                "SocialMediaUsernames": {
                        "Google": "Griglio243",
                        "Microsoft": "Helene243",
                        "Facebook": "Helene1990",
                        "Twitter": "Helene903",
                        "Instagram": "Helene-Griglio",
                        "LinkedIn": "helenegriglio",
                        "Reddit": "Helene243",
                        "YouTube": "Helene19903",
                        "Twitch": "HeleneG",
                        "Pinterest": "HeleneGriglio",
                        "Snapchat": "Griglio1990",
                        "TikTok": "Helene19903",
                        "WhatsApp": "Griglio1990",
                        "Telegram": "Griglio324",
                        "Discord": "Helene_Griglio"
                }
        },
        "Finance": {
                "Card": {
                        "CardType": "debit",
                        "CardNumber": "3033581530170012",
                        "CardExpiry": "Thu May 21 2026",
                        "CardCVC": "378",
                        "CardVendor": "Diners Club"
                },
                "Bitcoin": {
                        "Address": "5r9p2n2uvis9ecg517eqj61pulfnk",
                        "PrivateKey": "nzlbt8x0esi9i6hvghkdplg4hikfh"
                },
                "PayPal": {
                        "Email": "helene243@mail.co.za",
                        "Password": "4t9jogcqn1p"
                }
        },
        "Employment": {
                "Company": "Hightail",
                "Position": "Brokerage Clerk",
                "Years": 6,
                "Salary": "₽49509 Russian Ruble"
        },
        "Physical": {
                "Height": "175 cm",
                "Weight": "51 kg",
                "BloodType": "B-"
        },
        "Address": {
                "Full": "",
                "Street": "",
                "City": "",
                "State": "",
                "ZipCode": "",
                "Country": ""
        },
        "SocialSecurityNumber": "",
        "Phone": {
                "Home": {
                        "Full": "",
                        "CountryCode": "",
                        "Number": ""
                },
                "Mobile": {
                        "Full": "",
                        "CountryCode": "",
                        "Number": ""
                },
                "Work": {
                        "Full": "",
                        "CountryCode": "",
                        "Number": ""
                }
        },
        "Other": {
                "FavoriteColor": "",
                "Vehicle": {
                        "Year": "",
                        "Make": "",
                        "Model": "",
                        "Trim": "",
                        "VIN": "",
                        "LicensePlate": ""
                },
                "Avatar": "",
                "UUID": ""
        }
}
```

### Usage
1. Install NodeJS
2. Clone this repository
3. Run `npm install`
4. Run `npm run start` to generate a random user

### Data
- [x] Name
	- [x] Full Name
	- [x] First Name
	- [x] Middle Name
	- [x] Last Name
- [x] Birthday
	- [x] Timestamp
	- [x] Age
	- [x] Full Date
	- [x] Day
	- [x] Month
	- [x] Year
	- [x] Zodiac
- [x] Online
	- [x] Email
	- [x] Password
	- [x] Social Media Usernames
		- [x] Google
		- [x] Microsoft
		- [x] Facebook
		- [x] Twitter
		- [x] Instagram
		- [x] LinkedIn
		- [x] Reddit
		- [x] YouTube
		- [x] Twitch
		- [x] Pinterest
		- [x] Snapchat
		- [x] TikTok
		- [x] WhatsApp
		- [x] Telegram
		- [x] Discord
- [x] Finance
	- [x] Card
		- [x] Card Type
		- [x] Card Number
		- [x] Card Expiry
		- [x] Card CVC
		- [x] Card Vendor
	- [x] Bitcoin
		- [x] Address
		- [x] Private Key
	- [x] PayPal
		- [x] Email
		- [x] Password
- [x] Employment
	- [x] Company
	- [x] Position
	- [x] Years
	- [x] Salary
- [x] Physical
	- [x] Height
	- [x] Weight
	- [x] Blood Type
- [ ] Address
	- [ ] Full
	- [ ] Street
	- [ ] City
	- [ ] State
	- [ ] Zip Code
	- [ ] Country
- [ ] Social Security Number
- [ ] Phone
	- [ ] Home
		- [ ] Full
		- [ ] Country Code
		- [ ] Number
	- [ ] Mobile
		- [ ] Full
		- [ ] Country Code
		- [ ] Number
	- [ ] Work
		- [ ] Full
		- [ ] Country Code
		- [ ] Number
- [ ] Other
	- [ ] Favorite Color
	- [ ] Vehicle
		- [ ] Year
		- [ ] Make
		- [ ] Model
		- [ ] Trim
		- [ ] VIN
		- [ ] License Plate
	- [ ] Avatar
	- [ ] UUID