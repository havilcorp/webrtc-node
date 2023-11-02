async function getDevices() {
	let devices = await navigator.mediaDevices.enumerateDevices()
	videoDevices = devices.filter(device => device.kind === 'videoinput')
	console.log('video devices:', videoDevices)
}
