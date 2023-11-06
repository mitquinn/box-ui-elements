// @flow
import React from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import type { IntlShape } from 'react-intl';

import Button from '../../components/button/Button';

import messages from '../common/messages';

import type { CommonGridViewFunctions } from './flowTypes';
import type { BoxItem } from '../../common/types/core';

import './MoreOptionsCell.scss';

type Props = {
    canTransferOwnership: boolean,
    intl: IntlShape,
    item: BoxItem,
    ...$Exact<CommonGridViewFunctions>,
};

const TransferOwnership = ({ canTransferOwnership, onItemTransfer, intl, item }: Props) => {
    const onTransfer = () => onItemTransfer(item);

    if (!canTransferOwnership) {
        return <span />;
    }

    if (item.parent === null || item.parent.id !== '0') {
        return <span />;
    }

    if (item.type !== 'folder') {
        return <span />;
    }

    return (
        <div className="bce-transfer-ownership">
            {!canTransferOwnership ? null : (
                <Button className="transferOwnershipButton" onClick={onTransfer} type="button">
                    <FormattedMessage {...messages.canTransferOwnership} />
                </Button>
            )}
        </div>
    );
};

export default injectIntl(TransferOwnership);
