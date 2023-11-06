/**
 * @flow
 * @file Function to render the date table cell
 * @author Box
 */

import React from 'react';
import MoreOptions from './MoreOptions';
import type { BoxItem } from '../../common/types/core';
import TransferOwnership from "elements/content-explorer/TransferOwnership";

export default (
    canTransferOwnership: boolean,
    onItemTransfer: Function,
) => ({ rowData }: { rowData: BoxItem }) => (
    <TransferOwnership
        canTransferOwnership={canTransferOwnership}
        onItemTransfer={onItemTransfer}
        item={rowData}
    />
);
