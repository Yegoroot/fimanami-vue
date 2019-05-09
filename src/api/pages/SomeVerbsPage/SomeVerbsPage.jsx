import React from 'react'
import classNames from 'classnames'
import withStyles from '@material-ui/core/styles/withStyles'
import Header from 'components/Header/Header.jsx'
import Footer from 'components/Footer/Footer.jsx'
import HeaderLinks from 'components/Header/HeaderLinks.jsx'
import Parallax from 'components/Parallax/Parallax.jsx'

import Munthu from './Sections/Munthu'
import Samaha from './Sections/Samaha'
import KanaLaYazalu from './Sections/KanaLaYazalu'
import Uridu from './Sections/Uridu'
import Harf5 from './Sections/Harf5'
import Wajaba from './Sections/Wajaba'
import OtherVerbs from './Sections/OtherVerbs'

import arabicPageStyle from 'assets/jss/material-kit-react/views/arabicPage.jsx'

class SomeVerbsPage extends React.Component {
    render() {
        const { classes, ...rest } = this.props

        return (
            <div>
                <Header
                    color="transparent"
                    brand="Некоторые глаголы"
                    rightLinks={<HeaderLinks />}
                    fixed
                    changeColorOnScroll={{
                        height: 200,
                        color: 'white',
                    }}
                    {...rest}
                />

                <Parallax small filter image={require('assets/img/mosque/mosque18.jpg')} />
                <div className={classNames(classes.main, classes.mainRaised)}>
                    <div className={classes.container}>
                        <div className={classes.navWrapper}>
                            <h1 className={classes.title}>Некоторые из глаголов</h1>
                            <Munthu />
                            <Samaha />
                            <Uridu />
                            <Harf5 />
                            <Wajaba />
                            <OtherVerbs />
                            <KanaLaYazalu />
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default withStyles(arabicPageStyle)(SomeVerbsPage)
