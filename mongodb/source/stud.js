db.students.insertMany([
{
"name": "Александров Александр Александрович", 
"birth": "2000-01-15", 
"add_ress": "Московская область город Москва улица Ленина 1", 
"e-mail": "ivanov_ivan@example.com",
"group_id": db.groups.findOne({"name": "Э107"}, {_id: 1})._id, 
"budget": "true",
"phone": "+79137650440"
},
{
"name": "Борисов Борис Борисович", 
"birth": "2000-02-27", 
"add_ress": "Смоленская область город Солнечногорск шоссе Славы 77", 
"e-mail": "petrov_petr@example.com",
"group_id": db.groups.findOne({"name": "Э107"}, {_id: 1})._id, 
"budget": "true",
"phone": "+79137650440"
},
{
"name": "Васильев Василий Васильевич", 
"birth": "2000-03-10", 
"add_ress": "Ленинградская область город Санкт-Петербург проспект Мира 22", 
"e-mail": "sidorov_sidor@example.com",
"group_id": db.groups.findOne({"name": "Э107"}, {_id: 1})._id, 
"budget": "false",
"phone": "+79137650440"
},
{
"name": "Григорьев Григорий Григорьевич", 
"birth": "2000-04-18", 
"add_ress": "Новосибирская область город Новосибирск улица Кирова 3", 
"e-mail": "kuznetsov_kirill@example.com",
"group_id": db.groups.findOne({"name": "Э107"}, {_id: 1})._id, 
"budget": "true",
"phone": "+79137650440"
},
{
"name": "Дмитриев Дмитрий Дмитриевич", 
"birth": "2000-05-22", 
"add_ress": "Саратовская область город Саратов улица Ломоносова 4", 
"e-mail": "mikhailov_mikhail@example.com",
"group_id": db.groups.findOne({"name": "Э107"}, {_id: 1})._id, 
"budget": "true",
"phone": "+79137650440"
},
{
"name": "Егоров Егор Егорович", 
"birth": "2000-06-05", 
"add_ress": "Краснодарский край город Краснодар улица Советская 5", 
"e-mail": "fedorov_fedor@example.com",
"group_id": db.groups.findOne({"name": "Э107"}, {_id: 1})._id, 
"budget": "true",
"phone": "+79137650440"
},
{
"name": "Жуков Жук Жукович", 
"birth": "2000-07-14", 
"add_ress": "Ростовская область город Ростов-на-Дону улица Пушкина 6", 
"e-mail": "pavlov_pavel@example.com",
"group_id": db.groups.findOne({"name": "Э107"}, {_id: 1})._id, 
"budget": "true",
"phone": "+79137650440"
},
{
"name": "Зайцев Захар Захарович", 
"birth": "2000-08-09", 
"add_ress": "Челябинская область город Челябинск улица Гагарина 7", 
"e-mail": "borisov_boris@example.com",
"group_id": db.groups.findOne({"name": "Э105"}, {_id: 1})._id, 
"budget": "false",
"phone": "+79137650440"
},
{
"name": "Иванов Иван Иванович", 
"birth": "2000-09-21", 
"add_ress": "Самарская область город Самара улица Куйбышева 8", 
"e-mail": "egorov_egor@example.com",
"group_id": db.groups.findOne({"name": "Э105"}, {_id: 1})._id, 
"budget": "true",
"phone": "+79137650440"
},
{
"name": "Кузнецов Кирилл Кузнецович", 
"birth": "2000-10-30", 
"add_ress": "Волгоградская область город Волгоград улица Победы 9", 
"e-mail": "sergeev_sergey@example.com",
"group_id": db.groups.findOne({"name": "Э105"}, {_id: 1})._id, 
"budget": "false",
"phone": "+79137650440"
},
{
"name": "Леонтьев Леонид Леонидович", 
"birth": "2000-11-17", 
"add_ress": "Пермский край город Пермь улица Ленина 10", 
"e-mail": "andreev_andrey@example.com",
"group_id": db.groups.findOne({"name": "Э105"}, {_id: 1})._id, 
"budget": "true",
"phone": "+79137650440"
},
{
"name": "Михайлов Михаил Михайлович", 
"birth": "2000-12-25", 
"add_ress": "Оренбургская область город Оренбург улица Гагарина 11", 
"e-mail": "vasiliev_vasiliy@example.com",
"group_id": db.groups.findOne({"name": "Э105"}, {_id: 1})._id, 
"budget": "true",
"phone": "+79137650440"
},
{
"name": "Николаев Николай Николаевич", 
"birth": "2001-01-04", 
"add_ress": "Свердловская область город Екатеринбург улица Мира 12", 
"e-mail": "romanov_roman@example.com",
"group_id": db.groups.findOne({"name": "Э105"}, {_id: 1})._id, 
"budget": "false",
"phone": "+79137650440"
},
{
"name": "Орлов Олег Орлович", 
"birth": "2001-02-13", 
"add_ress": "Воронежская область город Воронеж улица Ломоносова 13", 
"e-mail": "nikolaev_nikolay@example.com",
"group_id": db.groups.findOne({"name": "Э105"}, {_id: 1})._id, 
"budget": "false",
"phone": "+79137650440"
},
{
"name": "Павлов Павел Павлович", 
"birth": "2001-03-29", 
"add_ress": "Омская область город Омск улица Кирова 14", 
"e-mail": "leontiev_leonid@example.com",
"group_id": db.groups.findOne({"name": "Э106"}, {_id: 1})._id, 
"budget": "true",
"phone": "+79137650440"
},
{
"name": "Романов Роман Романович", 
"birth": "2001-04-08", 
"add_ress": "Нижегородская область город Нижний Новгород улица Ленина 15", 
"e-mail": "matveev_matvey@example.com",
"group_id": db.groups.findOne({"name": "Э106"}, {_id: 1})._id, 
"budget": "false",
"phone": "+79137650440"
},
{
"name": "Сергеев Сергей Сергеевич", 
"birth": "2001-05-19", 
"add_ress": "Кемеровская область город Кемерово улица Победы 16", 
"e-mail": "voronov_voron@example.com",
"group_id": db.groups.findOne({"name": "Э106"}, {_id: 1})._id, 
"budget": "false",
"phone": "+79137650440"
},
{
"name": "Трофимов Трофим Трофимович", 
"birth": "2001-06-26", 
"add_ress": "Приморский край город Владивосток улица Советская 17", 
"e-mail": "zhukov_zhuk@example.com",
"group_id": db.groups.findOne({"name": "Э106"}, {_id: 1})._id, 
"budget": "true",
"phone": "+79137650440"
},
{
"name": "Ульянов Ульян Ульянович", 
"birth": "2001-07-07", 
"add_ress": "Алтайский край город Барнаул улица Пушкина 18", 
"e-mail": "korolev_kirill@example.com",
"group_id": db.groups.findOne({"name": "Э106"}, {_id: 1})._id, 
"budget": "false",
"phone": "+79137650440"
},
{
"name": "Федоров Федор Федорович", 
"birth": "2001-08-15", 
"add_ress": "Иркутская область город Иркутск улица Гагарина 19", 
"e-mail": "sokolov_sokol@example.com",
"group_id": db.groups.findOne({"name": "Э106"}, {_id: 1})._id, 
"budget": "false",
"phone": "+79137650440"
},
{
"name": "Харитонов Харитон Харитонович", 
"birth": "2001-09-11", 
"add_ress": "Хабаровский край город Хабаровск улица Мира 20", 
"e-mail": "orlov_oleg@example.com",
"group_id": db.groups.findOne({"name": "Э106"}, {_id: 1})._id, 
"budget": "false",
"phone": "+79137650440"
},
{
"name": "Цветков Цвет Цветкович", 
"birth": "2001-10-23", 
"add_ress": "Тюменская область город Тюмень улица Ломоносова 21", 
"e-mail": "efremov_efrem@example.com",
"group_id": db.groups.findOne({"name": "МО101"}, {_id: 1})._id, 
"budget": "true",
"phone": "+79137650440"
},
{
"name": "Чапаев Чапай Чапаевич", 
"birth": "2001-11-05", 
"add_ress": "Курская область город Курск улица Ленина 22", 
"e-mail": "ivanova_irina@example.com",
"group_id": db.groups.findOne({"name": "МО101"}, {_id: 1})._id, 
"budget": "true",
"phone": "+79137650440"
},
{
"name": "Шестаков Шестак Шестакович", 
"birth": "2001-12-20", 
"add_ress": "Рязанская область город Рязань улица Кирова 23", 
"e-mail": "petrovna_polina@example.com",
"group_id": db.groups.findOne({"name": "МО101"}, {_id: 1})._id, 
"budget": "true",
"phone": "+79137650440"
},
{
"name": "Щукин Щука Щукинович", 
"birth": "2002-01-14", 
"add_ress": "Ульяновская область город Ульяновск улица Победы 24", 
"e-mail": "sidorova_svetlana@example.com",
"group_id": db.groups.findOne({"name": "МО101"}, {_id: 1})._id, 
"budget": "true",
"phone": "+79137650440"
},
{
"name": "Эрнестов Эрнест Эрнестович", 
"birth": "2002-02-28", 
"add_ress": "Калужская область город Калуга улица Гагарина 25", 
"e-mail": "kuznetsova_kristina@example.com",
"group_id": db.groups.findOne({"name": "МО101"}, {_id: 1})._id, 
"budget": "false",
"phone": "+79137650440"
},
{
"name": "Юрьев Юрий Юрьевич", 
"birth": "2002-03-15", 
"add_ress": "Брянская область город Брянск улица Мира 26", 
"e-mail": "mikhailova_mariya@example.com",
"group_id": db.groups.findOne({"name": "МО101"}, {_id: 1})._id, 
"budget": "true",
"phone": "+79137650440"
},
{
"name": "Яковлев Яков Яковлевич", 
"birth": "2002-04-27", 
"add_ress": "Тульская область город Тула улица Ленина 27", 
"e-mail": "fedorova_faina@example.com",
"group_id": db.groups.findOne({"name": "МО101"}, {_id: 1})._id, 
"budget": "true",
"phone": "+79137650440"
},
{
"name": "Алексеева Александра Александровна", 
"birth": "2002-05-06", 
"add_ress": "Ярославская область город Ярославль улица Пушкина 28", 
"e-mail": "pavlova_polina@example.com",
"group_id": db.groups.findOne({"name": "МО102"}, {_id: 1})._id, 
"budget": "true",
"phone": "+79137650440"
},
{
"name": "Борисова Бориса Борисовна", 
"birth": "2002-06-17", 
"add_ress": "Белгородская область город Белгород улица Ломоносова 29", 
"e-mail": "borisova_borisa@example.com",
"group_id": db.groups.findOne({"name": "МО102"}, {_id: 1})._id, 
"budget": "false",
"phone": "+79137650440"
},
{
"name": "Васильева Василиса Васильевна", 
"birth": "2002-07-22", 
"add_ress": "Орловская область город Орел улица Ленина 30", 
"e-mail": "egorova_elena@example.com",
"group_id": db.groups.findOne({"name": "МО102"}, {_id: 1})._id, 
"budget": "false",
"phone": "+79137650440"
},
{
"name": "Григорьева Галина Григорьевна", 
"birth": "2002-08-13", 
"add_ress": "Псковская область город Псков улица Советская 31", 
"e-mail": "sergeeva_svetlana@example.com",
"group_id": db.groups.findOne({"name": "МО102"}, {_id: 1})._id, 
"budget": "false",
"phone": "+79137650440"
},
{
"name": "Дмитриева Дарья Дмитриевна", 
"birth": "2002-09-08", 
"add_ress": "Владимирская область город Владимир улица Победы 32", 
"e-mail": "andreeva_anna@example.com",
"group_id": db.groups.findOne({"name": "МО102"}, {_id: 1})._id, 
"budget": "true",
"phone": "+79137650440"
},
{
"name": "Егорова Елена Егоровна", 
"birth": "2002-10-25", 
"add_ress": "Ивановская область город Иваново улица Ломоносова 33", 
"e-mail": "vasilieva_vasilisa@example.com",
"group_id": db.groups.findOne({"name": "МО102"}, {_id: 1})._id, 
"budget": "true",
"phone": "+79137650440"
},
{
"name": "Жукова Жанна Жуковна", 
"birth": "2002-11-30", 
"add_ress": "Костромская область город Кострома улица Мира 34", 
"e-mail": "romanova_raisya@example.com",
"group_id": db.groups.findOne({"name": "МО102"}, {_id: 1})._id, 
"budget": "true",
"phone": "+79137650440"
},
{
"name": "Зайцева Зоя Захаровна", 
"birth": "2002-12-10", 
"add_ress": "Смоленская область город Смоленск улица Гагарина 35", 
"e-mail": "nikolaeva_natalya@example.com",
"group_id": db.groups.findOne({"name": "МО103"}, {_id: 1})._id, 
"budget": "false",
"phone": "+79137650440"
},
{
"name": "Иванова Ирина Ивановна", 
"birth": "2003-01-27", 
"add_ress": "Тверская область город Тверь улица Ленина 36", 
"e-mail": "leontieva_lidia@example.com",
"group_id": db.groups.findOne({"name": "МО103"}, {_id: 1})._id, 
"budget": "true",
"phone": "+79137650440"
},
{
"name": "Кузнецова Кристина Кузнецовна", 
"birth": "2003-02-08", 
"add_ress": "Архангельская область город Архангельск улица Кирова 37", 
"e-mail": "matveeva_mariya@example.com",
"group_id": db.groups.findOne({"name": "МО103"}, {_id: 1})._id, 
"budget": "true",
"phone": "+79137650440"
},
{
"name": "Леонтьева Лидия Леонидовна", 
"birth": "2003-03-20", 
"add_ress": "Мурманская область город Мурманск улица Пушкина 38", 
"e-mail": "voronova_vera@example.com",
"group_id": db.groups.findOne({"name": "МО103"}, {_id: 1})._id, 
"budget": "true",
"phone": "+79137650440"
},
{
"name": "Михайлова Мария Михайловна", 
"birth": "2003-04-14", 
"add_ress": "Калининградская область город Калининград улица Ломоносова 39", 
"e-mail": "zhukova_zhanna@example.com",
"group_id": db.groups.findOne({"name": "МО103"}, {_id: 1})._id, 
"budget": "false",
"phone": "+79137650440"
},
{
"name": "Николаева Наталья Николаевна", 
"birth": "2003-05-09", 
"add_ress": "Новгородская область город Великий Новгород улица Мира 40", 
"e-mail": "koroleva_kira@example.com",
"group_id": db.groups.findOne({"name": "МО103"}, {_id: 1})._id, 
"budget": "true",
"phone": "+79137650440"
},
{
"name": "Орлова Ольга Орловна", 
"birth": "2003-06-22", 
"add_ress": "Вологодская область город Вологда улица Ленина 41", 
"e-mail": "sokolova_sonya@example.com",
"group_id": db.groups.findOne({"name": "МО103"}, {_id: 1})._id, 
"budget": "true",
"phone": "+79137650440"
},
{
"name": "Павлова Полина Павловна", 
"birth": "2003-07-19", 
"add_ress": "Чеченская Республика город Грозный улица Советская 42", 
"e-mail": "orlova_olga@example.com",
"group_id": db.groups.findOne({"name": "БИ101"}, {_id: 1})._id, 
"budget": "false",
"phone": "+79137650440"
},
{
"name": "Романова Раиса Романовна", 
"birth": "2003-08-29", 
"add_ress": "Кабардино-Балкарская Республика город Нальчик улица Победы 43", 
"e-mail": "efremova_ekaterina@example.com",
"group_id": db.groups.findOne({"name": "БИ101"}, {_id: 1})._id, 
"budget": "true",
"phone": "+79137650440"
},
{
"name": "Сергеева Светлана Сергеевна", 
"birth": "2003-09-14", 
"add_ress": "Республика Дагестан город Махачкала улица Ломоносова 44", 
"e-mail": "alexeev_alexey@example.com",
"group_id": db.groups.findOne({"name": "БИ101"}, {_id: 1})._id, 
"budget": "true",
"phone": "+79137650440"
},
{
"name": "Трофимова Тамара Трофимовна", 
"birth": "2003-10-31", 
"add_ress": "Карачаево-Черкесская Республика город Черкесск улица Кирова 45", 
"e-mail": "bogdanov_bogdan@example.com",
"group_id": db.groups.findOne({"name": "БИ101"}, {_id: 1})._id, 
"budget": "true",
"phone": "+79137650440"
},
{
"name": "Ульянова Ульяна Ульяновна", 
"birth": "2003-11-23", 
"add_ress": "Республика Ингушетия город Назрань улица Ленина 46", 
"e-mail": "vladimirov_vladimir@example.com",
"group_id": db.groups.findOne({"name": "БИ101"}, {_id: 1})._id, 
"budget": "true",
"phone": "+79137650440"
},
{
"name": "Федорова Фаина Федоровна", 
"birth": "2003-12-06", 
"add_ress": "Республика Адыгея город Майкоп улица Мира 47", 
"e-mail": "denisov_denis@example.com",
"group_id": db.groups.findOne({"name": "БИ101"}, {_id: 1})._id, 
"budget": "false",
"phone": "+79137650440"
},
{
"name": "Харитонова Харитина Харитоновна", 
"birth": "2004-01-13", 
"add_ress": "Республика Калмыкия город Элиста улица Гагарина 48", 
"e-mail": "kirillov_kirill@example.com",
"group_id": db.groups.findOne({"name": "БИ101"}, {_id: 1})._id, 
"budget": "false",
"phone": "+79137650440"
},
{
"name": "Цветкова Цветана Цветковна", 
"birth": "2004-02-18", 
"add_ress": "Республика Коми город Сыктывкар улица Пушкина 49", 
"e-mail": "lavrentiev_lavrentiy@example.com",
"group_id": db.groups.findOne({"name": "БИ102"}, {_id: 1})._id, 
"budget": "true",
"phone": "+79137650440"
},
{
"name": "Чапаева Чеслава Чапаевна", 
"birth": "2004-03-22", 
"add_ress": "Республика Марий Эл город Йошкар-Ола улица Ломоносова 50", 
"e-mail": "nazarov_nazar@example.com",
"group_id": db.groups.findOne({"name": "БИ102"}, {_id: 1})._id, 
"budget": "true",
"phone": "+79137650440"
},
{
"name": "Шестакова Шамиля Шестаковна", 
"birth": "2004-04-30", 
"add_ress": "Республика Мордовия город Саранск улица Ленина 51", 
"e-mail": "petrov_oleg@example.com",
"group_id": db.groups.findOne({"name": "БИ102"}, {_id: 1})._id, 
"budget": "false",
"phone": "+79137650440"
},
{
"name": "Щукина Щука Щукина", 
"birth": "2004-05-11", 
"add_ress": "Республика Татарстан город Казань улица Победы 52", 
"e-mail": "frolov_frol@example.com",
"group_id": db.groups.findOne({"name": "БИ102"}, {_id: 1})._id, 
"budget": "true",
"phone": "+79137650440"
},
{
"name": "Эрнестова Эльвира Эрнестовна", 
"birth": "2004-06-28", 
"add_ress": "Республика Башкортостан город Уфа улица Ломоносова 53", 
"e-mail": "zhukov_viktor@example.com",
"group_id": db.groups.findOne({"name": "БИ102"}, {_id: 1})._id, 
"budget": "true",
"phone": "+79137650440"
},
{
"name": "Юрьева Юлия Юрьевна", 
"birth": "2004-07-16", 
"add_ress": "Удмуртская Республика город Ижевск улица Мира 54", 
"e-mail": "sokolov_artem@example.com",
"group_id": db.groups.findOne({"name": "БИ102"}, {_id: 1})._id, 
"budget": "true",
"phone": "+79137650440"
},
{
"name": "Яковлева Яна Яковлевна", 
"birth": "2004-08-24", 
"add_ress": "Республика Чувашия город Чебоксары улица Гагарина 55", 
"e-mail": "tikhonov_timofey@example.com",
"group_id": db.groups.findOne({"name": "БИ102"}, {_id: 1})._id, 
"budget": "false",
"phone": "+79137650440"
},
{
"name": "Андреев Андрей Андреевич", 
"birth": "2004-09-30", 
"add_ress": "Республика Карелия город Петрозаводск улица Ленина 56", 
"e-mail": "gavrilov_gavriil@example.com",
"group_id": db.groups.findOne({"name": "БИ103"}, {_id: 1})._id, 
"budget": "false",
"phone": "+79137650440"
},
{
"name": "Богданов Богдан Богданович", 
"birth": "2004-10-13", 
"add_ress": "Республика Тыва город Кызыл улица Пушкина 57", 
"e-mail": "rogozov_rodion@example.com",
"group_id": db.groups.findOne({"name": "БИ103"}, {_id: 1})._id, 
"budget": "false",
"phone": "+79137650440"
},
{
"name": "Владимиров Владимир Владимирович", 
"birth": "2004-11-21", 
"add_ress": "Республика Хакасия город Абакан улица Ломоносова 58", 
"e-mail": "lukin_luka@example.com",
"group_id": db.groups.findOne({"name": "БИ103"}, {_id: 1})._id, 
"budget": "false",
"phone": "+79137650440"
},
{
"name": "Георгиев Георгий Георгиевич", 
"birth": "2004-12-09", 
"add_ress": "Республика Алтай город Горно-Алтайск улица Победы 59", 
"e-mail": "semenov_semen@example.com",
"group_id": db.groups.findOne({"name": "БИ103"}, {_id: 1})._id, 
"budget": "true",
"phone": "+79137650440"
},
{
"name": "Денисов Денис Денисович", 
"birth": "2005-01-26", 
"add_ress": "Республика Бурятия город Улан-Удэ улица Ленина 60", 
"e-mail": "usov_ustim@example.com",
"group_id": db.groups.findOne({"name": "БИ103"}, {_id: 1})._id, 
"budget": "true",
"phone": "+79137650440"
},
{
"name": "Емельянов Емельян Емельянович", 
"birth": "2005-02-14", 
"add_ress": "Республика Саха город Якутск улица Мира 61", 
"e-mail": "felixov_felix@example.com",
"group_id": db.groups.findOne({"name": "БИ103"}, {_id: 1})._id, 
"budget": "false",
"phone": "+79137650440"
},
{
"name": "Журавлев Журавель Журавлевич", 
"birth": "2005-03-08", 
"add_ress": "Забайкальский край город Чита улица Гагарина 62", 
"e-mail": "horoshov_hariton@example.com",
"group_id": db.groups.findOne({"name": "БИ103"}, {_id: 1})._id, 
"budget": "true",
"phone": "+79137650440"
},
{
"name": "Зиновьев Зиновий Зиновьевич", 
"birth": "2005-04-19", 
"add_ress": "Камчатский край город Петропавловск-Камчатский улица Пушкина 63", 
"e-mail": "tchaykov_tchaikov@example.com",
"group_id": db.groups.findOne({"name": "БИ103"}, {_id: 1})._id, 
"budget": "true",
"phone": "+79137650440"
},
{
"name": "Ильин Илья Ильич", 
"birth": "2005-05-15", 
"add_ress": "Магаданская область город Магадан улица Ломоносова 64", 
"e-mail": "stepanov_stepan@example.com",
"group_id": db.groups.findOne({"name": "БИ103"}, {_id: 1})._id, 
"budget": "true",
"phone": "+79137650440"
},
{
"name": "Кириллов Кирилл Кириллович", 
"birth": "2005-06-03", 
"add_ress": "Сахалинская область город Южно-Сахалинск улица Ленина 65", 
"e-mail": "filipov_filip@example.com",
"group_id": db.groups.findOne({"name": "БИ103"}, {_id: 1})._id, 
"budget": "true",
"phone": "+79137650440"
},
{
"name": "Лаврентьев Лаврентий Лаврентьевич", 
"birth": "2005-07-27", 
"add_ress": "Амурская область город Благовещенск улица Победы 66", 
"e-mail": "yermolov_yermolai@example.com",
"group_id": db.groups.findOne({"name": "БИ103"}, {_id: 1})._id, 
"budget": "true",
"phone": "+79137650440"
},
{
"name": "Матвеев Матвей Матвеевич", 
"birth": "2005-08-22", 
"add_ress": "Курганская область город Курган улица Ломоносова 67", 
"e-mail": "konstantinov_konstantin@example.com",
"group_id": db.groups.findOne({"name": "БИ103"}, {_id: 1})._id, 
"budget": "true",
"phone": "+79137650440"
},
{
"name": "Назаров Назар Назарович", 
"birth": "2005-09-13", 
"add_ress": "Чукотский автономный округ город Анадырь улица Мира 68", 
"e-mail": "gennadiev_gennady@example.com",
"group_id": db.groups.findOne({"name": "БИ103"}, {_id: 1})._id, 
"budget": "true",
"phone": "+79137650440"
},
{
"name": "Овчинников Овчинник Овчинникович", 
"birth": "2005-10-07", 
"add_ress": "Ненецкий автономный округ город Нарьян-Мар улица Ленина 69", 
"e-mail": "valeriev_valeriy@example.com",
"group_id": db.groups.findOne({"name": "БИ103"}, {_id: 1})._id, 
"budget": "true",
"phone": "+79137650440"
},
{
"name": "Петров Петр Петрович", 
"birth": "2005-11-18", 
"add_ress": "Ямало-Ненецкий автономный округ город Салехард улица Гагарина 70", 
"e-mail": "rusanov_ruslan@example.com",
"group_id": db.groups.findOne({"name": "БИ103"}, {_id: 1})._id, 
"budget": "true",
"phone": "+79137650440"
},
{
"name": "Радионов Радион Радионович", 
"birth": "2005-12-29", 
"add_ress": "Ханты-Мансийский автономный округ город Ханты-Мансийск улица Ломоносова 71", 
"e-mail": "saveliev_saveliy@example.com",
"group_id": db.groups.findOne({"name": "БИ103"}, {_id: 1})._id, 
"budget": "true",
"phone": "+79137650440"
},
])