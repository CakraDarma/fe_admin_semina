export function formatDate(date) {
	const d = new Date(date);
	const dtf = new Intl.DateTimeFormat('id', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	});
	const [{ value: mo }, , { value: da }, , { value: ye }] =
		dtf.formatToParts(d);

	return `${mo} ${da} ${ye}`;
}
