import React from 'react'

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'

import Pills from 'components/Pills'
import ContrastWord from 'components/Typography/ContrastWord.jsx'

import arada from 'api/verbs/someVerbs/arada'
import Clearfix from 'components/Clearfix/Clearfix.jsx'
import arabicPage from 'assets/jss/material-kit-react/views/arabicPage.jsx'

class Uridu extends React.Component {
    render() {
        const { classes } = this.props
        return (
            <div className={classes.section} id="uridu">
                <div className={classes.container}>
                    <h2 className={classes.titleAr}>
                        Глагол{' '}
                        <ContrastWord inRu red>
                            أراد - يُريدُ
                        </ContrastWord>{' '}
                        (Хочу, желаю)
                    </h2>
                    <Pills data={arada} />
                </div>

                <Clearfix />
            </div>
        )
    }
}

export default withStyles(arabicPage)(Uridu)
