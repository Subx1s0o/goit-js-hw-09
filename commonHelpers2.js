import"./assets/modulepreload-polyfill-3cfb730f.js";const t=document.querySelector(".feedback-form input"),a=document.querySelector(".feedback-form textarea"),s=document.querySelector(".feedback-form"),e={email:"",message:""};s.addEventListener("input",()=>{e.email=t.value.trim(),e.message=a.value.trim(),localStorage.setItem("feedback-form-state",JSON.stringify(e))});const o=JSON.parse(localStorage.getItem("feedback-form-state"));o!==null&&(a.value=o.message,t.value=o.email);s.addEventListener("submit",i=>{if(i.preventDefault(),t.value!==""&&a.value!=="")e.email=t.value.trim(),e.message=a.value.trim(),t.value="",a.value="",localStorage.removeItem("feedback-form-state"),console.log(e);else{const l=document.querySelector(".alert");l.style.visibility="visible",l.classList.add("anim"),console.log("ENTER WORDS!!!"),setTimeout(()=>{l.style.visibility="hidden"},3e3)}});
//# sourceMappingURL=commonHelpers2.js.map
