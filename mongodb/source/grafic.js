tbs = [
    ["Технологии программирования", "Соболева Ирина Анатольевн"],
    ["Высшая математика", "Лебедев Максим Ярославович"],
    ["Теория графов", "Смирнова Ульяна Владимировна"],
    ["Бизнес", "Иванов Артём Адамович"],
    ["Физкультура", "Полякова Мария Ильинична"],
    ["Международные отношения", "Киселев Лев Кириллович"],
    ["Английский язык", "Покровская Александра Саввична"],
    ["Проектирование", "Нефедова София Ярославовна"]]
    
let sc_date = new Date("2024-01-1")
for (gr of db.groups.find()) {
    sc_date.setDate(sc_date.getDate() + 1)
    for (let pair_num = 1; pair_num < 4; pair_num++) {
        random = Math.floor(Math.random() * tbs.length)
        db.schedule.insertOne({group: gr._id,number_pair: pair_num,subject: tbs[random][0],teacher: tbs[random][1],date: sc_date})
    }
}