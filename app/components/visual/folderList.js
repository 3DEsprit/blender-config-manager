import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'

import ContainedButton from './ContainedButton'
import Folder from './folder'
import * as vars from '../../style/variables'

const FolderList = props => {
  const {
    cancelAction,
    children,
    isFolderMissing,
    folders,
    selectFolder,
    selected
  } = props

  const useStyles = makeStyles({
    button: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      marginBottom: '48px'
    },
    folder: {
      display: 'flex',
      flexDirection: 'column',
      borderRadius: '5px',
      backgroundColor: vars.folderBackgroundDark,
      boxShadow: 'inset 0px 2px 2px 1px hsla(0, 0%, 0%, 0.1)',
      height: '100%',
      margin: '24px'
    },
    list: {
      listStyle: 'none',
      padding: '2px 8px',
      overflowY: 'scroll'
    },
    listItem: {
      textAlign: 'left'
    },
    message: {
      color: vars.offWhite
    }
  })

  const classes = useStyles()

  return (
    <>
      <div className={classes.folder}>
        {isFolderMissing ?
          <ul className={classes.list}>
            <div className={classes.message}>Blender Data Missing</div>
          </ul>
        :
          <div className={classes.list}>
            {folders.map(folder => (
              <li className={classes.listeItem} key={folder}>
                <Folder name={folder} select={selectFolder} selected={selected} />
              </li>
            ))}
          </div>}
      </div>
      {cancelAction ?
        <div className={classes.button}>
          {children}
          <ContainedButton title="cancel" color="secondary" action={() => cancel()} name="Cancel" />
        </div>
      : null}
    </>
  )
}

export default FolderList

FolderList.defaultProps = {
  cancelAction: null,
  children: null,
  isFolderMissing: false,
  selected: ''
}

FolderList.propTypes = {
  cancelAction: PropTypes.func,
  children: PropTypes.node,
  folders: PropTypes.arrayOf(PropTypes.string).isRequired,
  isFolderMissing: PropTypes.bool,
  selectFolder: PropTypes.func.isRequired,
  selected: PropTypes.string
}
