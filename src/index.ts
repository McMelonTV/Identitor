import seedrandom from "seedrandom"

import IdentityType from "./IdentityType"

declare global {
	interface Array<T> {
		random(seed: string): T
		unique(): T[]
	}
}

Array.prototype.random = function (seed: string) {
	return this[Math.floor(seedrandom(seed)() * this.length)]
}

Array.prototype.unique = function () {
	var a = this.concat()
	for (var i = 0; i < a.length; ++i) {
		for (var j = i + 1; j < a.length; ++j) {
			if (a[i] === a[j])
				a.splice(j--, 1)
		}
	}

	return a;
}

import FirstNames from './data/names/first.json'
import MiddleNames from './data/names/middle.json'
import LastNames from './data/names/last.json'

import EmailProviders from './data/online/emailproviders.json'

import CardVendors from './data/finance/cardvendors.json'

import Currencies from './data/finance/currencies.json'

import Companies from './data/employment/companies.json'
import JobTitles from './data/employment/jobtitles.json'

const ZodiacSigns = [
	{ name: 'Capricorn', start: '01-01', end: '01-19' },
	{ name: 'Aquarius', start: '01-20', end: '02-18' },
	{ name: 'Pisces', start: '02-19', end: '03-20' },
	{ name: 'Aries', start: '03-21', end: '04-19' },
	{ name: 'Taurus', start: '04-20', end: '05-20' },
	{ name: 'Gemini', start: '05-21', end: '06-20' },
	{ name: 'Cancer', start: '06-21', end: '07-22' },
	{ name: 'Leo', start: '07-23', end: '08-22' },
	{ name: 'Virgo', start: '08-23', end: '09-22' },
	{ name: 'Libra', start: '09-23', end: '10-22' },
	{ name: 'Scorpio', start: '10-23', end: '11-21' },
	{ name: 'Sagittarius', start: '11-22', end: '12-21' },
	{ name: 'Capricorn', start: '12-22', end: '12-31' }
]

function Zodiac(month: number, day: number): string {
	const date = `${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`

	for (const sign of ZodiacSigns) {
		if (date >= sign.start && date <= sign.end) {
			return sign.name
		}
	}

	return 'Unknown'
}

function Usernames(seed: string): string[] {
	const first = FirstNames.random(seed)
	const middle = seedrandom(seed)() > 0.5 ? MiddleNames.random(seed) : null
	const last = LastNames.random(seed)

	const gen = new Generator(seed)

	const Birthday = gen.Birthday()

	return [
		`${last.substring(0, 1)}${first}`,
		`${first}${last.substring(0, 1)}`,
		`${first}${last}`.toLowerCase(),
		`${first}${Birthday.Year}`,
		`${first}${Birthday.Year.toString().substring(2, 4)}`,
		`${first}${Birthday.Year.toString().substring(2, 4)}${Birthday.Month}`,
		`${first}${Birthday.Year}${Birthday.Month}`,
		`${first}${Birthday.Month}${Birthday.Day}`,
		`${first}${Birthday.Day}${Birthday.Month}`,
		`${last}${Birthday.Year}`,
		`${last}${Birthday.Year.toString().substring(2, 4)}`,
		`${last}${Birthday.Year.toString().substring(2, 4)}${Birthday.Month}`,
		`${last}${Birthday.Year}${Birthday.Month}`,
		`${last}${Birthday.Month}${Birthday.Day}`,
		`${last}${Birthday.Day}${Birthday.Month}`,
		`${first}${last}`,
		`${first}.${last}`,
		`${first}_${last}`,
		`${first}-${last}`,
		`${first}${middle ? middle : ``}${last}`,
		`${first}.${middle ? `${middle}.` : ``}${last}`,
		`${first}_${middle ? `${middle}_` : ``}${last}`,
		`${first}-${middle ? `${middle}-` : ``}${last}`
	]
}

function Card(seed: string): IdentityType['Finance']['Card'] {
	const vendor = CardVendors.random(seed)

	// const number = `${vendor.prefix}${seedrandom(seed)().toString().substring(2, 15)}`
	const prefix = vendor.prefix.split(',').random(seed)
	const length = 15 - prefix.length

	// number must be 16 digits and pass the Luhn algorithm
	let number = prefix

	for (let i = 0; i < length; i++) {
		number += Math.floor(seedrandom(`${seed}${i}`)() * 10)
	}
	
	const digits = number.split('').map(Number)
	const sum = digits.reduce((a, b, i) => {
		if (i % 2 === 0) {
			b *= 2
			if (b > 9) {
				b -= 9
			}
		}
		return a + b
	}, 0)

	const check = sum % 10 === 0 ? 0 : 10 - (sum % 10)

	number += check

	const exp = new Date()
	exp.setFullYear(exp.getFullYear() + Number(seedrandom(seed)().toString().substring(2, 3)))

	const cvv = seedrandom(seed)().toString().substring(2, 5)

	return {
		CardType: vendor.type.split(',').random(seed),
		CardNumber: number.toString(),
		CardExpiry: exp.toDateString(),
		CardCVC: cvv,
		CardVendor: vendor.name
	}
}

