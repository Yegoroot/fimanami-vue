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

class HarfDenyPage extends React.Component {
    render() {
        const { classes, ...rest } = this.props

        return (
            <div>
                <Header
                    color="transparent"
                    brand="Отрицательные частицы"
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
                            <h1 className={classes.title}>Отрицательные частицы</h1>
                            <p>
                                Частица{' '}
                                <ContrastWord inRu red>
                                    قَطُّ
                                </ContrastWord>{' '}
                                - для прошедшего времени (не делал никогда до этого момента)
                                <br />
                                Частица{' '}
                                <ContrastWord inRu red>
                                    أبدٌا
                                </ContrastWord>{' '}
                                - для настоящего времени (никогда не делал и не буду делать)
                            </p>
                            <ArSentence
                                translate={
                                    <div>
                                        <ContrastWord red> Не </ContrastWord> пил вино никогда (до этого момента)
                                    </div>
                                }>
                                ما شربتُ الخَامر <ContrastWord red>قَطُّ </ContrastWord>
                            </ArSentence>
                            <ArSentence
                                translate={
                                    <div>
                                        Не пил <ContrastWord red> никогда</ContrastWord> вино и не буду!
                                    </div>
                                }>
                                لنْ أشرب الخمر <ContrastWord red> أبدٌا </ContrastWord>
                            </ArSentence>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default withStyles(arabicPageStyle)(HarfDenyPage)
