$( document ).ready(function() {

  let model = new Model();
  let command = new Controller(model);
      var id = $('.active').find('a').attr('id');
      switch(id){
        case "C": {
            $("#free-point").attr("placeholder", command.next());
              $("form").on('submit',function(){
                    command.create($("#Good").val(), $("#Article").val(), $("#Price").val());
                });
        } ;break;
        case "R": {
          for(let i in localStorage){
            $("tbody").append("<tr> <th scope='row'>" + i + "</th><td>" + command.read(i)[0] +
            "</td><td>" + command.read(i)[1] + "</td> <td>" + command.read(i)[2] + "</td></tr><tr>");
          }
        } ;break;
        case "U": {
          for(let i in localStorage){
            $("#inputState").append("<option>" + i + "</option>");
          }
          window.onerror = function () {
              return true;
          }
          $("#inputState").change( function(){
          $( "#inputState option:selected" ).each(function() {
                $("#Good").val(command.read($(this).text())[0]);
                $("#Article").val(command.read($(this).text())[1]);
                $("#Price").val(command.read($(this).text())[2]);
            });
          });
          $("form").on('submit',function(){
            command.delete($( "#inputState option:selected" ).text());
            command.create($("#Good").val(), $("#Article").val(), $("#Price").val());
          });

        } ;break;


        case "D": {
          for(let i in localStorage){


            $("#inputState").append("<option>" + i + "</option>");
          }
          window.onerror = function () {
              return true;
          }
          $("#inputState").change( function(){
          $( "#inputState option:selected" ).each(function() {
                $("#Good").val(command.read($(this).text())[0]);
                $("#Article").val(command.read($(this).text())[1]);
                $("#Price").val(command.read($(this).text())[2]);
            });
          });
          $("form").on('submit',function(){
            command.delete($( "#inputState option:selected" ).text());
          });
        } ;break;
      }
    });
