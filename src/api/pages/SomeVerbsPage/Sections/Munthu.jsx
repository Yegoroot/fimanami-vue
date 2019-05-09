import React from 'react'

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
// @material-ui/icons
import { Paper } from '@material-ui/core'
import ContrastWord from 'components/Typography/ContrastWord.jsx'
import ArSentence from 'components/Typography/ArSentence.jsx'

// core components
// import SnackbarContent from 'components/Snackbar/SnackbarContent.jsx'
import Clearfix from 'components/Clearfix/Clearfix.jsx'
import arabicPage from 'assets/jss/material-kit-react/views/arabicPage.jsx'

class Munthu extends React.Component {
    render() {
        const { classes } = this.props
        return (
            <div className={classes.section} id="munzu">
                <div className={classes.container}>
                    <h2 className={classes.title}>
                        Глагол{' '}
                        <ContrastWord inRu red>
                            مُنْذُ
                        </ContrastWord>
                    </h2>

                    <Paper>
                        <div className="wrap1">
                            <p>Главные смыслы "тому назад", "до тех пор", "уже", "с (времени)"</p>
                            <ArSentence
                                translate={
                                    <div>
                                        Не ел <ContrastWord red>с</ContrastWord> утра
                                    </div>
                                }>
                                ما أكَلتُ <ContrastWord red>مُنْذُ </ContrastWord> الصاباح
                            </ArSentence>
                            <ArSentence
                                translate={
                                    <div>
                                        Не видел Мухаммада <ContrastWord red> уже как </ContrastWord> месяц
                                    </div>
                                }>
                                ما رأيتُ محمحد <ContrastWord red>مُنْذُ </ContrastWord> شهر
                            </ArSentence>
                            <ArSentence
                                translate={
                                    <div>
                                        <ContrastWord red> Уже </ContrastWord> давно не пил кофе
                                    </div>
                                }>
                                ما شربتُ القهوة <ContrastWord red>مُنْذُ </ContrastWord> زمن
                            </ArSentence>
                            <ArSentence
                                translate={
                                    <div>
                                        Не разговаривал с Отцом <ContrastWord red> с тех пор как </ContrastWord> он
                                        вернулся из Египта
                                    </div>
                                }>
                                ما تَكَلّمتُ معَ أبِي <ContrastWord red>مُنْذُ </ContrastWord> رَجَعَهُ من مصرِ
                            </ArSentence>
                        </div>
                    </Paper>
                </div>

                <Clearfix />
            </div>
        )
    }
}

export default withStyles(arabicPage)(Munthu)
