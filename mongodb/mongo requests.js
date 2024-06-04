// Вывести списки групп по заданному направлению с указание номера группы в формате ФИО, бюджет/внебюджет. Студентов выводить в алфавитном порядке.
const direction = "Экономика";
const groups = db.groups.find({ direction: direction }, { name: 1, _id: 1 }).toArray();
groups.forEach(group => {
  console.log(`\nГруппа: ${group.name}`);
  const students = db.students.aggregate([
    {
      $match: { group_id: group._id }
    },
    {
      $lookup: {
        from: "groups",
        localField: "group_id",
        foreignField: "_id",
        as: "group_info"
      }
    },
    {
      $unwind: "$group_info"
    },
    {
      $sort: { name: 1 }
    },
    {
      $project: {
        name: 1,
        budget: 1,
        group: "$group_info.name"
      }
    }
  ]).toArray();
  students.forEach(student => {
    console.log(
      `${student.name}, ${student.budget ? "бюджет" : "внебюджет"}`
    );
  });
});

// Вывести студентов с фамилией, начинающейся с первой буквы вашей фамилии, с указанием ФИО, номера группы и направления обучения.
db.students.aggregate([
    {
      $lookup: {
        from: "groups",
        localField: "group_id",
        foreignField: "_id",
        as: "group_info"
      }
    },
    {
      $unwind: "$group_info"
    },
    {
      $match: {
        "name": { $regex: "^П" }
      }
    },
    {
      $project: {
        _id: 0,
        name: 1,
        group_name: "$group_info.name",
        direction: "$group_info.direction"
      }
    }
  ])

// Вывести список студентов для поздравления по месяцам в формате Фамилия И.О., день и название месяца рождения, номером группы и направлением обучения.
db.students.aggregate([
    {
      $project: {
        _id: 0,
        Фамилия: { $arrayElemAt: [ { $split: ["$name", " "] }, 0 ] },
        Инициалы: { $concat: [ { $arrayElemAt: [ { $split: ["$name", " "] }, 1 ] }, " ", { $arrayElemAt: [ { $split: ["$name", " "] }, 2 ] }, "." ] },
        День: { $dayOfMonth: { $dateFromString: { format: "%Y-%m-%d", date: "$birth" } } },
        Месяц: { $month: { $dateFromString: { format: "%Y-%m-%d", date: "$birth" } } },
        "Номер группы": { $arrayElemAt: [ { $split: [ { $arrayElemAt: [{ $split: ["$name", " "] }, 0 ] }, " " ] }, 0 ] },
        "Направление обучения": { $arrayElemAt: [ { $split: [ { $arrayElemAt: [{ $split: ["$name", " "] }, 0 ] }, " " ] }, 1 ] }
      }
    },
    {
      $lookup: {
        from: "groups",
        localField: "Номер группы",
        foreignField: "name",
        as: "groupInfo"
      }
    },
    {
      $unwind: "$groupInfo"
    },
    {
      $project: {
        Фамилия: 1,
        Инициалы: 1,
        День: 1,
        Месяц: 1,
        "Номер группы": "$groupInfo.name",
        "Направление обучения": "$groupInfo.direction"
      }
    },
    {
      $sort: { Месяц: 1, День: 1 }
    }
  ])

//  Вывести студентов с указанием возраста в годах.
db.students.aggregate([
    {
      $project: {
        _id: 0,
        name: 1,
        age: {
          $floor: {
            $divide: [
              { $subtract: [ new Date(), new Date("$birth") ] },
              1000 * 60 * 60 * 24 * 365.25
            ]
          }
        }
      }
    }
  ])

// Вывести студентов, у которых день рождения в текущем месяце.
const currentMonth = new Date().getMonth() + 1
db.students.aggregate([
  {
    $match: {
      $expr: {
        $eq: [
          { $month: "$birth" },
          currentMonth
        ]
      }
    }
  },
  {
    $project: {
      _id: 0,
      name: 1
    }
  }
])

//Вывести количество студентов по каждому направлению.
db.students.aggregate([
    {
      $lookup: {
        from: "groups",
        localField: "group_id",
        foreignField: "_id",
        as: "group"
      }
    },
    {
      $unwind: "$group"
    },
    {
      $group: {
        _id: "$group.direction",
        count: { $sum: 1 }
      }
    },
    {
      $project: {
        _id: 0,
        direction: "$_id",
        count: 1
      }
    }
  ])

// Вывести количество бюджетных и внебюджетных мест по группам. Для каждой группы вывести номер и название направления.
db.students.aggregate([
    {
      $lookup: {
        from: "groups",
        localField: "group_id",
        foreignField: "_id",
        as: "group"
      }
    },
    {
      $unwind: "$group"
    },
    {
      $group: {
        _id: {
          group_name: "$group.name",
          direction: "$group.direction"
        },
        budget: { $sum: { $cond: { if: "$budget", then: 1, else: 0 } } },
        nonBudget: { $sum: { $cond: { if: { $not: "$budget" }, then: 1, else: 0 } } }
      }
    },
    {
      $project: {
        _id: 0,
        group_name: "$_id.group_name",
        direction: "$_id.direction",
        budget: 1,
        nonBudget: 1
      }
    }
  ])

