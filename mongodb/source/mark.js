tbs = [
    ["Технологии программирования", "Соболева Ирина Анатольевн"],
    ["Высшая математика", "Лебедев Максим Ярославович"],
    ["Теория графов", "Смирнова Ульяна Владимировна"],
    ["Бизнес", "Иванов Артём Адамович"],
    ["Физкультура", "Полякова Мария Ильинична"],
    ["Международные отношения", "Киселев Лев Кириллович"],
    ["Английский язык", "Покровская Александра Саввична"],
    ["Проектирование", "Нефедова София Ярославовна"]]

function randomIntFromInterval(min, max) { return Math.floor(Math.random() * (max - min + 1) + min);}
for (st of db.students.find()) {
    for(let sem = 1; sem <= 4; sem++) {
        for(s_t of tbs) {db.marks.insertOne({student: st._id,term: sem,subject: s_t[0],teacher: s_t[1],mark: randomIntFromInterval(2, 5)})
        }
    }
}