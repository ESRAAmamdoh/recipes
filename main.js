async function searchWithName(meal,type){

    let data =await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?${type}=${meal}`)
    const response=await data.json().then((res)=>{
        if(res.meals) displayMeals(res.meals);

    });
   
    
}
searchWithName()

async function searchWithm(meal,type){

    let data =await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?${type}=${meal}`)
    const response=await data.json().then((res)=>{
        if(res.meals) displayM(res.meals);

    });
   
    
}
searchWithm("","s")
function displayM(res){
    const meals=res.map((itm)=> `
    <div class="col-md-3">
                    <div class="meal-card position-relative">
                        <img class="meal-card-img w-100 rounded-3" src="${itm.strMealThumb}" alt="">
                        <div class="overlay d-flex align-items-center ">
                        ${itm.strMeal}
                        </div>
                    </div>
                </div>
              
    `)
    $("#m").html(meals);    
}
///////////////////////////////////////////////////////////
function displayMeals(res){
    const meals=res.map((itm)=> `
    <div class="col-md-3">
                    <div class="meal-card position-relative">
                        <img class="meal-card-img w-100 rounded-3" src="${itm.strMealThumb}" alt="">
                        <div class="overlay d-flex align-items-center ">
                        ${itm.strMeal}
                        </div>
                    </div>
                </div>
              
    `)
    $("#meals").html(meals);    
}


$('#full-search').on("keyup",function(e){
    searchWithName(e.target.value,"s")
})

$('#letter-search').on("keyup",function(e){
    searchWithName(e.target.value,"f")
})
////////////////////////////////////////////////////////////////////////////////

async function listAllCatogry(){


    let data =await fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
    const response=await data.json().then((res)=>{
        if(res.categories) displaycatogryMeals(res.categories);
      

    });

    
}
listAllCatogry()
//.slice(2)).join(" ")

// the original check return (useWordBoundary ? subString.slice(0, subString.lastIndexOf(" ")) : subString) + "&hellip;"; };
function displaycatogryMeals(res){
    
    const meals=res.map((itm)=> `
    <div class="col-md-3">
                
                <div class="category-card position-relative">
                    <img class="meal-card-img w-100 rounded-3" src="${itm.strCategoryThumb}" alt="">
                    <div class="overlay text-center ">
                    <div class="category-title">
                    ${itm.strCategory}
                    </div>
                    <p class="fs-5">
                    ${(itm.strCategoryDescription).split(" ").slice(0,20).join(" ")}
                    </p>
                    </div>
                </div>
              
            </div>
              
    `)
    $("#catgory-meal").html(meals);    
}
//////////////////////////////////////////////////////////
async function filterCatogry(meal,type){

    let data =await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?${type}=${meal}`)
    const response=await data.json().then((res)=>{
        if(res.meals) filtercatogryMeals(res.meals);

    }).then(()=>{
      
        $('#categories-filter').addClass("active")
        $('#categories').removeClass("active");
    });
   
    
}



function filtercatogryMeals(res){
    const meals=res.map((itm)=> `
    <div class="col-md-3">
            <div class="meal-card  position-relative" id="cardcatagory">
                <img class="meal-card-img w-100 rounded-3" src=" ${itm.strMealThumb}" alt="">
                <div class="overlay d-flex align-items-center ">
             
                    ${itm.strMeal}
             
              
                </div>
            </div>
        </div>
              
    `)
    $("#catgoryfilter-meal").html(meals);    
}


//////////////////////////////////////////////////////////////////


async function listAllArea(){

    let data =await fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list')
    const response=await data.json().then((res)=>{
        if(res.meals) displayareaMeals(res.meals);

    });
   
    
}
listAllArea()

function displayareaMeals(res){
    const meals=res.map((itm)=> `
    <div class="col-md-3">
                
                <div class="area-card position-relative text-light text-center ">
                <i class="fa-solid fa-house-laptop fa-4x "></i>
                    <div class="over text-center my-3  ">
                    <div class="area-title text-light">
                    ${itm.strArea}
                    </div>
                 
                    </div>
                </div>
              
            </div>
              
    `)
    $("#area-meal").html(meals);    
}
////////////////////////////////////////////////////////////////
async function filterArea(meal,type){

    let data =await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?${type}=${meal}`)
    const response=await data.json().then((res)=>{
        if(res.meals) filterAreaMeals(res.meals);

    }).then(()=>{
        $('#area-filter').addClass("active")
        $('#area').removeClass("active");
    });
   
    
}



