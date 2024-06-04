-- Вывести списки групп по заданному направлению с указание номера группы в формате ФИО, бюджет/внебюджет. Студентов выводить в алфавитном порядке.
-- Необходимо указать название направления перед запуском!!!
-- Сортировка происходит сначала по группе, затем по алфавиту ФИО
SELECT
    s.name AS 'ФИО студента',
    g.name AS 'Номер группы',
    CASE 
        WHEN
            s.BUDGET = 1
            THEN
                'Бюджет'
        ELSE
            'Внебюджет'
    END AS
        'Вид оплаты обучения'
FROM 
    STUDS s
JOIN 
    GROUPS g ON s.GROUP_ID = g.ID
JOIN
    DIRECTIONS d ON g.DIR_ID = d.ID
WHERE 
    d.name = 'Необходимое направление'
ORDER BY 
    g.name, s.name;

-- Вывести студентов с фамилией, начинающейся с первой буквы вашей фамилии, с указанием ФИО, номера группы и направления обучения.
SELECT 
    s.name AS 'ФИО',
    g.name AS 'Номер группы',
    d.name AS 'Название направления'
FROM 
    STUDS s
JOIN 
    GROUPS g ON s.GROUP_ID = g.ID
JOIN 
    DIRECTIONS d ON g.DIR_ID = d.ID
WHERE 
    s.name LIKE 'П%'
ORDER BY 
    s.name, g.name;

-- Вывести список студентов для поздравления по месяцам рождения.
SELECT 
    s.name AS 'ФИО',
    DATENAME(day, s.BIRTH) AS 'Дата рождения',
    DATENAME(month, s.BIRTH) AS 'Месяц рождения',
    g.name AS 'Номер группы',
    d.name AS 'Название направления'
FROM 
    STUDS s
JOIN 
    GROUPS g ON s.GROUP_ID = g.ID
JOIN 
    DIRECTIONS d ON g.DIR_ID = d.ID
ORDER BY 
    MONTH(s.BIRTH), DAY(s.BIRTH), s.name;

-- Вывести студентов с указанием возраста в годах.
SELECT
    s.name AS 'ФИО',
    DATEDIFF(year, s.BIRTH, GETDATE()) AS 'Возраст',
    g.name AS 'Номер группы',
    d.name AS 'Название направления'
FROM
    STUDS s
JOIN
    GROUPS g ON s.GROUP_ID = g.ID
JOIN
    DIRECTIONS d ON g.DIR_ID = d.ID
ORDER BY
    DATEDIFF(year, s.BIRTH, GETDATE()), s.name;

-- Вывести студентов с днем рождения в текущем месяце.
SELECT
    s.name AS 'ФИО',
    DATENAME(day, s.BIRTH) AS 'День рождения',
    g.name AS 'Номер группы',
    d.name AS 'Название направления'
FROM
    STUDS s
JOIN
    GROUPS g ON s.GROUP_ID = g.ID
JOIN
    DIRECTIONS d ON g.DIR_ID = d.ID
WHERE
    MONTH(s.BIRTH) = MONTH(GETDATE())
ORDER BY
    DAY(s.BIRTH), s.name;

-- Вывести количество студентов по каждому направлению.
SELECT
    d.name AS 'Название направления',
    COUNT(*) AS 'Количество студентов'
FROM
    STUDS s
JOIN
    GROUPS g ON s.GROUP_ID = g.ID
JOIN
    DIRECTIONS d ON g.DIR_ID = d.ID
GROUP BY
    d.name;

-- Вывести количество бюджетных и внебюджетных мест по группам.
SELECT
    g.name AS 'Номер группы',
    d.name AS 'Название направления',
    SUM(CASE WHEN s.BUDGET = 1 THEN 1 ELSE 0 END) AS 'Количество бюджетных мест',
    SUM(CASE WHEN s.BUDGET = 0 THEN 1 ELSE 0 END) AS 'Количество внебюджетных мест'
FROM 
    STUDS s
JOIN 
    GROUPS g ON s.GROUP_ID = g.ID
JOIN 
    DIRECTIONS d ON g.DIR_ID = d.ID
