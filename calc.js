$(function () {
    var buttons = $("#btns > div"); 
    var display = $("#display");
    
    buttons.click(function () {
        var target = $(this);
        var selectValue = target.attr("data-num");
        
        setDisplay(selectValue);
    });
    
    function setDisplay(str) {
        var beforeStr = display.text();
        console.log(beforeStr, typeof(beforeStr));
        console.log(str, typeof(str));
        
        var afterStr = beforeStr + str;
        display.text(afterStr);
    }
});
