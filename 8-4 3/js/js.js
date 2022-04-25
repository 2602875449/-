/**
 * Created by Administrator on 2018/6/6.
 */
function addb() {
    const ne = document.getElementById('ne').value;
    const vip = document.getElementById('vip').value;
    const phone = document.getElementById('phone').value;
    // const phone =  $('#phone').val();
    var vipnum = /^[0-9]{1,12}$/    //正则表达式
    if ((ne.length == 0) || (vip.length == 0) ||(phone.length == 0)) {
        alert('请输入完整信息');
    }
    else if (!vipnum.test(vip)) {
        alert('请正确输入')
    }
    else {
        var tb = document.getElementsByTagName('table')[0];
        var tr = document.createElement('tr');
        tb.appendChild(tr);
        var td1 = document.createElement('td');
        tr.appendChild(td1)
        td1.innerHTML = ne;
        var td2 = document.createElement('td');
        tr.appendChild(td2);
        td2.innerHTML = vip;
        const td3 = document.createElement('td');
        tr.appendChild(td3);
        td3.innerHTML = phone;
        var td4 = document.createElement('td');
        tr.appendChild(td4);
        td4.innerHTML = "<input type='button' onclick='dele(this)' value='删除'/>";
    }
}
function dele(c) {
    var tb = document.getElementsByTagName('table')[0];
    tb.removeChild(c.parentNode.parentNode)
}
