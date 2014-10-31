$(function () {
    var columnDefs = [
        {colTag: "first_name", text: "First Name"},
        {colTag: "last_name", text: "Last name"},
        {colTag: "email", text: "Email"},
        {colTag: "country", text: "Country"},
        {
            colTag: "price",
            format: "number",
            text: "Price",
            aggregationMethod: "AVERAGE",
            weightBy: {colTag: "weight_factor"}
        },
        {colTag: "weight_factor", format: "number", text: "Weight Factor", aggregationMethod: "SUM"},
        {colTag: "sector", text: "Sector"}
    ];

    $.get('large_sample_data.json').success(function (data) {
        var testData = data;
        var options = {
            groupBy: [{colTag: "sector"}, {colTag: "country"}],
            rowKey: 'id',
            data: testData,
            columnDefs: columnDefs,
            onSelectCallback: function (row) {
                alert("id = " + row.id + " clicked");
            },
            beforeColumnAdd: function () {
                alert("beforeColumnAdd callback called!");
            },
            afterColumnRemove: function (a, b) {
                alert("Hello There ... you tried to remove " + b.text);
            }
        };
        React.render(React.createElement(ReactTable,options), document.getElementById("table"))
    })
})
