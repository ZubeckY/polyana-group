export default function thousandSeparator (value: any) { if (value) {return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}}
