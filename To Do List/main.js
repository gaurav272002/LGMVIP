$( window ).on( "load", function() {
  const form = $("#new-task");
	const input = $("#new-input");
	const list_el = document.querySelector("#tasks");
  form.on("submit",(e)=>{
    e.preventDefault();
    const task = input.val();
    if(!task){
      alert("Please Fill The Input");
      return;
    }
    const taskli = document.createElement("div");
    taskli.classList.add("task");
    const taskcont = document.createElement("div");
    taskcont.classList.add("content");

    taskli.appendChild(taskcont);
    const taskin = document.createElement("input");
    taskin.type = "text";
    taskin.classList.add("text");
    taskin.value = task;
    taskin.setAttribute("readonly","true");
    taskcont.appendChild(taskin);


    const taskaction = document.createElement("div");
    taskaction.classList.add("actions");

    const taskedit = document.createElement("button");
    taskedit.classList.add("edit");
    taskedit.innerHTML = "Edit";


    const taskcomp = document.createElement("button");
    taskcomp.classList.add("complete");
    taskcomp.innerHTML = "Complete";


    const taskdelete = document.createElement("button");
    taskdelete.classList.add("delete");
    taskdelete.innerHTML = "Delete";


    taskaction.appendChild(taskedit);
    taskaction.appendChild(taskcomp);

    taskaction.appendChild(taskdelete);
    taskli.appendChild(taskaction);
    list_el.appendChild(taskli);
    input.val("");

    taskedit.addEventListener('click',function(){

      if(taskedit.innerText.toLowerCase() == "edit"){
        taskin.removeAttribute("readonly");
        taskin.focus();
        taskedit.innerText = "Save";

      }else{
        taskin.setAttribute("readonly","true");
        taskedit.innerText = "Edit";
      }
    });
    taskdelete.addEventListener('click',function(){
        list_el.removeChild(taskli);
    });
    taskcomp.addEventListener('click',function(){
        if(taskcomp.innerText.toLowerCase() == "complete"){
          taskin.classList.add("comp");
          taskcomp.innerText = "Completed";
          taskcomp.disabled = true;
          taskaction.removeChild(taskedit);
      }else{
        console.log("not");
      }
    });
  })
});
