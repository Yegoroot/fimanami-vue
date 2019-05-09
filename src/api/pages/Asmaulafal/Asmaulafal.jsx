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
import ArSent from 'components/Typography/ArSent.jsx'

// import Paragraph from 'components/Typography/Paragraph.jsx'
import HeaderLinks from 'components/Header/HeaderLinks.jsx'

import Parallax from 'components/Parallax/Parallax.jsx'

import arabicPageStyle from 'assets/jss/material-kit-react/views/arabicPage.jsx'

class Asmaulafal extends React.Component {
    render() {
        const { classes, ...rest } = this.props

        return (
            <div>
                <Header
                    color="transparent"
                    brand="أسْماءُ الأفِعْل"
                    isBrandAr
                    rightLinks={<HeaderLinks />}
                    fixed
                    changeColorOnScroll={{
                        height: 200,

                        color: 'white',
                    }}
                    {...rest}
                />

                <Parallax small filter image={require('assets/img/mosque/mosque19.jpg')} />
                <div className={classNames(classes.main, classes.mainRaised)}>
                    <div className={classes.container}>
                        <div className={classes.navWrapper}>
                            <h1 className={classes.titleAr}>أسْماءُ الأفِعْل</h1>

                            <p>
                                Не является глаголом, но смысл глагола, не склоняется во временах. Бывает некоторые
                                существуют в одном времени, но не существуют в другом, т.е имя может существовать в
                                повелительном но не существовать в прошедшем и т.п
                            </p>

                            <p>Например</p>
                            <ArSent translate="Иди сюда">
                                <ContrastWord red> تَعَالَ </ContrastWord> (الى هنا)
                            </ArSent>
                            <ArSent translate="Молчи">
                                <ContrastWord red> صَهْ </ContrastWord> (أُسْكُتْ)
                            </ArSent>
                            <ArSent translate="Ты должен">
                                <ContrastWord red> عَلَيْكَ </ContrastWord> (اِلْزَمْ)
                            </ArSent>
                            <ArSent translate="Не торопись">
                                <ContrastWord red> رُوَيْدَكَ </ContrastWord> (تَمَهَّلْ)
                            </ArSent>
                            <ArSent translate="Быстрей">
                                <ContrastWord red> هَيَّا </ContrastWord> (أسْرِعْ)
                            </ArSent>
                            <ArSent translate="Спешите">
                                <ContrastWord red> حَيَّ </ContrastWord>(أقْبِلْ)
                            </ArSent>
                            <ArSent translate="Возьми">
                                <ContrastWord red> إلَيْكَ </ContrastWord>(خُذْ)
                            </ArSent>
                            <ArSent translate="Отвечай">
                                <ContrastWord red> آمين </ContrastWord>(إستجب)
                            </ArSent>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default withStyles(arabicPageStyle)(Asmaulafal)
