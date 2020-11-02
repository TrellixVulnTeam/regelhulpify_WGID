document.addEventListener('DOMContentLoaded', (event) => {
    getAllTools();
});

function createToolsBtn(element){
    console.log(element)
    // Create post
    const tool = document.createElement('div');
        tool.className = 'tool_link rounded my-3 p-3 bg-light';
        tool.id = element.id
        tool.innerHTML = `<a href="/${element.pk}" class="btn btn-primary mt-2 mb-2">
            ${element.fields.name}
            </a>
            <div class="">${element.fields.desc}</div>`
        if (element.fields.img != null){
            tool.style.background = `linear-gradient(to right, rgba(248,249,250,1) 30%,
                rgba(248,249,250,0)), url(${element.fields.img})`;
            tool.style.backgroundSize = 'cover';
        }
        document.querySelector('#tools_list').append(tool)
}

function getAllTools() {
    // Fetch them tools
    fetch(`/api/get_tools`)
    .then(response => response.json())
    .then(result => {
        const tools = JSON.parse(result);
        // Reset
        document.querySelector('#tools_list').innerHTML = "";
        tools.forEach(element => {
            createToolsBtn(element)
        });   
    });
}

