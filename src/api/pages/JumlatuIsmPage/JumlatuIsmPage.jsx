import React from 'react'
// nodejs library that concatenates classes
import classNames from 'classnames'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'

// core components
import Footer from 'components/Footer/Footer.jsx'
import Header from 'components/Header/Header.jsx'

import ArSentence from 'components/Typography/ArSentence.jsx'

import HeaderLinks from 'components/Header/HeaderLinks.jsx'

import Parallax from 'components/Parallax/Parallax.jsx'

import arabicPageStyle from 'assets/jss/material-kit-react/views/arabicPage.jsx'

class JumlatuIsmPage extends React.Component {
    render() {
        const { classes, ...rest } = this.props

        return (
            <div>
                <Header
                    color="transparent"
                    brand="جملة الاِسمِيّة"
                    isBrandAr
                    rightLinks={<HeaderLinks />}
                    fixed
                    changeColorOnScroll={{
                        height: 200,
                        color: 'white',
                    }}
                    {...rest}
                />

                <Parallax small filter image={require('assets/img/mosque/mosque5.jpg')} />
                <div className={classNames(classes.main, classes.mainRaised)}>
                    <div className={classes.container}>
                        <div className={classes.navWrapper}>
                            <h1 className={classes.title}>Именное предложение</h1>

                            <p>
                                Именное предложение – это предложение, которое начинается с имени. Например: الطالِب
                                مجتهد Студент прилежен Подлежащее именного предложения (المُبْتَدَأُ) ставится, как
                                правило, в определённом состоянии, а сказуемое (الخَبَرُ) - в неопределённом.
                            </p>

                            <p>
                                Если сказуемое именного предложения является именем, то оно согласуется с подлежащим в
                                числе и роде:
                            </p>

                            <div className="BL1">
                                <ArSentence translate="Ученик активен">التّلميذُ نشيط</ArSentence>
                                <ArSentence translate="Ученица активна">التّلميذةُ نشيطة</ArSentence>
                                <ArSentence translate="Два ученика активны">التِّلميذَان نشيطانِ</ArSentence>
                                <ArSentence translate="Две ученицы активны">التّلميذتانِ نشيطتانِ </ArSentence>
                                <ArSentence translate="Ученики активны">التَّلاميذُ نِشَاط </ArSentence>
                                <ArSentence translate="Ученицы активны">التلميذَات نشِيطَات </ArSentence>
                            </div>
                            <p>
                                В именных предложениях, приведенных выше, сказуемым являлось имя, но часто сказуемое
                                выражается также
                            </p>
                            <div className="BL1">
                                <h4 className={classes.title}>{'1)'} глаголом:</h4>
                                <ArSentence translate="Зейд открыл дверь">زيدٌ فتح الباب</ArSentence>
                            </div>

                            <div className="BL1">
                                <h4 className={classes.title}>{'2)'} изафетным сочетанием обстоятельства и имени:</h4>
                                <ArSentence translate="Машина перед домом">السّيّارةُ أَمامَ البيتِ</ArSentence>
                            </div>

                            <div className="BL1">
                                <h4 className={classes.title}>
                                    {'3)'} сочетанием предлога родительного падежа и имени:
                                </h4>
                                <ArSentence translate="Ученик в школе">التّلميذُ فى المدرسةِ</ArSentence>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default withStyles(arabicPageStyle)(JumlatuIsmPage)
