export const dictionaryCategory = [
    'Субсидии и МСП по оплате ЖКУ', 
    'Соцподдержка семей с детьми', 
    'Ежемесячные денежные выплаты отдельным категориям граждан',
    'Соцподдержка пострадавших от радиации',
    'Материнский капитал',
    'Аддресная медпомощь',
    'Обеспечение жильем',
    'Пособие на погребение',
    'Компенсация проезда',
    'Прочее',
]

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
    category: string,
    sex: 'male' | 'female',
    documents?: Array<string>,
    documentsStatus?: number,
    passport?: IPasport,
    inn?: string,
    snils?: string
}