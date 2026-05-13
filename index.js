let contacts = []

//Adding of contacts
contacts.push({
    name : "Maimoona Gull",
    phone : 312345678,
    email : "gullmaimoona853@gmail.com"
})

contacts.push({
    name : "Shanaya Gull",
    phone : 98765432,
    email : "gullshanaya853@gmail.com"
})

contacts.push({
    name : "Shijrat ul Dur",
    phone : 998083425,
    email : "empty@gmail.com"
})
console.log(contacts);


//Remove by Name
console.log(contacts.filter(contacts => contacts.name !== "Shijrat ul Dur"));

//Search by Partial Name
console.log(contacts.filter(value => vaglue.name.includes("Sh")));

//Alphabatically sorted
let sorted = [...contacts].sort ((a, b) => a.name.localeCompare(b.name));
console.log(sorted)
