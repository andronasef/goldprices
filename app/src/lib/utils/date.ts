function getCurrentDateTime() {
	// date in arabic with time in 12h format
	const date = new Date();
	const options: Intl.DateTimeFormatOptions = {
		weekday: 'long',
		year: 'numeric',
		month: 'long',
		day: 'numeric',
		hour: '2-digit',
		minute: '2-digit',
		second: '2-digit',
		hour12: true
	};
	const formattedDate = date.toLocaleDateString('ar-EG', options);
	return formattedDate;
}

export { getCurrentDateTime };
