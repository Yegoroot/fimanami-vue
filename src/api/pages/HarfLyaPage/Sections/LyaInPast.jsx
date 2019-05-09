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

class LyaNafia extends React.Component {
    render() {
        const { classes } = this.props
        return (
            <div className={classes.section} id="liWithVerbs">
                <div className={classes.container}>
                    <h2 className={classes.title}>لا в прошедшем времени</h2>
                    <Paper>
                        <div className="wrap1">
                            <p>
                                Частица لا настоящего времени, кроме случая, если в одном предложениии два глагола
                                которые мы хоти отрицать. Действия прошедшего времени. Например:
                            </p>
                            <ArSentence translate="Не пил и не кушал">
                                <ContrastWord red> لا </ContrastWord> أكلتُ <ContrastWord red> و </ContrastWord>{' '}
                                <ContrastWord red> لا </ContrastWord> شربتُ
                            </ArSentence>
                            <p>Необходимое условие: два глагола, две لا и между ними و</p>
                            <ArSentence translate="Он не бил меня и я его не бил">
                                <ContrastWord red> لا </ContrastWord> ضَرَبَنِي <ContrastWord red> و </ContrastWord>{' '}
                                <ContrastWord red> لا </ContrastWord> ضَرَبْتُهُ
                            </ArSentence>
                        </div>
                    </Paper>
                </div>

                <Clearfix />
            </div>
        )
    }
}

export default withStyles(arabicPage)(LyaNafia)
