import React from 'react'

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
// @material-ui/icons
import { Paper } from '@material-ui/core'

import ArSentence from 'components/Typography/ArSentence.jsx'
import Word from 'components/word'
// core components
// import SnackbarContent from 'components/Snackbar/SnackbarContent.jsx'
import Clearfix from 'components/Clearfix/Clearfix.jsx'
import arabicPage from 'assets/jss/material-kit-react/views/arabicPage.jsx'

class LiWithVerb extends React.Component {
    render() {
        const { classes } = this.props
        return (
            <div className={classes.section} id="liWithVerbs">
                <div className={classes.container}>
                    <h3 className={classes.title}>Частица لِ с глаголами</h3>
                    <Paper className="wrap1">
                        <div>
                            <p>Отвечает на вопрос "Для чего?", "Почему?", "По какой причине?"</p>
                            <ArSentence>
                                خرجتِ <Word root="تشربي" prefix="لِ" /> الماء
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

export default withStyles(arabicPage)(LiWithVerb)