function Bitcoin(seed: string): IdentityType['Finance']['Bitcoin'] {
	const addresslength = Math.floor(seedrandom(seed)() * 10) + 26
	const longaddressstring = `${seedrandom(`${seed}btcadd1`)().toString(36).substring(2)}${seedrandom(`${seed}btcadd2`)().toString(36).substring(2)}${seedrandom(`${seed}btcadd3`)().toString(36).substring(2)}${seedrandom(`${seed}btcadd4`)().toString(36).substring(2)}`

	const address = longaddressstring.substring(0, addresslength)

	const privatekeylength = Math.floor(seedrandom(seed)() * 10) + 26
	const longprivatekeystring = `${seedrandom(`${seed}btcpriv1`)().toString(36).substring(2)}${seedrandom(`${seed}btcpriv2`)().toString(36).substring(2)}${seedrandom(`${seed}btcpriv3`)().toString(36).substring(2)}${seedrandom(`${seed}btcpriv4`)().toString(36).substring(2)}`
	const privateKey = longprivatekeystring.substring(0, privatekeylength)

	return {
		Address: address,
		PrivateKey: privateKey
	}
}

function PayPal(seed: string): IdentityType['Finance']['PayPal'] {
	const gen = new Generator(seed)
	const email = gen.Online().Email
	const password = seedrandom(`${seed}pp`)().toString(36).substring(2)

	return {
		Email: email,
		Password: password
	}
}

function Salary(seed: string): string {
	const gen = new Generator(seed)
	const currency = Currencies.random(seed)
	const salary = Math.floor(seedrandom(`${seed}salary`)() * 100000) + 10000

	return `${currency.symbol}${salary} ${currency.name}`
}

function Height(seed: string): IdentityType['Physical']['Height'] {
	const gen = new Generator(seed)
	const age = gen.Birthday().Age

	let height = 0

	switch (true) {
		case age < 2:
			height = Math.floor(seedrandom(`${seed}height`)() * 30) + 50
			break
		case age < 6:
			height = Math.floor(seedrandom(`${seed}height`)() * 20) + 80
			break
		case age < 10:
			height = Math.floor(seedrandom(`${seed}height`)() * 20) + 100
			break
		case age < 13:
			height = Math.floor(seedrandom(`${seed}height`)() * 40) + 120
			break
		default:
			height = Math.floor(seedrandom(`${seed}height`)() * 40) + 140
			break
	}

	return `${height} cm`
}

function Weight(seed: string): IdentityType['Physical']['Weight'] {
	const gen = new Generator(seed)
	const age = gen.Birthday().Age

	let weight = 0

	switch (true) {
		case age < 2:
			weight = Math.floor(seedrandom(`${seed}weight`)() * 5) + 2
			break
		case age < 6:
			weight = Math.floor(seedrandom(`${seed}weight`)() * 10) + 10
			break
		case age < 10:
			weight = Math.floor(seedrandom(`${seed}weight`)() * 20) + 20
			break
		case age < 13:
			weight = Math.floor(seedrandom(`${seed}weight`)() * 30) + 30
			break
		case age < 18:
			weight = Math.floor(seedrandom(`${seed}weight`)() * 40) + 40
			break
		default:
			weight = Math.floor(seedrandom(`${seed}weight`)() * 80) + 50
			break
	}

	return `${weight} kg`
}

function BloodType(seed: string): IdentityType['Physical']['BloodType'] {
	const bloodtypes = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']
	return bloodtypes.random(seed)
}

class Generator {
	private _seed: string

	public constructor(seed: string) {
		this._seed = seed
	}

	public Name(): IdentityType['Name'] {
		const first = FirstNames.random(this._seed)
		const middle = seedrandom(this._seed)() > 0.5 ? MiddleNames.random(this._seed) : null
		const last = LastNames.random(this._seed)

		return {
			Full: `${first} ${middle ? `${middle} ` : ``}${last}`,
			First: first,
			Middle: middle,
			Last: last
		}
	}

