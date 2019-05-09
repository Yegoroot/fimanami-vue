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

class HarfManAzzoidatuPage extends React.Component {
    render() {
        const { classes, ...rest } = this.props

        return (
            <div>
                <Header
                    color="transparent"
                    brand="مِن الزّائِدَة"
                    isBrandAr
                    rightLinks={<HeaderLinks />}
                    fixed
                    changeColorOnScroll={{
                        height: 200,

                        color: 'white',
                    }}
                    {...rest}
                />

                <Parallax small filter image={require('assets/img/mosque/mosque21.jpg')} />
                <div className={classNames(classes.main, classes.mainRaised)}>
                    <div className={classes.container}>
                        <div className={classes.navWrapper}>
                            <h1 className={classes.titleAr}>مِن الزّائِدَة</h1>

                            <p>
                                Эта частица усиливает мысль в предложении, часто используется в Коране, одна из многих
                                частиц показывающих описательную точность{' '}
                                <ContrastWord inRu blue translate="Корана">
                                    القران
                                </ContrastWord>
                                , [ обычно такие нюансы опускают в переводах, а разве есть те кто считает перевод{' '}
                                <ContrastWord inRu blue translate="Корана">
                                    القران
                                </ContrastWord>{' '}
                                Кораном ?]. Употребляется только если перед ней стоит отрицательная частица, запрет или
                                частица вопроса
                            </p>

                            <h4 className={classes.titleAr}>
                                Расмотрим наглядно как{' '}
                                <ContrastWord blue> с этой частицой закрывается дверь сомнений</ContrastWord>
                            </h4>

                            <ArSent translate={'Никто не пришел в школу'}>ما أتَى أحَدَ إِلى المدرسة</ArSent>
                            <ArSent
                                translate={
                                    <div>
                                        <ContrastWord red>
                                            Вообще никто [ни кошка, ни учителя, ни директор, ни пришельцев с соседней
                                            галактики, ни кого]{' '}
                                        </ContrastWord>{' '}
                                        не были в школе
                                    </div>
                                }>
                                ما أتَى{' '}
                                <ContrastWord inRu red>
                                    مِنْ
                                </ContrastWord>{' '}
                                أحَدٍ إِلى المدرسة
                            </ArSent>
                            <ArSent
                                translate={
                                    <div>
                                        У тебя есть <ContrastWord red> хоть какие нибудь</ContrastWord> вопросы?
                                    </div>
                                }>
                                هلْ{' '}
                                <ContrastWord inRu red>
                                    مِنْ
                                </ContrastWord>{' '}
                                سُؤَلٍ
                            </ArSent>

                            <h4 className={classes.titleAr}>
                                Расмотрим пример из{' '}
                                <ContrastWord inRu blue translate="Корана">
                                    القران
                                </ContrastWord>{' '}
                            </h4>
                            <ArSent
                                translate={
                                    <div>
                                        Не падает{' '}
                                        <ContrastWord red>
                                            каким бы не был маленьким и незаметным, в любом месте и времени
                                        </ContrastWord>{' '}
                                        листочек без Его ведома
                                    </div>
                                }>
                                مَا تَسْقُطُ <ContrastWord red> مِن </ContrastWord>وَرَقَةٍ إِلاَّ يَعْلَمُهَا
                            </ArSent>
                            <ArSent
                                translate={
                                    <div>
                                        И нет{' '}
                                        <ContrastWord red>ничего и некого подобного, [усиленное значени]</ContrastWord>{' '}
                                        на земле и небесах ( слои атомосферы, галактики ) приятнее Аллаха
                                    </div>
                                }>
                                وَمَا <ContrastWord red> مِن </ContrastWord> دَابَّةٍ فِي الأَرْضِ إِلاَّ عَلَى اللّهِ
                                رِزْقُهَا
                            </ArSent>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default withStyles(arabicPageStyle)(HarfManAzzoidatuPage)
