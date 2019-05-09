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
import arabicPage from 'assets/jss/material-kit-react/views/arabicPage.jsx'
import { Link } from 'react-router-dom'

class LyaNahia extends React.Component {
    render() {
        const { classes } = this.props
        return (
            <div className={classes.section} id="liWithVerbs">
                <div className={classes.container}>
                    <h2 className={classes.title}>لا الناهية</h2>
                    <Paper>
                        <div className="wrap1">
                            <p>
                                Частица запрета, употребляется <ContrastWord red>только во втором лице</ContrastWord>.
                            </p>
                            <ArSentence translate="Не бей меня">
                                <ContrastWord red> لا </ContrastWord> تضربْنِي
                            </ArSentence>
                            <ArSentence translate="Умар, ни пей кофе!">
                                يا عمر <ContrastWord red> لا </ContrastWord> يشربْ القهوة
                            </ArSentence>

                            <ArSentence translate="Не учите французкий язык">
                                أنتم <ContrastWord red> لا </ContrastWord> تدرسوُا اللغة الفرنسية
                            </ArSentence>
                            <p>
                                Как вы заметели ن множественного числа пропала, потому что это одна из частиц{' '}
                                <Link to="/adwatuldjazm"> أدْوَات الجَزْم</Link>
                            </p>
                        </div>
                    </Paper>
                </div>

                <Clearfix />
            </div>
        )
    }
}

export default withStyles(arabicPage)(LyaNahia)
