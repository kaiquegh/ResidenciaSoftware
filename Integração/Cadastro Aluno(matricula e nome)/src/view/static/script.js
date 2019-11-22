$(() => {
    axios.get('api/alunos/exibir')
        .then((res) => {
            res.data.forEach((e)=>{
            let aluno = 
            `<a href="#" class="list-group-item list-group-item-action">
            Matricula: ${e.matricula}
            Nome: ${e.nome}
            
            </a>`
            $("#listaAlunos").append(aluno);
            })
        })
    $("#cadastrar").click(()=>{
        let aluno = {
            nome: $("#nomeAluno").val(),
            matricula: $("#matricula").val()
        }
        axios.post('api/alunos/inserir',aluno)
        .then((res)=>{
            window.location.reload();
        });
    });
    $("#remover").click(()=>{
        let aluno = {
            nome: $("#nomeAluno").val(0),
            matricula: $("#matricula").val(0)
        }
        axios.post('api/alunos/delete')
        .then((res)=>{
            window.location.reload();
        })
    })
})

