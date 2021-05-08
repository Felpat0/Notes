const getEmptyNote = (id_notebook, notes) =>{
    console.log(notes)
    //Get current date
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = dd + '-' + mm + '-' + yyyy;

    //Order notes to get last key
    let tempNotes = notes;
    tempNotes.sort(function(a,b){
        return a.key - b.key;
      });


    return [{
        key: tempNotes[tempNotes.length - 1].key + 1,
        title: "New note",
        content: "",
        datetime: new Date(),
        is_to_do: false,
        is_in_home: false,
        target_date: "",
        id_notebook: id_notebook
    }]
}

export default getEmptyNote;

