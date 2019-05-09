import React from 'react'

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
// @material-ui/icons
import { Paper } from '@material-ui/core'
import ContrastWord from 'components/Typography/ContrastWord.jsx'
import ArSentence from 'components/Typography/ArSentence.jsx'
import Word from 'components/word'
// core components
// import SnackbarContent from 'components/Snackbar/SnackbarContent.jsx'
import Clearfix from 'components/Clearfix/Clearfix.jsx'
import arabicPage from 'assets/jss/material-kit-react/views/arabicPage.jsx'

class Admiration extends React.Component {
    render() {
        const { classes } = this.props
        return (
            <div className={classes.section} id="admiration">
                <div className={classes.container}>
                    <h3 className={classes.title}>Глагол восхищения, удивления</h3>
                    <Paper>
                        <div className="wrap1">
                            <p>Модель образования أفْعَل</p>
                            <ArSentence>
                                <ContrastWord red> ما أسْهَلَ</ContrastWord> هذا <Word root="الدرس" suffix="َ" />
                            </ArSentence>
                            <ArSentence>
                                <ContrastWord red> ما أطْوَلَ</ContrastWord> هذا <Word root="الرجال" suffix="َ" />
                            </ArSentence>
                            <p>Как вы заметили ن ушла</p>
                        </div>
                    </Paper>
                </div>

                <Clearfix />
            </div>
        )
    }
}

export default withStyles(arabicPage)(Admiration)
