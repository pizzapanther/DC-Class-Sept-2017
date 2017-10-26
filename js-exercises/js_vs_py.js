fs.readFile(filename, function (error, buffer) {
  if (error) {
    console.error(error.message);
    return;
  }
  var contents = buffer.toString();
  var backwards = contents.split('').reverse().join('');
  fs.writeFile(filename, backwards, function (error) {
    if (error) {
      console.error(error.message);
      return;
    }
    console.log('File Save: ', filename);
  });
});

fh = open(filename, 'r')
contents = fh.read()
contents = contents.reverse()
fh = open(filename, 'w')
fh.write(contents)
