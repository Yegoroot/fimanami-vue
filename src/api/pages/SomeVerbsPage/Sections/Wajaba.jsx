import React from 'react'

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
// @material-ui/icons
import { Paper } from '@material-ui/core'
import ContrastWord from 'components/Typography/ContrastWord.jsx'
import Warning from 'components/Typography/Warning.jsx'
import ArSentence from 'components/Typography/ArSentence.jsx'

// core components
// import SnackbarContent from 'components/Snackbar/SnackbarContent.jsx'
import Clearfix from 'components/Clearfix/Clearfix.jsx'
import arabicPage from 'assets/jss/material-kit-react/views/arabicPage.jsx'

class Wajaba extends React.Component {
    render() {
        const { classes } = this.props
        return (
            <div className={classes.section} id="Wajaba">
                <div className={classes.container}>
                    <h2 className={classes.title}>
                        Глагол{' '}
                        <ContrastWord inRu red>
                            وَجَبَ - يَجِبُ
                        </ContrastWord>
                    </h2>

                    <Paper>
                        <div className="wrap1">
                            <p>Имеет вид ТОЛЬКО в 3 лице, мужском роде, прошедшем или настоящем времени </p>
                            <h4 style={{ color: '#00acc1' }}>Структура 1</h4>
                            <Warning>
                                <ArSentence>يَجِبُ + أن + الفعْل في الماضارع</ArSentence>
                            </Warning>
                            <p>Например:</p>
                            <ArSentence translate="Нам нужно (ваджиб) идти на работу">
                                يَجِبُ أن نَذهَبُ الي العَمل
                            </ArSentence>
                            <ArSentence translate="Вам (женьщины) нужно выйдти из комнаты">
                                يَجِبُ أن تَخْرُجْنَ من الغرفة
                            </ArSentence>

                            <h4 style={{ color: '#00acc1' }}>Структура 2 (более популярная)</h4>
                            <Warning>
                                <ArSentence>يَجِبُ + على (ي - كَ - كِ - ..) + أن + الفعْل في الماضارع</ArSentence>
                            </Warning>
                        </div>
                    </Paper>
                </div>

                <Clearfix />
            </div>
        )
    }
}

export default withStyles(arabicPage)(Wajaba)
