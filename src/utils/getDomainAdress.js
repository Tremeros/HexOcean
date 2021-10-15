export function getDomainAdress() {
	const protocol = process.env.PROTOCOL
	const hostname = process.env.HOSTNAME
	const port = process.env.PORT

	return `${protocol}://${hostname}:${port}`
}
