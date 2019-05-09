import React from 'react'
import classNames from 'classnames'

import withStyles from '@material-ui/core/styles/withStyles'
// core components
import Header from 'components/Header/Header.jsx'
import Footer from 'components/Footer/Footer.jsx'

import ContrastWord from 'components/Typography/ContrastWord.jsx'
import ArSentence from 'components/Typography/ArSentence.jsx'
import HeaderLinks from 'components/Header/HeaderLinks.jsx'
import Parallax from 'components/Parallax/Parallax.jsx'

import arabicPageStyle from 'assets/jss/material-kit-react/views/arabicPage.jsx'

class HarfSobirPage extends React.Component {
    render() {
        const { classes, ...rest } = this.props

        return (
            <div>
                <Header
                    color="transparent"
                    brand="Собирательная частица"
                    // isBrandAr
                    rightLinks={<HeaderLinks />}
                    fixed
                    changeColorOnScroll={{
                        height: 200,

                        color: 'white',
                    }}
                    {...rest}
                />

                <Parallax small filter image={require('assets/img/mosque/mosque12.jpg')} />
                <div className={classNames(classes.main, classes.mainRaised)}>
                    <div className={classes.container}>
                        <div className={classes.navWrapper}>
                            <h1 className={classes.title}>Собирательная частица (اسم الجنس الجَمْعِ )</h1>
                            <p>
                                Собирательная частица есть двух типов: для людей и для не людей <br />
                                Например у человека есть вид (племя) турки, русские, арабы, эстонцы, <br />У животных и
                                растений тоже есть виды (семейства), например львы, финики, яблоки
                            </p>
                            <p>
                                И для того чтоб выделить индивида из племени, вида, семейства мы применяем{' '}
                                <b>собирательную частицу</b>, которая для людей одна, а для не людей другая
                            </p>
                            <ArSentence
                                translate={
                                    <div>
                                        племя арабы + <ContrastWord red> собирательная частица </ContrastWord> = араб
                                        (индивид)
                                    </div>
                                }>
                                العَرَب + <ContrastWord red> يّ </ContrastWord> = العَرَبِيّ
                            </ArSentence>
                            <ArSentence
                                translate={
                                    <div>
                                        племя русские + <ContrastWord red> собирательная частица </ContrastWord> =
                                        русский (индивид)
                                    </div>
                                }>
                                الرُوس + <ContrastWord red> يّ </ContrastWord> = الروسِيّ
                            </ArSentence>
                            -------------------
                            <ArSentence
                                translate={
                                    <div>
                                        вид фрукта яблоки + <ContrastWord red> собирательная частица </ContrastWord> =
                                        яблоко (индивид вида)
                                    </div>
                                }>
                                التُّفَاح + <ContrastWord red> ة </ContrastWord> = التُّفَاحة
                            </ArSentence>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default withStyles(arabicPageStyle)(HarfSobirPage)
