// @flow

import React from 'react';
import {withStyles} from 'material-ui/styles';

import Sidebar from './Sidebar/Sidebar';
import TimelineView from './TimelineView/TimelineView';
import Dialog from './Dialog/Dialog';
import Notification from './Notification/Notification';

type Props = {
    classes: Object,
};

const styles = (theme: Object): any => ({
    root: {
        width: "100%",
        height: "100vh",
    },
    mainView: {
        height: "100%",
        display: "flex",
        flexDirection: "row"
    }
})

const App = (props: Props) => (
    <div className={props.classes.root}>
        <div className={props.classes.mainView}>
            <Sidebar />
            <TimelineView />
        </div>
        <Notification />
        <Dialog />
    </div>
);

export default withStyles(styles)(App);