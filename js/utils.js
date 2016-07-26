var utils = (function () {
    function getElementsByClass(strClass, context) {
        context = context || document;
        if ("getComputedStyle" in window) {
            return context.getElementsByClassName(strClass);
        }
        var ary = [];
        var classAry = strClass.replace(/^ +| +$/g, '').split(/ +/g);
        var target = context.getElementsByTagName("*");
        for (var i = 0; i < target.length; i++) {
            var curTar = target[i];
            var flag = true;
            for (var j = 0; j < classAry.length; j++) {
                var curClassAry = classAry[j];
                var reg = new RegExp('(^| +)' + curClassAry + '( +|$)')
                if (!reg.test(curTar.className)) {
                    flag = false;
                    break;
                }
            }
            if (flag) {
                ary.push(curTar);
            }
        }
        return ary;
    }

    function setCss(ele, attr, val) {
        if (attr === "opacity") {
            ele.style["opacity"] = val;
            ele.style["filter"] = 'alpha(opacity=' + val * 100 + ' )';
            return;
        }
        if (attr === "float") {
            ele.style["cssFloat"] = val;
            ele.style["styleFloat"] = val;
            return;
        }
        var reg = /^(height|width|top|left|right|bottom|(border|margin|padding)(Bottom|Top|Left|Right)?)$/;
        if (reg.test(attr)) {
            if (!isNaN(val)) {
                val += "px";
            }
        }
        ele.style.attr = val;
    }

    function getCss(ele, attr) {
        var val = null;
        if ("getComputedStyle" in window) {
            val = window.getComputedStyle(ele, null)[attr];
        } else {
            if (attr == "opacity") {
                val = ele.currentStyle["filter"];
                var reg = /^alpha\(opacity=(\d+(?:\.\d+)?)\)$/
                val = reg.test(val) ? reg.exec(val)[1] / 100 : 1
            } else {
                val = ele.currentStyle[attr];
            }
        }
        var regUnit = /^-?\d+(\.\d+)(deg|px|em|rem|pt)?$/;
        if (regUnit.test(val)) {
            val = parseFloat(val);
        }
        return val;
    }

    function jsonParse(jsonStr) {
        return "JSON" in window ? JSON.parse(jsonStr) : eval('(' + jsonStr + ')');
    }

    function prev(ele) {
        if ("getComputedStyle" in window) {
            return ele.previousElementSibling;
        } else {
            var pre = ele.previousSibling;
            while (pre && pre.nodeType != 1) {
                pre = pre.previousSibling;
            }
            return pre;
        }
    }

    function previousAll(ele) {
        var pre = prev(ele);
        var ary = [];
        while (pre) {
            ary.unshift(pre);
            pre = prev(pre)
        }
        return ary;
    }

    function next(ele) {
        if ("getComputedStyle" in window) {
            return ele.nextElementSibling;
        } else {
            var nextNew = ele.nextSibling;
            while (nextNew && nextNew.nodeType != 1) {
                nextNew = next(nextNew);
            }
            return nextNew;
        }
    }

    function nextAll(ele) {
        var nextNew = next(ele);
        var ary = [];
        while (nextNew) {
            ary.unshift(nextNew);
            nextNew = next(nextNew)
        }
        return ary;
    }

    function siblings(ele) {
        return previousAll(ele).concat(nextAll(ele));
    }

    return {
        getElementsByClass: getElementsByClass,
        setCss: setCss,
        getCss: getCss,
        jsonParse: jsonParse,
        prev: prev,
        next: next,
        nextAll: nextAll,
        previousAll: previousAll,
        siblings: siblings
    }

})();





