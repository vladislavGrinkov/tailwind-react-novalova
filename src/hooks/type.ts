export type TData = {
    user: TInnerData
};


export type TInnerData = {
    id: number;
    name: string;
    age: string;
    sex: string;
    images: Array<string>
    about: string;
    location: string;
}