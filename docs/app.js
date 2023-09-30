/* 
Author: Renu Gopinatha Pillai
Purpose: Includes the JavaScript codes that is used to enhance the functionality of this website.
Last Modified: 2023-04-06
*/

'use strict';


function showNav() 
{
    var element = document.getElementById("nav-items");
    element.classList.toggle("show-items");
}



/*-----------------------Modal Image------------------------------ */



//to make sure that the images are available before manipulating it.
window.onload = function() 
{

    // Get the <span> element that closes the modal
    let span = document.getElementsByClassName("close")[0];
    span.addEventListener('click',imageClose);

    let img1 = document.getElementById("img01");
    img1.addEventListener('click', imageClick);
    
    let img2 = document.getElementById("img02");
    img2.addEventListener('click', imageClick);

    let img3 = document.getElementById("img03");
    img3.addEventListener('click', imageClick);

    let img4 = document.getElementById("img04");
    img4.addEventListener('click', imageClick);

    let img5 = document.getElementById("img05");
    img5.addEventListener('click', imageClick);
    
};
  

// Get the modal
let modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
let modalImg = document.getElementById("myImage");

//modalImg.removeAttribute('src');
let captionText = document.getElementById("caption");
function imageClick()
{
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
    
}

// When the user clicks on <span> (x), close the modal
function imageClose()
{
  modal.style.display = "none";
} 








/*-----------------------Form Validation and displays a pop-up message----------------------------- */

let form = document.getElementById('myForm');
form.addEventListener('submit', validateForm);

// Get the modal to show the pop up message
let modal1 = document.getElementById("myModal1");

// Get the <span> element that closes the modal
let span1 = document.getElementsByClassName("close1")[0];

let okbtn= document.getElementById('okbtn');

// Function to validate form fields 
function validateForm(event)
{
    // Get the form fields value
    let name = document.getElementById("fname").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let subject = document.getElementById("subject").value;

    // To print the error message
    const fnameerror = document.getElementById('fname-error');
    const emailerror = document.getElementById('email-error');
    const phoneerror = document.getElementById('phone-error');
    const subjecterror = document.getElementById('subject-error');

    let isValid = true;

    // Name validation:should not be empty 

    if (name === "") 
    {
       
        fnameerror.innerHTML=" *Name is required";
        event.preventDefault();
        isValid= false;
    }
    else
    {
        fnameerror.innerHTML="";
       
    }

    // Email validation: should not be empty and should have a valid format
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // pattern to check
    if (email === "") 
    {
        emailerror.innerHTML=" *Email is required";
        event.preventDefault();
        isValid= false;
    }
    else
    {
        if (!emailRegex.test(email)) 
        {

            emailerror.innerHTML=" *Please enter a valid email address";
            event.preventDefault();
            isValid= false;
        }

        else
        {
            emailerror.innerHTML="";
        }
    }

    // Phone validation: should not be empty and should have a valid format

    const phoneRegex = /^\d{10}$/; // pattern to check

    if (phone === "" ) 
    {
        phoneerror.innerHTML=" *Phone number is required";
        event.preventDefault();
        isValid= false;
    }
    else
    {
    
        if (!phoneRegex.test(phone)) 
        {
            phoneerror.innerHTML=" *Please enter a valid phone number";
            event.preventDefault();
            isValid= false;
        } 
        else
        {
            phoneerror.innerHTML="";
        }
    }

    // Textarea validation: should not be empty

    if (subject === "") 
    {   
        subjecterror.innerHTML=" *Subject is required";
        event.preventDefault();
        isValid= false;
    }
    else
    {
        subjecterror.innerHTML="";
    }

    // If all validation is true - displays a pop-up success message

    if (isValid === !false)
    {
       event.preventDefault();
       modal1.style.display = "block";

        // when ok button clicked form will submit
        okbtn.onclick = function() 
        {
            modal1.style.display = "none";
            form.submit();
        }

        // when close button clicked form will not submit and modal will be closed
        span1.onclick=function() 
        {
            modal1.style.display = "none";
            
        }
      
    
    }
    
}


