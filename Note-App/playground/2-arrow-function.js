
const square = (x) => {
    return x * x
}

const event1 = {
    name: 'Birthday Party',
    guestList: ['Andrew', 'Jen', 'Mike'],
    printGuestList() {
        console.log('Guest list for ' + this.name)
        this.guestList.forEach(guest => {
            console.log(guest + ' is attending ' + this.name)
        })
    }
}

event1.printGuestList()