// Вывести списки групп каждому предмету с указанием преподавателя.
db.schedule.aggregate([
    {
        $group: {
            _id: {subject: "$subject", teacher: "$teacher"},
            groups: { $addToSet: "$group" }
        }
    },
    {
        $project: {
            _id: 0,
            subject: "$_id.subject",
            teacher: "$_id.teacher",
            groups: "$groups"
        }
    }
]).pretty()

// Определить, какую дисциплину изучает максимальное количество студентов.
const groupCounts = db.groups.aggregate([
    {
      $group: {
        _id: null,
        totalStudents: { $sum: 1 }
      }
    },
    {
      $project: {
        _id: 0,
        totalStudents: 1
      }
    }
  ]).toArray()[0].totalStudents;
  
  const subjectCounts = db.schedule.aggregate([
    {
      $group: {
        _id: "$subject",
        studentCount: { $sum: groupCounts }
      }
    },
    {
      $project: {
        _id: 0,
        subject: "$_id",
        studentCount: 1
      }
    }
  ]).sort({ studentCount: -1 }).limit(1);
  
  printjson(subjectCounts.toArray()[0]);

// Определить сколько студентов обучатся у каждого их преподавателей.
db.marks.aggregate([
    {
      $group: {
        _id: "$teacher",
        studentCount: { $addToSet: "$student" }
      }
    },
    {
      $project: {
        _id: 0,
        teacher: "$_id",
        studentCount: { $size: "$studentCount" }
      }
    }
  ]).pretty()

// Определить долю ставших студентов по каждой дисциплине (не оценки или 2 считать не сдавшими).
db.marks.aggregate([
    {
      $group: {
        _id: { subject: "$subject", term: "$term" },
        totalStudents: { $addToSet: "$student" },
        passingStudents: { $addToSet: { $cond: { if: { $gte: ["$mark", 3] }, then: "$student", else: "$$REMOVE" } } }
      }
    },
    {
      $project: {
        _id: 0,
        subject: "$_id.subject",
        term: "$_id.term",
        totalStudents: { $size: "$totalStudents" },
        passingStudents: { $size: "$passingStudents" },
        passingRate: { $round: { $multiply: [ { $divide: [ { $size: "$passingStudents" }, { $size: "$totalStudents" } ] }, 100 ] } }
      }
    }
  ]).pretty()

// Определить среднюю оценку по предметам (для сдавших студентов)
db.marks.aggregate([
    {
      $match: { 
        mark: { $gte: 3 }
      }
    },
    {
      $group: {
        _id: "$subject",
        averageMark: { $avg: "$mark" }
      }
    },
    {
      $project: {
        _id: 0,
        subject: "$_id",
        averageMark: { $round: { $multiply: [ "$averageMark", 10 ] } } / 10
      }
    }
  ]).pretty()

// Определить группу с максимальной средней оценкой (включая не сдавших)
db.marks.aggregate([
    {
      $lookup: {
        from: "students",
        localField: "student",
        foreignField: "_id",
        as: "studentInfo"
      }
    },
    {
      $unwind: "$studentInfo"
    },
    {
      $lookup: {
        from: "groups",
        localField: "studentInfo.group_id",
        foreignField: "_id",
        as: "groupInfo"
      }
    },
    {
      $unwind: "$groupInfo"
    },
    {
      $group: {
        _id: "$groupInfo.name",
        averageMark: { $avg: "$mark" }
      }
    },
    {
      $sort: { averageMark: -1 }
    },
    {
      $limit: 1
    },
    {
      $project: {
        _id: 0,
        group: "$_id",
        averageMark: { $round: { $multiply: [ "$averageMark", 10 ] } } / 10
      }
    }
  ]).pretty()

// Вывести студентов со всем оценками отлично и не имеющих несданный экзамен.
db.marks.aggregate([
    {
      $group: {
        _id: "$student",
        averageMark: { $avg: "$mark" },
        minMark: { $min: "$mark" }
      }
    },
    {
      $match: {
        averageMark: 5, 
        minMark: 5 
      }
    },
    {
      $lookup: {
        from: "students",
        localField: "_id",
        foreignField: "_id",
        as: "studentInfo"
      }
    },
    {
      $unwind: "$studentInfo"
    },
    {
      $project: {
        _id: 0,
        name: "$studentInfo.name",
        averageMark: 1
      }
    }
  ]).pretty()

