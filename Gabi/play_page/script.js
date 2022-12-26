$('#btn').click (()=>{
    let weight = Number($('#v1').val())
    let height = Number($('#v2').val())
    let = imc = weight / (height * height)

    $('#txt').text('Your body mass index value is ' + imc.toFixed(1)).val()
})
