export const docs = {
    passport: 'Паспорт',
    yield: 'Сведения о доходах либо об отсутствии доходов',
    returns: 'Реквизиты банковского счета',
    utilityBills: 'Квитанция за оплату ЖКУ',
    statement: 'Соответствующее заявление',
    birthCertificate: 'Свидетельство о рождении',
    invalid: 'Справка об инвалидности 2-й группы',
    noPlacement: 'Справка об отсутствии постоянного места жительства'
}

export const categories = [
    {
        name: 'Субсидии и МСП по оплате ЖКУ',
        docs: [docs.statement, docs.passport, docs.yield, docs.returns, docs.utilityBills],
        price: 14142
    },
    {
        name: 'Соцподдержка семей при рождении второго ребенка',
        docs: [docs.birthCertificate, docs.statement, docs.passport],
        price: 1850230
    },
    {
        name: 'Единовременное пособие при рождении ребенка',
        docs: [docs.birthCertificate, docs.statement, docs.passport],
        price: 20472
    },
    {
        name: 'Пособие инвалидам 1-2 группы',
        docs: [docs.passport, docs.statement, docs.invalid, docs.returns],
        price: 18270
    },
    {
        name: 'Материнский капитал',
        docs: [docs.passport, docs.statement, docs.returns, docs.yield, docs.noPlacement],
        price: 46200
    }
]