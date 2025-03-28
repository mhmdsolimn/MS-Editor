// =====================================================" Made With ❤ By Mohamed Soliman "=====================================================

let result , browser , Editor , EditorCss , EditorJs , autoSave , htmlBtn , cssBtn , jsBtn , introBtn , introLoadDiv
    , introLoadVal , introLoad , intro , saveBtn , pageTitle , pageIcon;

Editor = document.getElementById("Editor");
EditorCss = document.getElementById("EditorCss");
EditorJs = document.getElementById("EditorJs");
htmlBtn = document.getElementById("htmlBtn");
cssBtn = document.getElementById("cssBtn");
jsBtn = document.getElementById("jsBtn");
saveBtn = document.getElementById("saveBtn");
result = document.getElementById("result");
browser = document.querySelector(".browser");
autoSave = document.getElementById("autoSave");
pageTitle = document.getElementById("page-title");
pageIcon = document.getElementById("page-icon");
// intro = document.querySelector(".intro");
// introBtn = document.getElementById("introBtn");
// introLoad = document.getElementById("introLoad");
// introLoadDiv = document.getElementById("introLoadDiv");
// introLoadVal = document.getElementById("introLoadVal");


Editor.value = localStorage.getItem("EditorValue");
EditorCss.value = localStorage.getItem("EditorCssValue");
EditorJs.value = localStorage.getItem("EditorJsValue");

window.onbeforeunload = function() {
    if (saveBtn.style.color == "blueviolet") {
        return "Your Data Not Saved";
    } else {
        location.reload();
    }
};

if (htmlBtn.getAttribute("class") == 'active') {
    Editor.focus();
} else if (cssBtn.getAttribute("class") == 'active') {
    EditorCss.focus();
} else if (jsBtn.getAttribute("class") == 'active') {
    EditorJs.focus();
}

// ================================================" Intro Open "=====================================================//

// function Intro() {
//     document.body.requestFullscreen();
//     introBtn.style.display = "none";
//     introLoadDiv.style.display = "flex";
//     let load = 0;

//     let interval = setInterval(() => {
//                         if (introLoad.getAttribute("value") == 100) {
//                             clearInterval(interval);
//                             intro.style.display = "none";
//                             Editor.focus();
//                         } else {
//                             introLoad.setAttribute("value" , load++);
//                             introLoadVal.innerText = introLoad.getAttribute("value");
//                         }
//                     }, 100);
// }

// =============================================" Open Editors "=======================================================//

function OpenHtml() {
    htmlBtn.classList.add("active");
    jsBtn.classList.remove("active");
    cssBtn.classList.remove("active");
    Editor.style.display = "block";
    EditorCss.style.display = "none";
    EditorJs.style.display = "none";
    Editor.focus();
    localStorage.setItem("OpenedEditor" , "html");
}

function OpenCss() {
    htmlBtn.classList.remove("active");
    jsBtn.classList.remove("active");
    cssBtn.classList.add("active");
    Editor.style.display = "none";
    EditorCss.style.display = "block";
    EditorJs.style.display = "none";
    EditorCss.focus();
    localStorage.setItem("OpenedEditor" , "css");
}

function OpenJs() {
    htmlBtn.classList.remove("active");
    jsBtn.classList.add("active");
    cssBtn.classList.remove("active");
    Editor.style.display = "none";
    EditorCss.style.display = "none";
    EditorJs.style.display = "block";
    EditorJs.focus();
    localStorage.setItem("OpenedEditor" , "js");
}

if (localStorage.getItem("OpenedEditor") == "html") {
    OpenHtml()
} else if (localStorage.getItem("OpenedEditor") == "css") {
    OpenCss()
} else if (localStorage.getItem("OpenedEditor") == "js") {
    OpenJs()
}

// ==================================================" Clear "=======================================================//

function Clear() {
    if (htmlBtn.getAttribute("class") == 'active') {
        Editor.value = '';
        localStorage.removeItem("EditorValue");
        Editor.focus();
    } else if (cssBtn.getAttribute("class") == 'active') {
        EditorCss.value = '';
        localStorage.removeItem("EditorCssValue");
        EditorCss.focus();
    } else if (jsBtn.getAttribute("class") == 'active') {
        EditorJs.value = '';
        localStorage.removeItem("EditorJsValue");
        EditorJs.focus();
    }
}