GROUP BY 
    d.name, g.name;

-- Вывести списки групп по каждому предмету с указанием преподавателя.
SELECT
    g.name AS 'Номер группы',
    s.name AS 'Название дисциплины',
    t.name AS 'ФИО преподавателя'
FROM
    GROUPS g
JOIN
    DIRECTIONS d ON g.dir_id = d.id
JOIN
    TEACHERS_DIRS_SUBJECTS tds ON d.ID = tds.DIRECTION_ID
JOIN
    SUBJECTS s ON tds.SUBJECT_ID = s.ID
JOIN
    TEACHERS t ON tds.TEACHER_ID = t.ID
ORDER BY
    g.name, s.name, t.name;

-- Определить, какую дисциплину изучает максимальное количество студентов.
SELECT TOP
    1 s.name AS 'Название дисциплины',
    COUNT(*) AS 'Количество студентов'
FROM
    MARKS m
JOIN
    TEACHERS_DIRS_SUBJECTS tds ON m.SUBJ_TEACHER_ID = tds.ID
JOIN
    SUBJECTS s ON tds.SUBJECT_ID = s.ID
GROUP BY
    s.name
ORDER BY
    COUNT(*) DESC;

-- Определить, сколько студентов обучаются у каждого из преподавателей.
SELECT 
    t.name AS 'ФИО преподавателя',
    COUNT(s.ID) AS 'Количество студентов'
FROM
    TEACHERS t
JOIN
    TEACHERS_DIRS_SUBJECTS tds ON t.ID = tds.TEACHER_ID
JOIN
    DIRECTIONS d ON d.ID = tds.DIRECTION_ID
JOIN
    GROUPS g ON g.DIR_ID = d.ID
JOIN
    STUDS s ON s.GROUP_ID = g.ID
GROUP BY
    t.name;

-- Определить долю сдавших студентов по каждой дисциплине (не оценки или 2 считать не сдавшими).
SELECT
    s.name 'Название дисциплины',
    ROUND(CAST(COUNT(CASE WHEN m.MARK > 2 THEN 1 END) AS FLOAT) / COUNT(*), 2) AS 'Доля сдавших'
FROM
    MARKS m
JOIN
    TEACHERS_DIRS_SUBJECTS tds ON m.SUBJ_TEACHER_ID = tds.ID
JOIN
    SUBJECTS s ON tds.SUBJECT_ID = s.ID
GROUP BY
    s.name;

-- Определить среднюю оценку по предметам (для сдавших студентов).
SELECT
    s.name 'Название дисциплины',
    ROUND(AVG(CAST(m.MARK AS FLOAT)), 2) AS 'Средняя оценка'
FROM
    MARKS m
JOIN
    TEACHERS_DIRS_SUBJECTS tds ON m.SUBJ_TEACHER_ID = tds.ID
JOIN
    SUBJECTS s ON tds.SUBJECT_ID = s.ID
WHERE
    m.MARK > 2
GROUP BY
    s.name;

-- Определить группу с максимальной средней оценкой (включая не сдавших).
SELECT TOP
    1 g.name 'Номер группы',
    ROUND(AVG(CAST(m.MARK AS FLOAT)), 2) AS 'Средняя оценка'
FROM
    MARKS m
JOIN
    TEACHERS_DIRS_SUBJECTS tds ON m.SUBJ_TEACHER_ID = tds.ID
JOIN
    SUBJECTS s ON tds.SUBJECT_ID = s.ID
JOIN
    STUDS st ON m.STUD_ID = st.ID
JOIN
    groups g ON st.GROUP_ID = g.ID
GROUP BY
    g.name
ORDER BY
    ROUND(AVG(CAST(m.MARK AS FLOAT)), 2) DESC;

-- Вывести студентов со всеми оценками отлично и не имеющих несданный экзамен.
SELECT 
    s.name AS 'ФИО студента'
FROM 
    STUDS s
