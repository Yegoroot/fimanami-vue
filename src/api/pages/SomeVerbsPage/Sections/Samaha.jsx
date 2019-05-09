import React from 'react'

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
// @material-ui/icons
import { Paper } from '@material-ui/core'
import { Link } from 'react-router-dom'
import ContrastWord from 'components/Typography/ContrastWord.jsx'
import ArSentence from 'components/Typography/ArSentence.jsx'
import Word from 'components/word'
// core components
// import SnackbarContent from 'components/Snackbar/SnackbarContent.jsx'
import Clearfix from 'components/Clearfix/Clearfix.jsx'
import arabicPage from 'assets/jss/material-kit-react/views/arabicPage.jsx'

class Samaha extends React.Component {
    render() {
        const { classes } = this.props
        return (
            <div className={classes.section} id="samaha">
                <div className={classes.container}>
                    <h2 className={classes.title}>
                        Глагол{' '}
                        <ContrastWord inRu red>
                            سَمَحَ
                        </ContrastWord>
                    </h2>

                    <Paper>
                        <div className="wrap1">
                            <p>
                                Это фразовый глагол, который требует два условия. ПЕРВОЕ тот кто разрешает, ВТОРОЕ что
                                разрешают, а то что разрешают является <Link to="/masdar">масдаром</Link>
                            </p>
                            <ArSentence
                                translate={
                                    <div>
                                        Мой отец <ContrastWord red>разрешил </ContrastWord> мне
                                        <ContrastWord blue> играть </ContrastWord> с моими друзьями
                                    </div>
                                }>
                                أبِي <ContrastWord red>سَمَحَ </ContrastWord> <Word prefix="لِ" root="ي" />{' '}
                                <ContrastWord blue>
                                    <Word prefix="بِ" root="اذهاب" />
                                </ContrastWord>{' '}
                                مع الصْدِقَائي
                            </ArSentence>
                            <ArSentence
                                translate={
                                    <div>
                                        Учитель <ContrastWord red>разрешил </ContrastWord> студентам
                                        <ContrastWord blue> писать </ContrastWord> красной ручкой
                                    </div>
                                }>
                                المدرّس <ContrastWord red>سَمَحَ </ContrastWord> <Word prefix="لِ" root="الطلاب" />{' '}
                                <ContrastWord blue>
                                    <Word prefix="بِ" root="كِتَابَة" />
                                </ContrastWord>{' '}
                                بِقلمِ أحْمرِ
                            </ArSentence>
                        </div>
                    </Paper>
                </div>

                <Clearfix />
            </div>
        )
    }
}

export default withStyles(arabicPage)(Samaha)
