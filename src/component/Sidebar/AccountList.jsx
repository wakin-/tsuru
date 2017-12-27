// @flow

import React from 'react';
import {pure} from 'recompose';
import {withStyles} from 'material-ui/styles';
import IconButton from 'material-ui/IconButton';

import AccountIcon from './AccountIcon/AccountIcon';

const styles = theme => ({
    root: {
        display: "flex",
        flexDirection: "column",
        overflowX: 'hidden',
        overflowY: "auto",
    }
});

type Props = {
    classes: Object,
    accounts: Array<Object>,
    logout: Function,
};

const AccountList = pure((props: Props) => (
    <div className={props.classes.root}>
        {props.accounts.map((item, index) => (
            <AccountIcon
                key={index}
                accountIndex={index}
                data={item.userdata}
                domain={item.client.domain}
                logout={props.logout} />
        ))}
    </div>
));

export default withStyles(styles)(AccountList);