function filterAreaMeals(res){
    const meals=res.map((itm)=> `
    <div class="col-md-3">
            <div class="meal-card  position-relative" id="areafilter">
                <img class="meal-card-img w-100 rounded-3" src=" ${itm.strMealThumb}" alt="">
                <div class="overlay d-flex align-items-center ">
             
                    ${itm.strMeal}
             
              
                </div>
            </div>
        </div>
              
    `)
    $("#areafilter-meal").html(meals);    
}

/////////////////////////////////////////////////////////////////////

async function listAllIngredients(){

    let data =await fetch(' https://www.themealdb.com/api/json/v1/1/list.php?i=list')
    const response=await data.json().then((res)=>{
        if((res.meals)) displayIngredientsMeals((res.meals).splice(-20));

    });
   
    
}
listAllIngredients()

function displayIngredientsMeals(res){
    const meals=res.map((itm)=> `
    <div class="col-md-3">
                
                <div class="ingredients-card position-relative text-light text-center overflow-hidden " >
                <i class="fa-solid fa-drumstick-bite fa-4x"></i>
                    <div class="over text-center my-3  ">
                    <div class="ingredients-title text-light">
                    ${itm.strIngredient}
                    </div>
                 <p>
                 ${itm.strDescription}
                 </p>
                    </div>
                </div>
              
            </div>
              
    `)
    $("#ingredients-meal").html(meals);    
}
////////////////////////////////////////////////////




async function filteringredients(meal,type){

    let data =await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?${type}=${meal}`)
    const response=await data.json().then((res)=>{
        if(res.meals) filteringredientsMeals(res.meals);

    }).then(()=>{
        $('#ingredients-filter').addClass("active")
        $('#ingredients').removeClass("active");
    });
   
    
}



function filteringredientsMeals(res){
    const meals=res.map((itm)=> `
    <div class="col-md-3">
            <div class="meal-card  position-relative" id="areafilter">
                <img class="meal-card-img w-100 rounded-3" src=" ${itm.strMealThumb}" alt="">
                <div class="overlay d-flex align-items-center ">
             
                    ${itm.strMeal}
             
              
                </div>
            </div>
        </div>
              
    `)
    $("#ingredientsfilter-meal").html(meals);    
}


//////////////////////////////////////////////////
async function FirstName(meal,type){

    let data =await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?${type}=${meal}`)
    const response=await data.json().then((res)=>{
        if(res.meals) displayMealsFirst(res.meals[0]);

    }).then(()=>{
        $(".page.active").removeClass("active");
        $('#first').addClass("active");
      
     
    });
   
   
    
}
searchWithName()

function displayMealsFirst(res){
    const ings=_.values(
        _.pick(res,
            _.keys(res).filter(s=>_.startsWith(s,"strIngredient"))
            )
            );
    const megs=_.values(
        _.pick(res,
            _.keys(res).filter(s=>_.startsWith(s,"strMeasure"))
            )
    );
    const merged=_.zip(megs, ings)
    

    const meals= `
    <div class="col-md-3 position-relative">
    <img class="w-100 img" src="${res.strMealThumb}" alt="">
    <h2 class="h">
    ${res.strMeal}
  </h2>
 </div>
 <div class="col-md-8 text-light offset-1 my-5">
  <p>
  ${res.strInstructions}
  </p>
  <h2>
    Area: ${res.strArea}
  </h2>
  <h2>
    Category:${res.strCategory}
  </h2>
  <h3 class="my-5">Recipes</h3>
  <ul class="list-unstyled d-flex g-3 flex-wrap">
    ${merged.map((el=>el.join(" ").trim())).filter((e)=>e).map(el=>`<li class="alert alert-info m-2 p-1">${el}</li>`)}
</ul>
<h2>
    tags:
  </h2>
  <a target="_blank" href="" class="btn btn-success">Source</a>
  <a target="${res.strYoutube}" href="" class="btn btn-danger">Youtube</a>
 </div>
              
    `
    $("#first-meal").html(meals);    
}



