import { IApplications, dictionaryCategory } from './../types/Application';

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

const generateSex = () => {
    const sex = Math.floor(Math.random() * 10); 
    if(sex > 5) return 'male' 
    return 'female'
}

const generateRandomCategory = (categories: Array<string>) => {
    const category = Math.floor(Math.random() * 10);
    return categories[category];
}

const generateDocuments = (category: string) => {
    const dictionaryDocuments = ['Пасспорт', 'ИНН', 'Снилс'];
    const dictionaryHousing = ['Справка о регистрации', 'Документ о месте жительства']
    const dictionaryStipend = ['Справка поддтверждающая потребность в пособии']
    const dictionaryCapital = ['Свидетельство о рождении детей']

    if(!category) {
        return []
    }

    if(category === 'Субсидии и МСП по оплате ЖКУ') {
        return dictionaryHousing
    } else if (
        category === 'Соцподдержка семей с детьми' || 
        category === 'Ежемесячные денежные выплаты отдельным категориям граждан' ||
        category === 'Соцподдержка пострадавших от радиации'
    ) {
        return dictionaryStipend
    } else if (category === 'Материнский капитал') {
        return dictionaryCapital
    } else {
        return dictionaryDocuments
    }
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
        const category = generateRandomCategory(dictionaryCategory);
        const documents = generateDocuments(category);
        const status = Math.floor(Math.random() * documents.length) + 1;

        const Application: IApplications = {
            id: Math.floor(Math.random() * 100000),
            firstName: randomName,
            lastName: randomLastName,
            sex: generateSex(),
            phone: generatePhoneNumber(),
            category: category,
            documents: documents,
            documentsStatus: status
        };

        result.push(Application);
    }

    return result;
}