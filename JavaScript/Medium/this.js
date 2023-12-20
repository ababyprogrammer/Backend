const person = {
    name: "Elsa",
    pronoun: "she",
    Activity: function () { // this = person
        console.log(`${person.name} is powerful because ${this.pronoun} has a ice magic.`)
    }
}

person.Activity() // Elsa is powerful because she has a ice magic.