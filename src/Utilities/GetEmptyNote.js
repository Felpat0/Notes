const getEmptyNote = (id_notebook) =>{
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = dd + '-' + mm + '-' + yyyy;
        return [{
            key: 0,
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

