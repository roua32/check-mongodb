//1
use("contact");
//2
// db.createCollection("contactlist")
//3

// db.contactlist.insertMany(
//     [
//         { lastName: "Ben", firstName: "Moris", email: "ben@gmail.com", age: 26 },
//         { lastName: "Kefi", firstName: "Seif", email: "kefi@gmail.com", age: 15 },
//         { lastName: "Emilie", firstName: "Brouge", email: "emilie.b@gmail.com", age: 40 },
//         { lastName: "Alex", firstName: "Brown", age: 4 },
//         { lastName: "Denzel", firstName: "Washington", age: 3 }
//       ]
// )

// db.contactlist.find();

//4

// db.contactlist.findOne(
//     { _id: ObjectId("67698a34c9ba92b5b9a698d0") }
// );

//5
// db.contactlist.find({ age: { $gt: 18 } });

//6
// db.contactlist.find({
//     age: { $gt: 18 },
//     $or: [
//         { firstName: { $regex: /li/i } },
//         { lastName: { $regex: /li/i } }
//     ]
// });
//7
// db.contactlist.updateOne(
//     { firstName: "Seif" },
//     { $set: { firstName: "Anis" } }
//   );

// db.contactlist.find()

//8
// db.contactlist.deleteMany({ age: { $lt: 5 } });
//9
db.contactlist.find();
