module.exports = {
	theme: {
		// Order: from Lightest to Darkest
		colors: {
			transparent: 'transparent',
			black: '#000',
			white: '#fff',
			gray: {
				100: '#F2F2F2',
				200: '#dedede',
				300: '#C0C5CA',
				400: '#A0A3AA',
				700: '#5C5C5C',
				900: '#26282C',
			},
			yellow: {
				400: '#FCC544',
			},
			red: {
				400: '#FC605D',
			},
			blue: {
				400: '#0f172a',
			},
		},
		spacing: {
			px: '1px',
			0: '0',
			1: '0.25rem',
			2: '0.5rem',
			3: '0.75rem',
			4: '1rem',
			5: '1.25rem',
			6: '1.5rem',
			7: '1.75rem',
			8: '2rem',
			9: '2.25rem',
			10: '2.5rem',
			11: '2.75rem',
			12: '3rem',
			13: '3.25rem',
			14: '3.5rem',
			15: '3.75rem',
			16: '4rem',
			17: '4.25rem',
			18: '4.5rem',
			19: '4.75rem',
			20: '5rem',
			21: '5.25rem',
			22: '5.5rem',
			23: '5.75rem',
			24: '6rem',
			25: '6.25rem',
			26: '6.5rem',
			27: '6.75rem',
			28: '7rem',
			29: '7.25rem',
			30: '7.5rem',
			31: '7.75rem',
			32: '8rem',
			33: '8.25rem',
			34: '8.5rem',
			35: '8.75rem',
			36: '9rem',
			37: '9.25rem',
			38: '9.5rem',
			39: '9.75rem',
			40: '10rem',
			41: '10.25rem',
			42: '10.5rem',
			43: '10.75rem',
			44: '11rem',
			45: '11.25rem',
			46: '11.5rem',
			47: '11.75rem',
			48: '12rem',
			49: '12.25rem',
			50: '12.5rem',
			51: '12.75rem',
			52: '13rem',
			53: '13.25rem',
			54: '13.5rem',
			55: '13.75rem',
			56: '14rem',
			57: '14.25rem',
			58: '14.5rem',
			59: '14.75rem',
			60: '15rem',
			61: '15.25rem',
			62: '15.5rem',
			63: '15.75rem',
			64: '16rem',
			65: '16.25rem',
			66: '16.5rem',
			67: '16.75rem',
			68: '17rem',
			69: '17.25rem',
			70: '17.5rem',
			71: '17.75rem',
			72: '18rem',
			73: '18.25rem',
			74: '18.5rem',
			75: '18.75rem',
			76: '19rem',
			77: '19.25rem',
			78: '19.5rem',
			79: '19.75rem',
			80: '20rem',
			81: '20.25rem',
			82: '20.5rem',
			83: '20.75rem',
			84: '21rem',
			85: '21.25rem',
			86: '21.5rem',
			87: '21.75rem',
			88: '22rem',
			89: '22.25rem',
			90: '22.5rem',
			91: '22.75rem',
			92: '23rem',
			93: '23.25rem',
			94: '23.5rem',
			95: '23.75rem',
			96: '24rem',
			97: '24.25rem',
			98: '24.5rem',
			99: '24.75rem',
			100: '25rem',
			101: '25.25rem',
			102: '25.5rem',
			103: '25.75rem',
			104: '26rem',
			105: '26.25rem',
			106: '26.5rem',
			107: '26.75rem',
			108: '27rem',
			109: '27.25rem',
			110: '27.5rem',
			111: '27.75rem',
			112: '28rem',
			113: '28.25rem',
			114: '28.5rem',
			115: '28.75rem',
			116: '29rem',
			117: '29.25rem',
			118: '29.5rem',
			119: '29.75rem',
			120: '30rem',
			121: '30.25rem',
			122: '30.5rem',
			123: '30.75rem',
			124: '31rem',
			125: '31.25rem',
			126: '31.5rem',
			127: '31.75rem',
			128: '32rem',
		},
		backgroundColor: (theme) => theme('colors'),
		borderColor: (theme) => ({
			...theme('colors'),
			default: theme('colors.gray.300', 'currentColor'),
		}),
		borderRadius: {
			none: '0',
			sm: '0.3125rem',
			default: '0.625rem',
			lg: '0.7rem',
			full: '9999px',
		},
		borderWidth: {
			default: '1px',
			0: '0',
			2: '2px',
			3: '3px',
			4: '4px',
			5: '5px',
			6: '6px',
			7: '7px',
			8: '8px',
			9: '9px',
			10: '10px',
		},
		boxShadow: {
			default: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 1.5',
			md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 3',
			lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 7.5',
			xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 12.5',
			'2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25), 25',
			outline: '0 0 0 3px rgba(66, 153, 225, 0.5), 1.5',
			none: 'none',
		},
		flex: {
			0: '0',
			1: '1',
			initial: '0',
			none: 'none',
		},
		flexGrow: {
			0: '0',
			default: '1',
		},
		flexShrink: {
			0: '0',
			default: '1',
		},
		fontFamily: {
			// Sans
			sans: 'TwCenMTStd',
			sansBold: 'TwCenMTStd-Bold',
			// Serif
			serif: 'Georgia',
			// Mono
			mono: 'Courier New',
		},
		fontSize: {
			xs: '0.75rem',
			sm: '0.875rem',
			base: '1rem',
			lg: '1.125rem',
			xl: '1.25rem',
			'2xl': '1.5rem',
			'3xl': '1.875rem',
			'4xl': '2.25rem',
			'5xl': '3rem',
			'6xl': '4rem',
		},
		fontWeight: {
			hairline: '100',
			thin: '200',
			light: '300',
			normal: '400',
			medium: '500',
			semibold: '600',
			bold: '700',
			extrabold: '800',
			black: '900',
		},
		height: (theme) => ({
			auto: 'auto',
			...theme('spacing'),
			'1/2': '50%',
			'1/3': '33.333333%',
			'2/3': '66.666667%',
			'1/4': '25%',
			'2/4': '50%',
			'3/4': '75%',
			'1/5': '20%',
			'2/5': '40%',
			'3/5': '60%',
			'4/5': '80%',
			'1/6': '16.666667%',
			'2/6': '33.333333%',
			'3/6': '50%',
			'4/6': '66.666667%',
			'5/6': '83.333333%',
			'1/12': '8.333333%',
			'2/12': '16.666667%',
			'3/12': '25%',
			'4/12': '33.333333%',
			'5/12': '41.666667%',
			'6/12': '50%',
			'7/12': '58.333333%',
			'8/12': '66.666667%',
			'9/12': '75%',
			'10/12': '83.333333%',
			'11/12': '91.666667%',
			full: '100%',
			screen: '100vh',
		}),
		inset: {
			0: '0',
			auto: 'auto',
		},
		letterSpacing: {
			tighter: '-0.05em',
			tight: '-0.025em',
			normal: '0',
			wide: '0.025em',
			wider: '0.05em',
			widest: '0.1em',
		},
		lineHeight: {
			none: '1rem',
			tight: '1.25rem',
			snug: '1.375rem',
			normal: '1.5rem',
			relaxed: '1.625rem',
			loose: '2rem',
		},
		margin: (theme, { negative }) => ({
			auto: 'auto',
			...theme('spacing'),
			...negative(theme('spacing')),
		}),
		maxHeight: (theme) => ({
			0: '0',
			...theme('spacing'),
			'1/2': '50%',
			'1/3': '33.333333%',
			'2/3': '66.666667%',
			'1/4': '25%',
			'2/4': '50%',
			'3/4': '75%',
			'1/5': '20%',
			'2/5': '40%',
			'3/5': '60%',
			'4/5': '80%',
			'1/6': '16.666667%',
			'2/6': '33.333333%',
			'3/6': '50%',
			'4/6': '66.666667%',
			'5/6': '83.333333%',
			'1/12': '8.333333%',
			'2/12': '16.666667%',
			'3/12': '25%',
			'4/12': '33.333333%',
			'5/12': '41.666667%',
			'6/12': '50%',
			'7/12': '58.333333%',
			'8/12': '66.666667%',
			'9/12': '75%',
			'10/12': '83.333333%',
			'11/12': '91.666667%',
			full: '100%',
			screen: '100vh',
		}),
		maxWidth: (theme) => ({
			0: '0',
			...theme('spacing'),
			'1/2': '50%',
			'1/3': '33.333333%',
			'2/3': '66.666667%',
			'1/4': '25%',
			'2/4': '50%',
			'3/4': '75%',
			'1/5': '20%',
			'2/5': '40%',
			'3/5': '60%',
			'4/5': '80%',
			'1/6': '16.666667%',
			'2/6': '33.333333%',
			'3/6': '50%',
			'4/6': '66.666667%',
			'5/6': '83.333333%',
			'1/12': '8.333333%',
			'2/12': '16.666667%',
			'3/12': '25%',
			'4/12': '33.333333%',
			'5/12': '41.666667%',
			'6/12': '50%',
			'7/12': '58.333333%',
			'8/12': '66.666667%',
			'9/12': '75%',
			'10/12': '83.333333%',
			'11/12': '91.666667%',
			full: '100%',
		}),
		minHeight: (theme) => ({
			0: '0',
			...theme('spacing'),
			'1/2': '50%',
			'1/3': '33.333333%',
			'2/3': '66.666667%',
			'1/4': '25%',
			'2/4': '50%',
			'3/4': '75%',
			'1/5': '20%',
			'2/5': '40%',
			'3/5': '60%',
			'4/5': '80%',
			'1/6': '16.666667%',
			'2/6': '33.333333%',
			'3/6': '50%',
			'4/6': '66.666667%',
			'5/6': '83.333333%',
			'1/12': '8.333333%',
			'2/12': '16.666667%',
			'3/12': '25%',
			'4/12': '33.333333%',
			'5/12': '41.666667%',
			'6/12': '50%',
			'7/12': '58.333333%',
			'8/12': '66.666667%',
			'9/12': '75%',
			'10/12': '83.333333%',
			'11/12': '91.666667%',
			full: '100%',
			screen: '100vh',
		}),
		minWidth: (theme) => ({
			0: '0',
			...theme('spacing'),
			'1/2': '50%',
			'1/3': '33.333333%',
			'2/3': '66.666667%',
			'1/4': '25%',
			'2/4': '50%',
			'3/4': '75%',
			'1/5': '20%',
			'2/5': '40%',
			'3/5': '60%',
			'4/5': '80%',
			'1/6': '16.666667%',
			'2/6': '33.333333%',
			'3/6': '50%',
			'4/6': '66.666667%',
			'5/6': '83.333333%',
			'1/12': '8.333333%',
			'2/12': '16.666667%',
			'3/12': '25%',
			'4/12': '33.333333%',
			'5/12': '41.666667%',
			'6/12': '50%',
			'7/12': '58.333333%',
			'8/12': '66.666667%',
			'9/12': '75%',
			'10/12': '83.333333%',
			'11/12': '91.666667%',
			full: '100%',
		}),
		opacity: {
			0: '0',
			5: '0.05',
			10: '0.1',
			15: '0.15',
			20: '0.2',
			25: '0.25',
			30: '0.3',
			35: '0.35',
			40: '0.4',
			45: '0.45',
			50: '0.5',
			55: '0.55',
			60: '0.6',
			65: '0.65',
			70: '0.7',
			75: '0.75',
			80: '0.8',
			85: '0.85',
			90: '0.9',
			95: '0.95',
			100: '1',
		},
		padding: (theme) => theme('spacing'),
		textColor: (theme) => theme('colors'),
		width: (theme) => ({
			auto: 'auto',
			...theme('spacing'),
			'1/2': '50%',
			'1/3': '33.333333%',
			'2/3': '66.666667%',
			'1/4': '25%',
			'2/4': '50%',
			'3/4': '75%',
			'1/5': '20%',
			'2/5': '40%',
			'3/5': '60%',
			'4/5': '80%',
			'1/6': '16.666667%',
			'2/6': '33.333333%',
			'3/6': '50%',
			'4/6': '66.666667%',
			'5/6': '83.333333%',
			'1/12': '8.333333%',
			'2/12': '16.666667%',
			'3/12': '25%',
			'4/12': '33.333333%',
			'5/12': '41.666667%',
			'6/12': '50%',
			'7/12': '58.333333%',
			'8/12': '66.666667%',
			'9/12': '75%',
			'10/12': '83.333333%',
			'11/12': '91.666667%',
			full: '100%',
			screen: '100vw',
		}),
		zIndex: {
			auto: 'auto',
			0: '0',
			10: '10',
			20: '20',
			30: '30',
			40: '40',
			50: '50',
			60: '60',
			70: '70',
			80: '80',
			90: '90',
			100: '100',
		},
	},
};
