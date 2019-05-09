import React from 'react'
import classNames from 'classnames'
import withStyles from '@material-ui/core/styles/withStyles'
import Header from 'components/Header/Header.jsx'
import Footer from 'components/Footer/Footer.jsx'
import HeaderLinks from 'components/Header/HeaderLinks.jsx'
import Parallax from 'components/Parallax/Parallax.jsx'
import { Link } from 'react-router-dom'

import { Paper } from '@material-ui/core'

import Word from 'components/word'
import ContrastWord from 'components/Typography/ContrastWord.jsx'
import ArSentence from 'components/Typography/ArSentence.jsx'
// import LyaNafia from './Sections/LyaNafia'
// import LyaNahia from './Sections/LyaNahia'
// import LyaInPast from './Sections/LyaInPast'

import arabicPageStyle from 'assets/jss/material-kit-react/views/arabicPage.jsx'

class HarfWaPage extends React.Component {
    render() {
        let a = 'ِ'.charCodeAt(0)
        console.log(a)
        const { classes, ...rest } = this.props
        return (
            <div>
                <Header
                    color="transparent"
                    brand="Виды واو"
                    // isBrandAr
                    rightLinks={<HeaderLinks />}
                    fixed
                    changeColorOnScroll={{
                        height: 200,
                        color: 'white',
                    }}
                    {...rest}
                />

                <Parallax small filter image={require('assets/img/mosque/mosque14.jpg')} />
                <div className={classNames(classes.main, classes.mainRaised)}>
                    <div className={classes.container}>
                        <div className={classes.navWrapper}>
                            <h1 className={classes.titleAr}>Виды واو</h1>

                            <h2 className={classes.title}>واو العَطْف</h2>
                            <Paper>
                                <div className="wrap1">
                                    <ArSentence
                                        translate={
                                            <div>
                                                Вышли Зубайр <ContrastWord red> и </ContrastWord> Хамид
                                            </div>
                                        }>
                                        خرج الزّبير <ContrastWord red> و </ContrastWord> حامد
                                    </ArSentence>
                                </div>
                            </Paper>

                            <h2 className={classes.title}>واو القسم</h2>
                            <Paper>
                                <div className="wrap1">
                                    <p>
                                        Клятвенная вав, относится к حرف الجزم (предлоги родительного падежа) и поэтому
                                        дает кясру слову
                                    </p>
                                    <ArSentence translate={'Клянусь Аллахом'}>
                                        <Word root="اللهِ" prefix="و" />
                                    </ArSentence>
                                </div>
                            </Paper>

                            <h2 className={classes.title}>واو الحَال</h2>
                            <Paper>
                                <div className="wrap1">
                                    <p>
                                        واو состояния,{' '}
                                        <Link to="/jumlatuhaal"> пример использования можете посмотреть тут</Link>
                                    </p>
                                    <ArSentence
                                        translate={
                                            <div>
                                                Отец мой умер{' '}
                                                <ContrastWord blue>
                                                    {' '}
                                                    [когда я был в состоянии "маленький"] маленьким{' '}
                                                </ContrastWord>
                                            </div>
                                        }>
                                        ماتَ أبي <ContrastWord red> و </ContrastWord>{' '}
                                        <ContrastWord blue> أنا صغير </ContrastWord>
                                    </ArSentence>
                                </div>
                            </Paper>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default withStyles(arabicPageStyle)(HarfWaPage)
