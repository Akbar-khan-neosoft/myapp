export const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
export const NAME_REGEX = /^[a-zA-Z '.-]+$/;
export const MOBILE_REGEX = /^\d{10}$/;

export const customErrorMessages = {
	name: {
		valueMissing: "Name field can't be left blank",
		patternMismatch: 'Invalid Name,Only Alphabets Required',
	},
	mobile: {
		valueMissing: 'Please enter your mobile number',
		patternMismatch: 'Invalid Mobile Number',
	},
	email: {
		valueMissing: 'Please enter email address',
		patternMismatch: 'Invalid email address',
	},
	password: {
		valueMissing: 'Please enter password',
		patternMismatch: 'Password should be inbetween 8-12 character',
	},
};