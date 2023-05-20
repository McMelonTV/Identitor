declare global {
	interface Array<T> {
		random(): T
	}
}

Array.prototype.random = function () {
	return this[Math.floor(Math.random() * this.length)]
}

type Name = {
	Full: string
	First: string
	Middle: string | null
	Last: string
}

class Identity {
	private Name: Name
	private Age: number

	public constructor(public random: number) {
		this.Name = this.generateName()
		this.Age = this.generateAge()
	}

	public get json() {
		return JSON.stringify({
			Name: this.Name,
			Age: this.Age
		})
	}

	public static generateName(): Name {}
}