$(window).on("click",function(e){
    //////////////filtercategory
    const el_filterCategory=$(e.target.closest(".overlay")).children(".category-title");
    /////////////////filterintgr
    const el_ings=$(e.target.closest(".ingredients-card")).find(".ingredients-title");
    /////////////filterarea
    const el_filterArea=$(e.target.closest(".area-card")).find(".area-title");

    const el_first=e.target.closest(".meal-card .overlay");
  

    if(el_filterCategory.length) {
        const filter= el_filterCategory.text().trim();
        filterCatogry(filter,"c")
        closeNav()
}

    else if(el_first){
        const mealName=$(el_first).text().trim();
        FirstName(mealName,'s');
        closeNav()
}
    else if(el_filterArea.length) {
        const filter= el_filterArea.text().trim();
        filterArea(filter,"a")
        closeNav()
}


    else if(el_ings.length) {
        const filter= el_ings.text().trim();
        filteringredients(filter,"i")
        closeNav()
     
    }




    //Nav Bar
    else if(e.target.id.includes("-link")){
        //toggle active element
        $(".page.active").removeClass("active");

        const elm_id=e.target.id;
        $(`#${elm_id.split("-")[0]}`).addClass("active");
    }
    
})


//////////////////////////////////////////////
function openNav() {
    $(".side-nav-menu").animate({
        left: 0
    }, 500)


    $(".open-close-icon").removeClass("fa-align-justify");
    $(".open-close-icon").addClass("fa-x");


    for (let i = 0; i < 5; i++) {
        $(".links li").eq(i).animate({
            top: 0
        }, (i + 5) * 100)
    }
}

function closeNav() {
    let Width = $(".side-nav-menu .nav-tab").outerWidth()
    $(".side-nav-menu").animate({
        left: -Width
    }, 500)

    $(".open-close-icon").addClass("fa-align-justify");
    $(".open-close-icon").removeClass("fa-x");


    $(".links li").animate({
        top: 300
    }, 500)
}

closeNav()
$(".side-nav-menu i.open-close-icon").click(() => {
    if ($(".side-nav-menu").css("left") == "0px") {
        closeNav()
    } else {
        openNav()
    }
})

/////////////////////////////////////////////



$(function(){
    $('.loading').fadeOut(1000,function(){
        $('body').css('overflow','auto')
    })
})
/////////////////////////////////////////////////


let rowData = document.getElementById("rowData");
let submitBtn;

