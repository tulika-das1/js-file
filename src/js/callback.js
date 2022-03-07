function a(cb) {
    const name = 'Rahul'

    console.log(cb(name))
}

a(name => {
    return `Hello ${name}`
});
