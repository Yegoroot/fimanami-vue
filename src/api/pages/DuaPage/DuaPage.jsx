import React from 'react'
// nodejs library that concatenates classes
import classNames from 'classnames'

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'

// core components
import Header from 'components/Header/Header.jsx'
import Footer from 'components/Footer/Footer.jsx'

import Word from 'components/word'
// import AdditionalInfo from 'components/Typography/AdditionalInfo.jsx'
import ContrastWord from 'components/Typography/ContrastWord.jsx'
import ArSent from 'components/Typography/ArSent.jsx'

// import Paragraph from 'components/Typography/Paragraph.jsx'
import HeaderLinks from 'components/Header/HeaderLinks.jsx'

import Parallax from 'components/Parallax/Parallax.jsx'

import arabicPageStyle from 'assets/jss/material-kit-react/views/arabicPage.jsx'

class DuaPage extends React.Component {
    render() {
        const { classes, ...rest } = this.props

        return (
            <div>
                <Header
                    color="transparent"
                    brand="الدُّعاء"
                    isBrandAr
                    rightLinks={<HeaderLinks />}
                    fixed
                    changeColorOnScroll={{
                        height: 200,

                        color: 'white',
                    }}
                    {...rest}
                />

                <Parallax small filter image={require('assets/img/mosque/mosque20.jpg')} />
                <div className={classNames(classes.main, classes.mainRaised)}>
                    <div className={classes.container}>
                        <div className={classes.navWrapper}>
                            <h1 className={classes.titleAr}>الدُّعاء</h1>

                            <p>
                                Когда люди произносят на арабском дуа, то они даже не задумываются почему с точки зрения
                                грамматики дуа стоят в прошедшем времени, например{' '}
                                <ContrastWord inRu blue translate="Да излечит тебя Аллахъ">
                                    {' '}
                                    شَفَاكَ اللهُ{' '}
                                </ContrastWord>
                            </p>
                            <p>
                                Разберем обыкновенное предложение (не дуа) с глаголом прошедшего времени.{' '}
                                <ContrastWord inRu blue translate="Я ходил на рынок">
                                    {' '}
                                    ذَهَبْتُ الى السوق{' '}
                                </ContrastWord>
                                , как вы увидели слово ذهب "ходил" это глагол прошедшего времени, а мы знаем что для
                                действий совершенных в прошлом нет сомнений, это то что уже свершилось.
                                <br /> Как следует из хадиса Пророка ﷺ "Нельзя в дуа говорить ин ша Аллахъ"{' '}
                            </p>

                            <ArSent
                                translate={
                                    <div>
                                        Да Воздаст Аллахъ <ContrastWord red>тебе </ContrastWord> благом (говорят это
                                        лучшее, что можно пожелать муслиму)
                                    </div>
                                }>
                                <Word root="جَزَا" suffix="كَ" /> الله خيرا
                            </ArSent>
                            <ArSent
                                translate={
                                    <div>
                                        Да Простит Аллахъ <ContrastWord red>тебя </ContrastWord>
                                    </div>
                                }>
                                غَفَرَ الله <Word root="لَ" suffix="كَ" />
                            </ArSent>
                            <ArSent
                                translate={
                                    <div>
                                        Пусть Аллахъ даст баракат <ContrastWord red>тебе </ContrastWord> в твоем [ деле,
                                        занятии, ... ]
                                    </div>
                                }>
                                <Word root="بَرَ" suffix="كَ" /> اللهُ <Word root="في" suffix="ك" />
                            </ArSent>
                            <ArSent
                                translate={
                                    <div>
                                        Да смилуется над <ContrastWord red> ним </ContrastWord> Аллахъ [ О великих людях
                                        после смерти, ученых ]
                                    </div>
                                }>
                                <Word root="رَحِمَ" suffix="هُ" /> اللهُ
                            </ArSent>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default withStyles(arabicPageStyle)(DuaPage)