// ============================================" Auto Complete Html "=================================================//

const items1 = ["@nav" , "@h1" , "@h2" , "@h3" , "@h4" , "@h5" , "@h6" , "@path" , "@polygon" , "@div" , "@title" , "@header" , "@head" , "@body" , "@style" ,
    "@html" , "@script" , "@span" , "@sup" , "@sub" , "@textarea" , "@footer" , "@ul" , "@li" , "@ol" , "@dl" , "@dt" , "@dd" , "@center" , "@button" , "@form" ,
    "@table" , "@track" , "@tr" , "@td" , "@thead" , "@tbody" , "@tfoot" , "@caption" , "@main" , "@select" , "@option" , "@canvas" , "@svg" , "@circle" , "@rect" ,
    "@ellipse" , "@line" , "@polyline" , "@text" , "@tspan" , "@textPath" , "@defs" , "@symbol" , "@use" , "@image" , "@source" , "@aside" , "@mark" , "@bdi" ,
    "@bdo" , "@strong" , "@em" , "@cite" , "@dfn" , "@abbr" , "@time" , "@code" , "@var" , "@samp" , "@kbd" , "@sub" , "@sup" ,"@small" , "@ins" , "@del" ,
    "@mark" , "@ruby" , "@rt" , "@rp" , "@wbr" , "@meter" , "@progress" , "@details" , "@summary" , "@dialog" , "@header" ,"@footer" , "@nav" , "@aside" ,
    "@address" , "@blockquote" , "@cite" , "@pre" , "@figure" , "@figcaption" , "@hgroup" , "@s" , "@u" , "@i" , "@p" , "@g" , "@a" , "@q"];

const items2 = ["@br" , "@hr" , "@meta"];

const Attrebutes = ["$class" , "$id" , "$src" , "$width" , "$height" , "$href" , "$type" , "$style" , "$value" , "$onclick" , "$ondblclick" ,
    "$oncontextmenu" , "$onkeyup" , "$onkeydown" , "$onkeypress" , "$rel" , "$charset" , "$lang" , "$dir" , "target" , "$name" , "$placeholder" ,
    "$alt" , "$for" , "$action" , "$method" , "$enctype" , "$autocomplete" , "$novalidate" , "$form" , "$min" , "$max" , "$step" , "$rows" , "$cols" , "$wrap" ,
    "$size" , "$multiple" , "$checked" , "$disabled" , "$readonly" , "$required" , "$autofocus" , "$pattern" , "$minlength" , "$maxlength" , "$formaction" , "$formenctype" ,
    "$formmethod" , "$formnovalidate" , "$formtarget" , "$download" , "$media" , "$sandbox" , "$allow" , "$allowfullscreen" , "$allowpaymentrequest" , "$width" , "$height" ,
    "$referrerpolicy" , "$onkeyup" , "$onkeydown" , "$onkeypress" , "$onchange" , "$oninput" , "$onsubmit" , "$onreset" , "$onfocus" , "$onblur" , "$onselect" , "$oncopy" ,
    "$oncut" ,"$onpaste" , "$onabort" , "$onerror" , "$onload" , "$onresize" , "$onscroll" , "$onunload" , "$onbeforeunload" , "$onhashchange" , "$onpagehide" , "$onpageshow" ,
    "$onpopstate" , "$onstorage" , "$onmessage" , "$onmessageerror" , "$ononline" , "$onoffline" , "$onfocusin" , "$onfocusout" , "$onmouseenter" , "$onmouseleave" ,
    "$onmouseover" , "$onmouseout" , "$onmousemove" , "$onmousedown" , "$onmouseup" , "$onwheel" , "$ondrag" , "$ondragend" , "$ondragenter" , "$ondragexit" , "$ondragleave" ,
    "$ondragover"]

