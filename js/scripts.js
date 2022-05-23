$(document).ready(function () {
    $("#buttn").click(function (event) {
        let flavour = ["Milkshake", "Vanilla", "Raspberry", "Candyfloss", "Guava", "Kiwi", "Cottoncandy", "caramel"]

        flavour.forEach(function (Elements) {
            $("ul#output").append("<li>" + Elements + "</li")


        });



    });

});
