import React from 'react'

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'

import { Paper } from '@material-ui/core'
import Clearfix from 'components/Clearfix/Clearfix.jsx'
import arabicPage from 'assets/jss/material-kit-react/views/arabicPage.jsx'

import ArSentence from 'components/Typography/ArSentence.jsx'
import Word from 'components/word'
import ContrastWord from 'components/Typography/ContrastWord.jsx'

class StartHamza extends React.Component {
    render() {
        const { classes } = this.props
        return (
            <div className={classes.section} id="dual">
                <div className={classes.container}>
                    <h3 className={classes.title}>Глагол начинается с хамзы</h3>
                    <Paper>
                        <div className="wrap1">
                            <p>
                                Если глагол начинается с хамзы, например <ContrastWord inRu>أكَلَ</ContrastWord>,{' '}
                                <ContrastWord inRu>أخَذَ</ContrastWord>, то в настоящем времени добавляем васла "~"
                            </p>
                            <ArSentence>
                                <Word root="كُلُ" prefix="آ" />
                                {', '}
                                <Word root="خُذُ" prefix="آ" />
                            </ArSentence>
                            <p>А в повелительном</p>
                            <ArSentence>
                                <Word root="كُلْ" />
                                {', '}
                                <Word root="خُذْ" />
                            </ArSentence>
                        </div>
                    </Paper>
                </div>

                <Clearfix />
            </div>
        )
    }
}

export default withStyles(arabicPage)(StartHamza)
