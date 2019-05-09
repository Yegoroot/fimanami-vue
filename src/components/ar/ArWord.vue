<template>
	<span class="word">
		<span class="preffix" v-if="dataPreffix">{{ `${dataPreffix}${ZMR_pr}` }}</span>
		<span class="root">{{ `${ZMR_pr}${dataRoot}${ZMR_sf}` }}</span>
		<span class="suffix" v-if="dataSuffix">{{ `${ZMR_sf}${dataSuffix}` }}</span>
	</span>
</template>

<script>
let arrSymCode = [
	1571 /** أ ( alif with ء ) */,
	1575 /** ا (alif without ء ) */,
	1583 /** د [dal] */,
	1584 /** ذ [zal] */,
	1585 /** ر [ra] */,
	1586 /** ز [zay] */,
	1608 /** و [waw] */
]
let charCodeShadda = 1617

export default {
	props: {
		dataPreffix: {
			type: String,
			default: ''
		},
		dataRoot: {
			type: String,
			default: '',
			required: true
		},
		dataSuffix: {
			type: String,
			default: ''
		}
	},
	data() {
		return {
			ZMR_pr: '', // char null width for preffix
			ZMR_sf: '' // char null width for suffix
		}
	},
	created() {
		let zmj = `\u{200d}` // Zero Width Joiner // U+200D &#8205; &zwj;

		// PREFFIX
		if (this.dataPreffix) {
			let charCode = this.dataPreffix.charCodeAt(0) // return code char
			this.ZMR_pr = arrSymCode.includes(charCode) ? '' : zmj // if letter dont join with other letters
		} else this.ZMR_pr = ''

		// SUFFIX
		if (this.dataSuffix) {
			let charCode = this.dataRoot.charCodeAt(this.dataRoot.length - 2)

			// in verb with shadda to take last letter need (-1 vocalization, -2 symShadda, -3 need's letter)
			if (charCode === charCodeShadda) charCode = this.dataRoot.charCodeAt(this.dataRoot.length - 3)

			this.ZMR_sf = arrSymCode.includes(charCode) ? '' : zmj // if letter dont join with other letters
		} else {
			this.ZMR_sf = ''
		}
	}
}
</script>

<style lang="sass" scoped>
.word
    font-size: 30px
.suffix, .preffix
    color: #d9534f
</style>
