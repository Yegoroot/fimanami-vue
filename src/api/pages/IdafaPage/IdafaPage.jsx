import React from 'react'
// nodejs library that concatenates classes
import classNames from 'classnames'

import { Paper /*Tooltip, Button */ } from '@material-ui/core'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'

// core components
import Header from 'components/Header/Header.jsx'
import Footer from 'components/Footer/Footer.jsx'

import Word from 'components/word'
import AdditionalInfo from 'components/Typography/AdditionalInfo.jsx'
import ContrastWord from 'components/Typography/ContrastWord.jsx'
import ArSentence from 'components/Typography/ArSentence.jsx'

// import Paragraph from 'components/Typography/Paragraph.jsx'
import HeaderLinks from 'components/Header/HeaderLinks.jsx'

import Parallax from 'components/Parallax/Parallax.jsx'

import arabicPageStyle from 'assets/jss/material-kit-react/views/arabicPage.jsx'

class IdafaPage extends React.Component {
    render() {
        const { classes, ...rest } = this.props

        return (
            <div>
                <Header
                    color="transparent"
                    brand="الإَضَافَةُ"
                    isBrandAr
                    rightLinks={<HeaderLinks />}
                    fixed
                    changeColorOnScroll={{
                        height: 200,

                        color: 'white',
                    }}
                    {...rest}
                />

                <Parallax small filter image={require('assets/img/mosque/mosque1.jpg')} />
                <div className={classNames(classes.main, classes.mainRaised)}>
                    <div className={classes.container}>
                        <div className={classes.navWrapper}>
                            <h1 className={classes.title}>Не согласованное определение</h1>

                            <p>
                                Термин "идафа", который означает буквально "присоединение", можно перевести на русский
                                язык как "несогласованное определение". Иногда этот термин переводят как "изафетная
                                связка" например:
                            </p>

                            <ArSentence translate="Карандаш ученика">قلم تِلمِيذٍ</ArSentence>

                            <Paper className={classes.paperStandart}>
                                <p>
                                    <ContrastWord red>Первый член идафы</ContrastWord> не принимает ни танвина ни
                                    определенного артикля т.е стоит в так называемом "сопряженном состоянии". В
                                    зависимости от местоположения может быть в любом падеже
                                </p>
                                <ArSentence>
                                    <ContrastWord red> قلمُ </ContrastWord> تِلميذ
                                </ArSentence>
                                <ArSentence>
                                    قرأتُ من <ContrastWord red> كتابِ </ContrastWord> الطّالب
                                </ArSentence>
                                <ArSentence>
                                    رأيتُ <ContrastWord red> كتابَ </ContrastWord> الطّالب
                                </ArSentence>
                            </Paper>
                            <Paper className={classes.paperStandart}>
                                <p>
                                    <ContrastWord red>Второй член идафы</ContrastWord> может стоять как в определенном
                                    состоянии так и в не определенном состоянии
                                    <ContrastWord red> Всегда пребывает в родительном падеже</ContrastWord> и является
                                    владельцем (как бы владельцем) того, на что указывает первый член
                                </p>

                                <ArSentence translate="Тетрадь (какого то) студента">
                                    دفتر<ContrastWord red> طالبٍ </ContrastWord>
                                </ArSentence>

                                <ArSentence translate="Тетрадь (известного) студента">
                                    دفتر<ContrastWord red> الطالبٍ </ContrastWord>
                                </ArSentence>
                            </Paper>
                            <AdditionalInfo>
                                <p>Притяжательное местоимение является вторым членом идафы</p>
                                <ArSentence>
                                    <Word root="بيت" suffix="ه" /> <Word root="بيت" suffix="ها" />{' '}
                                    <Word root="بيت" suffix="كم" />
                                </ArSentence>
                            </AdditionalInfo>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default withStyles(arabicPageStyle)(IdafaPage)
