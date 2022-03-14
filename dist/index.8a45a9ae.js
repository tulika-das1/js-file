document.getElementById('yearsBtn').addEventListener('click', function() {
    var enteredDate = document.getElementById('sampleDate').value;
    var years = new Date(new Date() - new Date(enteredDate)).getFullYear() - 1970;
    console.log(years);
});

//# sourceMappingURL=index.8a45a9ae.js.map
