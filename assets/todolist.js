{
    //this function is for stopping the by default creation form submission and instead directly to changes in dom via ajax and jquery
    let createList = function () {
        //this is the form whose by default work of going to routes need to be changed
        let newListForm = $('#new-list-form');

        newListForm.submit(function (e) {

            e.preventDefault();
            //now as we have prevented it to go to route,so it need to be handled via azax
            $.ajax({
                type: 'post',
                url: '/todoApp',
                data: newListForm.serialize(),
                success: function (data) {
                    //to get the new list which will bw directly added to dom
                    let newList = newListDom(data.data.list);
                    //now the new list made is appended in the oprevious list
                    $('#todo-list-container').append(newList)
                }, error: function (error) {
                    console.log('there was an error', error);
                }
            })
        })
    }
    //this function is to get the new list item's dom 
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
    //this is for implementation od the deleting functionality directly via ajax
    let deleteList = function (deleteLink) {

        $(deleteLink).click(function (e) {
            e.preventDefault();

            $.ajax({
                type: 'get',
                url: $(deleteLink).prop('href'),
                success: function (data) {
                    //to remove the particular list directly from dom
                    $(`#task-${data.data.list_id}`).remove();
                }, error: function (error) {
                    console.log('there was an error', error);
                }
            })
        })
    }
    // as there will be a lot of list items so we need to convert all of them to ajax at every refesh
    
    let convertListsToAjax = function () {
        //this is to get all the list items one by one
        $('#todo-list-container>div').each(function () {
            let self = $(this);
            //this is for getting all the delete buttons one by one
            let deleteButton = $(' .delete-button', self);
            //here i have called each delete button so that ,so that its code is converted to ajax
            deleteList(deleteButton);
            let listId = self.prop('id').split("-")[1]
        })
    }
    createList();
    convertListsToAjax();
}