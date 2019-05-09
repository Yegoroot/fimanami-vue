import React from 'react'

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
// @material-ui/icons
import { Paper } from '@material-ui/core'
// import { Link } from 'react-router-dom'
import GridContainer from 'components/Grid/GridContainer.jsx'
import GridItem from 'components/Grid/GridItem.jsx'
import ContrastWord from 'components/Typography/ContrastWord.jsx'
import ArSentence from 'components/Typography/ArSentence.jsx'
import Word from 'components/word'
// core components
// import SnackbarContent from 'components/Snackbar/SnackbarContent.jsx'
import Clearfix from 'components/Clearfix/Clearfix.jsx'
import arabicPage from 'assets/jss/material-kit-react/views/arabicPage.jsx'
import kanaImg from 'assets/img/content/verb/kana.png'

class KanaLaYazalu extends React.Component {
    render() {
        const { classes } = this.props
        return (
            <div className={classes.section} id="samaha">
                <div className={classes.container}>
                    <h2 className={classes.title}>
                        Глаголы бытия{' '}
                        <ContrastWord inRu red>
                            كان
                        </ContrastWord>{' '}
                        и{' '}
                        <ContrastWord inRu red>
                            يزَالُ
                        </ContrastWord>
                    </h2>

                    <Paper>
                        <div className="wrap1">
                            <p>Глаголы бытия ставят в винительный падеж дополнения (то о чем речь)</p>
                            <GridContainer>
                                <GridItem xs={12} sm={6}>
                                    <ContrastWord inRu red>
                                        كَان - كانَتْ
                                    </ContrastWord>
                                    <ArSentence translate="Хамид сейчас болен">حامد مرِيض الأنَ</ArSentence>
                                    <ArSentence
                                        translate={
                                            <div>
                                                Хамид <ContrastWord red> был</ContrastWord> болен вчера
                                            </div>
                                        }>
                                        <ContrastWord red>كانَ </ContrastWord> حامد <Word root="مريض" suffix="اً" />{' '}
                                        أمسِ
                                    </ArSentence>
                                </GridItem>
                                <GridItem xs={12} sm={6}>
                                    <ContrastWord inRu red>
                                        لا يَزَالُ - لا تَزالُ
                                    </ContrastWord>
                                    <ArSentence translate="Ибрахим спит">إبرهيم نائِم</ArSentence>
                                    <ArSentence
                                        translate={
                                            <div>
                                                <ContrastWord red>Не прекращает </ContrastWord> Ибрахим спать
                                            </div>
                                        }>
                                        <ContrastWord red>لا يَزَالُ</ContrastWord> إبرهيم نائِماً
                                    </ArSentence>
                                </GridItem>
                            </GridContainer>
                            <p>
                                Глагол كان не является полноценным глаголом (предложение остаётся именным), но из за его
                                внешних сходств, предложение похоже на глагольное, а происходит следующее{' '}
                            </p>
                            <img src={kanaImg} style={{ width: '100%' }} alt="Схема 1" />
                        </div>
                    </Paper>
                </div>

                <Clearfix />
            </div>
        )
    }
}

export default withStyles(arabicPage)(KanaLaYazalu)
