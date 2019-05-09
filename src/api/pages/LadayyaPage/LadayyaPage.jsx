import React from 'react'
// nodejs library that concatenates classes
import classNames from 'classnames'

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'

// core components
import Header from 'components/Header/Header.jsx'
import Footer from 'components/Footer/Footer.jsx'

import PaperTense from 'components/paperTense'
// import Word from 'components/word'
// import AdditionalInfo from 'components/Typography/AdditionalInfo.jsx'
import ContrastWord from 'components/Typography/ContrastWord.jsx'
// import ArSentence from 'components/Typography/ArSentence.jsx'

// import Paragraph from 'components/Typography/Paragraph.jsx'
import HeaderLinks from 'components/Header/HeaderLinks.jsx'

import Parallax from 'components/Parallax/Parallax.jsx'

// import Word from 'components/word'

import arabicPageStyle from 'assets/jss/material-kit-react/views/arabicPage.jsx'

class LadayyaPage extends React.Component {
    render() {
        const { classes, ...rest } = this.props

        const arr = [
            {
                name: 'الماضى', // ПРОШЕДШЕЕ ВРЕМЯ
                faces: [
                    {
                        name: 'first', // ПЕРВОЕ ЛИЦО
                        words: [
                            {
                                prefix: '',
                                root: 'لَدَيَّ',
                                suffix: '',
                            },
                            {
                                prefix: '', // приставка
                                root: 'لَدَيْ', // корень
                                suffix: 'نا', // суфикс
                            },
                        ],
                    },
                    {
                        name: 'second', // ВТОРОЕ ЛИЦО
                        words: [
                            {
                                prefix: '',
                                root: 'لَدَيْ',
                                suffix: 'كَ',
                            },
                            {
                                prefix: '',
                                root: 'لَدَيْ',
                                suffix: 'كِ',
                            },
                            {
                                prefix: '',
                                root: 'لَدَيْ',
                                suffix: 'كم',
                            },
                            {
                                prefix: '',
                                root: 'لَدَيْ',
                                suffix: 'كنّ',
                            },
                        ],
                    },
                    {
                        name: 'third', // ТРЕТЬЕ ЛИЦО
                        words: [
                            {
                                prefix: '',
                                root: 'لَدَيْ',
                                suffix: 'هِ',
                            },
                            {
                                prefix: '',
                                root: 'لَدَيْ',
                                suffix: 'ها',
                            },
                            {
                                prefix: '',
                                root: 'لَدَيْ',
                                suffix: 'هِم',
                            },
                            {
                                prefix: '',
                                root: 'لَدَيْ',
                                suffix: 'هِنّ',
                            },
                        ],
                    },
                ],
            },
        ]

        return (
            <div>
                <Header
                    color="transparent"
                    brand="لَدَى"
                    isBrandAr
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
                            <h1 className={classes.titleAr}>لَدَى</h1>
                            <p>
                                Приходит с тем же значением что и{' '}
                                <ContrastWord inRu red translate="у, при; близ, около; во время; тогда; и т.д">
                                    عِنْدَ
                                </ContrastWord>{' '}
                            </p>
                            <PaperTense data={arr} />
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default withStyles(arabicPageStyle)(LadayyaPage)
