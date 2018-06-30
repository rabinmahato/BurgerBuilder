import React from 'react';
import AuxBox from '../../hoc/AuxBox';
import classes from './Layout.css';

const layout = (props) => (
    <AuxBox>
        <div>ToolBar Side Drawer, BackDrop </div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </AuxBox>
)

export default layout;