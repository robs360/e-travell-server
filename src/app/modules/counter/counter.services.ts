import { TCounter } from "./counter.interface";
import { counterModel } from "./counter.model";
export type TSearch = {
    from: string,
    to: string,
    date: Date
}
const createCounterIntoDB = async (payload: TCounter) => {
    const result = await counterModel.create(payload)
    return result
}

const getAllCounterFromDB = async (search: TSearch) => {
    
    const searchDate = new Date(search.date);
    console.log(searchDate)
    const startOfDay = new Date(searchDate.toISOString().split('T')[0] + 'T00:00:00.000Z');
    const endOfDay = new Date(searchDate.toISOString().split('T')[0] + 'T23:59:59.999Z');
    console.log(startOfDay,"  ",endOfDay)
    const query = {
        $and: [
            { from: { $regex: "^" + search.from + "$", $options: "i" } },
            { to: { $regex: "^" + search.to + "$", $options: "i" } },
            { date: { $gte: startOfDay, $lt: endOfDay } }
        ]
    };

    const result = await counterModel.find(query);
    return result
}

const getSingleCounterFromDB = async (id: string) => {
    const result = await counterModel.findById(id)
    return result
}
export const counterServices = {
    createCounterIntoDB, getSingleCounterFromDB,
    getAllCounterFromDB
}