// Вывести кандидатов на отчисление (не сдан не менее двух предметов)
db.students.aggregate([
    {
      $lookup: {
        from: "marks",
        localField: "_id",
        foreignField: "student",
        as: "marks"
      }
    },
    {
      $unwind: "$marks"
    },
    {
      $group: {
        _id: {
          student: "$name",
          term: "$marks.term",
          subject: "$marks.subject"
        },
        count: { $sum: 1 }
      }
    },
    {
      $group: {
        _id: "$_id.student",
        terms: { $push: { term: "$_id.term", subject: "$_id.subject" } },
        count: { $sum: "$count" }
      }
    },
    {
      $addFields: {
        failed_count: {
          $cond: { if: { $lt: ["$count", 10] }, then: 0, else: { $divide: ["$count", 10] } }
        }
      }
    },
    {
      $project: {
        _id: 0,
        student: "$_id",
        terms: 1,
        failed_count: 1,
        _tmp: {
          $cond: { if: { $gt: ["$failed_count", 1] }, then: 1, else: 0 }
        }
      }
    },
    {
      $addFields: {
        _tmp2: { $arrayElemAt: ["$_tmp", 0] }
      }
    },
    {
      $match: {
        _tmp2: 1
      }
    },
    {
      $sort: {
        student: 1
      }
    }
  ])

// Вывести по заданному предмету количество посещенных занятий.
const subject = "Экономика"; 
const attendanceRecords = db.attendence.aggregate([
    {
        $lookup: {
            from: "schedule",
            localField: "schedule",
            foreignField: "_id",
            as: "schedule_info"
        }
    },
    {
        $unwind: "$schedule_info"
    },
    {
        $match: {
            "schedule_info.subject": subject,
            "attendence": true
        }
    },
    {
        $group: {
            _id: null,
            count: { $sum: 1 }
        }
    }
]).toArray();

if (attendanceRecords.length > 0) {
    console.log(`Количество посещенных занятий по предмету "${subject}": ${attendanceRecords[0].count}`);
} else {
    console.log(`Занятий по предмету "${subject}" не найдено.`);
}

// Вывести по заданному предмету количество пропущенных занятий.
const subject = "Экономика"; 
const attendanceRecords = db.attendence.aggregate([
    {
        $lookup: {
            from: "schedule",
            localField: "schedule",
            foreignField: "_id",
            as: "schedule_info"
        }
    },
    {
        $unwind: "$schedule_info"
    },
    {
        $match: {
            "schedule_info.subject": subject,
            "attendence": false
        }
    },
    {
        $group: {
            _id: null,
            count: { $sum: 1 }
        }
    }
]).toArray();

if (attendanceRecords.length > 0) {
    console.log(`Количество пропущенных занятий по предмету "${subject}": ${attendanceRecords[0].count}`);
} else {
    console.log(`Занятий по предмету "${subject}" не найдено.`);
}

// Вывести по заданному преподавателю количество студентов на каждом занятии.
const teacher = "Иванов Артём Адамович";
const attendanceStats = db.attendence.aggregate([
  {
    $lookup: {
      from: "schedule",
      localField: "schedule",
      foreignField: "_id",
      as: "schedule_info"
    }
  },
  {
    $unwind: "$schedule_info"
  },
  {
    $match: {
      "schedule_info.teacher": teacher
    }
  },
  {
    $group: {
      _id: "$schedule_info._id",
      studentCount: { $sum: 1 }
    }
  },
  {
    $lookup: {
      from: "schedule",
      localField: "_id",
      foreignField: "_id",
      as: "schedule_info"
    }
  },
  {
    $unwind: "$schedule_info"
  },
  {
    $project: {
      _id: 0,
      subject: "$schedule_info.subject",
      date: "$schedule_info.date",
      number_pair: "$schedule_info.number_pair",
      studentCount: 1
    }
  }
]).toArray();

console.log(`Количество студентов на занятиях у ${teacher}:`);
attendanceStats.forEach(stat => {
  console.log(
    `Предмет: ${stat.subject}, Дата: ${stat.date.toLocaleDateString()}, Пара: ${stat.number_pair}, Студентов: ${stat.studentCount}`
  );
});

//  Для каждого студента вывести общее время, потраченное на изучение каждого предмета.
const studyTime = db.attendence.aggregate([
    {
      $lookup: {
        from: "schedule",
        localField: "schedule",
        foreignField: "_id",
        as: "schedule_info"
      }
    },
    {
      $unwind: "$schedule_info"
    },
    {
      $group: {
        _id: "$student",
        totalTime: { $sum: 1 }
      }
    },
    {
      $lookup: {
        from: "students",
        localField: "_id",
        foreignField: "_id",
        as: "student_info"
      }
    },
    {
      $unwind: "$student_info"
    },
    {
      $lookup: {
        from: "schedule",
        localField: "schedule",
        foreignField: "_id",
        as: "schedule_info"
      }
    },
    {
      $unwind: "$schedule_info"
    },
    {
      $group: {
        _id: {
          student: "$student_info.name",
          subject: "$schedule_info.subject"
        },
        totalTime: { $sum: 1 }
      }
    },
    {
      $sort: {
        _id: 1
      }
    },
    {
      $project: {
        student: "$_id.student",
        subject: "$_id.subject",
        totalTime: "$totalTime"
      }
    }
  ]).toArray();
  
  console.log("Общее время, потраченное на изучение каждого предмета для каждого студента:");
  studyTime.forEach(record => {
    console.log(
      `Студент: ${record.student}, Предмет: ${record.subject}, Время (в занятиях): ${record.totalTime}`
    );
  });

