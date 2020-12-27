import { COUNTER_DEFAULT_VALUE } from './counter-constants';
import { counterModel } from './counter-model';
import { CounterFields } from './counter-enum';

export const getCounter = async (counterId: string): Promise<number> => ((
    await counterModel.findById(counterId))?.[CounterFields.Counter] || COUNTER_DEFAULT_VALUE
)

export const incrementCounter = async (counterId: string): Promise<number> => ((
    await counterModel.findByIdAndUpdate(
        counterId,
        { $inc: { [CounterFields.Counter]: 1 } },
        { upsert: true, new: true, setDefaultsOnInsert: true },
    ))?.[CounterFields.Counter]
);
