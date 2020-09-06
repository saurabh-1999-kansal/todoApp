{

    let createList = function () {
        let newListForm = $('#new-list-form');
        newListForm.submit(function (e) {

            e.preventDefault();
            $.ajax({
                type: 'post',
                url: '/todoApp',
                data: newListForm.serialize(),
                success: function (data) {

                    let newList = newListDom(data.data.list);
                    $('#todo-list-container').append(newList)
                }, error: function (error) {
                    console.log('there was an error', error);
                }
            })
        })
    }
    let newListDom = function (list) {
        return (`<div id="task-${list.id}">

        <div id="title-date">
            ${list.description}<br>
            <img src="https://t4.ftcdn.net/jpg/03/04/12/37/240_F_304123778_IbttypTmYT9Nc4wgKeogv7RmTdUS12PA.jpg"
                alt="image">
            ${list.date}
        </div>
        <div id="category-of-list-item">
            ${list.category}
        </div>
        <div id="dustbin">
            <a href="/delete/<%=list._id %>">
                <img src="https://t4.ftcdn.net/jpg/01/90/89/15/240_F_190891550_N7uKp2aHE3mOc20dmtDytj7atgvbhdOu.jpg"
                    alt="X">
            </a>
        </div>
    </div>`)
    }
    let deleteList = function (deleteLink) {

        $(deleteLink).click(function (e) {
            e.preventDefault();
    
            $.ajax({
                type: 'get',
                url: $(deleteLink).prop('href'),
                success: function (data) {
                 
                    $(`#task-${data.data.list_id}`).remove();
                }, error: function (error) {
                    console.log('there was an error', error);
                }
            })
        })
    }
    let convertListsToAjax = function () {
        $('#todo-list-container>div').each(function () {
            let self = $(this);
            let deleteButton = $(' .delete-button', self);
            deleteList(deleteButton);
            let listId = self.prop('id').split("-")[1]
        })
    }
    createList();
    convertListsToAjax();
}