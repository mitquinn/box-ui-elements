import {
    FIELD_FILE_VERSION,
    FIELD_OWNED_BY,
    FIELD_SHA1,
    FIELD_SHARED_LINK,
    FIELD_WATERMARK_INFO,
} from '../../constants';
import { FOLDER_FIELDS_TO_FETCH } from '../../utils/fields';

// Fields needed for Content Explorer folder requests
const CONTENT_EXPLORER_FOLDER_FIELDS_TO_FETCH = [
    ...FOLDER_FIELDS_TO_FETCH,
    FIELD_FILE_VERSION,
    FIELD_SHA1,
    FIELD_SHARED_LINK,
    FIELD_WATERMARK_INFO,
    FIELD_OWNED_BY,
];

export default CONTENT_EXPLORER_FOLDER_FIELDS_TO_FETCH;
