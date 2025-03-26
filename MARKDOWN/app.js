const textarea = document.getElementById("textarea")
const preview = document.getElementById("preview")
const button = document.getElementById("button")

textarea.addEventListener("input", 
    function previewUpdate() {
      const data = textarea.value;
      const Text = marked.parse(data, { breaks: true });
      preview.innerHTML = Text; 
});

button.addEventListener('click', 
    function reset() {
        textarea.value = "";
        preview.innerText = "";
    }

    
);