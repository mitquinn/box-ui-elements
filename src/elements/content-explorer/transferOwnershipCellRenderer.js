/**
 * @flow
 * @file Function to render the date table cell
 * @author Box
 */

import React from 'react';
import TransferOwnership from 'elements/content-explorer/TransferOwnership';
import MoreOptions from './MoreOptions';
import type { BoxItem } from '../../common/types/core';

export default (canTransferOwnership: boolean, onItemTransfer: Function) => ({ rowData }: { rowData: BoxItem }) => (
    <TransferOwnership canTransferOwnership={canTransferOwnership} onItemTransfer={onItemTransfer} item={rowData} />
);
