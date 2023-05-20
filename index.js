// API Key Types for rate limiting
/*
	free - 10 requests per hour, wait 3 seconds between requests
	basic - 100 requests per hour, wait 1 second between requests
	premium - 1000 requests per hour, wait 0.1 seconds between requests
	ultimate - 10000 requests per hour, no wait between requests
	unlimited - no limit, no wait between requests
	admin - no limit and can create keys, no wait between requests
*/

const rateLimits = {
	free: {
		hourly: 10,
		wait: 3000
	},
	basic: {
		hourly: 100,
		wait: 1000
	},
	premium: {
		hourly: 1000,
		wait: 100
	},
	ultimate: {
		hourly: 10000,
		wait: 0
	},
	unlimited: {
		hourly: 0,
		wait: 0
	},
	admin: {
		hourly: 0,
		wait: 0
	}
}

class key {
	constructor(type, created_by) {
		this.key = crypto.randomBytes(4).toString('hex')
		this.secret = crypto.randomBytes(16).toString('hex')
		if (type == 'free' || type == 'basic' || type == 'premium' || type == 'ultimate' || type == 'unlimited' || type == 'admin') {
			this.type = type
		} else {
			this.type = 'free'
		}
		if (created_by == 'internal' || created_by == 'admin' || created_by == 'billing') {
			this.created_by = created_by
		} else {
			this.created_by = 'internal'
		}
	}
	toArray() {
		return [this.key, this.secret, this.type, this.created_by]
	}
}