Editor.addEventListener("keyup" , function(e){
    if (Editor.value.includes("@audio") && e.key == "Enter") {
        Editor.value = Editor.value.replace("@audio" , `<audio src=""></audio>`);
    } else if (Editor.value.includes("@link") && e.key == "Enter") {
        Editor.value = Editor.value.replace("@link" , '<link rel="" href="">')
    } else if (Editor.value.includes("@article") && e.key == "Enter") {
        Editor.value = Editor.value.replace("@article" , `<article></article>`);
    } else if (Editor.value.includes("@aside") && e.key == "Enter") {
        Editor.value = Editor.value.replace("@aside" , `<aside></aside>`);
    } else if (Editor.value.includes("@video") && e.key == "Enter") {
        Editor.value = Editor.value.replace("@video" , `<video src=""></video>`);
    } else if (Editor.value.includes("@a") && e.key == "Enter") {
        Editor.value = Editor.value.replace("@a" , `<a href=""></a>`);
    }  else if (Editor.value.includes("@input") && e.key == "Enter") {
        Editor.value = Editor.value.replace("@input" , `<input type="text">`);
    } else if (Editor.value.includes("@img") && e.key == "Enter") {
        Editor.value = Editor.value.replace("@img" , `<img src="" alt="">`);
    } else if (Editor.value.includes("@btn") && e.key == "Enter") {
        Editor.value = Editor.value.replace("@btn" , `<button></button>`);
    } else if (Editor.value.includes("@progress") && e.key == "Enter" || Editor.value.includes("@prog") && e.key == "Enter") {
        Editor.value = Editor.value.replace("@progress" , `<progress></progress>`);
        Editor.value = Editor.value.replace("@prog" , `<progress></progress>`);
    } else if (Editor.value.includes("@iframe") && e.key == "Enter" || Editor.value.includes("@ifr") && e.key == "Enter") {
        Editor.value = Editor.value.replace("@iframe" , `<iframe src="" frameborder="0"></iframe>`);
        Editor.value = Editor.value.replace("@ifr" , `<iframe src="" frameborder="0"></iframe>`);
    } else if (Editor.value.includes("@section") && e.key == "Enter" || Editor.value.includes("@sect") && e.key == "Enter") {
        Editor.value = Editor.value.replace("@section" , `<section></section>`);
        Editor.value = Editor.value.replace("@sect" , `<section></section>`);
    } else if (Editor.value.includes("@ ")) {
        Editor.value = Editor.value.replace("@ " , `    `);
    } else if (Editor.value == '!') {
        Editor.value = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>`;
    } else{
        for (let i = 0; i < items1.length; i++) {
            if (Editor.value.includes(items1[i]) && e.key == "Enter") {
                Editor.value = Editor.value.replace(items1[i] , `<${items1[i].replace("@" , '')}></${items1[i].replace("@" , '')}>`);
            }
        }

        for (let q = 0; q < items2.length; q++) {
            if (Editor.value.includes(items2[q]) && e.key == "Enter") {
                Editor.value = Editor.value.replace(items2[q] , `<${items2[q].replace("@" , '')}>`);
            }
        }

        if (Editor.value.includes("$.")) {
            Editor.value = Editor.value.replace("$." , `class=""`);
        } else if (Editor.value.includes("$#")) {
            Editor.value = Editor.value.replace("$#" , `id=""`);
        } else {
            for (let w = 0; w < Attrebutes.length; w++) {
                if (Editor.value.includes(Attrebutes[w])) {
                    Editor.value = Editor.value.replace(Attrebutes[w] , `${Attrebutes[w].replace("$" , '')}=""`);
                }
            }
        }
}
});

// ===================================================" Save "=======================================================//

function Save() {
    localStorage.setItem("EditorValue" , Editor.value);
    localStorage.setItem("EditorCssValue" , EditorCss.value);
    localStorage.setItem("EditorJsValue" , EditorJs.value);
    saveBtn.style.color = "gray";

    if (Editor.value == '' && EditorCss.value == '' && EditorJs.value == '') {
        localStorage.removeItem("EditorValue");
        localStorage.removeItem("EditorCssValue");
        localStorage.removeItem("EditorJsValue");
        saveBtn.style.color = "gray";
    }

    if (htmlBtn.getAttribute("class") == 'active') {
        Editor.focus();
    } else if (cssBtn.getAttribute("class") == 'active') {
        EditorCss.focus();
    } else if (jsBtn.getAttribute("class") == 'active') {
        EditorJs.focus();
    }
}

function SaveMsg() {
    if (localStorage.getItem("Asave") != "true") {
        setInterval(() => {
            if (localStorage.getItem("EditorValue") != null &&
            localStorage.getItem("EditorCssValue") != null &&
            localStorage.getItem("EditorJsValue") != null) {
                if (Editor.value == localStorage.getItem("EditorValue") &&
                EditorCss.value == localStorage.getItem("EditorCssValue") &&
                EditorJs.value == localStorage.getItem("EditorJsValue")) {
                    saveBtn.style.color = "gray";
                } else {
                    saveBtn.style.color = "blueviolet";
                }
            } else {
                if (Editor.value != '' || EditorCss.value != '' || EditorJs.value != '') {
                    saveBtn.style.color = "blueviolet";
                } else {
                    saveBtn.style.color = "gray";
                }
            }
        }, 0);
    } else {
        localStorage.setItem("EditorValue" , Editor.value);
        localStorage.setItem("EditorCssValue" , EditorCss.value);
        localStorage.setItem("EditorJsValue" , EditorJs.value);
    }
}

// ================================================" Auto Save "=====================================================//

function AutoSave() {
    if (autoSave.getAttribute("class") == 'Asave') {
        autoSave.style.background = "#334155";
        autoSave.style.color = "white";
        localStorage.setItem("Asave" , "true");
        localStorage.setItem("EditorValue" , Editor.value);
        localStorage.setItem("EditorCssValue" , EditorCss.value);
        localStorage.setItem("EditorJsValue" , EditorJs.value);
        autoSave.classList.remove("Asave");
        Editor.focus();
    } else if (autoSave.getAttribute("class") != 'Asave') {
        localStorage.setItem("Asave" , "false");
        autoSave.style.background = "transparent";
        autoSave.style.color = "gray";
        autoSave.classList.add("Asave");
        Editor.focus();
    }
}

setInterval(() => {
    if (localStorage.getItem("Asave") == "true") {
        autoSave.style.background = "#334155";
        autoSave.style.color = "white";
    } else if (localStorage.getItem("Asave") == "false") {
        autoSave.style.background = "transparent";
        autoSave.style.color = "gray";
    }
}, 100);

// ===========================================" Run And Back To Editor "=============================================//

function run() {
    browser.style.display = 'block';
    browser.requestFullscreen();
    result.innerHTML = localStorage.getItem("EditorValue") +
    `<style>${localStorage.getItem("EditorCssValue")}</style>` +
    `<script>${localStorage.getItem("EditorJsValue")}</script>`;

    if (result.innerHTML == "null<style>null</style><script>null</script>") {
        result.innerHTML = '';
    }

    if (Editor.value != "" && Editor.value.includes("<title>")) {
        let title = result.querySelector("title");
        pageTitle.innerText = title.innerText;
    } else{
        pageTitle.innerText = "index.html";
    }

    if (Editor.value != "" && Editor.value.includes(`<link rel="icon" href="`)) {
        let icon = result.querySelector('link[rel="icon"]').href;
        pageIcon.setAttribute("src" , icon);
    } else{
        pageIcon.setAttribute("src" , "imgs/result page icon.svg");
    }
}

function Back() {
    browser.style.display = 'none';
    document.exitFullscreen();
    if (htmlBtn.getAttribute("class") == 'active') {
        Editor.focus();
    } else if (cssBtn.getAttribute("class") == 'active') {
        EditorCss.focus();
    } else if (jsBtn.getAttribute("class") == 'active') {
        EditorJs.focus();
    }
}

// ================================================" Side Banner "=====================================================//

let control = document.querySelector(".control");
let openBanner = document.querySelector(".openBanner");

function closeBanner() {
    control.style.display = 'none';
    Editor.style.width = "100vw";
    EditorCss.style.width = "100vw";
    EditorJs.style.width = "100vw";
    openBanner.style.display = "block";
    localStorage.setItem("SideBanner" , "close");
    if (htmlBtn.getAttribute("class") == 'active') {
        Editor.focus();
    } else if (cssBtn.getAttribute("class") == 'active') {
        EditorCss.focus();
    } else if (jsBtn.getAttribute("class") == 'active') {
        EditorJs.focus();
    }
}

function OpenBanner() {
    control.style.display = 'block';
    Editor.style.width = "calc(100vw - 260px)";
    EditorCss.style.width = "calc(100vw - 260px)";
    EditorJs.style.width = "calc(100vw - 260px)";
    openBanner.style.display = "none";
    localStorage.setItem("SideBanner" , "open");
    if (htmlBtn.getAttribute("class") == 'active') {
        Editor.focus();
    } else if (cssBtn.getAttribute("class") == 'active') {
        EditorCss.focus();
    } else if (jsBtn.getAttribute("class") == 'active') {
        EditorJs.focus();
    }
}

if (localStorage.getItem("SideBanner") == "close") {
    closeBanner()
} else if (localStorage.getItem("SideBanner") == "open") {
    OpenBanner()
}

// ==================================================" Search "======================================================//

function Search() {
    let input , upperInput , allLi , p , itemsValue , List;

    input = document.querySelector("#search-input");
    upperInput = input.value.toUpperCase();
    allLi = document.querySelectorAll(".li-search");
    List = document.getElementById("List");

    for (let i = 0; i < allLi.length; i++) {
        p = allLi[i].getElementsByTagName("p")[0];
        itemsValue = p.innerText || p.textContent;

        if (itemsValue.toUpperCase().includes(upperInput)) {
            allLi[i].style.display = 'block';
        } else {
            allLi[i].style.display = 'none';
        }
    }

    if (input.value == '') {
        List.style.display = "none";
    } else {
        List.style.display = "block";
    }

    List.addEventListener("click" , function(){
        List.style.display = "none";
        input.value = '';
    })
}

// ================================================" Mobile List "=====================================================//

let MobList = document.getElementById("MobileList");
let Mobli = MobList.querySelectorAll("li");

function OpenMobileList() {
    MobList.classList.toggle("show");
}

for (let z = 0; z < Mobli.length; z++) {
    Mobli[z].addEventListener("click" , function(){
        MobList.classList.toggle("show");
    })
}

// =====================================================" Setting "======================================================//

let selectTheme = document.getElementById("select");
let root = document.querySelector(":root");
var theme
var isOpen = false;

selectTheme.addEventListener("mouseup" , function(){
    if (isOpen){
        if (this.value == "light") {
            theme = "light";
        } else if (this.value == "blue") {
            theme = "blue";
        } else if (this.value == "dark") {
            theme = "dark";
        }
    }
    isOpen = !isOpen;
});

function themeUpdate() {
    if (theme == "light") {
        localStorage.setItem("theme" , "light");
    } else if (theme == "blue") {
        localStorage.setItem("theme" , "blue");
    } else if (theme == "dark") {
        localStorage.setItem("theme" , "dark");
    }

    Save();
    location.reload();
}

if (localStorage.getItem("theme") == "light") {
    root.style.setProperty("--color1" , "white");
    root.style.setProperty("--color2" , "#dddddd");
    root.style.setProperty("--color3" , "whitesmoke");
    root.style.setProperty("--color4" , "#334155");
    root.style.setProperty("--color5" , "black");
} else if (localStorage.getItem("theme") == "blue") {
    root.style.setProperty("--color1" , "#011627");
    root.style.setProperty("--color2" , "#043254");
    root.style.setProperty("--color3" , "#0b2942");
    root.style.setProperty("--color4" , "#334155");
    root.style.setProperty("--color5" , "white");
} else if (localStorage.getItem("theme") == "dark") {
    root.style.setProperty("--color1" , "#212329");
    root.style.setProperty("--color2" , "#1a1a1f");
    root.style.setProperty("--color3" , "#2b3039");
    root.style.setProperty("--color4" , "#334155");
    root.style.setProperty("--color5" , "white");
}

// =====================================================" Made With ❤ By Mohamed Soliman "=====================================================