import React from 'react'
// nodejs library that concatenates classes
import classNames from 'classnames'

import { Paper /*Tooltip, Button*/ } from '@material-ui/core'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'

// core components
import Header from 'components/Header/Header.jsx'
import Footer from 'components/Footer/Footer.jsx'
import Word from 'components/word'

import ArSentence from 'components/Typography/ArSentence.jsx'
import ContrastWord from 'components/Typography/ContrastWord.jsx'
import Paragraph from 'components/Typography/Paragraph.jsx'
import HeaderLinks from 'components/Header/HeaderLinks.jsx'

import Parallax from 'components/Parallax/Parallax.jsx'

import arabicPageStyle from 'assets/jss/material-kit-react/views/arabicPage.jsx'

class AdwatulDjazmPage extends React.Component {
    render() {
        const { classes, ...rest } = this.props

        return (
            <div>
                <Header
                    color="transparent"
                    brand="أدْوَات الجَزْم"
                    isBrandAr
                    rightLinks={<HeaderLinks />}
                    fixed
                    changeColorOnScroll={{
                        height: 200,

                        color: 'white',
                    }}
                    {...rest}
                />

                <Parallax small filter image={require('assets/img/bg4.jpg')} />
                <div className={classNames(classes.main, classes.mainRaised)}>
                    <div className={classes.container}>
                        <div className={classes.navWrapper}>
                            <h1 className={classes.titleAr}> لمْ - لَمّا - لا - لامْ الأمر </h1>

                            <h2 className={classes.title}>
                                Отрицательная частица{' '}
                                <ContrastWord red inRu>
                                    لَمْ
                                </ContrastWord>{' '}
                            </h2>
                            <Paper className={classes.paperStandart}>
                                <Paragraph>
                                    <p>Приходит перед глаголами настоящего времени у ней две роли</p>
                                    <ul>
                                        <li>Отрицает</li>
                                        <li>Меняет время на прошедшее</li>
                                    </ul>
                                    <ArSentence>
                                        <ContrastWord red>لمْ</ContrastWord> أذهَبْ = ما ذهبتُ
                                    </ArSentence>
                                </Paragraph>

                                <ArSentence> لَمْ أذهبْ - لَمْ نَذهبْ</ArSentence>
                                <ArSentence> أنتَ لَمْ تَذهبْ - أنتِ لَمْ نَذهبِي</ArSentence>
                                <ArSentence> أنتُم لَمْ تَذهبُوا - أنتنّ لَمْ نَذهبْن</ArSentence>
                                <ArSentence> هو لَمْ يَذهبْ - هي لَمْ تَذهَبْ</ArSentence>
                                <ArSentence> هم لَمْ يَذهبُوا - هنّ لَمْ يذهَبْن</ArSentence>
                            </Paper>

                            <h2 className={classes.title}>
                                Частица{' '}
                                <ContrastWord red inRu>
                                    لَمّا
                                </ContrastWord>{' '}
                                (пока еще не, еще не)
                            </h2>
                            <Paper className={classes.paperStandart}>
                                <p>
                                    Отрицает и прошлый и настоящий момент, у لمّا есть высокий уровень возможности
                                    свершения
                                </p>
                            </Paper>

                            <h2 className={classes.title}>
                                Частица отрицания
                                <ContrastWord red inRu>
                                    {' '}
                                    لا النّاهية{' '}
                                </ContrastWord>
                            </h2>
                            <Paper className={classes.paperStandart}>
                                <p>Приходит только ко второму лицу настоящего времени!</p>
                                <ArSentence translate="Не ходите в школу">
                                    {' '}
                                    <ContrastWord red>لا</ContrastWord> تَ‍‍ذهب‍‍وا الي المدرسة{' '}
                                </ArSentence>
                            </Paper>

                            <h2 className={classes.title}>
                                Частица приказа
                                <ContrastWord red inRu>
                                    {' '}
                                    لمْ الأمر{' '}
                                </ContrastWord>
                            </h2>
                            <Paper className={classes.paperStandart}>
                                <p>Может прийти к любому лицу (Пусть он, пусть она)</p>
                                <ArSentence translate={<span>Пойдёмте в школу</span>}>
                                    {' '}
                                    <Word prefix="لِ" root="نَذْهَب" /> الي المدرسة
                                </ArSentence>

                                <ArSentence translate={<span>Пусть он идёт в школу</span>}>
                                    {' '}
                                    <Word prefix="لِ" root="يَذهَبْ" /> الي المدرسة
                                </ArSentence>
                            </Paper>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default withStyles(arabicPageStyle)(AdwatulDjazmPage)
