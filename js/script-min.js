var feedbackButton=document.querySelector(".feedback-button"),feedbackModal=document.querySelector(".modal-feedback"),feedbackClose=feedbackModal.querySelector(".modal-close"),feedbackForm=feedbackModal.querySelector(".feedback-form"),feedbackName=feedbackModal.querySelector(".feedback-name"),feedbackEmail=feedbackModal.querySelector(".feedback-email"),feedbackText=feedbackModal.querySelector(".feedback-text"),isStorageSupport=!0,storage="";try{storage=localStorage.getItem("name")}catch(e){isStorageSupport=!1}feedbackButton.addEventListener("click",function(e){e.preventDefault(),feedbackModal.classList.add("modal-show"),storage&&(feedbackName.value=storage,feedbackEmail.focus()),feedbackName.focus()}),feedbackClose.addEventListener("click",function(e){e.preventDefault(),feedbackModal.classList.remove("modal-show"),feedbackModal.classList.remove("modal-error")}),feedbackForm.addEventListener("submit",function(e){feedbackName.value&&feedbackEmail.value&&feedbackText.value?isStorageSupport&&localStorage.setItem("login",loginLogin.value):(e.preventDefault(),feedbackModal.classList.remove("modal-error"),feedbackModal.offsetWidth,feedbackModal.classList.add("modal-error"))}),window.addEventListener("keydown",function(e){27===e.keyCode&&feedbackModal.classList.contains("modal-show")&&(e.preventDefault(),feedbackModal.classList.remove("modal-show"),feedbackModal.classList.remove("modal-error"))});
