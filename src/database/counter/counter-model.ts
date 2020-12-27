import { model, Schema } from 'mongoose';
import { COUNTER_DEFAULT_VALUE, COUNTER_COLLECTION_NAME } from './counter-constants';
import { ECounterFields } from './counter-enum';

const counterSchema = new Schema({
    [ECounterFields.Counter]: {
        type: Number,
        default: COUNTER_DEFAULT_VALUE,
    }
});

export const counterModel = model(
    COUNTER_COLLECTION_NAME,
    counterSchema,
);