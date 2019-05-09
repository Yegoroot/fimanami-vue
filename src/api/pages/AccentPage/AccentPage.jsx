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

class AccentPage extends React.Component {
    render() {
        const { classes, ...rest } = this.props

        return (
            <div>
                <Header
                    color="transparent"
                    brand="Акцент в вопросе"
                    // isBrandAr
                    rightLinks={<HeaderLinks />}
                    fixed
                    changeColorOnScroll={{
                        height: 200,

                        color: 'white',
                    }}
                    {...rest}
                />

                <Parallax small filter image={require('assets/img/mosque/mosque11.jpg')} />
                <div className={classNames(classes.main, classes.mainRaised)}>
                    <div className={classes.container}>
                        <div className={classes.navWrapper}>
                            <h1 className={classes.title}>Более точно задать вопрос</h1>
                            <p>В зависимости от того что хотим спросить и расставляем [акцентируем] слова</p>
                            <ArSentence
                                translate={
                                    <div>
                                        А <ContrastWord red> ты </ContrastWord>(или другой) убил скорпиона к классе?
                                    </div>
                                }>
                                أ <ContrastWord red>أنتَ </ContrastWord> قتلتَ العقربُ في الفصلِ؟
                            </ArSentence>
                            <ArSentence
                                translate={
                                    <div>
                                        А <ContrastWord red> убил ты </ContrastWord>(или он жив) скорпиона к классе?
                                    </div>
                                }>
                                أ <ContrastWord red> قتلتَ </ContrastWord> أنتَ العقربُ في الفصلِ؟
                            </ArSentence>
                            <ArSentence
                                translate={
                                    <div>
                                        А <ContrastWord red> скорпиона </ContrastWord>(или другое) ты убил в классе?{' '}
                                    </div>
                                }>
                                أ <ContrastWord red> عقربُ </ContrastWord>قتلتَ أنتَ في الفصلِ؟
                            </ArSentence>
                            <ArSentence
                                translate={
                                    <div>
                                        А <ContrastWord red> в классе </ContrastWord>(или в другом месте) ты убил
                                        скорпиона?{' '}
                                    </div>
                                }>
                                أ <ContrastWord red> في الفصلِ </ContrastWord>قتلتَ أنتَ عقربُ ؟
                            </ArSentence>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default withStyles(arabicPageStyle)(AccentPage)
