export interface IPasport {
    series: string,
    number: string,
    releaseDate: string,
    releasePlace: string
}

export interface IApplications {
    id: number,
    firstName: string,
    lastName: string,
    phone: string,
    category: ICategory,
    documents?: Array<string>,
    status?: boolean
}

export interface ICategory {
    name: string,
    docs: Array<string>,
    price: number
}