WHERE 
    NOT EXISTS (
        SELECT 
            1
        FROM 
            MARKS m
        JOIN 
            TEACHERS_DIRS_SUBJECTS tds ON m.SUBJ_TEACHER_ID = tds.ID
        WHERE 
            m.STUD_ID = s.ID AND m.MARK < 5
    )
    AND EXISTS (
        SELECT 
            1 
        FROM 
            MARKS m 
        JOIN 
            TEACHERS_DIRS_SUBJECTS tds ON m.SUBJ_TEACHER_ID = tds.ID
        WHERE 
            m.STUD_ID = s.ID AND m.MARK = 5
    );

-- Вывести кандидатов на отчисление (не сдано не менее двух предметов).
SELECT
    st.name AS 'ФИО студента'
FROM
    STUDS st
WHERE (
    SELECT
        COUNT(DISTINCT tds.SUBJECT_ID)
    FROM
        MARKS m
    JOIN
        TEACHERS_DIRS_SUBJECTS tds ON m.SUBJ_TEACHER_ID = tds.ID
    JOIN
        SUBJECTS s ON tds.SUBJECT_ID = s.ID
    WHERE
        m.STUD_ID = st.ID AND m.MARK > 2) < 2
ORDER BY
    st.name;

-- Вывести по заданному предмету количество посещенных занятий.
SELECT 
    s.name AS 'Название дисциплины',
    COUNT(a.PRESENSE) AS 'Количество посещений'
FROM 
    ATTEND a
JOIN 
    LESSONS_SCH sch ON a.SCHEDULE_ID = sch.ID
JOIN 
    TEACHERS_DIRS_SUBJECTS tds ON sch.SUBJ_TEACHER_ID = tds.ID
JOIN 
    SUBJECTS s ON tds.SUBJECT_ID = s.ID
WHERE 
    s.name = 'Литература' AND a.PRESENSE = 1
GROUP BY 
    s.name;

-- Вывести по заданному предмету количество пропущенных занятий.
SELECT
    s.name 'Название дисциплины',
    COUNT(a.PRESENSE) AS 'Количество пропусков'
FROM
    ATTEND a
JOIN
    LESSONS_SCH sch ON a.SCHEDULE_ID = sch.ID
JOIN
    TEACHERS_DIRS_SUBJECTS tds ON sch.SUBJ_TEACHER_ID = tds.ID
JOIN
    SUBJECTS s ON tds.SUBJECT_ID = s.ID
WHERE
    s.name = 'Литература' AND a.PRESENSE = 0
GROUP BY
    s.name;

-- Вывести по заданному преподавателю количество студентов на каждом занятии.
DECLARE @cur_teacher NVARCHAR(255) = 'Иванов Алексей Владимирович';

SELECT
    s.name AS 'Название дисциплины',
    COUNT(DISTINCT a.STUD_ID) AS 'Количество студентов'
FROM
    ATTEND a
JOIN
    LESSONS_SCH sch ON a.SCHEDULE_ID = sch.ID
JOIN
    TEACHERS_DIRS_SUBJECTS tds ON sch.SUBJ_TEACHER_ID = tds.ID
JOIN
    SUBJECTS s ON tds.SUBJECT_ID = s.ID
JOIN
    TEACHERS t ON tds.TEACHER_ID = t.ID
WHERE
    t.name = @cur_teacher
GROUP BY
    s.name;

-- Для каждого студента вывести общее время, потраченное на изучение каждого предмета.
SELECT
    st.name AS 'ФИО студента',
    s.name AS 'Название дисциплины',
    CONVERT(VARCHAR, DATEADD(SECOND, SUM(DATEDIFF(SECOND, p.ST_PAIR, p.END_PAIR)), 0), 108) AS 'Общее время'
FROM
    ATTEND a
JOIN
    LESSONS_SCH sch ON a.SCHEDULE_ID = sch.ID
JOIN
    TEACHERS_DIRS_SUBJECTS tds ON sch.SUBJ_TEACHER_ID = tds.ID
JOIN
    SUBJECTS s ON tds.SUBJECT_ID = s.ID
JOIN
    STUDS st ON a.STUD_ID = st.ID
JOIN
    PAIRTIME p ON sch.NUMBER_PAIR = p.ID
GROUP BY
    st.name, s.name
ORDER BY
    st.name, s.name;
