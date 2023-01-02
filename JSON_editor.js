      $(document).ready(function() {
        $('#process-json').click(function() {
            var data = $('#json-input').val();
          data = JSON.parse(data);

var options = "";
for (var i = 0; i < Object.keys(data).length; i++) {
  options += (i + 1) + ": " + Object.keys(data)[i] + "\n";
} 

var selectedArray = prompt("Select an array:\n" + options);


          selectedArray = parseInt(selectedArray) - 1;
          selectedArray = Object.keys(data)[selectedArray];
          var exampleValue = data[selectedArray][0];
          var keys = Object.keys(exampleValue);
          console.log(keys);
          var newValue = {};
          for (var i = 0; i < keys.length; i++) {
            var key = keys[i];
            var value = prompt("Enter the value for " + key + ":");
            newValue[key] = value;
          }

          data[selectedArray].push(newValue)
          $('#json-input').val(JSON.stringify(data, null, 2));
        });
      });
