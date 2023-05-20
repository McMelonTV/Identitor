type IdentityType = {
	Name: {
		Full: string
		First: string
		Middle: string | null
		Last: string
	}
	Birthday: {
		Age: number
		Timestamp: number
		Full: string
		Day: number
		Month: number
		Year: number
		Zodiac: string
	}
	Online: {
		Email: string
		Password: string
		SocialMediaUsernames: {
			Google: string
			Microsoft: string
			Facebook: string
			Twitter: string
			Instagram: string
			LinkedIn: string
			Reddit: string
			YouTube: string
			Twitch: string
			Pinterest: string
			Snapchat: string
			TikTok: string
			WhatsApp: string
			Telegram: string
			Discord: string
		}
	}
	Finance: {
		Card: {
			CardType: string
			CardVendor: string
			CardNumber: string
			CardExpiry: string
			CardCVC: string
		}
		Bitcoin: {
			Address: string
			PrivateKey: string
		}
		PayPal: {
			Email: string
			Password: string
		}
	}
	Employment?: {
		Company: string
		Position: string
		Years: number
		Salary: string
	}
	Physical: {
		Height: string
		Weight: string
		BloodType: string
	}
	Address: {
		Full: string
		Street: string
		City: string
		State: string
		ZipCode: string
		Country: string
	}
	SocialSecurityNumber: string
	Phone: {
		Home: {
			Full: string
			CountryCode: string
			Number: string
		}
		Mobile: {
			Full: string
			CountryCode: string
			Number: string
		}
		Work: {
			Full: string
			CountryCode: string
			Number: string
		}
	}
	Other: {
		FavoriteColor: string
		Vehicle: {
			Year: string
			Make: string
			Model: string
			Trim: string
			VIN: string
			LicensePlate: string
		}
		Avatar: string
		UUID: string
	}
}

export default IdentityType