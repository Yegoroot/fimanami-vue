import React from 'react'
import classNames from 'classnames'

import withStyles from '@material-ui/core/styles/withStyles'
// core components
import Header from 'components/Header/Header.jsx'
import Footer from 'components/Footer/Footer.jsx'

import ArSentence from 'components/Typography/ArSentence.jsx'
import HeaderLinks from 'components/Header/HeaderLinks.jsx'
import Parallax from 'components/Parallax/Parallax.jsx'

import arabicPageStyle from 'assets/jss/material-kit-react/views/arabicPage.jsx'

class SimilarityMaful extends React.Component {
    render() {
        const { classes, ...rest } = this.props

        return (
            <div>
                <Header
                    color="transparent"
                    brand="Схожесть стр. залога и мафъуль"
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
                            <h1 className={classes.title}>Схожесть стр. залога и мафъуль</h1>
                            <ArSentence>قُتِلَ مُدرسنا أمسِ</ArSentence>
                            -------
                            <ArSentence translate="Кто убитый (предмет действия смерти)">مَنْ مَقْتُول؟</ArSentence>
                            <ArSentence translate="Кто убит (на кого упало действие убийства)">مَنْ قُتِلَ؟</ArSentence>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default withStyles(arabicPageStyle)(SimilarityMaful)
