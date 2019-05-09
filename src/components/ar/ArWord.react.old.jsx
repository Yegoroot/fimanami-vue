import { withStyles } from '@material-ui/core/styles'
import classNames from 'classnames'

const styles = theme => ({
	wrapper: {
		...theme.arabicFont
	},
	color: {
		color: '#f44336'
	}
})

const checkHarf = char => {
	switch (char) {
		case 1571:
			return true // alif c хамзой
		case 1575:
			return true // alif без хамзы
		case 1583:
			return true // dal
		case 1584:
			return true // zal
		case 1585:
			return true // ra
		case 1586:
			return true // zay
		case 1608:
			return true // waw
		// case 1616:
		//     return true // Кясра

		default:
			return false
	}
}

const word = ({ root, suffix, prefix, classes, negative }) => {
	let zmj = `\u{200d}` // Zero Width Joiner	U+200D	&#8205;	&zwj;
	let pr, sf // ЕСЛИ ПЕРВЫЙ СИМВОЛ НЕ СОДЕРЖИТ أ то присвоить соеденитель_пустой_ширины
	if (prefix) {
		let sym = prefix.charCodeAt(0)
		pr = checkHarf(sym) ? '' : zmj // pr = sym !== 1571 && sym !== 1575 ? zmj : ''
	} else pr = ''

	if (suffix) {
		//* ОБЪЯСНЕНИЕ НИЖЕ
		let sym = root.charCodeAt(root.length - 2) // sf = (sym >= 1583 && sym <= 1586) || sym === 1608 ? "" : zmj;
		// глаголах с шаддой чтоб дотянуться до последней буквы нужно минус три (-1 символ огласока, -2 шадда, -3 сама буква)
		if (sym === 1617) sym = root.charCodeAt(root.length - 3)

		sf = checkHarf(sym) ? '' : zmj
	} else {
		sf = ''
	}

	// выделение цветом
	const hightlightRoot = classNames({
		[classes.color]: negative
	})
	const hightlightPerefer = classNames({
		[classes.color]: !negative
	})

	return (
		<span className={classes.wrapper}>
			{prefix ? <span className={hightlightPerefer}>{`${prefix}${pr}`}</span> : null}
			<span className={hightlightRoot}>{`${pr}${root}${sf}`}</span>
			{suffix ? <span className={hightlightPerefer}>{`${sf}${suffix}`}</span> : null}
		</span>
	)
}

export default withStyles(styles)(word)

//** СНАЧАЛО МЫ ПРОВЕЕРИЛИ ЕСТЬ ЛИ СУФФИКС
/**
 * root.charCodeAt(root.length - 2); - ПОСЛЕДНЯЯ БУКВА -1 это огласовка -2 это ПРЕДПОСЛЕДНИЙ СИМВОЛ  (огласовка обязательна чтоб читалось норм)
 * если он есть то проверяем корень
 * если последняя буква корня (не равняеться ДАЛЬ/ ЗАЛЬ/ РА/ ЗА/ ВАВ ) то ставим пробел нулевой ширины
 * root.charCodeAt(root.length - 2); - это грамотно сработает только если над последней буквой огласовки
 * потому что с программной точки зрения огласовка это символ
 */
