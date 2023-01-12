import { IApplications, ICategory } from './../types/Application';
import { categories } from '../types/Categories';

const generatePhoneNumber = () => {
    const randomPhoneNumbers = (n: number) => {
        let str = ''; 
        while (n-- > 0) 
          str += Math.floor(Math.random() * 10); 
        return str; 
    }

    const numberValueReduced = (phone: string) => {
        return phone.replace(/^(\d{3})(\d{3})(\d{2})(\d{2})$/, '+7 ($1) $2-$3-$4');
    };

    const phoneNumber = randomPhoneNumbers(10);
    return numberValueReduced(phoneNumber);
}

const generateRandomCategory = () => {
    return categories[Math.floor(Math.random() * categories.length)];
}

export const generateRandomApplications = (
    count: number,
) => {
    const result = [];
    const dictionaryNames = ['Тимофей', 'Евгений', 'Андрей', 'Кирилл', 'Дмитрий', 'Антон', 'Егор', 'Максим'];
    const dictionaryLastNames = ['Скоробогатов', 'Харламов', 'Клищенко', 'Грищенко', 'Егизарян', 'Абрамов', 'Васильцов', 'Курашов'];

    for(let i = 0; i < count; i++) {
        const randomName = dictionaryNames[Math.floor(Math.random() * 8)];
        const randomLastName = dictionaryLastNames[Math.floor(Math.random() * 8)];
        const category = generateRandomCategory();
        const status = (Math.floor(Math.random() * 10) < 5) ? true : false;

        const Application: IApplications = {
            id: Math.floor(Math.random() * 100000),
            firstName: randomName,
            lastName: randomLastName,
            phone: generatePhoneNumber(),
            category: category,
            documents: category?.docs,
            status: status
        };

        result.push(Application);
    }

    return result;
}