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
import ismfial from 'assets/img/content/ismfial.PNG'

class IsmaFial extends React.Component {
    render() {
        const { classes, ...rest } = this.props

        return (
            <div>
                <Header
                    color="transparent"
                    brand="اسم الفاعِل"
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
                            <h1 className={classes.titleAr}>اسم الفاعِل</h1>
                            <h2>Основная форма</h2>
                            <p>
                                <b>Лицо деятель</b> можно перевести как "действительное причастие" это имя
                                существительное указывает на того кто выполняет действие и образуется от 3ёх буквенного
                                глагола по шаблону{' '}
                                <ContrastWord red inRu>
                                    الفاعِل
                                </ContrastWord>
                                ,{' '}
                            </p>

                            <ArSent translate="Тот кто бъет">
                                <ContrastWord red> الضارِب </ContrastWord> (ضَرَبَ)
                            </ArSent>
                            <ArSent translate="Убица">
                                <ContrastWord red> القاتِل </ContrastWord> (قتل)
                            </ArSent>
                            <ArSent translate="Сидящий">
                                <ContrastWord red> الجالِس </ContrastWord> (جلس)
                            </ArSent>
                            <ArSent translate="Писатель">
                                <ContrastWord red> الكاتِب </ContrastWord> (كتب)
                            </ArSent>
                            <ArSent translate="Раб">
                                <ContrastWord red> العابِد </ContrastWord> (عبد)
                            </ArSent>
                            <ArSent translate="Советующий">
                                <ContrastWord red> الناصِح </ContrastWord> (نصح)
                            </ArSent>
                            {/* ------ */}

                            <h2>اسم الفاعِل у глаголов с шаддой</h2>
                            <p>
                                Не смотря на то что حَاجٌَ и ему подобные не похожи на اسم الفاعِل, мы чётко видим по
                                каким принципам образуется это лицо деятель
                            </p>
                            <ArSent>
                                حجّ - حَجْجَ - حاجِج ={' '}
                                <ContrastWord inRu translate="Тот кто в хадже" red>
                                    {' '}
                                    حَاجٌَ{' '}
                                </ContrastWord>
                            </ArSent>
                            <ArSent>
                                مًرَّ -{' '}
                                <ContrastWord inRu translate="приходящий" red>
                                    مارٌّ
                                </ContrastWord>
                            </ArSent>
                            <ArSent>
                                ضَلَّ -{' '}
                                <ContrastWord inRu translate="заблудший" red>
                                    ضالّ
                                </ContrastWord>
                            </ArSent>
                            <ArSent>
                                دَلّ -{' '}
                                <ContrastWord inRu translate="указывающий" red>
                                    دالّ
                                </ContrastWord>
                            </ArSent>
                            {/* -------- */}

                            <h2>اسم الفاعِل у глаголов со слабой средней</h2>
                            <p>
                                Когда мы хотим образовать اسم الفاعِل со средней больной, то меняем коренной алиф на
                                хамзу
                            </p>
                            <ArSent>
                                قَال -{' '}
                                <ContrastWord inRu translate="говорящий" red>
                                    قائِل
                                </ContrastWord>
                            </ArSent>
                            <ArSent>
                                صام -{' '}
                                <ContrastWord inRu translate="постящийся" red>
                                    صَائِم
                                </ContrastWord>
                            </ArSent>
                            <ArSent>
                                نَام -{' '}
                                <ContrastWord inRu translate="спящий" red>
                                    نائِم
                                </ContrastWord>
                            </ArSent>

                            {/* -------- */}
                            <h2>اسم الفاعِل у глаголов со слабой последней</h2>
                            <ArSent>
                                هَدى -{' '}
                                <ContrastWord inRu translate="руководитель" red>
                                    هادِي
                                </ContrastWord>
                            </ArSent>
                            <ArSent>
                                بَنَى -{' '}
                                <ContrastWord inRu translate="строитель" red>
                                    بانِي
                                </ContrastWord>
                            </ArSent>

                            {/* -------- */}
                            <h2>С точки зрения сарф и нахв</h2>
                            <p>
                                На картинке показаны подходы с точки зрения сарфа и нахв, три разных предложения и три
                                разных роли у одного слова
                            </p>
                            <img src={ismfial} style={{ width: '100%' }} alt="Схема 1" />
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default withStyles(arabicPageStyle)(IsmaFial)
