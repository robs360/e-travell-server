import { TCounter } from "./counter.interface";
import { counterModel } from "./counter.model";
type TSearch = {
    from: string,
    to: string,
    date: Date
}
const createCounterIntoDB = async (payload: TCounter) => {
    const result = await counterModel.create(payload)
    return result
}
 
const getAllCounterFromDB = async (search: TSearch) => {
    const query = {
        $and: [
            { from: { $regex: "^" + search.from + "$", $options: "i" } },
            { to: { $regex: "^" + search.to + "$", $options: "i" } },
            { date: new Date(search.date) }
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