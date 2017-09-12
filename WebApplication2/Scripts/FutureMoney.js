function Invest() {

    var $intialMoney = $("#initialMoneyInput");

    $("#resultsButton").click(function (event) {
        removeErrorMessage();

        if (!$.isNumeric($("#initialMoneyInput").val())) {
            addErrorMessage("Please enter a valid numerical amount for Start Money");
            return;
        }

        if (!$.isNumeric($("#interestRateInput").val())) {
            addErrorMessage("Please enter a valid numerical amount for Interest Rate");
            return;
        }

        if (!$.isNumeric($("#timeInput").val())) {
            addErrorMessage("Please enter a valid numerical amount for Years Invested");
            return;
        }

        if ($("#errorMessage").text() === "") {
            $("#startModalText").text("Starting with $" + $("#initialMoneyInput").val());
            $("#interestRateModalText").text("At an interest rate of " + $("#interestRateInput").val() + "%");
            $("#timeInputModalText").text("Over a period of " + $("#timeInput").val() + " years");
            $("#compoundedModalText").text("With Interest being compounded " + $("option:selected", $("#compoundedSelect")).text());
            $("#resultModalText").text("Result: $" + calculateInterest());
            $("#myModal").modal("show");
        }
    });

    function addErrorMessage(message)
    {
        $("#errorMessage").removeClass("hidden");
        $("#errorMessage").text(message);
    }

    function removeErrorMessage()
    {
        $("#errorMessage").addClass("hidden");
        $("#errorMessage").text("");
        });
    }

    function calculateInterest()
    {
        var p = parseFloat($("#initialMoneyInput").val());
        var r = parseFloat($("#interestRateInput").val());
        var t = parseFloat($("#timeInput").val());
        var n = parseFloat($("#compoundedSelect").val());
        return (Math.round((p * Math.pow((1 + (r / n)), (n * t))) * 100) / 100).toFixed(2);
    }
}