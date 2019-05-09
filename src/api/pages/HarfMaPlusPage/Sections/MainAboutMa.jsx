import React from 'react'

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
// @material-ui/icons
import { Paper } from '@material-ui/core'
import ContrastWord from 'components/Typography/ContrastWord.jsx'
import ArSentence from 'components/Typography/ArSentence.jsx'
// import Word from 'components/word'
// core components
// import SnackbarContent from 'components/Snackbar/SnackbarContent.jsx'
import Clearfix from 'components/Clearfix/Clearfix.jsx'
import arabicPageStyle from 'assets/jss/material-kit-react/views/arabicPage.jsx'

class MainAboutMa extends React.Component {
    render() {
        const { classes } = this.props
        return (
            <div className={classes.section} id="liWithVerbs">
                <div className={classes.container}>
                    <h2 className={classes.title}>Основное о ما</h2>
                    <Paper>
                        <div className="wrap1">
                            <p>Частица ما приходит в разных ситуациях</p>

                            <h3 className={classes.title}>Отрицание</h3>
                            <ArSentence translate="Я не видел...">... ما رأيْتُ</ArSentence>
                            <p>ما может отрицать и настоящее время, но только если текущий момент (online)</p>
                            <ArSentence
                                translate={
                                    <div>
                                        Я <ContrastWord red>сейчас не</ContrastWord> пью кофе
                                    </div>
                                }>
                                <ContrastWord red>ما </ContrastWord> أشْربُ القهوة الان
                            </ArSentence>
                            <h3 className={classes.title}>Отрицание именных предложений ما الحِجَازِية</h3>
                            <ArSentence translate="Мусульмане не лгут">ما المسلمُ كَذَّابًا</ArSentence>
                            <p>где المسلمُ это اسم а كَذَّابًا это خبر (в насб)</p>
                            <p>Чтоб усилить отрицание можно добавить частицу ب</p>
                            <ArSentence translate="Мусульмане вообще никогда не лгут!">
                                ما المسلمُ بِكَذَّابٍ
                            </ArSentence>

                            <h3 className={classes.title}>Вопрос</h3>
                            <ArSentence translate="Что это?">ما هذا؟</ArSentence>

                            <h3 className={classes.title}>Восклицание</h3>
                            <ArSentence translate="Какое красивое ...!">! ... ما أجْمَلُ</ArSentence>

                            <h3 className={classes.title}>Что (и)</h3>
                            <ArSentence translate="Кушаю то, ЧТО И ты">أكُل ما تاكل</ArSentence>
                            <ArSentence translate="Я видел ЧТО Мухаммад делает...">...شَهدتُ ما فعل محمد</ArSentence>
                        </div>
                    </Paper>
                </div>

                <Clearfix />
            </div>
        )
    }
}

export default withStyles(arabicPageStyle)(MainAboutMa)