	public Birthday(): IdentityType['Birthday'] {
		const timestamp = Math.floor(seedrandom(this._seed)() * 1684621046200) // From 2023-05-21 00:17 CET
		const date = new Date(timestamp)

		const day = date.getDate()
		const month = date.getMonth() + 1
		const year = date.getFullYear()

		const zodiac = Zodiac(month, day)

		const age = Math.floor((Date.now() - date.getTime()) / 31557600000)

		return {
			Timestamp: timestamp,
			Age: age,
			Full: date.toDateString(),
			Day: day,
			Month: month,
			Year: year,
			Zodiac: zodiac
		}
	}

	public Online(): IdentityType['Online'] {
		const usernames = Usernames(this._seed)
		const email = `${usernames.random(this._seed)}@${EmailProviders.random(this._seed)}`.toLowerCase()
		const pwd = seedrandom(this._seed)().toString(36).substring(2)

		const password = pwd

		return {
			Email: email,
			Password: password,
			SocialMediaUsernames: {
				Google: usernames.random(`${seedrandom(this._seed)().toString()}-Google`),
				Microsoft: usernames.random(`${seedrandom(this._seed)().toString()}-Microsoft`),
				Facebook: usernames.random(`${seedrandom(this._seed)().toString()}-Facebook`),
				Twitter: usernames.random(`${seedrandom(this._seed)().toString()}-Twitter`),
				Instagram: usernames.random(`${seedrandom(this._seed)().toString()}-Instagram`),
				LinkedIn: usernames.random(`${seedrandom(this._seed)().toString()}-LinkedIn`),
				Reddit: usernames.random(`${seedrandom(this._seed)().toString()}-Reddit`),
				YouTube: usernames.random(`${seedrandom(this._seed)().toString()}-YouTube`),
				Twitch: usernames.random(`${seedrandom(this._seed)().toString()}-Twitch`),
				Pinterest: usernames.random(`${seedrandom(this._seed)().toString()}-Pinterest`),
				Snapchat: usernames.random(`${seedrandom(this._seed)().toString()}-Snapchat`),
				TikTok: usernames.random(`${seedrandom(this._seed)().toString()}-TikTok`),
				WhatsApp: usernames.random(`${seedrandom(this._seed)().toString()}-WhatsApp`),
				Telegram: usernames.random(`${seedrandom(this._seed)().toString()}-Telegram`),
				Discord: usernames.random(`${seedrandom(this._seed)().toString()}-Discord`),
			}
		}
	}

	public Finance(): IdentityType['Finance'] {
		return {
			Card: Card(this._seed),
			Bitcoin: Bitcoin(this._seed),
			PayPal: PayPal(this._seed)
		}
	}

	public Employment(): IdentityType['Employment'] {
		const gen = new Generator(this._seed)
		const years = Math.ceil((gen.Birthday().Age - 18) * seedrandom(this._seed)())

		if (years < 0) {
			return
		}
		const company = Companies.random(this._seed)
		const position = JobTitles.random(this._seed)
		const salary = Salary(this._seed)

		return {
			Company: company,
			Position: position,
			Years: years,
			Salary: salary
		}
	}

	public Physical(): IdentityType['Physical'] {
		const height = Height(this._seed)
		const weight = Weight(this._seed)
		const bloodtype = BloodType(this._seed)

		return {
			Height: height,
			Weight: weight,
			BloodType: bloodtype
		}
	}
}

class Identity {
	private _data: IdentityType

	public constructor(seed: string) {
		const gen = new Generator(seed)

		this._data = {
			Name: gen.Name(),
			Birthday: gen.Birthday(),
			Online: gen.Online(),
			Finance: gen.Finance(),
			Employment: gen.Employment(),
			Physical: gen.Physical(),
			Address: {
				Full: '',
				Street: '',
				City: '',
				State: '',
				ZipCode: '',
				Country: ''
			},
			SocialSecurityNumber: '',
			Phone: {
				Home: {
					Full: '',
					CountryCode: '',
					Number: ''
				},
				Mobile: {
					Full: '',
					CountryCode: '',
					Number: ''
				},
				Work: {
					Full: '',
					CountryCode: '',
					Number: ''
				}
			},
			Other: {
				FavoriteColor: '',
				Vehicle: {
					Year: '',
					Make: '',
					Model: '',
					Trim: '',
					VIN: '',
					LicensePlate: ''
				},
				Avatar: '',
				UUID: ''
			}
		}
	}

	public get JSON(): string {
		return JSON.stringify(this._data)
	}

	public JSONIndent(indent: string | number): string {
		return JSON.stringify(this._data, null, indent)
	}

	public get Object(): IdentityType {
		return this._data
	}
}

console.log(new Identity(`${Date.now()}`).JSONIndent('\t'))