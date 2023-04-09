const fs = require('fs');

const dist = 'dist/';
const pagesFolder = `${dist}pages`;
const pagesFile = `${pagesFolder}/index.html`

fs.access(pagesFolder, (error) => {
  // To check if the given directory
  // already exists or not
  if (error) {
    // If current directory does not exist
    // then create it
    fs.mkdir(pagesFolder, (error) => {
      if (error) {
        console.log(error);
      } else {
        console.log("Created pages folder successfully !!");
      }
    });
  } else {
    console.log("Given Directory already exists !!");
  }
});

const writePages = (data) => {
  const stream = fs.createWriteStream(pagesFile);
  stream.once('open', (fd) => {
    stream.write("<!DOCTYPE html>\n");
    stream.write("<html lang=\"ru-RU\">\n");
    stream.write("  <head>\n");
    stream.write("    <meta charset=\"utf-8\">\n");
    stream.write("    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\">\n");
    stream.write("    <meta name=\"description\" content=\"Home page desc\">\n");
    stream.write("    <meta name=\"author\" content=\"\">\n");
    stream.write("    <title>Home Page</title>\n");
    stream.write("    <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\n");
    stream.write("    <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin>\n");
    stream.write("    <link href=\"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&amp;display=swap&v=1679973597509\" rel=\"stylesheet\">\n");
    stream.write("    <link href=\"../css/system.css\" rel=\"stylesheet\">\n");
    stream.write("    <link href=\"../css/theme.css\" rel=\"stylesheet\">\n");
    stream.write("  </head>\n");
    stream.write("  <body class=\"layout\">\n");
    stream.write("    <div class=\"layout-wrapper\">\n");
    stream.write("      <div class=\"container\">\n");
    stream.write("        <section class=\"section__card mt-5\">\n");
    // add page link
    data.forEach((value) => stream.write(`<div><a href="/${value}">${value}</a></div>\n`));
    stream.write("        </section>\n");
    stream.write("      </div>\n");
    stream.write("    </div>\n");
    stream.write("  </body>\n");
    stream.write("</html>\n");
    stream.end();
  });
};


fs.readdir(dist, { withFileTypes: true }, (error, files) => {
  const onlyHtmlFiles = files.filter((item) => (item.name.includes('.html'))).map((item) => item.name);

  console.log(onlyHtmlFiles);
  writePages(onlyHtmlFiles);
});



