/*







*/


function formSubmit() {
    // return false; 可以在这里进行表单校验。
    document.getElementById("myForm").submit();
    //该方法提交表单的方式与用户单击 Submit 按钮一样，但是表单的 onsubmit 事件句柄不会被调用。

    //onsubmit="return false;"可以用于阻止enter键提交表单。

    //换成jquery方式，比如$("#myForm").submit()会调用onsubmit事件。

}