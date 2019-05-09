import React from 'react'
// nodejs library that concatenates classes
import classNames from 'classnames'

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'

// core components
import Header from 'components/Header/Header.jsx'
import Footer from 'components/Footer/Footer.jsx'

// import Word from 'components/word'
// import AdditionalInfo from 'components/Typography/AdditionalInfo.jsx'
import ContrastWord from 'components/Typography/ContrastWord.jsx'
import ArSentence from 'components/Typography/ArSentence.jsx'

// import Paragraph from 'components/Typography/Paragraph.jsx'
import HeaderLinks from 'components/Header/HeaderLinks.jsx'

import Parallax from 'components/Parallax/Parallax.jsx'

import Word from 'components/word'

import arabicPageStyle from 'assets/jss/material-kit-react/views/arabicPage.jsx'

class AbjectDegrees extends React.Component {
    render() {
        const { classes, ...rest } = this.props

        return (
            <div>
                <Header
                    color="transparent"
                    brand="Степени прилагательного"
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
                            <h1 className={classes.title}>Превосходная и сравнительная степень</h1>

                            <p>
                                Прилагательные можно разделить на три группы Сравнительные Превосходные и Обыкновенные
                            </p>
                            <h2 className={classes.title}>
                                Сравнительная степень <ContrastWord> أفْعَل مِنْهُ</ContrastWord>
                            </h2>

                            <ArSentence
                                translate={
                                    <div>
                                        Хашим высокий, но Хамид <ContrastWord red>выше его </ContrastWord>
                                    </div>
                                }>
                                هاشم طويل و حامد <ContrastWord red>أطْوَلُ </ContrastWord>
                                <Word prefix="مِنْ" root="هُ" />
                            </ArSentence>

                            <h2 className={classes.title}>Превосходная степень</h2>
                            <p>"Один из сАмых". Изофетная связка</p>
                            <ArSentence
                                translate={
                                    <div>
                                        Мухаммад <ContrastWord red>сАамый лучший</ContrastWord>{' '}
                                        <ContrastWord blue>студент</ContrastWord> в классе{' '}
                                        <ContrastWord blue>( Идафа )</ContrastWord>
                                    </div>
                                }>
                                محمد <ContrastWord red> أحْسَنُ </ContrastWord>{' '}
                                <ContrastWord blue> طَالِبٍ </ContrastWord> في الفصلِ
                            </ArSentence>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default withStyles(arabicPageStyle)(AbjectDegrees)