function showContacts() {
    rowData.innerHTML = `<div class="contact min-vh-100 d-flex justify-content-center align-items-center">
    <div class="container w-75 text-center">
        <div class="row g-4">
            <div class="col-md-6">
                <input id="nameInput" onkeyup="inputsValidation()" type="text" class="form-control" placeholder="Enter Your Name">
                <div id="nameAlert" class="alert alert-danger w-100 mt-2 d-none">
                    Special characters and numbers not allowed
                </div>
            </div>
            <div class="col-md-6">
                <input id="emailInput" onkeyup="inputsValidation()" type="email" class="form-control " placeholder="Enter Your Email">
                <div id="emailAlert" class="alert alert-danger w-100 mt-2 d-none">
                    Email not valid *exemple@yyy.zzz
                </div>
            </div>
            <div class="col-md-6">
                <input id="phoneInput" onkeyup="inputsValidation()" type="text" class="form-control " placeholder="Enter Your Phone">
                <div id="phoneAlert" class="alert alert-danger w-100 mt-2 d-none">
                    Enter valid Phone Number
                </div>
            </div>
            <div class="col-md-6">
                <input id="ageInput" onkeyup="inputsValidation()" type="number" class="form-control " placeholder="Enter Your Age">
                <div id="ageAlert" class="alert alert-danger w-100 mt-2 d-none">
                    Enter valid age
                </div>
            </div>
            <div class="col-md-6">
                <input  id="passwordInput" onkeyup="inputsValidation()" type="password" class="form-control " placeholder="Enter Your Password">
                <div id="passwordAlert" class="alert alert-danger w-100 mt-2 d-none">
                    Enter valid password *Minimum eight characters, at least one letter and one number:*
                </div>
            </div>
            <div class="col-md-6">
                <input  id="repasswordInput" onkeyup="inputsValidation()" type="password" class="form-control " placeholder="Repassword">
                <div id="repasswordAlert" class="alert alert-danger w-100 mt-2 d-none">
                    Enter valid repassword 
                </div>
            </div>
        </div>
        <button id="submitBtn" disabled class="btn btn-outline-danger px-2 mt-3">Submit</button>
    </div>
</div> `
    submitBtn = document.getElementById("submitBtn")


    document.getElementById("nameInput").addEventListener("focus", () => {
        nameInputTouched = true
    })

    document.getElementById("emailInput").addEventListener("focus", () => {
        emailInputTouched = true
    })

    document.getElementById("phoneInput").addEventListener("focus", () => {
        phoneInputTouched = true
    })

    document.getElementById("ageInput").addEventListener("focus", () => {
        ageInputTouched = true
    })

    document.getElementById("passwordInput").addEventListener("focus", () => {
        passwordInputTouched = true
    })

    document.getElementById("repasswordInput").addEventListener("focus", () => {
        repasswordInputTouched = true
    })
}
showContacts()
let nameInputTouched = false;
let emailInputTouched = false;
let phoneInputTouched = false;
let ageInputTouched = false;
let passwordInputTouched = false;
let repasswordInputTouched = false;




function inputsValidation() {
    if (nameInputTouched) {
        if (nameValidation()) {
            document.getElementById("nameAlert").classList.replace("d-block", "d-none")

        } else {
            document.getElementById("nameAlert").classList.replace("d-none", "d-block")

        }
    }
    if (emailInputTouched) {

        if (emailValidation()) {
            document.getElementById("emailAlert").classList.replace("d-block", "d-none")
        } else {
            document.getElementById("emailAlert").classList.replace("d-none", "d-block")

        }
    }

    if (phoneInputTouched) {
        if (phoneValidation()) {
            document.getElementById("phoneAlert").classList.replace("d-block", "d-none")
        } else {
            document.getElementById("phoneAlert").classList.replace("d-none", "d-block")

        }
    }

    if (ageInputTouched) {
        if (ageValidation()) {
            document.getElementById("ageAlert").classList.replace("d-block", "d-none")
        } else {
            document.getElementById("ageAlert").classList.replace("d-none", "d-block")

        }
    }

    if (passwordInputTouched) {
        if (passwordValidation()) {
            document.getElementById("passwordAlert").classList.replace("d-block", "d-none")
        } else {
            document.getElementById("passwordAlert").classList.replace("d-none", "d-block")

        }
    }
    if (repasswordInputTouched) {
        if (repasswordValidation()) {
            document.getElementById("repasswordAlert").classList.replace("d-block", "d-none")
        } else {
            document.getElementById("repasswordAlert").classList.replace("d-none", "d-block")

        }
    }


    if (nameValidation() &&
        emailValidation() &&
        phoneValidation() &&
        ageValidation() &&
        passwordValidation() &&
        repasswordValidation()) {
        submitBtn.removeAttribute("disabled")
    } else {
        submitBtn.setAttribute("disabled", true)
    }
}

function nameValidation() {
    return (/^[a-zA-Z ]+$/.test(document.getElementById("nameInput").value))
}

function emailValidation() {
    return (/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(document.getElementById("emailInput").value))
}

function phoneValidation() {
    return (/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(document.getElementById("phoneInput").value))
}

function ageValidation() {
    return (/^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$/.test(document.getElementById("ageInput").value))
}

function passwordValidation() {
    return (/^(?=.*\d)(?=.*[a-z])[0-9a-zA-Z]{8,}$/.test(document.getElementById("passwordInput").value))
}

function repasswordValidation() {
    return document.getElementById("repasswordInput").value == document.getElementById("passwordInput").value
}





