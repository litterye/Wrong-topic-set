function getEle(selecter) {
    return document.querySelectorAll(selecter);
}

function eleId(id) {
    return document.getElementById(id);
}

var w_conntent = eleId("w_conntent");
var w_where = eleId("w_where");
var w_idea = eleId("w_idea");
var submitbtn = eleId('submitbtn');
var tbody = getEle("tbody")[0];
// console.log(xhr);
// console.dir(submitbtn)
submitbtn.onclick = function() {
    console.log(xhr.ajax);
    console.log(xhr);
    var send_data = { w_conntent: w_conntent.value, w_where: w_where.value, w_idea: w_idea.value };
    xhr.ajax("post", "../php/insert.php", send_data, function(result) {
        console.log(result);
    });
    location.reload();
}

xhr.ajax("get", "../php/select.php", null, function(result) {
    // console.log(result);
    var result = JSON.parse(result);
    showPage(result);
});


function showPage(json) {
    // console.log(json);
    var text = "";
    var num = 1;
    json.forEach(function(element, i) {

        text += `
        <tr class="row">
                <td class="col-lg-1 text-center">${num++}</td>
                <td class="col-lg-3 text-center">${element.wq_title}</td>
                <td class="col-lg-3 text-center">${element.wq_details}</td>
                <td class="col-lg-3 text-center">${element.wq_idea}</td>
                <td class="col-lg-1 text-center"><input type="button" class="btn btn-info" value="删除" data-id=${element.wq_id}></td>
                <td class="col-lg-1 text-center">
                    <input class="btn btn-info" type="button" id="addbtn1" data-toggle="modal" data-target="#myModal1" data-id1=${element.wq_id} value="修改">
                    <!-- Modal -->
                    <div class="modal fade" id="myModal1" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                    <h4 class="modal-title" id="myModalLabel1">修改错题</h4>
                                </div>
                                <div class="modal-body form-group">
                                    <label for="w_conntent1">易错内容</label>
                                    <input type="text" id="w_conntent1" class="form-control">
                                    <label for="w_where1">错在哪里：</label>
                                    <input type="text" id="w_where1" class="form-control">
                                    <label for="w_idea1">你的想法：</label>
                                    <input type="text" id="w_idea1" class="form-control">
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
                                    <button type="button" class="btn btn-primary" id="submitbtn1">提交</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </td>
        </tr>`
    });
    tbody.innerHTML += text;
}

var value1 = eleId("w_conntent1");
var value2 = eleId("w_where1");
var value3 = eleId("w_idea1");

tbody.onclick = function(e) {
    e = e || event;
    if (e.target.nodeName == "INPUT" && e.target.value == "删除") {
        tbody.removeChild(e.target.parentNode.parentNode);
        deleteMysql(e.target.getAttribute("data-id"));
        location.reload();
    } else if (e.target.nodeName == "INPUT" && e.target.value == "修改") {
        console.log(e.target.parentNode.parentNode.children[1].innerHTML);
        value1.value = e.target.parentNode.parentNode.children[1].innerHTML;
        value2.value = e.target.parentNode.parentNode.children[2].innerHTML;
        value3.value = e.target.parentNode.parentNode.children[3].innerHTML;
    }
}

function deleteMysql(id) {
    // console.log(id);
    xhr.ajax("post", "../php/delete.php", { wq_id: id }, function(result) {
        console.log(result);
    });


}